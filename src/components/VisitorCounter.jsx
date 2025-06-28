import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { Globe, Users, TrendingUp } from 'lucide-react';

// Simulated country data - in production this would come from a real API/backend
const topCountries = [
  { code: 'us', name: 'United States', count: 0 },
  { code: 'gb', name: 'United Kingdom', count: 0 },
  { code: 'de', name: 'Germany', count: 0 },
  { code: 'ca', name: 'Canada', count: 0 },
  { code: 'au', name: 'Australia', count: 0 },
  { code: 'fr', name: 'France', count: 0 },
  { code: 'za', name: 'South Africa', count: 0 },
  { code: 'in', name: 'India', count: 0 },
  { code: 'nl', name: 'Netherlands', count: 0 },
  { code: 'se', name: 'Sweden', count: 0 }
];

// Generates a unique visitor ID
const generateVisitorId = () => {
  return 'v_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// Simulates getting the visitor's country - in production this would use a real geolocation API
const getVisitorCountry = async () => {
  // This would be replaced with a real API call in production
  // For demo purposes, we'll randomly select a country from our predefined list
  const randomIndex = Math.floor(Math.random() * topCountries.length);
  return topCountries[randomIndex];
};

const VisitorCounter = ({ showDetails = false, showAnimation = true }) => {
  const [count, setCount] = useState(0);
  const [countryData, setCountryData] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [showCountryPopup, setShowCountryPopup] = useState(false);
  const [showTopCountries, setShowTopCountries] = useState(false);

  useEffect(() => {
    // Check if this is a unique visitor
    const visitorId = localStorage.getItem('visitorId');
    const visitorCountryData = localStorage.getItem('visitorCountryData');
    
    const initCounter = async () => {
      let countries = [];
      
      // Initialize country data from localStorage or with defaults
      if (visitorCountryData) {
        countries = JSON.parse(visitorCountryData);
      } else {
        countries = [...topCountries];
      }
      
      // If this is a new visitor
      if (!visitorId) {
        // Generate and store a unique ID for this visitor
        const newVisitorId = generateVisitorId();
        localStorage.setItem('visitorId', newVisitorId);
        
        // Simulate getting visitor's country
        const visitorCountry = await getVisitorCountry();
        
        // Update country count
        const updatedCountries = countries.map(country => {
          if (country.code === visitorCountry.code) {
            return { ...country, count: country.count + 1 };
          }
          return country;
        });
        
        // Set the current country for display
        setCurrentCountry(visitorCountry);
        
        // Show country popup briefly
        setShowCountryPopup(true);
        setTimeout(() => setShowCountryPopup(false), 5000);
        
        // Update and save country data
        localStorage.setItem('visitorCountryData', JSON.stringify(updatedCountries));
        setCountryData(updatedCountries);
      } else {
        // Just load the existing data
        setCountryData(countries);
      }
      
      // Calculate total unique visitors
      const totalVisitors = countries.reduce((acc, country) => acc + country.count, 0);
      setCount(totalVisitors);
    };
    
    initCounter();
    
    // Simulate occasional new visitors in the background (for visual interest)
    const intervalId = setInterval(async () => {
      // 20% chance of a new "visitor" every 30 seconds for visual interest
      if (Math.random() > 0.8) {
        const visitorCountry = await getVisitorCountry();
        
        setCountryData(prevData => {
          const updatedData = prevData.map(country => {
            if (country.code === visitorCountry.code) {
              return { ...country, count: country.count + 1 };
            }
            return country;
          });
          
          // Calculate total unique visitors
          const totalVisitors = updatedData.reduce((acc, country) => acc + country.count, 0);
          setCount(totalVisitors);
          
          // Save to localStorage
          localStorage.setItem('visitorCountryData', JSON.stringify(updatedData));
          
          return updatedData;
        });
      }
    }, 30000);
    
    return () => clearInterval(intervalId);
  }, []);

  // Sort country data by count (highest first)
  const sortedCountryData = [...countryData].sort((a, b) => b.count - a.count);
  const topFiveCountries = sortedCountryData.slice(0, 5);
  
  return (
    <div className="relative inline-flex items-center">
      <div className="relative">
        {showAnimation ? (
          <CountUp 
            end={count} 
            duration={2.5} 
            separator="," 
            suffix="+" 
            className="text-3xl md:text-4xl font-black text-gray-900"
          />
        ) : (
          <span className="text-3xl md:text-4xl font-black text-gray-900">{count.toLocaleString()}+</span>
        )}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
      </div>
      
      {showDetails && (
        <button 
          onClick={() => setShowTopCountries(!showTopCountries)}
          className="ml-2 p-1 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
          aria-label="Show visitor details"
        >
          <Globe className="h-4 w-4" />
        </button>
      )}
      
      {/* Country popup animation for new visitors */}
      <AnimatePresence>
        {showCountryPopup && currentCountry && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 rounded-full shadow-lg z-10 whitespace-nowrap"
          >
            <div className="flex items-center space-x-2 text-sm">
              <span className={`fi fi-${currentCountry.code} rounded-sm`}></span>
              <span>New visitor from {currentCountry.name}!</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Top countries dropdown */}
      <AnimatePresence>
        {showTopCountries && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg p-4 z-20 min-w-[240px]"
          >
            <div className="flex items-center justify-between mb-2 pb-2 border-b">
              <h3 className="font-semibold text-gray-900 flex items-center">
                <Users className="h-4 w-4 mr-2 text-orange-500" />
                <span>Top Visitor Countries</span>
              </h3>
              <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                Live
              </span>
            </div>
            <div className="space-y-2 max-h-48 overflow-auto">
              {topFiveCountries.map((country, index) => (
                <div key={country.code} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`fi fi-${country.code} rounded-sm`}></span>
                    <span className="text-sm text-gray-700">{country.name}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-semibold text-gray-900">{country.count}</span>
                    {index === 0 && (
                      <span className="ml-1 text-amber-500 text-xs">🏆</span>
                    )}
                    {index === 1 && (
                      <span className="ml-1 text-gray-500 text-xs">🥈</span>
                    )}
                    {index === 2 && (
                      <span className="ml-1 text-amber-700 text-xs">🥉</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-2 pt-2 border-t flex items-center justify-between text-xs text-gray-500">
              <span className="flex items-center">
                <TrendingUp className="h-3 w-3 mr-1 text-green-500" />
                <span>Growing steadily</span>
              </span>
              <span>Updated live</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VisitorCounter;