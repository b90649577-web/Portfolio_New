from flask import Flask, request, jsonify
from flask_cors import CORS
from openai import OpenAI

app = Flask(__name__)
CORS(app)

client = OpenAI(
    api_key="sk-axr3zEYrBgEZ8BTmV4oCvTfjzG1qAdhmcrhuv5xDO6sHaVYs",
    base_url="https://api.chatanywhere.tech/v1"
)

@app.route("/api/chat", methods=["POST"])
def chat():
    data = request.get_json()
    question = data.get("question", "").strip()
    if not question:
        return jsonify({"answer": "Please provide a question."})
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
    return jsonify({"answer": answer})

if __name__ == "__main__":
    app.run(port=5000, debug=True)