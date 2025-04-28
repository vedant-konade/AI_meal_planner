import React, { useState } from 'react';
import axios from 'axios';
import './Chatbot.css';  // New CSS

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);

    try {
      const res = await axios.post('http://localhost:5000/chatbot', { message: input });
      const botMessage = { text: res.data.reply, sender: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error:', error);
    }

    setInput('');
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-messages">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chatbot-message ${msg.sender}`}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Ask your meal query..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Chatbot;
