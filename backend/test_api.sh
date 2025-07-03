#!/bin/bash

echo "🧪 Testing the Chatbot API..."

# Test health endpoint
echo "📊 Testing health endpoint..."
curl http://localhost:5000/api/chat

# Test chat endpoint
echo -e "\n\n💬 Testing chat endpoint..."
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"question":"What are Brajesh'\''s projects?"}'

echo -e "\n\n✅ Test complete!"