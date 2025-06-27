import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Wifi, 
  Star, 
  Shield, 
  Zap, 
  Users, 
  MapPin,
  Calendar,
  Award,
  ArrowRight,
  Play,
  Download,
  Phone,
  CheckCircle,
  Clock,
  DollarSign
} from 'lucide-react';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true });

  const wifiPlans = [
    {
      name: 'Daily Rental',
      speed: '50 Mbps',
      price: 'TSh 15,000',
      period: 'per day',
      features: ['Unlimited data', 'Portable device', 'Setup included', 'Basic support'],
      popular: false
    },
    {
      name: 'Weekly Rental',
      speed: '100 Mbps',
      price: 'TSh 75,000',
      period: 'per week',
      features: ['Unlimited data', 'Premium device', 'Setup & training', 'Priority support', 'Multiple connections'],
      popular: true
    },
    {
      name: 'Monthly Rental',
      speed: '200 Mbps',
      price: 'TSh 250,000',
      period: 'per month',
      features: ['Unlimited data', 'Professional setup', 'Dedicated support', 'Business grade equipment', 'Backup device'],
      popular: false
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get connected within minutes of rental with our plug-and-play devices'
    },
    {
      icon: Shield,
      title: 'Secure Connection',
      description: 'Enterprise-grade security with encrypted connections and firewall protection'
    },
    {
      icon: Users,
      title: 'Multiple Devices',
      description: 'Connect all your devices - phones, laptops, tablets simultaneously'
    },
    {
      icon: MapPin,
      title: 'Wide Coverage',
      description: 'Available across major cities in Tanzania with expanding coverage'
    }
  ];

  const testimonials = [
    {
      name: 'David Mwangi',
      role: 'Business Owner',
      rating: 5,
      text: 'Perfect for my pop-up shop! Reliable internet whenever I need it. Safari Surf WiFi made my business mobile.',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Sarah Hassan',
      role: 'Digital Nomad',
      rating: 5,
      text: 'Amazing service! I can work from anywhere in Tanzania. The internet speed is consistently fast and reliable.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'John Safari',
      role: 'Tourist',
      rating: 5,
      text: 'Stayed connected during my entire Tanzania trip. Great for sharing photos and staying in touch with family.',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '15+', label: 'Cities Covered' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  const travelDestinations = [
    {
      name: 'Serengeti Safari',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Stay connected during your wildlife adventure'
    },
    {
      name: 'Zanzibar Beach',
      image: 'https://images.pexels.com/photos/3155830/pexels-photo-3155830.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Share your beach moments instantly'
    },
    {
      name: 'Kilimanjaro Trek',
      image: 'https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      description: 'Document your climbing journey'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Safari Surf WiFi - Rent WiFi On The Spot | Portable Internet Rental Tanzania</title>
        <meta name="description" content="Rent portable WiFi devices instantly in Tanzania. High-speed internet rental for tourists, business travelers, and digital nomads. Get connected anywhere, anytime." />
        <meta name="keywords" content="WiFi rental Tanzania, portable WiFi, internet rental, mobile WiFi, tourist WiFi, business internet, digital nomad WiFi" />
        <link rel="canonical" href="https://tanzaniatravelhub.com" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Rent WiFi
                <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  On The Spot
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Instant portable WiFi rental across Tanzania. High-speed internet 
                for tourists, business travelers, and digital nomads. Get connected anywhere, anytime.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center space-x-2 group"
                >
                  <Wifi className="h-5 w-5" />
                  <span>Rent WiFi Now</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>

              {/* Hero Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-orange-400">{stat.number}</div>
                    <div className="text-gray-200 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* WiFi Rental Plans */}
        <section ref={servicesRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                WiFi Rental Plans
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Flexible rental plans to suit your needs - from daily tourists to monthly business stays
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {wifiPlans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                      <Star className="inline h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="text-orange-600 font-semibold mb-2">{plan.speed}</div>
                      <div className="text-4xl font-bold text-gray-900">{plan.price}</div>
                      <div className="text-gray-600">{plan.period}</div>
                    </div>
                    
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className="w-full bg-orange-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Rent Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section ref={featuresRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Safari Surf WiFi?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We make staying connected simple, reliable, and affordable across Tanzania
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex p-4 rounded-full bg-orange-100 text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Connection Section */}
        <section className="py-20 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Perfect for Tanzania Travelers
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore Tanzania's amazing destinations while staying connected with reliable WiFi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {travelDestinations.map((destination, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{destination.name}</h3>
                    <p className="text-gray-600">{destination.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link
                to="/travel"
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                <span>Explore Tanzania Travel</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section ref={testimonialsRef} className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real experiences from customers who stayed connected with Safari Surf WiFi
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 p-8 rounded-2xl"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Get Connected?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Rent a WiFi device today and stay connected wherever you go in Tanzania. 
                Quick setup, reliable connection, flexible plans.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <Wifi className="h-5 w-5" />
                  <span>Rent WiFi Now</span>
                </Link>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp Support</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;