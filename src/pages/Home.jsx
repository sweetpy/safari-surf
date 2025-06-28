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
  Star,
  Sparkles,
  Gauge,
  Award,
  Download
} from 'lucide-react';
import VisitorCounter from '../components/VisitorCounter';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [plansRef, plansInView] = useInView({ triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true });

  const plans = [
    {
      name: 'Daily',
      priceUSD: '25',
      priceTZS: '58,000',
      period: 'per day',
      speed: '50 Mbps',
      features: ['Unlimited data', 'Instant setup', 'Device included', '24/7 support'],
      popular: false,
      gradient: 'from-blue-500 to-cyan-400',
      icon: '📱'
    },
    {
      name: 'Weekly',
      priceUSD: '100',
      priceTZS: '232,000',
      period: 'per week',
      speed: '100 Mbps',
      features: ['Unlimited data', 'Priority support', 'Multiple devices', 'Free delivery', 'Backup device'],
      popular: true,
      gradient: 'from-orange-500 to-pink-500',
      icon: '🚀'
    },
    {
      name: 'Monthly',
      priceUSD: '150',
      priceTZS: '348,000',
      period: 'per month',
      speed: '200 Mbps',
      features: ['Unlimited data', '24/7 VIP support', 'Premium device', 'Backup included', 'Priority setup', 'Refundable deposit: $50'],
      popular: false,
      gradient: 'from-purple-500 to-indigo-500',
      icon: '👑'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Instant Setup',
      description: 'Get connected in under 5 minutes anywhere in Tanzania',
      color: 'from-yellow-400 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and security protocols',
      color: 'from-green-400 to-emerald-500'
    },
    {
      icon: Gauge,
      title: 'Lightning Fast',
      description: 'Up to 200 Mbps speeds for seamless connectivity',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      icon: MapPin,
      title: 'Nationwide Coverage',
      description: 'Available in 15+ cities across Tanzania',
      color: 'from-purple-400 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Hassan',
      role: 'Digital Nomad',
      text: 'Game-changer for remote work! Lightning-fast WiFi everywhere I travel in Tanzania.',
      rating: 5,
      avatar: '👩‍💻',
      location: 'Dar es Salaam'
    },
    {
      name: 'David Mwangi',
      role: 'Business Owner',
      text: 'Reliable internet for my mobile business. Never had connectivity issues!',
      rating: 5,
      avatar: '👨‍💼',
      location: 'Arusha'
    },
    {
      name: 'John Safari',
      role: 'Tourist Guide',
      text: 'Perfect for my safari tours. Clients love staying connected!',
      rating: 5,
      avatar: '🧭',
      location: 'Serengeti'
    }
  ];

  const stats = [
    { number: <VisitorCounter />, label: 'Happy Customers', icon: '😊' },
    { number: '15+', label: 'Cities Covered', icon: '🏙️' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: '⚡' },
    { number: '24/7', label: 'Expert Support', icon: '🛟' }
  ];

  const floatingElements = [
    { emoji: '📶', delay: 0, duration: 6 },
    { emoji: '💨', delay: 2, duration: 8 },
    { emoji: '⚡', delay: 4, duration: 7 },
    { emoji: '🌐', delay: 1, duration: 9 },
  ];

  return (
    <>
      <Helmet>
        <title>Safari Surf WiFi - Rent Portable WiFi Instantly in Tanzania | #1 WiFi Rental Service</title>
        <meta name="description" content="Rent portable WiFi devices instantly in Tanzania. High-speed internet rental starting at $100/week (TSh 232,000). 3,000+ happy customers. Get connected anywhere in Tanzania in 5 minutes!" />
        <meta name="keywords" content="WiFi rental Tanzania, portable WiFi Tanzania, internet rental Dar es Salaam, mobile WiFi Arusha, WiFi device rental Zanzibar, Tanzania internet, safari WiFi, travel WiFi Tanzania" />
        <link rel="canonical" href="https://safarisurfwifi.com" />
        
        {/* Enhanced Local SEO */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Safari Surf WiFi - Tanzania's #1 WiFi Rental Service",
          "description": "Rent portable WiFi devices instantly in Tanzania. High-speed internet rental starting at $100/week. 3,000+ happy customers.",
          "url": "https://safarisurfwifi.com",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "Safari Surf WiFi",
            "priceRange": "$25-$150",
            "telephone": "+255764928408",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "TZ",
              "addressRegion": "Dar es Salaam"
            }
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen overflow-hidden">
        {/* Optimized Floating Background Elements */}
        <div className="fixed inset-0 pointer-events-none z-0" aria-hidden="true">
          {floatingElements.map((element, index) => (
            <motion.div
              key={index}
              className="absolute text-6xl opacity-5"
              initial={{ y: "100vh", x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200) }}
              animate={{ 
                y: "-100vh",
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                rotate: 360
              }}
              transition={{
                duration: element.duration,
                repeat: Infinity,
                delay: element.delay,
                ease: "linear"
              }}
            >
              {element.emoji}
            </motion.div>
          ))}
        </div>

        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden"
        >
          {/* Optimized animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-pink-200/20 animate-pulse" aria-hidden="true"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
              className="space-y-12"
            >
              {/* Hero Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-orange-200 rounded-full px-6 py-3 shadow-lg"
              >
                <Sparkles className="h-5 w-5 text-orange-500" />
                <span className="text-orange-600 font-semibold">Tanzania's #1 WiFi Rental</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </motion.div>

              {/* Main Heading - Optimized for SEO */}
              <div className="space-y-8">
                <h1 className="text-7xl md:text-9xl font-black text-gray-900 leading-none tracking-tight">
                  Rent WiFi
                  <motion.span 
                    className="block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{ backgroundPosition: "100% 50%" }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  >
                    Instantly
                  </motion.span>
                </h1>
                
                <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light">
                  Get high-speed portable WiFi anywhere in Tanzania. 
                  <span className="font-semibold text-orange-600"> Setup in 5 minutes!</span>
                  <br />
                  <span className="text-xl text-gray-500">Starting at $100/week (TSh 232,000)</span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/contact"
                  className="group relative bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  aria-label="Rent WiFi device now"
                >
                  <div className="flex items-center space-x-3">
                    <Wifi className="h-6 w-6" />
                    <span>Rent WiFi Now</span>
                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                </Link>
                
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/80 backdrop-blur-sm border-2 border-gray-200 hover:border-orange-300 text-gray-700 hover:text-orange-600 px-10 py-5 rounded-full text-xl font-semibold transition-all duration-300 hover:shadow-xl"
                  aria-label="Contact us via WhatsApp"
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6" />
                    <span>WhatsApp</span>
                  </div>
                </a>
              </div>

              {/* Enhanced Stats Grid with correct customer numbers */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-12"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="bg-white/60 backdrop-blur-sm rounded-3xl p-6 hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <div className="text-4xl mb-2" aria-hidden="true">{stat.icon}</div>
                    <div className="text-3xl md:text-4xl font-black text-gray-900">
                      {typeof stat.number === 'object' ? stat.number : stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pricing Plans - Updated with correct pricing */}
        <section ref={plansRef} className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={plansInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center space-x-2 bg-orange-100 rounded-full px-6 py-2 mb-6">
                <Award className="h-5 w-5 text-orange-600" />
                <span className="text-orange-600 font-semibold">Simple Transparent Pricing</span>
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
                Choose Your Plan
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
                Flexible rental options designed for every need. All prices include unlimited data and 24/7 support.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={plansInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative group ${
                    plan.popular 
                      ? 'transform scale-105 z-10' 
                      : 'hover:scale-105'
                  } transition-all duration-500`}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                        ⭐ Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className={`relative overflow-hidden rounded-3xl ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-orange-50 to-pink-50 border-2 border-orange-200 shadow-2xl' 
                      : 'bg-white border border-gray-200 shadow-xl hover:shadow-2xl'
                  } transition-all duration-500`}>
                    
                    {/* Plan header with gradient */}
                    <div className={`relative h-40 bg-gradient-to-r ${plan.gradient} flex items-center justify-center`}>
                      <div className="text-center text-white">
                        <div className="text-6xl mb-2" aria-hidden="true">{plan.icon}</div>
                        <h3 className="text-2xl font-bold">{plan.name}</h3>
                      </div>
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 opacity-20" aria-hidden="true">
                        <div className="absolute inset-0 bg-white/10 transform rotate-12 scale-150"></div>
                      </div>
                    </div>
                    
                    <div className="p-8 space-y-6">
                      {/* Pricing with both USD and TZS */}
                      <div className="text-center space-y-2">
                        <div className="flex items-baseline justify-center space-x-2">
                          <span className="text-sm text-gray-500">$</span>
                          <span className="text-5xl font-black text-gray-900">{plan.priceUSD}</span>
                        </div>
                        <div className="text-gray-600 font-medium">{plan.period}</div>
                        <div className="text-sm text-gray-500">
                          TSh {plan.priceTZS}
                        </div>
                        <div className={`inline-block px-4 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${plan.gradient} text-white`}>
                          {plan.speed}
                        </div>
                      </div>
                      
                      {/* Features */}
                      <ul className="space-y-4">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-3">
                            <div className="flex-shrink-0">
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            </div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* CTA Button */}
                      <Link
                        to="/contact"
                        className={`w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                          plan.popular
                            ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl'
                            : 'bg-gray-900 hover:bg-gray-800 text-white shadow-lg hover:shadow-xl'
                        }`}
                        aria-label={`Get started with ${plan.name} plan`}
                      >
                        <span>Get Started</span>
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section ref={featuresRef} className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={featuresInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
                Why Choose Us
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
                Experience the difference with Tanzania's most trusted WiFi rental service
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group relative"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 hover:bg-white transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 border border-white/50">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials - Updated with consistent 3,000+ customers */}
        <section ref={testimonialsRef} className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-6xl md:text-7xl font-black text-gray-900 mb-6">
                Customer Love
              </h2>
              <p className="text-2xl text-gray-600 max-w-3xl mx-auto font-light">
                Join <VisitorCounter /> satisfied customers across Tanzania
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={testimonialsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-orange-100">
                    {/* Rating */}
                    <div className="flex space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <p className="text-gray-700 text-lg italic mb-6 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Author */}
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl" aria-hidden="true">{testimonial.avatar}</div>
                      <div>
                        <div className="font-bold text-gray-900">{testimonial.name}</div>
                        <div className="text-gray-600">{testimonial.role}</div>
                        <div className="text-sm text-orange-600 font-medium">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel CTA Section */}
        <section className="py-32 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="text-6xl" aria-hidden="true">🏔️🦁🏖️</div>
              <h2 className="text-6xl md:text-7xl font-black mb-6">
                Explore Tanzania
              </h2>
              <p className="text-2xl max-w-3xl mx-auto font-light opacity-90">
                Stay connected while discovering Tanzania's incredible destinations
              </p>
              
              <Link
                to="/travel"
                className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-2 border-white/30 hover:border-white/50 px-10 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105"
                aria-label="Discover Tanzania travel destinations"
              >
                <span>Discover Tanzania</span>
                <ArrowRight className="h-6 w-6" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 bg-gray-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-8">
                <h2 className="text-6xl md:text-7xl font-black leading-none">
                  Get Connected
                  <span className="block text-orange-400">Right Now</span>
                </h2>
                <p className="text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                  Don't wait. Get instant WiFi rental and stay connected everywhere in Tanzania.
                  <span className="block mt-2 text-xl">Starting at $100/week (TSh 232,000)</span>
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-12 py-6 rounded-full text-2xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                  aria-label="Start WiFi rental now"
                >
                  <div className="flex items-center space-x-3">
                    <Wifi className="h-7 w-7" />
                    <span>Start Rental</span>
                    <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
                
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-gray-900 px-12 py-6 rounded-full text-2xl font-bold transition-all duration-300 hover:shadow-xl"
                  aria-label="Contact us via WhatsApp"
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="h-7 w-7" />
                    <span>WhatsApp</span>
                  </div>
                </a>
              </div>

              <div className="pt-8">
                <p className="text-gray-400 text-lg">
                  🚀 Setup in 5 minutes • 📶 99.9% uptime • 🛟 24/7 support • 😊 <VisitorCounter /> happy customers
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;