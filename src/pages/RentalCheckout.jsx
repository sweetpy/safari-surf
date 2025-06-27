import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  Wifi,
  Calendar,
  MapPin,
  User,
  Mail,
  Phone,
  CreditCard,
  CheckCircle,
  ChevronLeft
} from 'lucide-react';
import StripeCheckoutForm from '../components/StripeCheckoutForm';
import toast from 'react-hot-toast';
import Confetti from 'react-confetti';
import { sendRentalNotification } from '../utils/emailService';

// Initialize Stripe (replace with your actual publishable key when going live)
const stripePromise = loadStripe('pk_test_51NyQTHB0Z3yrCKl0UBnpK89fdcQQFHLHExRvgcyC0KkElrxbMQBLxjyGKRJfTqjICy2UZlSvVCLLCd2y7jIPKzwZ00iHhQWdAb');

const RentalCheckout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [rentalData, setRentalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // For measuring window size for confetti
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 800,
    height: typeof window !== 'undefined' ? window.innerHeight : 600,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Get rental data from location state or redirect to contact
  useEffect(() => {
    if (location.state && location.state.rental) {
      setRentalData(location.state.rental);
      
      // Send rental notification email
      sendRentalNotification(location.state.rental)
        .then(result => {
          console.log('Notification result:', result);
        })
        .catch(error => {
          console.error('Failed to send notification:', error);
        });
        
    } else {
      // If no rental data, redirect to contact page
      navigate('/contact', { 
        state: { 
          message: 'Please complete the rental form to proceed with checkout.'
        }
      });
    }
    setLoading(false);
  }, [location, navigate]);

  // Calculate rental price based on plan
  const getRentalPrice = () => {
    if (!rentalData) return 0;
    
    switch (rentalData.plan) {
      case 'daily':
        return 25;
      case 'weekly':
        return 100;
      case 'monthly':
        return 150;
      default:
        return 100; // Default to weekly plan
    }
  };

  // Get rental duration based on plan
  const getRentalDuration = () => {
    if (!rentalData) return '';
    
    switch (rentalData.plan) {
      case 'daily':
        return '24 hours';
      case 'weekly':
        return '7 days';
      case 'monthly':
        return '30 days';
      default:
        return '7 days';
    }
  };

  // Handle payment success
  const handlePaymentSuccess = () => {
    setSuccess(true);
    toast.success('Your rental has been confirmed!');
    
    // For demo purposes, we'll redirect to home after a delay
    setTimeout(() => {
      navigate('/', { 
        state: { 
          rentalSuccess: true,
          message: 'Your WiFi device will be delivered shortly.'
        }
      });
    }, 8000);
  };

  // Handle payment error
  const handlePaymentError = (error) => {
    setError(error.message || 'An error occurred during payment processing.');
    toast.error('Payment failed. Please try again or contact support.');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
      </div>
    );
  }

  if (!rentalData) {
    return null; // Redirect will happen
  }

  return (
    <>
      <Helmet>
        <title>Complete Your WiFi Rental | Safari Surf WiFi Tanzania</title>
        <meta name="description" content="Complete your portable WiFi device rental payment. Secure checkout with instant confirmation. Get connected anywhere in Tanzania within minutes." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {success && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.05}
        />
      )}

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
              <span>Back</span>
            </button>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div ref={heroRef} className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="max-w-3xl mx-auto text-center"
              >
                <Wifi className="h-12 w-12 mx-auto mb-4" />
                <h1 className="text-3xl font-bold mb-2">Complete Your WiFi Rental</h1>
                <p className="text-orange-100">Just one step away from high-speed internet anywhere in Tanzania</p>
              </motion.div>
            </div>
            
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Order Summary */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Rental Summary</h2>
                  
                  <div className="bg-gray-50 rounded-xl p-6 space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <Wifi className="h-5 w-5 text-orange-500" />
                        <span className="font-medium text-gray-900">Portable WiFi Device</span>
                      </div>
                      <span className="text-gray-700 font-medium">${getRentalPrice()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>Plan Type</span>
                      <span className="capitalize">{rentalData.plan}</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <span>Duration</span>
                      <span>{getRentalDuration()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span>Start Date</span>
                      </div>
                      <span>
                        {rentalData.startDate && new Date(rentalData.startDate).toLocaleDateString()}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        <span>Delivery Location</span>
                      </div>
                      <span>{rentalData.location}</span>
                    </div>
                    
                    <div className="pt-4 border-t border-gray-200">
                      <div className="flex justify-between items-center font-bold">
                        <span className="text-gray-900">Total</span>
                        <span className="text-lg text-orange-600">${getRentalPrice()}</span>
                      </div>
                      <div className="text-xs text-gray-500 text-right mt-1">
                        Equivalent to TSh {(getRentalPrice() * 2320).toLocaleString()}
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-3 rounded-lg text-sm text-orange-800 border border-orange-100 mt-4">
                      <p className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span>Your WiFi device will be delivered to your specified location upon payment confirmation.</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-4">
                    <h3 className="font-semibold text-gray-900">Customer Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3 text-gray-600 text-sm">
                        <User className="h-4 w-4 text-gray-400" />
                        <span>{rentalData.name}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600 text-sm">
                        <Mail className="h-4 w-4 text-gray-400" />
                        <span>{rentalData.email}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-gray-600 text-sm">
                        <Phone className="h-4 w-4 text-gray-400" />
                        <span>{rentalData.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Payment Section */}
                <div className="space-y-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-3">
                    <CreditCard className="h-5 w-5 text-orange-500" />
                    <span>Payment Options</span>
                  </h2>
                  
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-orange-700 mb-4">Pay on Delivery</h3>
                    <p className="text-gray-700 mb-4">We accept cash or mobile money payment when we deliver your WiFi device. No prepayment required!</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Pay in USD or Tanzanian Shillings</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Mobile money options: M-Pesa, Tigo Pesa, Airtel Money</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Secure, convenient, and hassle-free</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <a
                        href={`https://wa.me/255764928408?text=Hi! I'd like to confirm my WiFi rental. Name: ${rentalData.name}, Plan: ${rentalData.plan}, Location: ${rentalData.location}, Date: ${rentalData.startDate}. I prefer to pay on delivery.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          toast.success('Redirecting to WhatsApp to complete your order');
                          // Track this conversion
                          if (window.gtag) {
                            window.gtag('event', 'begin_checkout', {
                              payment_type: 'Pay on delivery',
                              plan: rentalData.plan,
                              value: getRentalPrice(),
                              currency: 'USD'
                            });
                          }
                        }}
                        className="w-full inline-flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-semibold transition-colors"
                      >
                        <Phone className="h-5 w-5" />
                        <span>Confirm via WhatsApp</span>
                      </a>
                    </div>
                  </div>
                  
                  <div className="relative flex items-center justify-center">
                    <div className="border-t border-gray-200 w-full absolute"></div>
                    <div className="bg-white px-4 z-10 text-gray-500 text-sm">or</div>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                    <h3 className="text-lg font-bold text-blue-700 mb-4">Online Reservations</h3>
                    <p className="text-gray-700 mb-4">Reserve your device now and our team will contact you to arrange delivery and payment.</p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">No prepayment needed</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Guaranteed device availability</span>
                      </div>
                      <div className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Flexible payment options</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <button
                        onClick={() => {
                          handlePaymentSuccess();
                          // Track this conversion
                          if (window.gtag) {
                            window.gtag('event', 'begin_checkout', {
                              payment_type: 'Reservation',
                              plan: rentalData.plan,
                              value: getRentalPrice(),
                              currency: 'USD'
                            });
                          }
                        }}
                        className="w-full inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span>Reserve Device Now</span>
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-center text-sm text-gray-500 mt-4 space-y-2">
                    <p>All reservations and orders receive instant confirmation via email</p>
                    <p>For assistance, contact us at: 
                      <a href="tel:+255764928408" className="text-orange-600 font-medium hover:underline ml-1">+255 764 928 408</a> or 
                      <a href="mailto:support@flit.tz" className="text-orange-600 font-medium hover:underline ml-1">support@flit.tz</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RentalCheckout;