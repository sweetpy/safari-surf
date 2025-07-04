import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, CheckCircle, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Coverage = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [regionsRef, regionsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [upcomingRef, upcomingInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const currentCoverage = [
    {
      region: 'Dar es Salaam',
      areas: ['Kinondoni', 'Ilala', 'Temeke', 'Ubungo', 'Kigamboni'],
      status: 'Full Coverage',
      customers: '25,000+',
      color: 'text-green-600'
    },
    {
      region: 'Arusha',
      areas: ['Arusha City', 'Meru', 'Karatu', 'Monduli'],
      status: 'Full Coverage',
      customers: '8,500+',
      color: 'text-green-600'
    },
    {
      region: 'Dodoma',
      areas: ['Dodoma City', 'Chamwino', 'Bahi'],
      status: 'Full Coverage',
      customers: '5,200+',
      color: 'text-green-600'
    },
    {
      region: 'Mwanza',
      areas: ['Mwanza City', 'Ilemela', 'Nyamagana'],
      status: 'Expanding',
      customers: '3,800+',
      color: 'text-orange-600'
    },
    {
      region: 'Zanzibar',
      areas: ['Stone Town', 'Ng\'ambo', 'Nungwi'],
      status: 'Expanding',
      customers: '2,100+',
      color: 'text-orange-600'
    },
    {
      region: 'Morogoro',
      areas: ['Morogoro City', 'Mvomero'],
      status: 'Expanding',
      customers: '1,900+',
      color: 'text-orange-600'
    }
  ];

  const upcomingAreas = [
    {
      region: 'Mbeya',
      timeline: 'Q2 2025',
      areas: ['Mbeya City', 'Chunya', 'Kyela']
    },
    {
      region: 'Tanga',
      timeline: 'Q3 2025',
      areas: ['Tanga City', 'Muheza', 'Korogwe']
    },
    {
      region: 'Iringa',
      timeline: 'Q4 2025',
      areas: ['Iringa City', 'Mufindi', 'Kilolo']
    },
    {
      region: 'Tabora',
      timeline: 'Q1 2026',
      areas: ['Tabora City', 'Nzega', 'Uyui']
    }
  ];

  const stats = [
    { number: '15+', label: 'Regions Covered' },
    { number: '120+', label: 'Cities & Towns' },
    { number: '50,000+', label: 'Connected Customers' },
    { number: '99.9%', label: 'Network Uptime' }
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="Safari Surf WiFi Coverage Map - Available Cities"
        description="Check if Safari Surf WiFi is available in your Tanzanian destination."
        url="https://safari.flit.tz/coverage"
      />
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/2376997/pexels-photo-2376997.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Network Coverage
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Expanding across Tanzania to bring high-speed WiFi to every community. 
              See where we're available and where we're heading next.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="py-20 bg-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-orange-100 text-lg">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Coverage */}
      <section ref={regionsRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={regionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Current Coverage Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're proud to serve customers across these regions with reliable, high-speed WiFi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentCoverage.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={regionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{region.region}</h3>
                    <div className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-sm font-semibold ${
                      region.status === 'Full Coverage' 
                        ? 'bg-green-100 text-green-800'
                        : 'bg-orange-100 text-orange-800'
                    }`}>
                      {region.status === 'Full Coverage' ? (
                        <CheckCircle className="h-4 w-4" />
                      ) : (
                        <Clock className="h-4 w-4" />
                      )}
                      <span>{region.status}</span>
                    </div>
                  </div>
                  <MapPin className={`h-8 w-8 ${region.color}`} />
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Covered Areas:</h4>
                  <div className="space-y-2">
                    {region.areas.map((area, areaIndex) => (
                      <div key={areaIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <div className="text-2xl font-bold text-orange-600">{region.customers}</div>
                  <div className="text-gray-600 text-sm">Connected Customers</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Coverage */}
      <section ref={upcomingRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={upcomingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're rapidly expanding to bring Safari Surf WiFi to more communities across Tanzania
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {upcomingAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={upcomingInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-orange-50 rounded-2xl p-8 text-center border-2 border-dashed border-orange-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-6">
                  <Clock className="h-8 w-8 text-orange-600" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{area.region}</h3>
                <div className="text-orange-600 font-semibold mb-4">{area.timeline}</div>
                
                <div className="space-y-2">
                  {area.areas.map((location, locationIndex) => (
                    <div key={locationIndex} className="text-gray-600 text-sm">
                      {location}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Map Placeholder */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Interactive Coverage Map
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check if Safari Surf WiFi is available in your area
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <div 
              className="h-96 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-xl flex items-center justify-center mb-8"
              style={{
                backgroundImage: 'url("https://images.pexels.com/photos/2376997/pexels-photo-2376997.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="bg-white/90 backdrop-blur-sm rounded-xl p-8">
                <MapPin className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Interactive Map Coming Soon
                </h3>
                <p className="text-gray-600 mb-6">
                  We're building an interactive map to help you check coverage in your exact location.
                </p>
                <Link
                  to="/contact"
                  className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors inline-flex items-center space-x-2"
                >
                  <span>Check Your Area</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Don't See Your Area?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We're constantly expanding! Contact us to express interest in your area and 
              we'll prioritize bringing Safari Surf WiFi to your community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <span>Request Coverage</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/255764928408"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Coverage;