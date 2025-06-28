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
      label: 'Satisfied Customers',
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
  
  const metrics = [
    {
      icon: TrendingUp,
      label: 'Growth Rate',
      value: '127%',
      subtext: 'Year over year'
    },
    {
      icon: Gauge,
      label: 'Network Uptime',
      value: '99.9%',
      subtext: 'Consistently reliable'
    },
    {
      icon: Shield,
      label: 'Secure Connections',
      value: '100%',
      subtext: 'Enterprise encryption'
    },
    {
      icon: Sparkles,
      label: 'Satisfaction Rate',
      value: '98%',
      subtext: 'From customer reviews'
    }
  ];
  
  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Performance Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time metrics showing why we're Tanzania's most trusted WiFi provider
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 text-center"
            >
              <div className={`h-14 w-14 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                <stat.icon className="h-7 w-7 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <CountryVisitorMap />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-12 w-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <metric.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
                    <div className="text-sm text-gray-600">{metric.label}</div>
                    <div className="text-xs text-gray-500">{metric.subtext}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;