import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';

// Initialize with top countries but zero counts
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

// Simulates getting the visitor's country
const getVisitorCountry = () => {
  const randomIndex = Math.floor(Math.random() * topCountries.length);
  return topCountries[randomIndex];
};

const VisitorCounter = ({ showDetails = false, showAnimation = true }) => {
  const [count, setCount] = useState(0);
  const [topFive, setTopFive] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [showCountryPopup, setShowCountryPopup] = useState(false);
  const [showTopCountries, setShowTopCountries] = useState(false);

  useEffect(() => {
    // Initialize visitor tracking
    const initVisitorCount = () => {
      // Check if this visitor has been counted before
      const visitorId = localStorage.getItem('visitorId');
      let visitorCountryData = localStorage.getItem('visitorCountryData');
      let countries = [];
      
      if (visitorCountryData) {
        countries = JSON.parse(visitorCountryData);
      } else {
        countries = [...topCountries]; // Start with zero counts
        localStorage.setItem('visitorCountryData', JSON.stringify(countries));
      }
      
      // If this is a new visitor
      if (!visitorId) {
        // Generate and store a unique ID for this visitor
        const newVisitorId = generateVisitorId();
        localStorage.setItem('visitorId', newVisitorId);
        
        // Simulate getting visitor's country
        const visitorCountry = getVisitorCountry();
        
        // Update country count
        const updatedCountries = countries.map(country => {
          if (country.code === visitorCountry.code) {
            return { ...country, count: country.count + 1 };
          }
          return country;
        });
        
        // Show country popup briefly
        setCurrentCountry(visitorCountry);
        setShowCountryPopup(true);
        setTimeout(() => setShowCountryPopup(false), 5000);
        
        // Update localStorage
        localStorage.setItem('visitorCountryData', JSON.stringify(updatedCountries));
        
        // Update state
        const totalCount = updatedCountries.reduce((sum, country) => sum + country.count, 0);
        setCount(totalCount);
        
        // Update top five countries
        const sortedCountries = [...updatedCountries].sort((a, b) => b.count - a.count).slice(0, 5);
        setTopFive(sortedCountries);
      } else {
        // Just load existing data for returning visitors
        const totalCount = countries.reduce((sum, country) => sum + country.count, 0);
        setCount(totalCount);
        
        // Update top five countries
        const sortedCountries = [...countries].sort((a, b) => b.count - a.count).slice(0, 5);
        setTopFive(sortedCountries);
      }
    };
    
    initVisitorCount();
    
    // Simulate occasional new visitors
    const intervalId = setInterval(() => {
      const shouldIncrease = Math.random() > 0.8; // 20% chance of increasing
      
      if (shouldIncrease) {
        // Get country data
        const visitorCountryData = localStorage.getItem('visitorCountryData');
        if (visitorCountryData) {
          const countries = JSON.parse(visitorCountryData);
          
          // Simulate new visitor
          const visitorCountry = getVisitorCountry();
          
          // Update country count
          const updatedCountries = countries.map(country => {
            if (country.code === visitorCountry.code) {
              return { ...country, count: country.count + 1 };
            }
            return country;
          });
          
          // Update localStorage
          localStorage.setItem('visitorCountryData', JSON.stringify(updatedCountries));
          
          // Update state
          const totalCount = updatedCountries.reduce((sum, country) => sum + country.count, 0);
          setCount(totalCount);
          
          // Update top five
          const sortedCountries = [...updatedCountries].sort((a, b) => b.count - a.count).slice(0, 5);
          setTopFive(sortedCountries);
        }
      }
    }, 30000);
    
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative inline-flex items-center">
      <span className="inline-block relative">
        {count.toLocaleString()}+
      </span>
      
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
            className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg p-4 z-20 min-w-[220px]"
          >
            <h3 className="font-semibold text-gray-900 mb-3">Top Visitor Countries</h3>
            {topFive.map((country, index) => (
              <div key={country.code} className="flex items-center justify-between py-1">
                <div className="flex items-center space-x-2">
                  <span className={`fi fi-${country.code} rounded-sm`}></span>
                  <span className="text-sm">{country.name}</span>
                </div>
                <span className="text-sm font-semibold">{country.count}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VisitorCounter;