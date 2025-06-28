import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import CountUp from 'react-countup';

// Function to get stored data with a default value
const getStoredData = (key, defaultValue) => {
  if (typeof window === 'undefined') return defaultValue;
  const stored = localStorage.getItem(key);
  return stored ? JSON.parse(stored) : defaultValue;
};

// Get today's date in YYYY-MM-DD format
const getTodayKey = () => {
  const date = new Date();
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
};

const VisitorCounter = ({ showDetails = false, showAnimation = true }) => {
  const [count, setCount] = useState(0);
  const [topFive, setTopFive] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [showCountryPopup, setShowCountryPopup] = useState(false);
  const [showTopCountries, setShowTopCountries] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize with real-looking data
    const initializeCounter = () => {
      // Generate base count (this simulates an actual customer base)
      // Range between 4,500 and 6,000 as a base
      const baseCount = getStoredData('baseCustomerCount', Math.floor(Math.random() * 1500) + 4500);
      localStorage.setItem('baseCustomerCount', JSON.stringify(baseCount));
      
      // Get or initialize top countries data
      const defaultCountries = [
        { code: 'us', name: 'United States', count: Math.floor(baseCount * 0.18) },
        { code: 'gb', name: 'United Kingdom', count: Math.floor(baseCount * 0.14) },
        { code: 'de', name: 'Germany', count: Math.floor(baseCount * 0.12) },
        { code: 'fr', name: 'France', count: Math.floor(baseCount * 0.09) },
        { code: 'ca', name: 'Canada', count: Math.floor(baseCount * 0.07) },
        { code: 'au', name: 'Australia', count: Math.floor(baseCount * 0.06) },
        { code: 'nl', name: 'Netherlands', count: Math.floor(baseCount * 0.05) },
        { code: 'za', name: 'South Africa', count: Math.floor(baseCount * 0.04) },
        { code: 'se', name: 'Sweden', count: Math.floor(baseCount * 0.03) },
        { code: 'it', name: 'Italy', count: Math.floor(baseCount * 0.03) },
        { code: 'tz', name: 'Tanzania', count: Math.floor(baseCount * 0.02) },
        { code: 'ke', name: 'Kenya', count: Math.floor(baseCount * 0.02) }
      ];
      
      const countries = getStoredData('customerCountryData', defaultCountries);
      
      // Check if this is a new visitor session
      const visitorId = localStorage.getItem('visitorId');
      const todayKey = getTodayKey();
      const todayVisits = getStoredData(`visits_${todayKey}`, 0);
      
      if (!visitorId) {
        // Generate visitor ID and increment counters for new visitors
        const newVisitorId = 'v_' + Math.random().toString(36).substring(2);
        localStorage.setItem('visitorId', newVisitorId);
        
        // Increment today's visits
        localStorage.setItem(`visits_${todayKey}`, JSON.stringify(todayVisits + 1));
        
        // Select a random country for this visitor
        const randomIndex = Math.floor(Math.random() * countries.length);
        const randomCountry = countries[randomIndex];
        
        // Update the country count
        const updatedCountries = countries.map(country => 
          country.code === randomCountry.code 
            ? { ...country, count: country.count + 1 } 
            : country
        );
        
        localStorage.setItem('customerCountryData', JSON.stringify(updatedCountries));
        
        // Show a popup with the country
        setCurrentCountry(randomCountry);
        setShowCountryPopup(true);
        setTimeout(() => setShowCountryPopup(false), 5000);
        
        // Set the counts
        setCount(updatedCountries.reduce((sum, country) => sum + country.count, 0));
        setTopFive([...updatedCountries].sort((a, b) => b.count - a.count).slice(0, 5));
      } else {
        // Return user, just load existing counts
        setCount(countries.reduce((sum, country) => sum + country.count, 0));
        setTopFive([...countries].sort((a, b) => b.count - a.count).slice(0, 5));
      }
      
      setIsInitialized(true);
    };
    
    initializeCounter();
    
    // Set up occasional increment simulation
    const intervalId = setInterval(() => {
      // Only increment occasionally (about 30-40% of the time)
      if (Math.random() > 0.65) {
        const countries = getStoredData('customerCountryData', []);
        if (countries.length > 0) {
          // Select a random country weighted by existing popularity
          const totalWeight = countries.reduce((sum, country) => sum + country.count, 0);
          let randomValue = Math.random() * totalWeight;
          let selectedCountry = countries[0];
          
          for (const country of countries) {
            randomValue -= country.count;
            if (randomValue <= 0) {
              selectedCountry = country;
              break;
            }
          }
          
          // Update country count
          const updatedCountries = countries.map(country => 
            country.code === selectedCountry.code 
              ? { ...country, count: country.count + 1 } 
              : country
          );
          
          localStorage.setItem('customerCountryData', JSON.stringify(updatedCountries));
          
          // Update state
          const newCount = updatedCountries.reduce((sum, country) => sum + country.count, 0);
          setCount(newCount);
          
          // Update top five
          const newTopFive = [...updatedCountries].sort((a, b) => b.count - a.count).slice(0, 5);
          setTopFive(newTopFive);
          
          // Small chance to show a country popup for returning users
          if (Math.random() > 0.9) {
            setCurrentCountry(selectedCountry);
            setShowCountryPopup(true);
            setTimeout(() => setShowCountryPopup(false), 5000);
          }
        }
      }
    }, 10000 + Math.random() * 20000); // Random interval between 10-30 seconds
    
    return () => clearInterval(intervalId);
  }, []);

  if (!isInitialized) {
    return <span className="inline-block">5,400+</span>;
  }

  return (
    <div className="relative inline-flex items-center">
      <span className="inline-block relative">
        {showAnimation ? (
          <CountUp end={count} duration={2} separator="," />
        ) : (
          <span>{count.toLocaleString()}</span>
        )}
        +
      </span>
      
      {showDetails && (
        <button 
          onClick={() => setShowTopCountries(!showTopCountries)}
          className="ml-2 p-1 bg-orange-100 rounded-full text-orange-600 hover:bg-orange-200 transition-colors"
          aria-label="Show customer details"
        >
          <Globe className="h-4 w-4" />
        </button>
      )}
      
      {/* Country popup animation for new customers */}
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
              <span>New customer from {currentCountry.name}!</span>
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
            <h3 className="font-semibold text-gray-900 mb-3">Top Customer Countries</h3>
            {topFive.map((country, index) => (
              <div key={country.code} className="flex items-center justify-between py-1">
                <div className="flex items-center space-x-2">
                  <span className={`fi fi-${country.code} rounded-sm`}></span>
                  <span className="text-sm">{country.name}</span>
                </div>
                <span className="text-sm font-semibold">{country.count.toLocaleString()}</span>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VisitorCounter;