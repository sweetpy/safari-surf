import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MapPin, Wifi, Award, Globe, TrendingUp } from 'lucide-react';
import VisitorCounter from './VisitorCounter';

const StatisticsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showDetails, setShowDetails] = useState(false);
  const [countryData, setCountryData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Load customer country data
    const loadCountryData = () => {
      const customerCountryData = localStorage.getItem('customerCountryData');
      if (customerCountryData) {
        const parsedData = JSON.parse(customerCountryData);
        
        // Calculate total count
        const total = parsedData.reduce((sum, country) => sum + country.count, 0);
        setTotalCount(total);
        
        // Calculate percentages and sort by count
        const dataWithPercentages = parsedData.map(country => ({
          ...country,
          percentage: ((country.count / total) * 100).toFixed(1) + '%'
        })).sort((a, b) => b.count - a.count);
        
        setCountryData(dataWithPercentages);
      } else {
        // Default data with percentages if no data exists
        const defaultData = [
          { code: 'us', name: 'United States', count: 1250, percentage: '25.0%' },
          { code: 'gb', name: 'United Kingdom', count: 875, percentage: '17.5%' },
          { code: 'de', name: 'Germany', count: 625, percentage: '12.5%' },
          { code: 'ca', name: 'Canada', count: 500, percentage: '10.0%' },
          { code: 'au', name: 'Australia', count: 375, percentage: '7.5%' }
        ];
        
        setCountryData(defaultData);
        setTotalCount(defaultData.reduce((sum, country) => sum + country.count, 0));
      }
      setIsLoading(false);
    };
    
    loadCountryData();
    
    // Update data occasionally
    const intervalId = setInterval(loadCountryData, 60000);
    return () => clearInterval(intervalId);
  }, []);
  
  const stats = [
    {
      icon: Users,
      label: 'Happy Customers',
      value: <VisitorCounter showDetails={false} />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: MapPin,
      label: 'Cities Covered',
      value: '15+',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Wifi,
      label: 'Average Speed',
      value: '100 Mbps',
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: Award,
      label: 'Years of Service',
      value: '5+',
      color: 'from-amber-500 to-yellow-500'
    }
  ];
  
  // Get top 5 countries
  const topCountries = countryData.slice(0, 5);
  
  return (
    <section ref={ref} className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Real-Time Service Metrics
          </h2>
          <p className="text-center text-gray-600 mt-2">Delivering reliable connectivity across Tanzania</p>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-4 text-center hover:shadow-md transition-shadow"
            >
              <div className={`h-10 w-10 mb-3 mx-auto rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">
                {typeof stat.value === 'object' ? stat.value : stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm p-4 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center">
              <Globe className="h-5 w-5 text-orange-500 mr-2" />
              <span>Our Global Customer Base</span>
            </h3>
            <button 
              onClick={() => setShowDetails(!showDetails)} 
              className="text-sm text-orange-600 font-medium hover:text-orange-700 bg-orange-50 px-3 py-1 rounded-full hover:bg-orange-100 transition-colors"
            >
              {showDetails ? 'Show Less' : 'Show Details'}
            </button>
          </div>
          
          {!showDetails ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {topCountries.map((country, index) => (
                <motion.div
                  key={country.code}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="flex items-center justify-between space-x-2 bg-gray-50 p-3 rounded-lg"
                >
                  <div className="flex items-center space-x-2">
                    <span className={`fi fi-${country.code} rounded-sm`}></span>
                    <div className="text-sm font-medium text-gray-900">{country.name}</div>
                  </div>
                  <div className="text-xs font-semibold text-orange-600">{country.percentage}</div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-4">
                {topCountries.map((country, index) => (
                  <motion.div
                    key={country.code}
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    className="flex items-center justify-between space-x-2 bg-gray-50 p-3 rounded-lg"
                  >
                    <div className="flex items-center space-x-2">
                      <span className={`fi fi-${country.code} rounded-sm`}></span>
                      <div className="text-sm font-medium text-gray-900">{country.name}</div>
                    </div>
                    <div className="text-xs font-semibold text-orange-600">{country.percentage}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="text-sm font-semibold text-gray-900 mb-3">Customer Demographics</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-gray-600 mb-1">Primary Use Case</div>
                    <div className="font-semibold">Tourist Travel (68%)</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-gray-600 mb-1">Average Rental Period</div>
                    <div className="font-semibold">7.5 Days</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="text-gray-600 mb-1">Customer Satisfaction</div>
                    <div className="font-semibold">4.9/5.0 Rating</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="mt-4 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
              className="inline-flex items-center px-3 py-1 bg-orange-100 text-orange-600 rounded-full text-sm"
            >
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>Growing customer base across 40+ countries</span>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Performance Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-xl shadow-sm p-4"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center mb-2 md:mb-0">
              <Wifi className="h-5 w-5 text-orange-500 mr-2" />
              <span>Network Performance</span>
            </h3>
            <div className="flex items-center space-x-2">
              <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                <span>99.9% Uptime</span>
              </div>
              <div className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                <span>Last updated: Today</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Dar es Salaam</div>
                <div className="flex items-center">
                  <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{width: '98%'}}></div>
                  </div>
                  <span className="text-xs font-semibold ml-2">98%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Arusha</div>
                <div className="flex items-center">
                  <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{width: '97%'}}></div>
                  </div>
                  <span className="text-xs font-semibold ml-2">97%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Zanzibar</div>
                <div className="flex items-center">
                  <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{width: '99%'}}></div>
                  </div>
                  <span className="text-xs font-semibold ml-2">99%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Mwanza</div>
                <div className="flex items-center">
                  <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <span className="text-xs font-semibold ml-2">95%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Dodoma</div>
                <div className="flex items-center">
                  <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{width: '96%'}}></div>
                  </div>
                  <span className="text-xs font-semibold ml-2">96%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Serengeti</div>
                <div className="flex items-center">
                  <div className="h-2 w-32 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{width: '88%'}}></div>
                  </div>
                  <span className="text-xs font-semibold ml-2">88%</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;