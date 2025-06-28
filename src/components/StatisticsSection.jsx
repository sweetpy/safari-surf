import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, MapPin, Wifi, Award, TrendingUp, Gauge, Shield, Sparkles } from 'lucide-react';
import VisitorCounter from './VisitorCounter';
import CountryVisitorMap from './CountryVisitorMap';

const StatisticsSection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  
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
  
  return (
    <section ref={ref} className="py-10 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Customer Insights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join customers from around the globe who trust our WiFi solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm p-4 text-center flex flex-col items-center"
            >
              <div className={`h-10 w-10 mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
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
          className="bg-white rounded-xl shadow-sm p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Global Customer Base</h3>
            <span className="text-sm text-gray-500">Live Data</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { code: 'us', name: 'United States' },
              { code: 'gb', name: 'United Kingdom' },
              { code: 'de', name: 'Germany' },
              { code: 'ca', name: 'Canada' },
              { code: 'au', name: 'Australia' }
            ].map((country, index) => (
              <motion.div
                key={country.code}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg"
              >
                <span className={`fi fi-${country.code} rounded-sm`}></span>
                <div className="text-sm">{country.name}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatisticsSection;