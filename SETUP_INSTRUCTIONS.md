# Complete Portfolio Chatbot Setup Instructions

This is a complete, production-ready portfolio chatbot solution with both Flask backend and React frontend.

## 🚀 Quick Start

### Backend Setup (Flask)

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Create and activate virtual environment:**
   ```bash
   # Create virtual environment
   python -m venv venv
   
   # Activate virtual environment
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Run the Flask backend:**
   ```bash
   python app.py
   ```
   
   Or use the provided script:
   ```bash
   chmod +x run.sh
   ./run.sh
   ```

   The backend will be available at: `http://localhost:5000`

### Frontend Setup (React)

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the React frontend:**
   ```bash
   npm run dev
   ```

   The frontend will be available at: `http://localhost:3000`

## 🧪 Testing the Complete System

1. **Test Backend Health:**
   ```bash
   curl http://localhost:5000/health
   ```

2. **Test Chat API:**
   ```bash
   curl -X POST http://localhost:5000/api/chat \
     -H "Content-Type: application/json" \
     -d '{"question": "Tell me about Brajesh Kumar"}'
   ```

3. **Open Frontend:**
   - Go to `http://localhost:3000`
   - Click the chat button in the bottom-right corner
   - Start chatting with the portfolio assistant!

## 🔧 Integration with Existing Portfolio

To integrate the chatbot into your existing portfolio:

### Option 1: Use the Modern Chatbot Component

```tsx
import { ModernChatbot } from './components/Chatbot';

function App() {
  return (
    <div>
      {/* Your existing portfolio content */}
      
      {/* Add the chatbot */}
      <ModernChatbot apiUrl="http://localhost:5000/api/chat" />
    </div>
  );
}
```

### Option 2: Use the Axios-based Chatbot

```tsx
import { ChatbotWithAxios } from './components/Chatbot';

function App() {
  return (
    <div>
      {/* Your existing portfolio content */}
      
      {/* Add the axios chatbot with connection monitoring */}
      <ChatbotWithAxios apiUrl="/api/chat" />
    </div>
  );
}
```

## 📁 Project Structure

```
├── backend/                 # Flask Backend
│   ├── app.py              # Main Flask application
│   ├── requirements.txt    # Python dependencies
│   ├── run.sh             # Quick start script
│   ├── README.md          # Backend documentation
│   └── .gitignore         # Git ignore file
│
├── frontend/               # React Frontend (Demo)
│   ├── src/
│   │   ├── components/
│   │   │   └── Chatbot/
│   │   │       ├── ModernChatbot.tsx      # Fetch-based chatbot
│   │   │       ├── ChatbotWithAxios.tsx   # Axios-based chatbot
│   │   │       └── index.ts               # Exports
│   │   ├── App.tsx         # Demo application
│   │   └── main.tsx        # React entry point
│   ├── package.json        # Frontend dependencies
│   └── vite.config.ts      # Vite configuration
│
├── src/components/Chatbot/ # Portfolio Integration Components
│   ├── ModernChatbot.tsx   # Modern chatbot for your portfolio
│   ├── ChatbotWithAxios.tsx # Alternative with Axios
│   └── index.ts            # Component exports
│
└── SETUP_INSTRUCTIONS.md   # This file
```

## 🔌 API Endpoints

### Backend Endpoints

- **GET** `/health` - Health check endpoint
- **POST** `/api/chat` - Main chat endpoint

### Request/Response Format

**Request:**
```json
{
  "question": "Tell me about Brajesh's projects"
}
```

**Response:**
```json
{
  "answer": "Brajesh Kumar has worked on 100+ projects including Emma AI Assistant, Thea AI Therapist, and SEMAC college management system..."
}
```

**Error Response:**
```json
{
  "error": "Error message here"
}
```

## 🎨 Frontend Features

### ModernChatbot Component
- Clean, modern UI with gradient design
- Fetch API integration
- Typing indicators
- Error handling
- Responsive design
- Smooth animations

### ChatbotWithAxios Component
- Axios-based HTTP client
- Connection status monitoring
- Retry functionality
- Enhanced error handling
- Network status indicators

## 🔧 Configuration Options

### Backend Configuration

Edit `backend/app.py` to modify:
- OpenAI model settings
- System prompt
- API endpoints
- Logging configuration

### Frontend Configuration

Both chatbot components accept these props:
- `apiUrl`: Backend API endpoint (default: `http://localhost:5000/api/chat`)

## 🚨 Troubleshooting

### Common Issues

1. **CORS Errors:**
   - Make sure the Flask backend is running
   - Check that CORS is enabled in `app.py`

2. **Network Errors:**
   - Verify backend is running on port 5000
   - Check firewall settings
   - Ensure both frontend and backend are accessible

3. **API Key Issues:**
   - Verify the OpenAI API key in `app.py`
   - Check ChatAnywhere endpoint availability

4. **Import Errors:**
   - Make sure all dependencies are installed
   - Check Python virtual environment is activated

### Debug Mode

To enable debug mode in Flask:
```python
app.run(host='0.0.0.0', port=5000, debug=True)
```

## 🌐 Production Deployment

### Backend Deployment

1. **Use Gunicorn for production:**
   ```bash
   gunicorn -w 4 -b 0.0.0.0:5000 app:app
   ```

2. **Environment Variables:**
   ```bash
   export FLASK_ENV=production
   export FLASK_DEBUG=False
   ```

### Frontend Deployment

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Update API URL for production:**
   ```tsx
   <ModernChatbot apiUrl="https://your-backend-domain.com/api/chat" />
   ```

## 📝 Customization

### Styling
- Modify CSS classes in the component files
- Update gradient colors and themes
- Adjust responsive breakpoints

### Functionality
- Customize system prompt in `backend/app.py`
- Add new API endpoints
- Implement user authentication
- Add conversation history

## 🔒 Security Considerations

- API key is hardcoded for demo purposes
- In production, use environment variables
- Implement rate limiting
- Add input validation and sanitization
- Use HTTPS in production

## 📞 Support

If you encounter any issues:
1. Check the console for error messages
2. Verify all dependencies are installed
3. Ensure both backend and frontend are running
4. Check network connectivity between components

The chatbot is now ready to answer questions about Brajesh Kumar's portfolio, including his projects, skills, education, experience, and contact information!