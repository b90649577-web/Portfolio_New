import React from 'react';
import { ModernChatbot, ChatbotWithAxios } from './components/Chatbot';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Brajesh Kumar Portfolio</h1>
        <p>Welcome to my portfolio website!</p>
        <div className="content">
          <h2>About Me</h2>
          <p>
            I'm Brajesh Kumar, an AI Engineer, Full Stack Developer, and UI/UX Designer.
            I'm also the Co-Founder of Tech Dev Club and founder of EdTech-Community.
          </p>
          
          <h2>Skills</h2>
          <ul>
            <li>Python, React, Node.js</li>
            <li>Machine Learning & AI</li>
            <li>Google Cloud, Azure, Firebase, Kong</li>
            <li>Full Stack Development</li>
            <li>UI/UX Design</li>
          </ul>

          <h2>Projects</h2>
          <ul>
            <li>Emma AI Assistant</li>
            <li>Thea AI Therapist</li>
            <li>SEMAC - College Management System</li>
            <li>100+ other projects</li>
          </ul>

          <h2>Contact</h2>
          <p>Email: bk117134@gmail.com</p>
          <p>Phone: +91-7452971645</p>
          <p>Location: Mathura, UP, India</p>
        </div>
      </header>

      {/* Modern Chatbot with Fetch API */}
      <ModernChatbot />

      {/* Alternative Chatbot with Axios (positioned differently) */}
      <ChatbotWithAxios />
    </div>
  );
}

export default App;