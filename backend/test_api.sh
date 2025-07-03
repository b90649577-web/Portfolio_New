#!/bin/bash

echo "🧪 Testing the Chatbot API..."

# Test health endpoint
echo "📊 Testing health endpoint..."
curl http://localhost:5000/health

# Test chat endpoint
echo -e "\n\n💬 Testing chat endpoint..."
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"question":"CAN YOU TELL ABOUT BRAJESH"}'

echo -e "\n\n✅ Test complete!"