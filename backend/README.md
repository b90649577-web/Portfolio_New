# Brajesh Kumar Portfolio Chatbot Backend

A secure Python Flask backend for the portfolio chatbot that connects to OpenAI via ChatAnywhere API.

## Features

- **Secure API Integration**: Uses ChatAnywhere endpoint with OpenAI API
- **CORS Enabled**: Allows frontend connections from any origin
- **Comprehensive Logging**: Logs all questions and answers
- **Error Handling**: Robust error handling for various scenarios
- **Health Check**: `/health` endpoint for monitoring
- **Input Validation**: Validates and sanitizes user input

## Setup Instructions

### 1. Prerequisites
- Python 3.8 or higher
- pip (Python package installer)

### 2. Installation

```bash
# Navigate to backend directory
cd backend

# Create virtual environment (recommended)
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Running the Application

#### Development Mode
```bash
python app.py
```

#### Production Mode (with Gunicorn)
```bash
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

#### Quick Start (Unix/Linux/macOS)
```bash
chmod +x run.sh
./run.sh
```

### 4. Testing the API

The backend will be available at `http://localhost:5000`

#### Health Check
```bash
curl http://localhost:5000/health
```

#### Chat Endpoint
```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"question": "Tell me about Brajesh Kumar"}'
```

## API Endpoints

### POST `/api/chat`
- **Purpose**: Process user questions and return AI responses
- **Request Body**: `{"question": "your question here"}`
- **Response**: `{"answer": "AI response here"}`
- **Error Response**: `{"error": "error message"}`

### GET `/health`
- **Purpose**: Health check endpoint
- **Response**: `{"status": "healthy", "timestamp": "ISO timestamp"}`

## Frontend Integration Examples

### Using Fetch API
```javascript
const chatWithBot = async (question) => {
  try {
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });

    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to get response');
    }
    
    return data.answer;
  } catch (error) {
    console.error('Chat error:', error);
    throw error;
  }
};

// Usage
chatWithBot("What are Brajesh's skills?")
  .then(answer => console.log(answer))
  .catch(error => console.error(error));
```

### Using Axios
```javascript
import axios from 'axios';

const chatAPI = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
});

const chatWithBot = async (question) => {
  try {
    const response = await chatAPI.post('/api/chat', { question });
    return response.data.answer;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.error || 'Server error');
    } else if (error.request) {
      throw new Error('Network error - please check your connection');
    } else {
      throw new Error('Request failed');
    }
  }
};

// Usage
chatWithBot("Tell me about Brajesh's projects")
  .then(answer => console.log(answer))
  .catch(error => console.error(error));
```

## Configuration

### Environment Variables (Optional)
You can create a `.env` file for additional configuration:

```env
FLASK_ENV=production
FLASK_DEBUG=False
PORT=5000
```

### API Configuration
The OpenAI API is configured with:
- **API Key**: `sk-axr3zEYrBgEZ8BTmV4oCvTfjzG1qAdhmcrhuv5xDO6sHaVYs`
- **Base URL**: `https://api.chatanywhere.tech/v1`
- **Model**: `gpt-3.5-turbo`
- **Max Tokens**: 300
- **Temperature**: 0.7

## Logging

All interactions are logged to:
- Console output
- `chatbot.log` file

Log entries include:
- Incoming questions
- Generated answers
- Error messages
- Timestamps

## Security Features

- Input validation and sanitization
- Error message sanitization
- Rate limiting handled by OpenAI
- CORS properly configured
- No sensitive data exposure in logs

## Deployment Notes

For production deployment:
1. Use a production WSGI server like Gunicorn
2. Set up proper logging rotation
3. Configure environment variables
4. Use HTTPS
5. Set up monitoring and health checks
6. Consider using a reverse proxy (nginx)

## Troubleshooting

### Common Issues

1. **Import Error**: Make sure all dependencies are installed
2. **API Key Error**: Verify the OpenAI API key is correct
3. **CORS Error**: Check that CORS is properly configured
4. **Connection Error**: Ensure the ChatAnywhere endpoint is accessible

### Debug Mode
To enable debug mode, change `debug=True` in the `app.run()` call.