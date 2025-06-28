import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MapPin, Wifi, Award, Globe, TrendingUp } from 'lucide-react';
import VisitorCounter from './VisitorCounter';

const StatisticsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [showCountries, setShowCountries] = useState(false);
  
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
  
  const topCountries = [
    { code: 'us', name: 'United States', percentage: '21%' },
    { code: 'gb', name: 'United Kingdom', percentage: '17%' },
    { code: 'de', name: 'Germany', percentage: '15%' },
    { code: 'ca', name: 'Canada', percentage: '12%' },
    { code: 'au', name: 'Australia', percentage: '9%' },
    { code: 'fr', name: 'France', percentage: '7%' },
    { code: 'se', name: 'Sweden', percentage: '6%' },
    { code: 'nl', name: 'Netherlands', percentage: '5%' },
    { code: 'za', name: 'South Africa', percentage: '4%' },
    { code: 'in', name: 'India', percentage: '4%' }
  ];
  
  return (
    <section ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Customer Insights
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-4 text-center"
            >
              <div className={`h-10 w-10 mb-3 mx-auto rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm p-4"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900 flex items-center">
              <Globe className="h-5 w-5 text-orange-500 mr-2" />
              <span>Our Global Customers</span>
            </h3>
            <button 
              onClick={() => setShowCountries(!showCountries)} 
              className="text-sm text-orange-600 font-medium hover:text-orange-700"
            >
              {showCountries ? 'Show Less' : 'Show All'}
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {topCountries.slice(0, showCountries ? 10 : 5).map((country, index) => (
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
      </div>
    </section>
  );
};

export default StatisticsSection;