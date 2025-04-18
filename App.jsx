import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './assets/Our Project copy/Navbar';
import StartUp from './assets/Our Project copy/StartUp';
import { motion } from 'framer-motion';
import CursorSparkle from './CursorSparkle';

// ChatBubble Component
const ChatBubble = () => {
  const [visible, setVisible] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState(""); // State for the typed message
  const [messages, setMessages] = useState([]); // Store all messages

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000); // 3 seconds delay for showing the bubble
    return () => clearTimeout(timer);
  }, []);

  const handleChatButtonClick = () => {
    setChatOpen(true); // Show the chat interface when button is clicked
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "user" }]); // Add user message
      setMessage(""); // Clear the input field
    }
  };

  return (
    <>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            bounce: 0.5,
          }}
          className="chat-bubble"
        >
          <button
            onClick={handleChatButtonClick}
            className="bubble-button"
          >
            💬 Chat with us
          </button>
        </motion.div>
      )}

      {/* Conditionally render chat interface */}
      {chatOpen && (
        <div className="chat-interface">
          <div className="chat-header">
            <span>Chat with us</span>
            <button onClick={() => setChatOpen(false)}>Close</button>
          </div>
          <div className="chat-body">
            {/* Render messages */}
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "user" ? "message user" : "message"}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)} // Update state as user types
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

function App() {
  return (
    <div className="app">
      <Navbar />
      <CursorSparkle/>
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <StartUp />
                <ChatBubble /> {/* 👈 Chat bubble added here */}
              </>
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
