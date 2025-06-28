import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, Users } from 'lucide-react';

const CountryVisitorMap = () => {
  const [countryData, setCountryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Get visitor country data from localStorage
    const loadCountryData = () => {
      const visitorCountryData = localStorage.getItem('visitorCountryData');
      if (visitorCountryData) {
        const parsedData = JSON.parse(visitorCountryData);
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
  
  // Calculate total visitors
  const totalVisitors = countryData.reduce((acc, country) => acc + country.count, 0);
  
  // Only show top 10 countries
  const topCountries = countryData.slice(0, 10);
  
  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-lg p-6 h-full"
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
          <Globe className="h-5 w-5 text-orange-500" />
          <span>Global Visitor Map</span>
        </h3>
        <div className="flex items-center space-x-2">
          <div className="px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm font-medium flex items-center">
            <Users className="h-4 w-4 mr-1" />
            <span>{totalVisitors} visitors</span>
          </div>
          <div className="px-2 py-1 bg-green-100 text-green-600 rounded-full text-xs font-medium flex items-center">
            <TrendingUp className="h-3 w-3 mr-1" />
            <span>Live</span>
          </div>
        </div>
      </div>
      
      {/* Simple visual map representation */}
      <div className="relative h-48 bg-gray-100 rounded-lg mb-4 overflow-hidden">
        <div 
          className="w-full h-full bg-contain bg-no-repeat bg-center opacity-20"
          style={{ backgroundImage: 'url("https://images.pexels.com/photos/269724/pexels-photo-269724.jpeg?auto=compress&cs=tinysrgb&w=1280")' }}
        >
        </div>
        
        {/* Country pins on the map */}
        {topCountries.map((country, index) => {
          // Simulate positions on the map - in production these would be real coordinates
          const top = 15 + Math.random() * 70; // Random vertical position
          const left = 10 + Math.random() * 80; // Random horizontal position
          const size = Math.max(16, Math.min(32, country.count * 4)); // Size based on count
          
          return (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="absolute rounded-full bg-orange-500/40 flex items-center justify-center"
              style={{ 
                top: `${top}%`, 
                left: `${left}%`,
                width: `${size}px`,
                height: `${size}px`,
              }}
            >
              <div className={`fi fi-${country.code} rounded-sm`}></div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Top countries table */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm font-medium text-gray-500 pb-2 border-b">
          <span>Country</span>
          <span>Visitors</span>
        </div>
        
        {topCountries.slice(0, 5).map((country, index) => (
          <div key={country.code} className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-gray-500 text-xs">{index + 1}</span>
              <span className={`fi fi-${country.code} rounded-sm`}></span>
              <span className="text-gray-900">{country.name}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="h-2 bg-orange-100 rounded-full" style={{ width: `${Math.max(20, country.count * 5)}px` }}>
                <div className="h-full bg-orange-500 rounded-full" style={{ width: `${Math.min(100, country.count * 10)}%` }}></div>
              </div>
              <span className="font-semibold text-gray-900">{country.count}</span>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 pt-4 border-t text-xs text-gray-500 flex items-center justify-between">
        <span className="italic">Data refreshes automatically</span>
        <span className="text-orange-600 font-medium">{new Date().toLocaleDateString()}</span>
      </div>
    </motion.div>
  );
};

export default CountryVisitorMap;