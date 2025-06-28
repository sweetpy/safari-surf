import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { 
  Wifi,
  Calendar,
  MapPin,
  User,
  Mail,
  Phone,
  Plane,
  CheckCircle,
  ChevronLeft,
  ArrowRight,
  Clock,
  Loader,
  Car,
  Smartphone,
  BookOpen,
  Globe,
  Briefcase,
  Star,
  Facebook,
  Twitter,
  Zap,
  Building
} from 'lucide-react';
import toast from 'react-hot-toast';
import { sendRentalNotification } from '../utils/emailService';
import VisitorCounter from '../components/VisitorCounter';

const AirportWiFi = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: 'weekly',
    flightNumber: '',
    arrivalDate: '',
    arrivalTime: '',
    airport: 'JNIA',
    message: '',
    services: []
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [airportsRef, airportsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Check for any message in location state
  useEffect(() => {
    if (location.state && location.state.message) {
      toast.info(location.state.message);
    }
    
    // Set date to tomorrow by default
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setFormData(prev => ({
      ...prev,
      arrivalDate: tomorrow.toISOString().split('T')[0]
    }));
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleServiceToggle = (service) => {
    setFormData(prev => {
      const updatedServices = prev.services.includes(service) 
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      
      return {
        ...prev,
        services: updatedServices
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create a notification toast that persists during submission
    const toastId = toast.loading('Processing your airport WiFi request...');
    
    try {
      // Format services into a string for the message
      const servicesInfo = formData.services.length > 0 
        ? `Additional services requested: ${formData.services.join(', ')}.\n\n` 
        : '';
      
      // Add flight info to the message
      const flightInfo = `
      Flight Info:
      - Number: ${formData.flightNumber}
      - Date: ${formData.arrivalDate}
      - Time: ${formData.arrivalTime}
      - Airport: ${formData.airport}
      
      ${servicesInfo}${formData.message}`;
      
      // Prepare data for notification
      const notificationData = {
        ...formData,
        location: formData.airport,
        message: flightInfo,
        service: 'Rent WiFi on Arrival'
      };
      
      // Start sending notification immediately in the background
      const notificationPromise = sendRentalNotification(notificationData);
      
      // Show success state immediately while notification is still processing
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Update the toast to show success
      toast.success('Your WiFi rental request has been received! We\'ll contact you before your flight arrives.', {
        id: toastId
      });
      
      // Wait for notification to complete
      const result = await notificationPromise;
      console.log("Notification result:", result);
      
      // Navigate to checkout page after a short delay
      setTimeout(() => {
        navigate('/checkout', {
          state: {
            rental: notificationData
          }
        });
      }, 2000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      
      // Update the toast to show error
      toast.error('There was a connection issue. Please try WhatsApp instead.', {
        id: toastId
      });
      
      // Create WhatsApp message as fallback
      const whatsappMessage = `Hello! I'd like to rent a WiFi device for my airport arrival.
      
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Plan: ${formData.plan}
Flight: ${formData.flightNumber}
Arrival: ${formData.arrivalDate} at ${formData.arrivalTime}
Airport: ${formData.airport}
Additional Services: ${formData.services.join(', ') || "None"}
Notes: ${formData.message || "No additional notes"}

CASH ON DELIVERY AVAILABLE - I can pay when receiving the device.`;

      // Open WhatsApp with the message
      window.open(`https://wa.me/255764928408?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    }
  };

  const airports = [
    { value: 'JNIA', label: 'Julius Nyerere International Airport (DAR)', city: 'Dar es Salaam', code: 'DAR', coverageRating: 5, popularity: 'High' },
    { value: 'JRO', label: 'Kilimanjaro International Airport (JRO)', city: 'Arusha/Moshi', code: 'JRO', coverageRating: 5, popularity: 'Medium' },
    { value: 'ZNZ', label: 'Abeid Amani Karume International Airport (ZNZ)', city: 'Zanzibar', code: 'ZNZ', coverageRating: 5, popularity: 'High' }
  ];

  const plans = [
    { value: 'daily', label: 'Daily Plan - $25 (TSh 58,000)', description: '24 hours of unlimited data' },
    { value: 'weekly', label: 'Weekly Plan - $100 (TSh 232,000)', description: '7 days of unlimited data', popular: true },
    { value: 'monthly', label: 'Monthly Plan - $150 (TSh 348,000)', description: '30 days of unlimited data' }
  ];

  const additionalServices = [
    { 
      id: 'airport-pickup', 
      name: 'Airport Pickup Service', 
      description: 'Private transportation from airport to your hotel',
      price: 'From $30',
      icon: Car
    },
    { 
      id: 'tour-package', 
      name: 'Safari & Tour Packages', 
      description: 'Discounted tour bookings with WiFi included',
      price: 'Various options',
      icon: Globe
    },
    { 
      id: 'travel-guide', 
      name: 'Digital Travel Guide', 
      description: 'Comprehensive Tanzania travel guide with offline access',
      price: '$15 value - FREE',
      icon: BookOpen
    },
    { 
      id: 'business-setup', 
      name: 'Business Solutions', 
      description: 'Enhanced WiFi setup for business meetings/events',
      price: 'Custom pricing',
      icon: Briefcase
    }
  ];

  const faqItems = [
    {
      question: "Will someone meet me at the arrival gate?",
      answer: "Our representative will meet you at the designated meeting point in the arrivals hall, just after customs clearance. They'll be holding a sign with your name and our logo."
    },
    {
      question: "What if my flight is delayed?",
      answer: "We monitor all flight arrivals in real-time. If your flight is delayed, we'll adjust our meeting time accordingly at no extra charge."
    },
    {
      question: "How will I identify your staff?",
      answer: "Our representatives wear orange Safari Surf WiFi shirts/vests and will be holding a sign with your name. We'll also send you their photo and contact information before your arrival."
    },
    {
      question: "What if I can't find your representative?",
      answer: "We provide 24/7 WhatsApp support. If you can't locate our staff, simply message us at +255 764 928 408 and we'll guide you to the meeting point or arrange an alternative handover."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Rent WiFi by Request | Meet & Greet at Tanzania Airports | Safari Surf WiFi</title>
        <meta name="description" content="Rent WiFi devices on arrival at Tanzania airports. Our staff meets you at arrivals with a ready-to-use device. JNIA Dar es Salaam, Kilimanjaro & Zanzibar airports covered." />
        <meta name="keywords" content="airport WiFi Tanzania, JNIA WiFi rental, Dar es Salaam airport internet, Kilimanjaro airport WiFi, Zanzibar airport WiFi, travel WiFi Tanzania" />
        <link rel="canonical" href="https://safarisurfwifi.com/airport-wifi" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-sky-500 to-cyan-500 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40 bg-gradient-to-t from-black/60 to-transparent" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Rent <span className="font-extrabold text-white">WiFi</span> on Arrival
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-10">
                Get instant internet from the moment you land
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <Link
                  to="#booking-form"
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full text-lg font-bold shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <span>📦 Reserve Now</span>
                </Link>
                
                <Link
                  to="#airports"
                  className="bg-blue-700 text-white hover:bg-blue-800 px-8 py-3 rounded-full text-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                >
                  <span>📍 View Pickup Locations</span>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Quick Facts Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl py-3 px-2 transform hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-white">5 Min</div>
                  <div className="text-blue-100 text-sm">Setup Time</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl py-3 px-2 transform hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-white">All Airports</div>
                  <div className="text-blue-100 text-sm">DAR, JRO, ZNZ</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl py-3 px-2 transform hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="h-5 w-5 text-yellow-300" />
                    <span className="text-2xl font-bold text-white">Unlimited Data</span>
                  </div>
                  <div className="text-blue-100 text-sm">Never worry about usage</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl py-3 px-2 transform hover:scale-105 transition-transform">
                  <div className="text-2xl font-bold text-white">
                    <VisitorCounter showAnimation={false} />+
                  </div>
                  <div className="text-blue-100 text-sm">Travelers Served</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Airport Coverage Section */}
        <section id="airports" ref={airportsRef} className="py-16 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={airportsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Airport Meet & Greet Locations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team will meet you directly at these international airports with your pre-configured WiFi device
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {airports.map((airport, index) => (
                <motion.div
                  key={airport.value}
                  initial={{ opacity: 0, y: 30 }}
                  animate={airportsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-blue-100 hover:shadow-md transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-2">
                      <Plane className="h-6 w-6 text-blue-500" />
                      <span className="text-xl font-bold text-gray-900">{airport.code}</span>
                    </div>
                    <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">
                      {airport.popularity} Demand
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{airport.label}</h3>
                  <p className="text-gray-600 text-sm mb-4">Located in {airport.city}</p>
                  
                  <div className="flex justify-between">
                    <div className="flex items-center space-x-1">
                      <Wifi className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">Perfect Coverage</span>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < airport.coverageRating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Meet & Greet Available:</span>
                      <span className="font-semibold text-green-600">24/7</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={airportsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-lg border border-blue-100"
              >
                <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                <span className="text-sm font-medium">All plans include unlimited data at all airports</span>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Form Section */}
        <section id="booking-form" ref={formRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Rental Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Rent WiFi by Request
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Complete this form to book your WiFi device for airport pickup. We'll meet you at the airport with your ready-to-use device.
                </p>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
                  >
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-800 mb-2">Request Received!</h3>
                    <p className="text-green-700">
                      Thank you for your WiFi rental request. We've confirmed your booking and will meet you at the arrival gate. We'll send you a confirmation message.
                    </p>
                    <div className="mt-6">
                      <p className="text-sm text-gray-600">Redirecting to checkout...</p>
                      <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                        <motion.div 
                          className="h-full bg-green-500" 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 1.5 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Contact Details Section */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                        <User className="h-5 w-5 text-blue-500" />
                        <span>Contact Information</span>
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                            placeholder="Your full name"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                            placeholder="+255 XXX XXX XXX"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Flight Information */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                        <Plane className="h-5 w-5 text-blue-500" />
                        <span>Flight Information</span>
                      </h3>
                      
                      <div>
                        <label htmlFor="airport" className="block text-sm font-semibold text-gray-700 mb-2">
                          Arrival Airport *
                        </label>
                        <select
                          id="airport"
                          name="airport"
                          required
                          value={formData.airport}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        >
                          {airports.map(airport => (
                            <option key={airport.value} value={airport.value}>
                              {airport.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label htmlFor="flightNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                            Flight Number *
                          </label>
                          <input
                            type="text"
                            id="flightNumber"
                            name="flightNumber"
                            required
                            value={formData.flightNumber}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                            placeholder="KL566"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="arrivalDate" className="block text-sm font-semibold text-gray-700 mb-2">
                            Arrival Date *
                          </label>
                          <input
                            type="date"
                            id="arrivalDate"
                            name="arrivalDate"
                            required
                            value={formData.arrivalDate}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="arrivalTime" className="block text-sm font-semibold text-gray-700 mb-2">
                            Arrival Time *
                          </label>
                          <input
                            type="time"
                            id="arrivalTime"
                            name="arrivalTime"
                            required
                            value={formData.arrivalTime}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          />
                        </div>
                      </div>
                    </div>

                    {/* WiFi Plan */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                        <Wifi className="h-5 w-5 text-blue-500" />
                        <span>WiFi Plan</span>
                      </h3>
                      
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6 flex items-center space-x-3">
                        <Zap className="h-6 w-6 text-blue-600 flex-shrink-0" />
                        <p className="text-blue-800 font-medium">All plans include unlimited data with no throttling or caps</p>
                      </div>
                      
                      <div className="space-y-3">
                        {plans.map((plan) => (
                          <div 
                            key={plan.value}
                            className={`relative border-2 rounded-xl p-4 transition-all ${
                              formData.plan === plan.value 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200 hover:border-blue-200'
                            }`}
                          >
                            <label className="flex items-start cursor-pointer">
                              <input
                                type="radio"
                                name="plan"
                                value={plan.value}
                                checked={formData.plan === plan.value}
                                onChange={handleInputChange}
                                className="sr-only"
                              />
                              <span className={`w-5 h-5 rounded-full border flex-shrink-0 mt-0.5 mr-3 flex items-center justify-center ${
                                formData.plan === plan.value 
                                  ? 'border-blue-500 bg-blue-500 text-white' 
                                  : 'border-gray-400'
                              }`}>
                                {formData.plan === plan.value && (
                                  <CheckCircle className="w-4 h-4" />
                                )}
                              </span>
                              <div className="flex-1">
                                <span className="block font-medium text-gray-900">{plan.label}</span>
                                <span className="block text-sm text-gray-500">{plan.description}</span>
                              </div>
                            </label>
                            {plan.popular && (
                              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                Most Popular
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Services */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center space-x-2">
                        <Smartphone className="h-5 w-5 text-blue-500" />
                        <span>Additional Services</span>
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        Enhance your experience with these optional services:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {additionalServices.map((service) => (
                          <div 
                            key={service.id}
                            onClick={() => handleServiceToggle(service.id)}
                            className={`border rounded-xl p-4 cursor-pointer transition-all ${
                              formData.services.includes(service.id) 
                                ? 'border-blue-500 bg-blue-50' 
                                : 'border-gray-200 hover:border-blue-200'
                            }`}
                          >
                            <div className="flex items-start">
                              <span className={`w-5 h-5 rounded-md border flex-shrink-0 mt-0.5 mr-3 flex items-center justify-center ${
                                formData.services.includes(service.id)
                                  ? 'border-blue-500 bg-blue-500 text-white' 
                                  : 'border-gray-400'
                              }`}>
                                {formData.services.includes(service.id) && (
                                  <CheckCircle className="w-4 h-4" />
                                )}
                              </span>
                              <div className="flex-1">
                                <div className="flex items-center space-x-2">
                                  <service.icon className="h-4 w-4 text-blue-500" />
                                  <span className="font-medium text-gray-900">{service.name}</span>
                                </div>
                                <span className="block text-xs text-gray-500 mt-1">{service.description}</span>
                                <span className="block text-xs font-medium text-blue-600 mt-1">{service.price}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 space-y-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Additional Information</h3>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Notes or Special Requests
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                          placeholder="Any additional details about your arrival or special requirements..."
                        />
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                      <p className="text-blue-800 text-sm flex items-start">
                        <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>We accept cash on delivery! Pay when you receive your device with cash (USD or TZS) or mobile money. No advance payment required.</span>
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:transform-none flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader className="h-5 w-5 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Plane className="h-5 w-5" />
                          <span>Book WiFi on Arrival</span>
                        </>
                      )}
                    </button>
                    
                    <div className="text-sm text-center text-gray-500">
                      By submitting this form, you'll receive a confirmation with your device pickup details. We monitor all flight arrivals for delays.
                    </div>
                  </form>
                )}
              </motion.div>

              {/* Information Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* How It Works */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">How Rent WiFi by Request Works</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <span className="flex h-6 w-6 items-center justify-center font-bold text-blue-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Book Before You Fly</h4>
                        <p className="text-gray-600 mb-2">Complete the booking form with your flight details</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <span className="flex h-6 w-6 items-center justify-center font-bold text-blue-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">We'll Meet You at Arrivals</h4>
                        <p className="text-gray-600 mb-2">Our representative will wait for you with your device</p>
                        <p className="text-sm text-green-600 font-medium">We track flight delays automatically!</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <span className="flex h-6 w-6 items-center justify-center font-bold text-blue-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Get Connected Instantly</h4>
                        <p className="text-gray-600">Device is pre-configured and ready to use immediately</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-100 p-3 rounded-full">
                        <span className="flex h-6 w-6 items-center justify-center font-bold text-blue-600">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Pay on Delivery</h4>
                        <p className="text-gray-600">Pay with cash (USD/TSh) or mobile money when you receive the device</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-xl shadow-sm">
                    <div className="flex items-center space-x-3">
                      <Clock className="h-5 w-5 text-blue-600" />
                      <span className="font-medium text-gray-900">Guaranteed to meet your flight</span>
                    </div>
                  </div>
                </div>

                {/* Why Choose Airport WiFi */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Rent WiFi by Request?</h3>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Land Connected</h4>
                        <p className="text-gray-600 text-sm">WiFi ready to use the moment you clear customs</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start space-x-3">
                      <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Share with Travel Partners</h4>
                        <p className="text-gray-600 text-sm">Connect multiple devices to a single WiFi hotspot</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start space-x-3">
                      <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Avoid Airport Crowds</h4>
                        <p className="text-gray-600 text-sm">Skip the long lines at SIM card counters</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start space-x-3">
                      <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Enhanced Security</h4>
                        <p className="text-gray-600 text-sm">Private connection instead of public airport WiFi</p>
                      </div>
                    </li>
                    
                    <li className="flex items-start space-x-3">
                      <div className="bg-green-100 rounded-full p-1 flex-shrink-0 mt-1">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Convenient Return</h4>
                        <p className="text-gray-600 text-sm">We can meet you at departure or at your hotel for device return</p>
                      </div>
                    </li>
                  </ul>
                  
                  <div className="mt-6 text-center">
                    <p className="text-sm text-gray-500">
                      Join <VisitorCounter showAnimation={false} />+ satisfied travelers who use our arrival WiFi service
                    </p>
                  </div>
                </div>

                {/* Quick Contact */}
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-green-500 text-white rounded-2xl p-6 text-center hover:bg-green-600 transition-colors shadow-lg"
                >
                  <Phone className="h-8 w-8 mx-auto mb-3" />
                  <h3 className="text-xl font-bold mb-2">Need Help?</h3>
                  <p className="mb-4">Contact us directly on WhatsApp for immediate assistance</p>
                  <span className="inline-block px-6 py-2 bg-white text-green-600 rounded-full font-semibold">
                    Message on WhatsApp
                  </span>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={faqInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                WiFi on Arrival FAQs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to know about our meet & greet WiFi rental service
              </p>
            </motion.div>

            <div className="space-y-6">
              {faqItems.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-6">Still have questions about our WiFi on arrival service?</p>
              <a
                href="https://wa.me/255764928408"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-md"
              >
                <Phone className="h-5 w-5" />
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6">What Travelers Say</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Join <VisitorCounter /> happy customers who used our WiFi on arrival service
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  text: "Perfect arrival experience! Staff was waiting for me with my WiFi device even though my flight was delayed by 2 hours. Connected instantly.",
                  name: "James Wilson",
                  from: "London, UK",
                  rating: 5
                },
                {
                  text: "Absolute lifesaver after landing at JNIA. Connected immediately and was able to contact my hotel and use maps without hassle.",
                  name: "Maria Chen",
                  from: "Singapore",
                  rating: 5
                },
                {
                  text: "Great service at Kilimanjaro Airport. The representative was easy to find and helped me set everything up before I left the terminal.",
                  name: "David Müller",
                  from: "Berlin, Germany",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-md rounded-xl p-6"
                >
                  <div className="space-y-4">
                    <p className="italic text-white">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-blue-100">{testimonial.from}</div>
                      </div>
                      <div className="flex space-x-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Begin Your Connected Tanzania Journey
              </h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
                Book your WiFi device now and we'll meet you as soon as you land. No more connectivity stress after arrival.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="#booking-form" className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold transition-colors shadow-md">
                  <Plane className="h-5 w-5" />
                  <span>Rent WiFi on Arrival</span>
                </a>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl border-2 border-white/30 hover:bg-white/10 font-semibold transition-colors"
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

export default AirportWiFi;