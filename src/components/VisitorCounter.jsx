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
    // Initialize and track visitors
    const initializeCounter = () => {
      try {
        // Get existing counter data or initialize with zeros if not present
        let customerCount = getStoredData('customerCount', 0);
        
        // Get or initialize country data
        const countriesData = getStoredData('customerCountryData', [
          { code: 'us', name: 'United States', count: 0 },
          { code: 'gb', name: 'United Kingdom', count: 0 },
          { code: 'de', name: 'Germany', count: 0 },
          { code: 'fr', name: 'France', count: 0 },
          { code: 'ca', name: 'Canada', count: 0 },
          { code: 'au', name: 'Australia', count: 0 },
          { code: 'nl', name: 'Netherlands', count: 0 },
          { code: 'za', name: 'South Africa', count: 0 },
          { code: 'se', name: 'Sweden', count: 0 },
          { code: 'it', name: 'Italy', count: 0 },
          { code: 'tz', name: 'Tanzania', count: 0 },
          { code: 'ke', name: 'Kenya', count: 0 }
        ]);
        
        // Check if this is a new visitor session
        const sessionId = sessionStorage.getItem('visitorSessionId');
        const visitorId = localStorage.getItem('visitorId');
        const lastVisitDate = localStorage.getItem('lastVisitDate');
        const todayKey = getTodayKey();
        
        console.log("Visitor counter debug:", { 
          sessionId, 
          visitorId, 
          lastVisitDate, 
          todayKey, 
          customerCount 
        });
        
        // If no session ID exists, this is a new session
        if (!sessionId) {
          // Generate a session ID
          const newSessionId = 'session_' + Math.random().toString(36).substring(2);
          sessionStorage.setItem('visitorSessionId', newSessionId);
          
          // If no visitor ID exists or it's a different day, count as new visitor
          const isNewVisitor = !visitorId || lastVisitDate !== todayKey;
          
          if (isNewVisitor) {
            // Generate or update visitor ID
            const newVisitorId = 'v_' + Math.random().toString(36).substring(2);
            localStorage.setItem('visitorId', newVisitorId);
            localStorage.setItem('lastVisitDate', todayKey);
            
            // Increment customer count - add 1 by default
            customerCount = customerCount + 1;
            localStorage.setItem('customerCount', customerCount.toString());
            
            // Select a random country for this visitor
            const randomIndex = Math.floor(Math.random() * countriesData.length);
            const randomCountry = countriesData[randomIndex];
            
            // Update the country count
            const updatedCountries = countriesData.map(country => 
              country.code === randomCountry.code 
                ? { ...country, count: country.count + 1 } 
                : country
            );
            
            localStorage.setItem('customerCountryData', JSON.stringify(updatedCountries));
            
            // Show a popup with the country
            setCurrentCountry(randomCountry);
            setShowCountryPopup(true);
            setTimeout(() => setShowCountryPopup(false), 5000);
            
            console.log("New visitor detected, incremented count to", customerCount);
            
            // Set the counts
            setCount(customerCount);
            setTopFive([...updatedCountries].sort((a, b) => b.count - a.count).slice(0, 5));
          } else {
            // Return visitor, just load existing counts
            setCount(customerCount);
            setTopFive([...countriesData].sort((a, b) => b.count - a.count).slice(0, 5));
            console.log("Return visitor detected, current count:", customerCount);
          }
        } else {
          // Existing session, just load current counts
          setCount(customerCount);
          setTopFive([...countriesData].sort((a, b) => b.count - a.count).slice(0, 5));
          console.log("Existing session detected, current count:", customerCount);
        }
      } catch (error) {
        console.error("Error initializing visitor counter:", error);
        // Fallback to zero count on error
        setCount(0);
      }
      
      setIsInitialized(true);
    };
    
    initializeCounter();
    
    // Set up occasional increment simulation
    const intervalId = setInterval(() => {
      try {
        // Increment occasionally (about 40% of the time)
        if (Math.random() < 0.4) {
          let customerCount = parseInt(localStorage.getItem('customerCount') || '0', 10);
          let countriesData = getStoredData('customerCountryData', []);
          
          if (countriesData.length > 0) {
            // Increment customer count
            customerCount += 1;
            localStorage.setItem('customerCount', customerCount.toString());
            
            // Select a random country weighted by existing popularity
            const totalWeight = countriesData.reduce((sum, country) => sum + (country.count || 0) + 1, 0);
            let randomValue = Math.random() * totalWeight;
            let selectedCountry = countriesData[0];
            
            for (const country of countriesData) {
              randomValue -= (country.count || 0) + 1;
              if (randomValue <= 0) {
                selectedCountry = country;
                break;
              }
            }
            
            // Update country count
            const updatedCountries = countriesData.map(country => 
              country.code === selectedCountry.code 
                ? { ...country, count: (country.count || 0) + 1 } 
                : country
            );
            
            localStorage.setItem('customerCountryData', JSON.stringify(updatedCountries));
            
            // Update state
            setCount(customerCount);
            
            // Update top five
            const newTopFive = [...updatedCountries].sort((a, b) => b.count - a.count).slice(0, 5);
            setTopFive(newTopFive);
            
            // Small chance to show a country popup
            if (Math.random() > 0.85) {
              setCurrentCountry(selectedCountry);
              setShowCountryPopup(true);
              setTimeout(() => setShowCountryPopup(false), 5000);
            }
            
            console.log("Auto-incremented count to", customerCount);
          }
        }
      } catch (error) {
        console.error("Error in auto-increment:", error);
      }
    }, 15000 + Math.random() * 10000); // Random interval between 15-25 seconds
    
    return () => clearInterval(intervalId);
  }, []);

  if (!isInitialized) {
    return <span className="inline-block">0</span>;
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