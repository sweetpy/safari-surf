import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import CountUp from 'react-countup';

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

// Base number of customers to ensure consistency
const BASE_CUSTOMER_COUNT = 3247;

// Generates a unique customer ID
const generateCustomerId = () => {
  return 'c_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

// Simulates getting the customer's country
const getCustomerCountry = () => {
  const randomIndex = Math.floor(Math.random() * topCountries.length);
  return topCountries[randomIndex];
};

const VisitorCounter = ({ showDetails = false, showAnimation = true }) => {
  const [count, setCount] = useState(BASE_CUSTOMER_COUNT);
  const [topFive, setTopFive] = useState([]);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [showCountryPopup, setShowCountryPopup] = useState(false);
  const [showTopCountries, setShowTopCountries] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Initialize customer tracking
    const initCustomerCount = () => {
      // Check if this customer has been counted before
      const customerId = localStorage.getItem('customerId');
      let customerCountryData = localStorage.getItem('customerCountryData');
      let countries = [];
      
      if (customerCountryData) {
        countries = JSON.parse(customerCountryData);
      } else {
        // Start with random data rather than zero counts
        countries = topCountries.map(country => ({
          ...country, 
          count: Math.floor(Math.random() * 500) + 100 // Generate between 100-600 customers per country
        }));
        localStorage.setItem('customerCountryData', JSON.stringify(countries));
      }
      
      // If this is a new customer
      if (!customerId) {
        // Generate and store a unique ID for this customer
        const newCustomerId = generateCustomerId();
        localStorage.setItem('customerId', newCustomerId);
        
        // Simulate getting customer's country
        const customerCountry = getCustomerCountry();
        
        // Update country count
        const updatedCountries = countries.map(country => {
          if (country.code === customerCountry.code) {
            return { ...country, count: country.count + 1 };
          }
          return country;
        });
        
        // Show country popup briefly
        setCurrentCountry(customerCountry);
        setShowCountryPopup(true);
        setTimeout(() => setShowCountryPopup(false), 5000);
        
        // Update localStorage
        localStorage.setItem('customerCountryData', JSON.stringify(updatedCountries));
        
        // Calculate total count to ensure it's at least BASE_CUSTOMER_COUNT
        let totalCount = updatedCountries.reduce((sum, country) => sum + country.count, 0);
        if (totalCount < BASE_CUSTOMER_COUNT) {
          // Distribute additional customers to match BASE_CUSTOMER_COUNT
          const remaining = BASE_CUSTOMER_COUNT - totalCount;
          const updatedWithBase = updatedCountries.map((country, index) => {
            // Add extra counts proportionally
            const extra = Math.floor(remaining * (country.count / totalCount));
            return { ...country, count: country.count + extra };
          });
          
          totalCount = updatedWithBase.reduce((sum, country) => sum + country.count, 0);
          
          // If there's still a difference due to rounding, add to the first country
          if (totalCount < BASE_CUSTOMER_COUNT && updatedWithBase.length > 0) {
            updatedWithBase[0].count += (BASE_CUSTOMER_COUNT - totalCount);
          }
          
          localStorage.setItem('customerCountryData', JSON.stringify(updatedWithBase));
          setCount(BASE_CUSTOMER_COUNT);
          
          // Update top five countries
          const sortedCountries = [...updatedWithBase].sort((a, b) => b.count - a.count).slice(0, 5);
          setTopFive(sortedCountries);
        } else {
          setCount(totalCount);
          
          // Update top five countries
          const sortedCountries = [...updatedCountries].sort((a, b) => b.count - a.count).slice(0, 5);
          setTopFive(sortedCountries);
        }
      } else {
        // Just load existing data for returning customers
        let totalCount = countries.reduce((sum, country) => sum + country.count, 0);
        
        // Ensure count is at least the base amount
        if (totalCount < BASE_CUSTOMER_COUNT) {
          totalCount = BASE_CUSTOMER_COUNT;
        }
        
        setCount(totalCount);
        
        // Update top five countries
        const sortedCountries = [...countries].sort((a, b) => b.count - a.count).slice(0, 5);
        setTopFive(sortedCountries);
      }
      
      setIsInitialized(true);
    };
    
    initCustomerCount();
    
    // Simulate occasional new customers
    const intervalId = setInterval(() => {
      const shouldIncrease = Math.random() > 0.8; // 20% chance of increasing
      
      if (shouldIncrease) {
        // Get country data
        const customerCountryData = localStorage.getItem('customerCountryData');
        if (customerCountryData) {
          const countries = JSON.parse(customerCountryData);
          
          // Simulate new customer
          const customerCountry = getCustomerCountry();
          
          // Update country count
          const updatedCountries = countries.map(country => {
            if (country.code === customerCountry.code) {
              return { ...country, count: country.count + 1 };
            }
            return country;
          });
          
          // Update localStorage
          localStorage.setItem('customerCountryData', JSON.stringify(updatedCountries));
          
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

  if (!isInitialized) {
    return <span className="inline-block">{BASE_CUSTOMER_COUNT.toLocaleString()}+</span>;
  }

  return (
    <div className="relative inline-flex items-center">
      <span className="inline-block relative">
        {showAnimation ? (
          <CountUp end={count} duration={2.5} separator="," />
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