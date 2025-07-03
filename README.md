# Portfolio Chatbot Integration

This project integrates a chatbot into Brajesh Kumar's portfolio website. The chatbot can answer questions about Brajesh's projects, skills, education, experience, and contact information.

## System Architecture

- **Frontend**: React (Vite) with TypeScript
- **Backend**: Python Flask API
- **AI**: OpenAI API via ChatAnywhere

## Setup Instructions

### 1. Start the Backend

```bash
cd backend
chmod +x run_backend.sh
./run_backend.sh
```

This will:
- Create a Python virtual environment (if needed)
- Install required dependencies
- Start the Flask server on port 5000

### 2. Test the Backend API

```bash
cd backend
chmod +x test_api.sh
./test_api.sh
```

This will send test requests to verify the API is working correctly.

### 3. The Frontend Integration

The chatbot is already integrated into the portfolio website. The frontend components are:

- `src/components/Chatbot/ChatbotButton.tsx` - Button to open the chat
- `src/components/Chatbot/ChatWindow.tsx` - Main chat interface
- `src/components/Chatbot/ChatMessage.tsx` - Individual message component

## Troubleshooting

### Common Issues

1. **"Failed to fetch" Errors**:
   - Make sure the Flask backend is running on port 5000
   - Verify the API endpoint is `/api/chat`
   - Check that the frontend is sending requests to `http://localhost:5000/api/chat`
   - See TROUBLESHOOTING.md for detailed steps

2. **CORS Issues**:
   - The backend has CORS enabled for all origins
   - If you're still seeing CORS errors, check browser console for details

3. **OpenAI API Issues**:
   - Verify the API key is correct
   - Check that the ChatAnywhere endpoint is accessible

## API Documentation

### POST `/api/chat`

**Request:**
```json
{
  "question": "What are Brajesh's skills?"
}
```

**Response:**
```json
{
  "answer": "Brajesh Kumar has expertise in Python, React, Node.js, Machine Learning, Google Cloud, Azure, Firebase, Kong, and UI/UX design."
}
```

## Deployment Notes

When deploying to production:

1. Update the API URL in `ChatWindow.tsx` to point to your production backend
2. Set `debug=False` in the Flask app
3. Use a production WSGI server like Gunicorn
4. Secure the API key using environment variables