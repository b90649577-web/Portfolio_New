from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI
import logging
import datetime

app = Flask(__name__)
CORS(app)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("chatbot.log"),
        logging.StreamHandler()
    ]
)
logger = logging.getLogger(__name__)

client = OpenAI(
    api_key="sk-axr3zEYrBgEZ8BTmV4oCvTfjzG1qAdhmcrhuv5xDO6sHaVYs",
    base_url="https://api.chatanywhere.tech/v1"
)

@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({
        "status": "healthy",
        "timestamp": datetime.datetime.now().isoformat()
    })

@app.route("/api/chat", methods=["POST"])
def chat():
    try:
        data = request.get_json()
        
        if not data:
            logger.warning("Empty request body received")
            return jsonify({"answer": "Please provide a question."}), 400
            
        question = data.get("question", "").strip()
        
        if not question:
            logger.warning("Empty question received")
            return jsonify({"answer": "Please provide a question."}), 400
            
        logger.info(f"Received question: {question}")
        
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a chatbot for Brajesh Kumar's portfolio. Answer only questions about Brajesh Kumar's projects, skills, achievements, education, and contact information."},
                {"role": "user", "content": question}
            ],
            max_tokens=300,
            temperature=0.7
        )
        
        answer = response.choices[0].message.content.strip()
        logger.info(f"Generated answer: {answer[:100]}...")
        
        return jsonify({"answer": answer})
        
    except Exception as e:
        logger.error(f"Error processing request: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    logger.info("Starting Flask application on port 5000")
    app.run(host='0.0.0.0', port=5000, debug=True)