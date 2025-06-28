import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Get today's date in YYYY-MM-DD format
const getTodayKey = () => {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};

// Get a human-readable day
const getDayName = () => {
  const date = new Date();
  return date.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
};

// Get tomorrow's day name
const getTomorrowDayName = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  return tomorrow.toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
};

// Calculate inventory based on various factors including time of day
const calculateInventory = () => {
  const today = getTodayKey();
  const savedInventory = localStorage.getItem(`inventory_${today}`);
  
  if (savedInventory) {
    return parseInt(savedInventory, 10);
  }
  
  // Base inventory (between 3-9 devices)
  const hour = new Date().getHours();
  let baseInventory;
  
  // Inventory decreases throughout the day
  if (hour < 9) {
    baseInventory = Math.floor(Math.random() * 3) + 7; // 7-9 devices in early morning
  } else if (hour < 14) {
    baseInventory = Math.floor(Math.random() * 3) + 5; // 5-7 devices in late morning/noon
  } else if (hour < 18) {
    baseInventory = Math.floor(Math.random() * 3) + 3; // 3-5 devices in afternoon
  } else {
    baseInventory = Math.floor(Math.random() * 2) + 1; // 1-2 devices in evening
  }
  
  // Day of week factor - lower inventory on busy days (weekends)
  const dayOfWeek = new Date().getDay(); // 0 = Sunday, 6 = Saturday
  if (dayOfWeek === 0 || dayOfWeek === 6) {
    baseInventory = Math.max(1, baseInventory - 2); // Weekend adjustment
  } else if (dayOfWeek === 5) {
    baseInventory = Math.max(1, baseInventory - 1); // Friday adjustment
  }
  
  // Save today's inventory
  localStorage.setItem(`inventory_${today}`, baseInventory.toString());
  return baseInventory;
};

// Calculate tomorrow's inventory - always higher than today
const calculateTomorrowInventory = (todayInventory) => {
  const today = getTodayKey();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowKey = `${tomorrow.getFullYear()}-${String(tomorrow.getMonth() + 1).padStart(2, '0')}-${String(tomorrow.getDate()).padStart(2, '0')}`;
  
  // Check if tomorrow's inventory is already calculated
  const savedTomorrowInventory = localStorage.getItem(`inventory_${tomorrowKey}`);
  if (savedTomorrowInventory) {
    return parseInt(savedTomorrowInventory, 10);
  }
  
  // Make sure tomorrow has more inventory than today
  // Add between 8-14 more devices than current inventory
  const tomorrowInventory = todayInventory + Math.floor(Math.random() * 7) + 8;
  
  // Save tomorrow's inventory
  localStorage.setItem(`inventory_${tomorrowKey}`, tomorrowInventory.toString());
  return tomorrowInventory;
};

// Low inventory threshold
const LOW_INVENTORY_THRESHOLD = 4;

const InventoryTracker = () => {
  const [inventory, setInventory] = useState(0);
  const [tomorrowInventory, setTomorrowInventory] = useState(0);
  const [isLowStock, setIsLowStock] = useState(false);
  const [recentlyDecreased, setRecentlyDecreased] = useState(false);
  const [dayName, setDayName] = useState('');
  const [tomorrowName, setTomorrowName] = useState('');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize inventory
    const currentInventory = calculateInventory();
    const nextDayInventory = calculateTomorrowInventory(currentInventory);
    
    setInventory(currentInventory);
    setTomorrowInventory(nextDayInventory);
    setIsLowStock(currentInventory <= LOW_INVENTORY_THRESHOLD);
    setDayName(getDayName());
    setTomorrowName(getTomorrowDayName());
    setIsInitialized(true);
    
    // Store tomorrow's inventory in localStorage
    localStorage.setItem('tomorrowInventory', nextDayInventory.toString());
    
    // Small chance to decrease inventory randomly
    const decreaseInterval = setInterval(() => {
      // 5% chance of inventory decrease when user is active on the site
      if (Math.random() < 0.05 && document.visibilityState === 'visible') {
        setInventory(prev => {
          const newInventory = Math.max(1, prev - 1);
          localStorage.setItem(`inventory_${getTodayKey()}`, newInventory.toString());
          
          // Show notification about recent decrease
          setRecentlyDecreased(true);
          setTimeout(() => setRecentlyDecreased(false), 10000); // Hide after 10 seconds
          
          // Check if we've reached low stock
          setIsLowStock(newInventory <= LOW_INVENTORY_THRESHOLD);
          
          return newInventory;
        });
      }
    }, 30000); // Check every 30 seconds
    
    // Reset inventory at midnight
    const checkDate = setInterval(() => {
      const currentDate = getTodayKey();
      const savedDate = localStorage.getItem('lastInventoryDate');
      
      if (savedDate && savedDate !== currentDate) {
        // It's a new day, recalculate inventory
        const newInventory = calculateInventory();
        const newTomorrowInventory = calculateTomorrowInventory(newInventory);
        
        setInventory(newInventory);
        setTomorrowInventory(newTomorrowInventory);
        setIsLowStock(newInventory <= LOW_INVENTORY_THRESHOLD);
        setDayName(getDayName());
        setTomorrowName(getTomorrowDayName());
        
        // Store tomorrow's inventory
        localStorage.setItem('tomorrowInventory', newTomorrowInventory.toString());
      }
      
      localStorage.setItem('lastInventoryDate', currentDate);
    }, 60000); // Check every minute
    
    return () => {
      clearInterval(decreaseInterval);
      clearInterval(checkDate);
    };
  }, []);

  if (!isInitialized) {
    return null;
  }

  return (
    <div className="relative inline-block">
      <span className={`font-medium ${isLowStock ? 'text-red-600' : 'text-yellow-600'}`}>
        Only {inventory} {inventory === 1 ? 'device' : 'devices'} left {dayName}
        {recentlyDecreased && (
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="ml-2 text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full"
          >
            1 just rented!
          </motion.span>
        )}
      </span>
      
      {isLowStock && (
        <div className="mt-1 text-xs text-gray-500">
          {tomorrowInventory} more {tomorrowInventory === 1 ? 'device' : 'devices'} available for {tomorrowName}
        </div>
      )}
    </div>
  );
};

export default InventoryTracker;