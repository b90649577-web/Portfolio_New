import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Paperclip, Loader2 } from 'lucide-react';
import ChatMessage from './ChatMessage';
import config from '../../data/chatbot.json';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: config.responses.greeting,
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = {
      text: input,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Cancel any existing request
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }

      // Create new AbortController for this request
      abortControllerRef.current = new AbortController();

      // Add timeout to abort request after 30 seconds
      const timeout = setTimeout(() => {
        if (abortControllerRef.current) {
          abortControllerRef.current.abort();
        }
      }, 30000);

      // Send request to Flask backend
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question: input }),
        signal: abortControllerRef.current.signal
      });

      clearTimeout(timeout);

      // Check if response is ok before trying to parse JSON
      if (!response.ok) {
        // Try to get error message from response
        let errorMessage = 'Server error occurred';
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch {
          // If JSON parsing fails, use status-based message
          switch (response.status) {
            case 401:
              errorMessage = 'Authentication failed';
              break;
            case 429:
              errorMessage = 'Too many requests. Please wait a moment and try again.';
              break;
            case 503:
              errorMessage = 'Service temporarily unavailable. Please try again later.';
              break;
            default:
              errorMessage = `Server error (${response.status})`;
          }
        }
        throw new Error(errorMessage);
      }

      // Parse JSON response
      let data;
      try {
        data = await response.json();
      } catch (jsonError) {
        console.error('JSON parsing error:', jsonError);
        throw new Error('Server returned invalid response. Please try again.');
      }

      if (!data.answer) {
        throw new Error('Invalid response format from server');
      }

      const botMessage = {
        text: data.answer.trim(),
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      
      let errorMessage = config.responses.error;
      
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          errorMessage = 'Request timed out. Please try again.';
        } else if (error.message.includes('Server returned invalid response')) {
          errorMessage = 'There was a problem with the server response. Please try again.';
        } else if (error.message.includes('API key')) {
          errorMessage = 'The service is not properly configured. Please contact support.';
        } else if (error.message.includes('rate limit') || error.message.includes('Too many requests')) {
          errorMessage = 'Too many requests. Please wait a moment and try again.';
        } else if (error.message.includes('maintenance') || error.message.includes('unavailable')) {
          errorMessage = 'The service is temporarily unavailable. Please try again later.';
        } else if (error.message.includes('Authentication failed')) {
          errorMessage = 'Authentication failed. Please contact support.';
        } else if (error.message.includes('Failed to fetch')) {
          errorMessage = 'Network error - please check your connection and make sure the backend is running at http://localhost:5000';
        } else {
          errorMessage = error.message;
        }
      }

      setMessages(prev => [...prev, {
        text: errorMessage,
        isBot: true,
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setMessages(prev => [...prev, {
        text: `Attached file: ${file.name}`,
        isBot: false,
        timestamp: new Date(),
      }]);
    }
  };

  return (
    <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[80vh] 
      bg-light-card dark:bg-dark-card rounded-2xl shadow-xl border border-gray-200 dark:border-gray-800 
      flex flex-col overflow-hidden z-50">
      {/* Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-800 flex justify-between items-center">
        <h3 className="font-semibold">{config.name}</h3>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <ChatMessage
            key={idx}
            message={msg.text}
            isBot={msg.isBot}
            timestamp={msg.timestamp}
          />
        ))}
        {isLoading && (
          <div className="flex items-center gap-2 text-gray-500">
            <Loader2 className="animate-spin" size={16} />
            <span>Thinking...</span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
          <button
            type="button"
            onClick={handleFileClick}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
          >
            <Paperclip size={20} />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 focus:outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="p-2 bg-primary-500 hover:bg-primary-600 text-white rounded-full transition-colors disabled:opacity-50"
          >
            <Send size={20} />
          </button>
        </div>
        <div className="text-xs text-center text-gray-500 mt-2">
          Powered by OpenAI via ChatAnywhere
        </div>
      </form>
    </div>
  );
};

export default ChatWindow;