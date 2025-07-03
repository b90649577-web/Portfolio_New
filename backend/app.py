import os
import logging
from datetime import datetime
from flask import Flask, request, jsonify
from flask_cors import CORS
import openai

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler('chatbot.log'),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all origins
CORS(app, origins="*")

# Configure OpenAI with ChatAnywhere endpoint
openai.api_key = "sk-axr3zEYrBgEZ8BTmV4oCvTfjzG1qAdhmcrhuv5xDO6sHaVYs"
openai.api_base = "https://api.chatanywhere.tech/v1"

# System prompt for the chatbot
SYSTEM_PROMPT = """You are a chatbot for Brajesh Kumar's portfolio. Answer only questions about Brajesh Kumar's projects, skills, achievements, education, and contact information. 

Key information about Brajesh Kumar:
- AI Engineer, Full Stack Developer, and UI/UX Designer
- Co-Founder of Tech Dev Club
- EdTech-Community founder
- B.Tech Computer Science student at GL Bajaj Group of Institutions (2023-2027)
- Expertise in Python, React, Node.js, Machine Learning, Google Cloud, Azure, Firebase, Kong
- 100+ projects including Emma AI Assistant, Thea AI Therapist, SEMAC
- Campus Ambassador at multiple IITs and organizations
- 100+ certifications in AI, cloud technologies, and development
- Contact: bk117134@gmail.com, +91-7452971645
- Location: Mathura, UP, India

If the question is not related to Brajesh Kumar's portfolio, respond with: "Sorry, I can only answer questions about Brajesh Kumar's portfolio."

Keep responses concise, helpful, and focused on Brajesh's professional profile."""

@app.route('/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({"status": "healthy", "timestamp": datetime.now().isoformat()})

@app.route('/api/chat', methods=['POST'])
def chat():
    """
    Main chat endpoint that processes user questions and returns AI responses
    """
    try:
        # Get JSON data from request
        data = request.get_json()
        
        # Validate input
        if not data:
            logger.warning("Empty request body received")
            return jsonify({"error": "Request body is required"}), 400
        
        question = data.get('question', '').strip()
        
        # Handle empty question
        if not question:
            logger.info("Empty question received")
            default_message = "Hello! I'm Brajesh Kumar's portfolio assistant. You can ask me about his projects, skills, education, experience, or how to contact him. What would you like to know?"
            return jsonify({"answer": default_message})
        
        # Log incoming question
        logger.info(f"Question received: {question}")
        
        # Call OpenAI API through ChatAnywhere
        try:
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": question}
                ],
                max_tokens=300,
                temperature=0.7,
                top_p=1,
                frequency_penalty=0,
                presence_penalty=0
            )
            
            # Extract answer from response
            answer = response.choices[0].message.content.strip()
            
            # Log outgoing answer
            logger.info(f"Answer generated: {answer}")
            
            return jsonify({"answer": answer})
            
        except openai.error.AuthenticationError:
            logger.error("OpenAI Authentication failed")
            return jsonify({"error": "Authentication failed with AI service"}), 401
            
        except openai.error.RateLimitError:
            logger.error("OpenAI Rate limit exceeded")
            return jsonify({"error": "Too many requests. Please try again later."}), 429
            
        except openai.error.APIError as e:
            logger.error(f"OpenAI API error: {str(e)}")
            return jsonify({"error": "AI service temporarily unavailable"}), 503
            
        except Exception as e:
            logger.error(f"OpenAI request failed: {str(e)}")
            return jsonify({"error": "Failed to process your question. Please try again."}), 500
    
    except Exception as e:
        logger.error(f"Unexpected error in chat endpoint: {str(e)}")
        return jsonify({"error": "An unexpected error occurred"}), 500

@app.errorhandler(404)
def not_found(error):
    return jsonify({"error": "Endpoint not found"}), 404

@app.errorhandler(405)
def method_not_allowed(error):
    return jsonify({"error": "Method not allowed"}), 405

@app.errorhandler(500)
def internal_error(error):
    logger.error(f"Internal server error: {str(error)}")
    return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    logger.info("Starting Brajesh Kumar Portfolio Chatbot Backend")
    logger.info(f"OpenAI API Base URL: {openai.api_base}")
    
    # Run the Flask app
    app.run(
        host='0.0.0.0',
        port=5000,
        debug=False  # Set to False for production
    )