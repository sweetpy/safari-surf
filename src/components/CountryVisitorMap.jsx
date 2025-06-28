import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, Users } from 'lucide-react';

const CountryVisitorMap = () => {
  const [countryData, setCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Get visitor country data from localStorage
    const loadCountryData = () => {
      const customerCountryData = localStorage.getItem('customerCountryData');
      if (customerCountryData) {
        const parsedData = JSON.parse(customerCountryData);
        // Sort by count (highest first)
        const sortedData = [...parsedData].sort((a, b) => b.count - a.count);
        setCountryData(sortedData);
      } else {
        // Initialize with empty counts if no data exists
        setCountryData([
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
        ]);
      }
      setIsLoading(false);
    };
    
    loadCountryData();
    
    // Update data occasionally to reflect any changes
    const intervalId = setInterval(loadCountryData, 60000);
    return () => clearInterval(intervalId);
  }, []);
  
  // Calculate total customers
  const totalCustomers = countryData.reduce((acc, country) => acc + country.count, 0);
  
  // Only show top 10 countries
  const topCountries = countryData.slice(0, 10);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-sm p-4"
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-bold text-gray-900 flex items-center space-x-2">
          <Globe className="h-4 w-4 text-orange-500" />
          <span>Top Customer Countries</span>
        </h3>
        <div className="flex items-center space-x-2">
          <div className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full text-xs font-medium flex items-center">
            <Users className="h-3 w-3 mr-1" />
            <span>{totalCustomers} total</span>
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        {topCountries.slice(0, 5).map((country, index) => (
          <div key={country.code} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className={`fi fi-${country.code} rounded-sm`}></span>
              <span className="text-sm text-gray-900">{country.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 bg-orange-100 rounded-full w-24">
                <div className="h-full bg-orange-500 rounded-full" style={{ width: `${Math.min(100, country.count * 10)}%` }}></div>
              </div>
              <span className="font-medium text-sm text-gray-900">{country.count}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CountryVisitorMap;