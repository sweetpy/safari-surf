import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  MessageCircle,
  Headphones,
  Users,
  Wifi,
  ArrowRight,
  Loader
} from 'lucide-react';
import { sendRentalNotification } from '../utils/emailService';
import toast from 'react-hot-toast';

const Contact = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    location: '',
    message: '',
    startDate: new Date().toISOString().split('T')[0],
    plan: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Check for any message in location state
  useEffect(() => {
    if (location.state && location.state.message) {
      toast.info(location.state.message);
    }
  }, [location]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create a notification toast that persists during submission
    const toastId = toast.loading('Processing your rental request...');
    
    try {
      // Start sending notification immediately in the background
      const notificationPromise = sendRentalNotification(formData);
      
      // Show success state immediately while notification is still processing
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Update the toast to show success
      toast.success('Your WiFi rental request has been received! We\'ll contact you shortly.', {
        id: toastId
      });
      
      // Wait for notification to complete
      const result = await notificationPromise;
      console.log("Notification result:", result);
      
      // Navigate to checkout page after a short delay
      setTimeout(() => {
        navigate('/checkout', {
          state: {
            rental: formData
          }
        });
      }, 1500);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      
      // Update the toast to show error
      toast.error('There was a connection issue. Please try WhatsApp instead.', {
        id: toastId
      });
      
      // Create WhatsApp message as fallback
      const whatsappMessage = `Hello! I'd like to rent a WiFi device.
      
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Plan: ${formData.plan}
Location: ${formData.location}
Start Date: ${formData.startDate}
Additional Info: ${formData.message}

CASH ON DELIVERY AVAILABLE - I can pay when receiving the device.`;

      // Open WhatsApp with the message
      window.open(`https://wa.me/255764928408?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'WhatsApp Support',
      description: 'Get instant help via WhatsApp',
      contact: '+255 764 928 408',
      action: 'Message Us',
      link: 'https://wa.me/255764928408',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us your questions',
      contact: 'support@flit.tz',
      action: 'Email Us',
      link: 'mailto:support@flit.tz',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Headphones,
      title: '24/7 Technical Support',
      description: 'Round-the-clock assistance',
      contact: 'Always Available',
      action: 'Get Help',
      link: 'https://wa.me/255764928408',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Sales Team',
      description: 'Discuss your WiFi needs',
      contact: 'Business Hours',
      action: 'Contact Sales',
      link: 'https://wa.me/255764928408',
      color: 'from-orange-500 to-red-600'
    }
  ];

  const officeHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM' },
    { day: 'Sunday', hours: '10:00 AM - 2:00 PM' },
    { day: 'Emergency Support', hours: '24/7 Available' }
  ];

  return (
    <>
      <Helmet>
        <title>Rent WiFi Instantly | Contact Safari Surf WiFi Tanzania</title>
        <meta name="description" content="Rent portable WiFi devices instantly in Tanzania. Contact our 24/7 support via WhatsApp, phone, or email. High-speed internet rental for tourists and business travelers." />
        <meta name="keywords" content="rent WiFi Tanzania, contact WiFi rental, portable internet Tanzania, Dar es Salaam WiFi rental, tourist WiFi, travel internet Tanzania" />
        <link rel="canonical" href="https://safarisurfwifi.com/contact" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative py-32 bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
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
                Rent WiFi Now
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Get connected instantly with high-speed portable WiFi.
                <br />Fill out the form below or contact us directly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the contact method that works best for you
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <div className={`h-32 bg-gradient-to-r ${method.color} flex items-center justify-center`}>
                    <method.icon className="h-16 w-16 text-white" />
                  </div>
                  
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                    <p className="text-gray-600 mb-4">{method.description}</p>
                    <p className="text-lg font-semibold text-gray-900 mb-6">{method.contact}</p>
                    
                    <a
                      href={method.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gray-900 text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-800 transition-colors inline-block"
                    >
                      {method.action}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Rental Form & Info */}
        <section ref={contactRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Rental Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={contactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Rent WiFi Instantly
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Complete this form to rent a portable WiFi device. We'll contact you within 15 minutes to arrange delivery.
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
                      Thank you for your interest in renting a WiFi device. We'll contact you within 15 minutes to arrange delivery.
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
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
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                          Purpose *
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                        >
                          <option value="">Select a purpose</option>
                          <option value="tourism">Tourism / Leisure</option>
                          <option value="business">Business</option>
                          <option value="residential">Residential</option>
                          <option value="event">Event / Conference</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="location" className="block text-sm font-semibold text-gray-700 mb-2">
                          Delivery Location *
                        </label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          required
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                          placeholder="Hotel, address, or landmark"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="plan" className="block text-sm font-semibold text-gray-700 mb-2">
                          Rental Plan *
                        </label>
                        <select
                          id="plan"
                          name="plan"
                          value={formData.plan}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                        >
                          <option value="">Select a plan</option>
                          <option value="daily">Daily ($25 / TSh 58,000)</option>
                          <option value="weekly">Weekly ($100 / TSh 232,000)</option>
                          <option value="monthly">Monthly ($150 / TSh 348,000)</option>
                          <option value="custom">Custom (Multiple devices)</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="startDate" className="block text-sm font-semibold text-gray-700 mb-2">
                          Start Date *
                        </label>
                        <input
                          type="date"
                          id="startDate"
                          name="startDate"
                          required
                          value={formData.startDate}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
                          min={new Date().toISOString().split('T')[0]}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none transition-colors resize-none"
                        placeholder="Tell us any specific requirements or questions you have..."
                      />
                    </div>

                    <div className="bg-green-50 p-4 rounded-xl border border-green-100 mb-4">
                      <p className="text-green-800 text-sm flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                        <span>We accept cash on delivery! Pay when you receive your device with cash (USD or TZS) or mobile money.</span>
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:transform-none flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader className="h-5 w-5 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Wifi className="h-5 w-5" />
                          <span>Rent WiFi Now</span>
                        </>
                      )}
                    </button>
                    
                    <div className="text-sm text-center text-gray-500">
                      By submitting this form, you'll receive email confirmation with delivery details. All information is secure and protected.
                    </div>
                  </form>
                )}
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={contactInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Quick Contact */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Rental Steps</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <span className="flex h-6 w-6 items-center justify-center font-bold text-orange-600">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Fill the Form</h4>
                        <p className="text-gray-600 mb-2">Complete the rental request form</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <span className="flex h-6 w-6 items-center justify-center font-bold text-orange-600">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Confirm & Pay</h4>
                        <p className="text-gray-600 mb-2">Receive confirmation and payment options</p>
                        <p className="text-sm text-green-600 font-medium">Cash on delivery available!</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-100 p-3 rounded-full">
                        <span className="flex h-6 w-6 items-center justify-center font-bold text-orange-600">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Get Connected</h4>
                        <p className="text-gray-600">Receive your device in person or by delivery</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-white rounded-xl shadow-sm">
                    <div className="flex items-center space-x-3">
                      <Wifi className="h-5 w-5 text-orange-600" />
                      <span className="font-medium text-gray-900">Instant setup in 5 minutes!</span>
                    </div>
                  </div>
                </div>

                {/* Express Rental Button */}
                <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">Need WiFi Right Now?</h3>
                  <p className="mb-6">Get instant WiFi with our express rental service</p>
                  <a
                    href="https://wa.me/255764928408"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5" />
                      <span>WhatsApp for Instant WiFi</span>
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </a>
                </div>

                {/* Office Hours */}
                <div className="bg-white border-2 border-gray-100 rounded-2xl p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Clock className="h-8 w-8 text-orange-600" />
                    <h3 className="text-2xl font-bold text-gray-900">Business Hours</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                        <span className="font-medium text-gray-900">{schedule.day}</span>
                        <span className="text-gray-600">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-50 rounded-xl">
                    <p className="text-green-800 font-semibold text-center">
                      🚨 Emergency WiFi support available 24/7 via WhatsApp
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;