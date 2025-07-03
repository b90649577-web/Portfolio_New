# Chatbot Troubleshooting Guide

This guide will help you resolve common issues with the portfolio chatbot integration.

## "Failed to fetch" or "Network error" Issues

If you're seeing "Failed to fetch" or "Network error" messages in the chatbot, follow these steps:

### 1. Verify the Backend is Running

```bash
# Navigate to the backend directory
cd backend

# Start the backend if it's not running
chmod +x run_backend.sh
./run_backend.sh
```

The backend should be running on port 5000. You should see output indicating the server has started successfully.

### 2. Test the Backend API

```bash
# Test the health endpoint
curl http://localhost:5000/health

# Test the chat endpoint
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"question":"CAN YOU TELL ABOUT BRAJESH"}'
```

You should receive a valid JSON response from both endpoints.

### 3. Check CORS Configuration

Make sure CORS is properly configured in the Flask backend. The `app.py` file should include:

```python
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
```

### 4. Verify Frontend Configuration

In the `ChatWindow.tsx` file, ensure the fetch URL is correct:

```typescript
const response = await fetch('http://localhost:5000/api/chat', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ question: input }),
  signal: abortControllerRef.current.signal
});
```

### 5. Check Network Tab in Browser DevTools

1. Open your browser's DevTools (F12 or right-click > Inspect)
2. Go to the Network tab
3. Look for requests to `/api/chat`
4. Check the status code and response

### 6. Common Issues and Solutions

#### Issue: 404 Not Found
- Make sure the backend is running
- Verify the endpoint URL is correct
- Check that the route is defined in `app.py`

#### Issue: CORS Error
- Ensure CORS is enabled in the Flask app
- Check that the request includes the correct headers
- Try using a CORS browser extension for testing

#### Issue: Connection Refused
- Verify the backend is running on port 5000
- Check if another process is using port 5000
- Try a different port and update both backend and frontend

#### Issue: Invalid JSON Response
- Check the response format in the backend
- Ensure the frontend is parsing the response correctly
- Look for syntax errors in the JSON

## Different Deployment Environments

### Local Development
- Backend: `http://localhost:5000/api/chat`
- Frontend: `http://localhost:3000` or `http://localhost:5173`

### Production
If deploying to production, update the API URL in `ChatWindow.tsx`:

```typescript
// For relative URL (same domain)
const response = await fetch('/api/chat', {
  // ...
});

// For absolute URL (different domain)
const response = await fetch('https://api.yourdomain.com/api/chat', {
  // ...
});
```

## Advanced Debugging

### Enable Debug Mode in Flask
```python
app.run(host='0.0.0.0', port=5000, debug=True)
```

### Check Flask Logs
Look for error messages in the Flask console output.

### Test with Postman or Insomnia
Use API testing tools to isolate frontend vs. backend issues.

### Check OpenAI API Connection
Verify the ChatAnywhere API is accessible and the API key is valid.

## Still Having Issues?

1. Restart both the frontend and backend
2. Clear browser cache and cookies
3. Try a different browser
4. Check firewall settings
5. Verify network connectivity