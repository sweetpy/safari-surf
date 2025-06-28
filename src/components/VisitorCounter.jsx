import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const VisitorCounter = () => {
  const [count, setCount] = useState(0);
  const [displayCount, setDisplayCount] = useState('0');
  
  useEffect(() => {
    // Get stored count from localStorage or use default
    const storedCount = localStorage.getItem('visitorCount');
    const initialCount = storedCount ? parseInt(storedCount, 10) : 0;
    
    // Increment count for this visit
    const newCount = initialCount + 1;
    
    // Store back in localStorage
    localStorage.setItem('visitorCount', newCount.toString());
    
    // Set the actual count
    setCount(newCount);
    
    // Format the count with comma
    setDisplayCount(newCount.toLocaleString());
    
    // Simulate live counting with small random increments
    const intervalId = setInterval(() => {
      setCount(prevCount => {
        const increment = Math.random() > 0.7 ? 1 : 0;
        const newValue = prevCount + increment;
        localStorage.setItem('visitorCount', newValue.toString());
        setDisplayCount(newValue.toLocaleString());
        return newValue;
      });
    }, 5000); // Check for increment every 5 seconds
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="relative">
      <motion.span 
        key={displayCount}
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-3xl md:text-4xl font-black text-gray-900"
      >
        {displayCount}+
      </motion.span>
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
    </div>
  );
};

export default VisitorCounter;