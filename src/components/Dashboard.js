import React from 'react';
import PreferenceForm from './PreferenceForm';
import Chatbot from './Chatbot';
import { motion } from 'framer-motion';  // Import motion
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Welcome, Vedant! 👋</h1>

      <motion.div className="dashboard-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h2>🍽️ Let's Personalize Your Meals</h2>
        <PreferenceForm />
      </motion.div>

      <motion.div className="dashboard-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
        <h2>🎯 Your Personalized Meal Plan</h2>
        {/* Meals appear from PreferenceForm */}
      </motion.div>

      <motion.div className="dashboard-section" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <h2>🤖 Meal Assistant Chatbot</h2>
        <Chatbot />
      </motion.div>
    </div>
  );
}

export default Dashboard;
