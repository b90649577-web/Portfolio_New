import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, MessageCircle, Bot, User, Loader2, AlertCircle } from 'lucide-react';
import axios, { AxiosError } from 'axios';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

interface ChatbotWithAxiosProps {
  apiUrl?: string;
}

// Create axios instance with default configuration
const chatAPI = axios.create({
  baseURL: 'http://localhost:5000',
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 second timeout
});

const ChatbotWithAxios: React.FC<ChatbotWithAxiosProps> = ({ 
  apiUrl = '/api/chat' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm Brajesh Kumar's portfolio assistant. You can ask me about his projects, skills, education, experience, or how to contact him. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [connectionStatus, setConnectionStatus] = useState<'connected' | 'disconnected' | 'checking'>('checking');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Check backend connection on component mount
  useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      setConnectionStatus('checking');
      await chatAPI.get('/health');
      setConnectionStatus('connected');
    } catch (error) {
      console.error('Backend connection failed:', error);
      setConnectionStatus('disconnected');
    }
  };

  const sendMessage = async (question: string) => {
    if (!question.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: question,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Using axios
      const response = await chatAPI.post(apiUrl, { question });
      
      if (!response.data.answer) {
        throw new Error('Invalid response format from server');
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.data.answer,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setConnectionStatus('connected');
    } catch (error) {
      console.error('Chat error:', error);
      
      let errorMessage = 'Sorry, I encountered an error. Please try again.';
      
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ error: string }>;
        
        if (axiosError.response) {
          // Server responded with error status
          errorMessage = axiosError.response.data?.error || `Server error (${axiosError.response.status})`;
          
          if (axiosError.response.status === 429) {
            errorMessage = 'Too many requests. Please wait a moment and try again.';
          } else if (axiosError.response.status === 401) {
            errorMessage = 'Authentication failed. Please contact support.';
          } else if (axiosError.response.status === 503) {
            errorMessage = 'The service is temporarily unavailable. Please try again later.';
          }
        } else if (axiosError.request) {
          // Network error
          errorMessage = 'Network error - please check your connection and make sure the backend is running at http://localhost:5000';
          setConnectionStatus('disconnected');
        } else {
          // Request setup error
          errorMessage = 'Request failed to send. Please try again.';
        }
      }

      const errorBotMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: errorMessage,
        isBot: true,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, errorBotMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const getConnectionStatusColor = () => {
    switch (connectionStatus) {
      case 'connected': return 'text-green-500';
      case 'disconnected': return 'text-red-500';
      case 'checking': return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  const getConnectionStatusText = () => {
    switch (connectionStatus) {
      case 'connected': return 'Connected';
      case 'disconnected': return 'Disconnected';
      case 'checking': return 'Checking...';
      default: return 'Unknown';
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-24 z-50 p-4 bg-gradient-to-r from-purple-500 to-pink-600 
          hover:from-purple-600 hover:to-pink-700 text-white rounded-full shadow-lg 
          transition-all duration-300 hover:shadow-xl"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-24 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[80vh] 
              bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 
              flex flex-col overflow-hidden z-50"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">Portfolio Assistant (Axios)</h3>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${
                        connectionStatus === 'connected' ? 'bg-green-400' :
                        connectionStatus === 'disconnected' ? 'bg-red-400' : 'bg-yellow-400'
                      }`} />
                      <p className={`text-xs ${getConnectionStatusColor()}`}>
                        {getConnectionStatusText()}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {connectionStatus === 'disconnected' && (
                    <button
                      onClick={checkConnection}
                      className="p-1 hover:bg-white/20 rounded-full transition-colors"
                      aria-label="Retry connection"
                      title="Retry connection"
                    >
                      <AlertCircle size={16} />
                    </button>
                  )}
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    aria-label="Close chat"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Connection Warning */}
            {connectionStatus === 'disconnected' && (
              <div className="p-3 bg-red-100 dark:bg-red-900/30 border-b border-red-300 dark:border-red-700">
                <div className="flex items-center gap-2 text-red-700 dark:text-red-400 text-sm">
                  <AlertCircle size={16} />
                  <span>Backend disconnected. Make sure Flask server is running on port 5000.</span>
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 dark:bg-gray-800">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0
                    ${message.isBot 
                      ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white' 
                      : 'bg-gray-300 dark:bg-gray-600 text-gray-700 dark:text-gray-300'}`}>
                    {message.isBot ? <Bot size={16} /> : <User size={16} />}
                  </div>
                  <div className={`max-w-[80%] ${message.isBot ? 'mr-8' : 'ml-8'}`}>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.isBot 
                        ? 'bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm' 
                        : 'bg-gradient-to-r from-purple-500 to-pink-600 text-white'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1 px-2">
                      {message.timestamp.toLocaleTimeString([], { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 
                    text-white flex items-center justify-center">
                    <Bot size={16} />
                  </div>
                  <div className="bg-white dark:bg-gray-700 rounded-2xl px-4 py-2 shadow-sm">
                    <div className="flex items-center gap-1">
                      <Loader2 size={16} className="animate-spin text-gray-500" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">Thinking...</span>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Brajesh's portfolio..."
                  className="flex-1 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 
                    rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 
                    text-gray-800 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400"
                  disabled={isLoading || connectionStatus === 'disconnected'}
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim() || connectionStatus === 'disconnected'}
                  className="p-2 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 
                    hover:to-pink-700 text-white rounded-full transition-all duration-300 
                    disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
                  aria-label="Send message"
                >
                  <Send size={20} />
                </button>
              </div>
              <div className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
                Powered by OpenAI via ChatAnywhere • Using Axios
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatbotWithAxios;