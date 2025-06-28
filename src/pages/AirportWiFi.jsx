import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import { 
  Plane, 
  Calendar, 
  Clock, 
  User, 
  Mail, 
  Phone,
  Wifi,
  MapPin,
  ArrowRight,
  CheckCircle,
  Loader,
  AlertTriangle,
  Globe
} from 'lucide-react';
import toast from 'react-hot-toast';
import { sendRentalNotification } from '../utils/emailService';
import VisitorCounter from '../components/VisitorCounter';

const AirportWiFi = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    airline: '',
    flightNumber: '',
    arrivalDate: '',
    arrivalTime: '',
    deliveryLocation: 'airport', // airport or hotel
    hotelName: '',
    rentalPlan: 'weekly', // daily, weekly, monthly
    specialRequests: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const airlineOptions = [
    'Ethiopian Airlines',
    'Kenya Airways',
    'KLM',
    'Qatar Airways',
    'Emirates',
    'Turkish Airlines',
    'RwandAir',
    'Air Tanzania',
    'Precision Air',
    'Other'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    
    // Required fields
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.airline.trim()) errors.airline = 'Airline is required';
    if (!formData.flightNumber.trim()) errors.flightNumber = 'Flight number is required';
    if (!formData.arrivalDate.trim()) errors.arrivalDate = 'Arrival date is required';
    if (!formData.arrivalTime.trim()) errors.arrivalTime = 'Arrival time is required';
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Hotel name required if delivery location is hotel
    if (formData.deliveryLocation === 'hotel' && !formData.hotelName.trim()) {
      errors.hotelName = 'Hotel name is required for hotel delivery';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Prepare the notification data
      const notificationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: 'Airport WiFi Rental',
        location: formData.deliveryLocation === 'airport' 
          ? 'JNIA Airport Pickup' 
          : `Hotel Delivery: ${formData.hotelName}`,
        plan: formData.rentalPlan,
        startDate: formData.arrivalDate,
        message: `Flight: ${formData.airline} ${formData.flightNumber}\nArrival Time: ${formData.arrivalTime}\nSpecial Requests: ${formData.specialRequests}`
      };
      
      // Send notification
      await sendRentalNotification(notificationData);
      
      toast.success('Your airport WiFi request has been received!');
      
      // Redirect to checkout page
      navigate('/checkout', {
        state: {
          rental: notificationData
        }
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      
      toast.error('There was a problem submitting your request. Please try WhatsApp instead.');
      
      // Create WhatsApp message as fallback
      const whatsappMessage = `Hello! I need WiFi for my arrival at JNIA Airport.
      
Name: ${formData.name}
Phone: ${formData.phone}
Flight: ${formData.airline} ${formData.flightNumber}
Arrival: ${formData.arrivalDate} at ${formData.arrivalTime}
Delivery: ${formData.deliveryLocation === 'airport' ? 'Airport Pickup' : `Hotel: ${formData.hotelName}`}
Plan: ${formData.rentalPlan}

${formData.specialRequests ? 'Special Requests: ' + formData.specialRequests : ''}

Please confirm you can deliver a WiFi device on my arrival. Thank you!`;

      // Open WhatsApp with the message
      window.open(`https://wa.me/255764928408?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    }
  };

  const getFormattedRentalPrice = (plan) => {
    switch (plan) {
      case 'daily':
        return '$25 (TSh 58,000) per day';
      case 'weekly':
        return '$100 (TSh 232,000) for 7 days';
      case 'monthly':
        return '$150 (TSh 348,000) for 30 days';
      default:
        return '$100 (TSh 232,000) for 7 days';
    }
  };

  return (
    <>
      <Helmet>
        <title>JNIA Airport WiFi Rental | Instant Internet on Arrival | Safari Surf WiFi</title>
        <meta name="description" content="Arrive connected! Pre-book WiFi for your JNIA (Dar es Salaam) airport arrival. Device delivered the moment you land. Stay connected from touchdown with unlimited data." />
        <meta name="keywords" content="JNIA WiFi, Dar es Salaam Airport internet, airport WiFi rental, Tanzania arrival WiFi, instant internet JNIA, Julius Nyerere airport connectivity" />
        <link rel="canonical" href="https://safarisurfwifi.com/airport-wifi" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative py-32 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/34486/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
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
              <div className="flex items-center justify-center space-x-3 mb-6">
                <Plane className="h-8 w-8 text-blue-300" />
                <div className="h-px w-12 bg-blue-300"></div>
                <Wifi className="h-8 w-8 text-blue-300" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Airport WiFi Rental
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Land connected at Julius Nyerere International Airport.
                <br />Pre-book your WiFi device for instant internet from the moment you arrive.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Content with Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Form */}
              <motion.div
                ref={formRef}
                initial={{ opacity: 0, x: -50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                  <h2 className="text-2xl font-bold">Book Your JNIA Airport WiFi</h2>
                  <p className="text-blue-100">Complete the form below and we'll meet you at arrivals</p>
                </div>
                
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Your Information</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:border-blue-500 focus:outline-none transition-colors`}
                            placeholder="Your full name"
                            required
                          />
                        </div>
                        {formErrors.name && <p className="mt-1 text-sm text-red-600">{formErrors.name}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Mail className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:border-blue-500 focus:outline-none transition-colors`}
                            placeholder="your.email@example.com"
                          />
                        </div>
                        {formErrors.email && <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Phone className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 border ${formErrors.phone ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:border-blue-500 focus:outline-none transition-colors`}
                            placeholder="+1 234 567 8900"
                            required
                          />
                        </div>
                        {formErrors.phone && <p className="mt-1 text-sm text-red-600">{formErrors.phone}</p>}
                        <p className="mt-1 text-xs text-gray-500">We'll send WhatsApp updates about your WiFi delivery</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Flight Details</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="airline" className="block text-sm font-medium text-gray-700 mb-1">
                          Airline *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Plane className="h-5 w-5 text-gray-400" />
                          </div>
                          <select
                            id="airline"
                            name="airline"
                            value={formData.airline}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 border ${formErrors.airline ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:border-blue-500 focus:outline-none transition-colors`}
                            required
                          >
                            <option value="">Select airline</option>
                            {airlineOptions.map(airline => (
                              <option key={airline} value={airline}>{airline}</option>
                            ))}
                          </select>
                        </div>
                        {formErrors.airline && <p className="mt-1 text-sm text-red-600">{formErrors.airline}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="flightNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Flight Number *
                        </label>
                        <input
                          type="text"
                          id="flightNumber"
                          name="flightNumber"
                          value={formData.flightNumber}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 border ${formErrors.flightNumber ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:border-blue-500 focus:outline-none transition-colors`}
                          placeholder="e.g., ET873"
                          required
                        />
                        {formErrors.flightNumber && <p className="mt-1 text-sm text-red-600">{formErrors.flightNumber}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="arrivalDate" className="block text-sm font-medium text-gray-700 mb-1">
                          Arrival Date *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Calendar className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="date"
                            id="arrivalDate"
                            name="arrivalDate"
                            value={formData.arrivalDate}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            className={`w-full pl-10 pr-4 py-3 border ${formErrors.arrivalDate ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:border-blue-500 focus:outline-none transition-colors`}
                            required
                          />
                        </div>
                        {formErrors.arrivalDate && <p className="mt-1 text-sm text-red-600">{formErrors.arrivalDate}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="arrivalTime" className="block text-sm font-medium text-gray-700 mb-1">
                          Arrival Time *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Clock className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="time"
                            id="arrivalTime"
                            name="arrivalTime"
                            value={formData.arrivalTime}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 border ${formErrors.arrivalTime ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:border-blue-500 focus:outline-none transition-colors`}
                            required
                          />
                        </div>
                        {formErrors.arrivalTime && <p className="mt-1 text-sm text-red-600">{formErrors.arrivalTime}</p>}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Delivery & Rental Options</h3>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Delivery Location
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label className={`cursor-pointer relative border ${formData.deliveryLocation === 'airport' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'} rounded-xl p-4 flex items-center transition-colors`}>
                          <input
                            type="radio"
                            name="deliveryLocation"
                            value="airport"
                            checked={formData.deliveryLocation === 'airport'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded-full border flex-shrink-0 mr-3 ${formData.deliveryLocation === 'airport' ? 'border-blue-500 bg-blue-500' : 'border-gray-400'}`}>
                            {formData.deliveryLocation === 'airport' && <div className="w-2 h-2 rounded-full bg-white m-auto"></div>}
                          </div>
                          <div>
                            <span className="block font-medium">Airport Pickup</span>
                            <span className="text-xs text-gray-500">Meet our representative at arrivals</span>
                          </div>
                        </label>
                        
                        <label className={`cursor-pointer relative border ${formData.deliveryLocation === 'hotel' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'} rounded-xl p-4 flex items-center transition-colors`}>
                          <input
                            type="radio"
                            name="deliveryLocation"
                            value="hotel"
                            checked={formData.deliveryLocation === 'hotel'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className={`w-4 h-4 rounded-full border flex-shrink-0 mr-3 ${formData.deliveryLocation === 'hotel' ? 'border-blue-500 bg-blue-500' : 'border-gray-400'}`}>
                            {formData.deliveryLocation === 'hotel' && <div className="w-2 h-2 rounded-full bg-white m-auto"></div>}
                          </div>
                          <div>
                            <span className="block font-medium">Hotel Delivery</span>
                            <span className="text-xs text-gray-500">We'll deliver to your accommodation</span>
                          </div>
                        </label>
                      </div>
                    </div>
                    
                    {formData.deliveryLocation === 'hotel' && (
                      <div>
                        <label htmlFor="hotelName" className="block text-sm font-medium text-gray-700 mb-1">
                          Hotel/Accommodation Name *
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <MapPin className="h-5 w-5 text-gray-400" />
                          </div>
                          <input
                            type="text"
                            id="hotelName"
                            name="hotelName"
                            value={formData.hotelName}
                            onChange={handleInputChange}
                            className={`w-full pl-10 pr-4 py-3 border ${formErrors.hotelName ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:border-blue-500 focus:outline-none transition-colors`}
                            placeholder="Hotel name and location"
                          />
                        </div>
                        {formErrors.hotelName && <p className="mt-1 text-sm text-red-600">{formErrors.hotelName}</p>}
                      </div>
                    )}
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Rental Plan
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <label className={`cursor-pointer relative border ${formData.rentalPlan === 'daily' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'} rounded-xl p-4 flex flex-col items-center text-center transition-colors`}>
                          <input
                            type="radio"
                            name="rentalPlan"
                            value="daily"
                            checked={formData.rentalPlan === 'daily'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="text-2xl mb-2">📱</div>
                          <span className="block font-medium">Daily</span>
                          <span className="text-xs text-gray-500">$25/day</span>
                        </label>
                        
                        <label className={`cursor-pointer relative border ${formData.rentalPlan === 'weekly' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'} rounded-xl p-4 flex flex-col items-center text-center transition-colors`}>
                          <input
                            type="radio"
                            name="rentalPlan"
                            value="weekly"
                            checked={formData.rentalPlan === 'weekly'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          {formData.rentalPlan === 'weekly' && (
                            <div className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                              Popular
                            </div>
                          )}
                          <div className="text-2xl mb-2">🚀</div>
                          <span className="block font-medium">Weekly</span>
                          <span className="text-xs text-gray-500">$100/week</span>
                        </label>
                        
                        <label className={`cursor-pointer relative border ${formData.rentalPlan === 'monthly' ? 'border-blue-500 bg-blue-50' : 'border-gray-300 hover:border-blue-300'} rounded-xl p-4 flex flex-col items-center text-center transition-colors`}>
                          <input
                            type="radio"
                            name="rentalPlan"
                            value="monthly"
                            checked={formData.rentalPlan === 'monthly'}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="text-2xl mb-2">👑</div>
                          <span className="block font-medium">Monthly</span>
                          <span className="text-xs text-gray-500">$150/month</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows="3"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                        placeholder="Any additional information or requests..."
                      ></textarea>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-blue-800">
                        <strong>Landing Connected:</strong> Our representative will meet you at arrivals with your pre-configured WiFi device, ready to use immediately.
                      </p>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <div>
                        <span className="block font-semibold text-gray-900">Total:</span>
                        <span className="text-blue-600 font-bold">{getFormattedRentalPrice(formData.rentalPlan)}</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span>Pay on delivery</span>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full ${
                        isSubmitting 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                      } text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader className="h-5 w-5 animate-spin" />
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Wifi className="h-5 w-5" />
                          <span>Book Airport WiFi</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </motion.div>
              
              {/* Information Panel */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8 lg:sticky lg:top-28"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-48 relative">
                    <img 
                      src="https://images.pexels.com/photos/34486/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" 
                      alt="Travelers using airport WiFi" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">Julius Nyerere<br />International Airport</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Why Pre-Book Airport WiFi?</h3>
                    
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Instant internet access when you land</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Skip long SIM card lines at the airport</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">No setup hassles or configuration</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Connect multiple devices instantly</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Access maps, translation & ride-sharing apps</span>
                      </li>
                    </ul>

                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-100">
                      <p className="text-blue-800 text-sm">
                        <strong>JNIA WiFi Reality:</strong> Airport WiFi at JNIA requires a local phone number for verification – impossible for new arrivals without a local SIM.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="bg-white/10 p-3 rounded-lg">
                      <Plane className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-1">Airport Pickup Process</h3>
                      <p className="text-blue-100">Our WiFi delivery is simple and efficient</p>
                    </div>
                  </div>
                  
                  <ol className="space-y-4 mb-6">
                    <li className="flex items-start space-x-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold text-sm">1</div>
                      <span className="text-white">Complete customs and immigration</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold text-sm">2</div>
                      <span className="text-white">Collect your luggage</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold text-sm">3</div>
                      <span className="text-white">Look for our representative holding a sign with your name</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-white/20 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 font-semibold text-sm">4</div>
                      <span className="text-white">Get your WiFi device and instant connection</span>
                    </li>
                  </ol>
                  
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <p className="text-sm text-blue-100 font-medium">
                      Trusted by <VisitorCounter showAnimation={false} /> travelers arriving in Tanzania
                    </p>
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Need Immediate Assistance?</h3>
                  <div className="space-y-4">
                    <a
                      href="https://wa.me/255764928408?text=I'm%20arriving%20at%20JNIA%20and%20need%20WiFi%20rental%20information"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-xl font-medium transition-colors w-full"
                    >
                      <Phone className="h-5 w-5" />
                      <span>WhatsApp Support</span>
                    </a>
                    
                    <a
                      href="tel:+255764928408"
                      className="flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-3 rounded-xl font-medium transition-colors w-full"
                    >
                      <Phone className="h-5 w-5" />
                      <span>Call +255 764 928 408</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Features of Our Airport WiFi Service</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need for a seamless connected arrival experience
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "🚀",
                  title: "Instant Connection",
                  description: "No setup required. Your device is pre-configured and ready to use the moment you receive it."
                },
                {
                  icon: "🌐",
                  title: "Unlimited Data",
                  description: "Share photos, make video calls, use maps and more without worrying about data limits."
                },
                {
                  icon: "🔋",
                  title: "Long Battery Life",
                  description: "12+ hours of continuous use, perfect for long travel days and exploring the city."
                },
                {
                  icon: "📱",
                  title: "Connect Multiple Devices",
                  description: "Share with family or travel companions. Connect up to 10 devices simultaneously."
                },
                {
                  icon: "🛡️",
                  title: "Secure Connection",
                  description: "Bank-grade encryption to keep your data safe while using public transportation and spaces."
                },
                {
                  icon: "🗺️",
                  title: "Nationwide Coverage",
                  description: "Works throughout Tanzania, from urban centers to popular tourist destinations."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Airport WiFi Reality */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Reality of JNIA Airport WiFi</h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Arriving at Julius Nyerere International Airport presents immediate connectivity challenges. The airport's 
                    free WiFi requires a local phone number for SMS verification – creating an impossible situation for new arrivals.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-700">SMS Verification Required</h4>
                        <p className="text-gray-700 text-sm">
                          Airport WiFi requires a local phone number to receive a verification code – impossible for new arrivals.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-700">Extremely Slow Speeds</h4>
                        <p className="text-gray-700 text-sm">
                          Even if you can connect, speeds are typically below 1 Mbps, making basic web browsing frustrating.
                        </p>
                      </div>
                    </div>
                    
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100 flex items-start space-x-3">
                      <AlertTriangle className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-red-700">Limited Coverage Areas</h4>
                        <p className="text-gray-700 text-sm">
                          WiFi signal is inconsistent throughout the terminal, with many dead zones in baggage claim.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Pre-booking your portable WiFi device ensures you'll have reliable, high-speed internet from the moment 
                    you clear customs – letting you contact your hotel, navigate ground transportation, and share your safe arrival.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="px-6 py-4 text-gray-900">Connectivity Option</th>
                      <th className="px-6 py-4 text-gray-900">Available at Arrival?</th>
                      <th className="px-6 py-4 text-gray-900">Speed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4">JNIA Free WiFi</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-red-600">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          <span>Requires local phone</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">0.5-1 Mbps</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">Airport SIM Card Booth</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-yellow-600">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          <span>30+ min wait times</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">10-20 Mbps</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4">International Roaming</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-yellow-600">
                          <AlertTriangle className="h-4 w-4 mr-1" />
                          <span>Very expensive</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">5-15 Mbps</td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="px-6 py-4 font-medium">Pre-booked WiFi Device</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center text-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          <span>Immediate on arrival</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-medium">20-50 Mbps</td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-t border-blue-100">
                  <div className="flex items-center space-x-3 mb-3">
                    <Globe className="h-5 w-5 text-blue-600" />
                    <h4 className="font-semibold text-gray-900">Don't Get Stranded Without Connectivity</h4>
                  </div>
                  <p className="text-gray-700 text-sm">
                    Pre-book your WiFi now and enjoy seamless connectivity the moment you land in Tanzania.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What Travelers Say</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real experiences from travelers who landed connected
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Having WiFi ready at the airport saved me so much stress. I was able to contact my hotel and arrange transportation immediately without struggling to find a SIM card.",
                  name: "Sarah J.",
                  location: "from United States",
                  image: "https://images.pexels.com/photos/5393594/pexels-photo-5393594.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                },
                {
                  quote: "The WiFi handover was seamless! Their representative was waiting right at arrivals with a sign with my name. The device worked perfectly throughout my 2-week safari.",
                  name: "David M.",
                  location: "from United Kingdom",
                  image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                },
                {
                  quote: "As a business traveler, staying connected is non-negotiable. Having reliable internet from the moment I landed made my Tanzania trip so much more productive.",
                  name: "Maria T.",
                  location: "from Germany",
                  image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our airport WiFi service
              </p>
            </div>
            
            <div className="space-y-6">
              {[
                {
                  question: "What if my flight is delayed?",
                  answer: "No problem! We track flight arrivals and our representative will adjust their schedule accordingly. You'll still be greeted upon arrival, no matter when your flight lands."
                },
                {
                  question: "How will I identify your representative?",
                  answer: "Our representative will be waiting in the arrivals area holding a sign with your name. They will also be wearing a Safari Surf WiFi branded shirt or badge for easy identification."
                },
                {
                  question: "Can I change my rental plan after booking?",
                  answer: "Yes, you can upgrade or modify your rental plan upon device pickup or at any time during your rental period. Just contact our customer service team via WhatsApp."
                },
                {
                  question: "Do I need to pay in advance?",
                  answer: "No, we offer cash on delivery. You can pay when you receive your device at the airport in USD or Tanzanian Shillings. We also accept mobile money payments."
                },
                {
                  question: "What happens if I need to cancel my arrival?",
                  answer: "There's no cancellation fee. Simply notify us via WhatsApp or email about your change in plans as soon as possible."
                },
                {
                  question: "Can I use the WiFi device outside Tanzania?",
                  answer: "Our devices are optimized for use within Tanzania. If you're traveling to multiple countries, please contact us in advance for international options."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm p-6"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Land Connected in Tanzania</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-blue-100">
                Don't waste time searching for connectivity at the airport. Pre-book your WiFi device now and enjoy instant internet access the moment you land.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button
                  onClick={() => {
                    const formElement = document.getElementById('name');
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: 'smooth' });
                      setTimeout(() => formElement.focus(), 800);
                    }
                  }}
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-white text-indigo-600 font-semibold hover:bg-blue-50 transition-colors"
                >
                  <Plane className="h-5 w-5" />
                  <span>Pre-Book Your Device</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
                
                <a
                  href="https://wa.me/255764928408?text=I'm%20interested%20in%20pre-booking%20WiFi%20for%20my%20arrival%20at%20JNIA%20Airport"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl border-2 border-white/30 hover:bg-white/10 font-semibold transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp Us</span>
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