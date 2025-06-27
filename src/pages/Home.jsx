import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Wifi, 
  Zap, 
  Shield, 
  MapPin,
  ArrowRight,
  Phone,
  CheckCircle,
  Clock,
  Users,
  Star
} from 'lucide-react';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true });

  const plans = [
    {
      name: 'Daily',
      price: '15,000',
      period: 'per day',
      speed: '50 Mbps',
      features: ['Unlimited data', 'Instant setup', 'Device included'],
      popular: false
    },
    {
      name: 'Weekly',
      price: '75,000',
      period: 'per week',
      speed: '100 Mbps',
      features: ['Unlimited data', 'Priority support', 'Multiple devices', 'Free delivery'],
      popular: true
    },
    {
      name: 'Monthly',
      price: '250,000',
      period: 'per month',
      speed: '200 Mbps',
      features: ['Unlimited data', '24/7 support', 'Premium device', 'Backup included'],
      popular: false
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get connected in minutes'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security'
    },
    {
      icon: MapPin,
      title: 'Wide Coverage',
      description: 'Available across Tanzania'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Hassan',
      role: 'Digital Nomad',
      text: 'Perfect for remote work. Fast, reliable internet everywhere I go in Tanzania.',
      rating: 5
    },
    {
      name: 'David Mwangi',
      role: 'Business Owner',
      text: 'Game changer for my business. Reliable WiFi whenever I need it.',
      rating: 5
    },
    {
      name: 'John Safari',
      role: 'Tourist',
      text: 'Stayed connected throughout my Tanzania trip. Excellent service!',
      rating: 5
    }
  ];

  const stats = [
    { number: '3,000+', label: 'Happy Customers' },
    { number: '15+', label: 'Cities' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <>
      <Helmet>
        <title>Safari Surf WiFi - Rent WiFi On The Spot | Tanzania's #1 WiFi Rental</title>
        <meta name="description" content="Rent portable WiFi devices instantly in Tanzania. High-speed internet rental for tourists, business travelers, and digital nomads. Get connected anywhere, anytime." />
        <meta name="keywords" content="WiFi rental Tanzania, portable WiFi, internet rental, mobile WiFi" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <h1 className="text-6xl md:text-8xl font-bold text-gray-900 leading-tight">
                  Rent WiFi
                  <span className="block text-orange-500">On The Spot</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
                  Instant portable WiFi rental across Tanzania. 
                  Get connected anywhere, anytime.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Wifi className="h-5 w-5" />
                  <span>Rent WiFi Now</span>
                </Link>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 text-gray-700 hover:border-orange-500 hover:text-orange-500 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto pt-12">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-gray-900">{stat.number}</div>
                    <div className="text-gray-600 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Plans Section */}
        <section ref={servicesRef} className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={servicesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Simple Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Flexible rental plans for every need
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-white border-2 rounded-3xl p-8 transition-all hover:shadow-xl ${
                    plan.popular 
                      ? 'border-orange-500 scale-105 shadow-lg' 
                      : 'border-gray-200 hover:border-orange-300'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                    <div className="space-y-1">
                      <div className="text-4xl font-bold text-gray-900">
                        TSh {plan.price}
                      </div>
                      <div className="text-gray-600">{plan.period}</div>
                      <div className="text-orange-600 font-semibold">{plan.speed}</div>
                    </div>
                    
                    <ul className="space-y-3 py-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/contact"
                      className={`w-full py-3 px-6 rounded-full font-semibold transition-colors inline-block ${
                        plan.popular
                          ? 'bg-orange-500 hover:bg-orange-600 text-white'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      Rent Now
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Why Choose Us
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center space-y-4"
                >
                  <div className="inline-flex p-4 rounded-full bg-orange-100">
                    <feature.icon className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section ref={testimonialsRef} className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-6">
                Customer Stories
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 p-8 rounded-2xl"
                >
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Section */}
        <section className="py-24 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold text-gray-900">
                  Perfect for Tanzania Travel
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Stay connected while exploring Tanzania's amazing destinations
                </p>
              </div>

              <Link
                to="/travel"
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold transition-colors"
              >
                <span>Explore Tanzania</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl font-bold">
                  Get Connected Today
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                  Rent WiFi in minutes and stay connected anywhere in Tanzania
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Wifi className="h-5 w-5" />
                  <span>Start Rental</span>
                </Link>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-colors inline-flex items-center justify-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;