import { createClient } from 'npm:@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

// Default chatbot configuration
const defaultConfig = {
  settings: {
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    maxTokens: 150,
    topP: 1,
    frequencyPenalty: 0,
    presencePenalty: 0
  },
  systemPrompt: 'You are a helpful AI assistant. Provide concise and helpful responses.'
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Validate request body
    const body = await req.text();
    if (!body) {
      throw new Error('Request body is empty');
    }

    const { input } = JSON.parse(body);
    if (!input || typeof input !== 'string' || input.trim().length === 0) {
      throw new Error('Valid input is required');
    }

    // Validate environment variables
    const openaiKey = Deno.env.get('OPENAI_API_KEY');

    if (!openaiKey) {
      throw new Error('OpenAI API key is not configured');
    }

    // Use modern fetch API to call OpenAI directly
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: defaultConfig.settings.model,
        messages: [
          {
            role: 'system',
            content: defaultConfig.systemPrompt
          },
          {
            role: 'user',
            content: input.trim()
          }
        ],
        temperature: defaultConfig.settings.temperature,
        max_tokens: defaultConfig.settings.maxTokens,
        top_p: defaultConfig.settings.topP,
        frequency_penalty: defaultConfig.settings.frequencyPenalty,
        presence_penalty: defaultConfig.settings.presencePenalty
      })
    });

    if (!openaiResponse.ok) {
      const errorData = await openaiResponse.json().catch(() => ({}));
      const statusCode = openaiResponse.status;
      
      let errorMessage = 'An error occurred while processing your request';
      
      if (errorData.error?.message) {
        errorMessage = errorData.error.message;
      } else {
        switch (statusCode) {
          case 401:
            errorMessage = 'Invalid OpenAI API key';
            break;
          case 429:
            errorMessage = 'Rate limit exceeded. Please try again later';
            break;
          case 500:
            errorMessage = 'OpenAI service is currently unavailable';
            break;
          case 503:
            errorMessage = 'OpenAI service is temporarily down for maintenance';
            break;
        }
      }
      
      throw new Error(errorMessage);
    }

    const completion = await openaiResponse.json();

    if (!completion.choices?.[0]?.message?.content) {
      throw new Error('No response received from OpenAI');
    }

    const response = {
      content: completion.choices[0].message.content.trim()
    };

    return new Response(
      JSON.stringify({ response }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    )

  } catch (error) {
    console.error('Error in chat function:', error);
    
    let statusCode = 500;
    let message = 'An unexpected error occurred';

    if (error instanceof Error) {
      message = error.message;
      
      // Handle validation errors
      if (message.includes('Request body is empty') || message.includes('Valid input is required')) {
        statusCode = 400;
      }
      
      // Handle configuration errors
      if (message.includes('not configured')) {
        statusCode = 503;
      }
      
      // Handle OpenAI API errors
      if (message.includes('Invalid OpenAI API key')) {
        statusCode = 401;
      }
      
      if (message.includes('Rate limit exceeded')) {
        statusCode = 429;
      }
    }

    // Always return a valid JSON response
    return new Response(
      JSON.stringify({ error: message }),
      { 
        status: statusCode,
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json'
        }
      }
    )
  }
})