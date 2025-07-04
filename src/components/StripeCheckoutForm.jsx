import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { motion } from 'framer-motion';
import { Loader, CheckCircle, AlertCircle, Wifi, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';
import { sendPaymentConfirmation } from '../utils/emailService';

const StripeCheckoutForm = ({ 
  amount, 
  currency = 'usd', 
  description = 'WiFi Rental', 
  customerEmail = '',
  customerName = '',
  onSuccess,
  onError
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    // In a production environment, you would fetch client secret from your server
    // For now, we'll simulate a successful payment flow
    const createPaymentIntent = async () => {
      try {
        setClientSecret('mock_secret_key_for_demo');
      } catch (err) {
        console.error('Error creating payment intent:', err);
        setError('Failed to initialize payment system. Please try again later.');
      }
    };

    if (amount > 0) {
      createPaymentIntent();
    }
  }, [amount]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    if (!stripe || !elements) {
      setLoading(false);
      return;
    }

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Use serverless function for email notifications
      const confirmationData = {
        customerName,
        customerEmail,
        amount,
        currency,
        plan: description,
        paymentMethod: 'Payment on Delivery',
        transactionId: `ORDER-${Date.now().toString(36).toUpperCase()}`
      };
      
      const result = await sendPaymentConfirmation(confirmationData);
      
      if (!result.success && result.fallback === 'whatsapp') {
        // Confirmation email failed, but we can still show success UI and suggest WhatsApp
        toast.info('Payment confirmed, but we couldn\'t send an email confirmation. Please contact us via WhatsApp if needed.');
        
        // Provide WhatsApp fallback option
        const shouldContact = window.confirm('Would you like to confirm your payment details via WhatsApp?');
        if (shouldContact) {
          window.open(`https://wa.me/255764928408?text=${encodeURIComponent(result.whatsappMessage)}`, '_blank');
        }
      }
      
      // Handle success
      setSucceeded(true);
      toast.success('Your WiFi rental has been confirmed!');
      
      if (onSuccess) onSuccess();
      
    } catch (err) {
      console.error('Payment error:', err);
      setError(err.message || 'An error occurred during payment. Please try again.');
      if (onError) onError(err);
    } finally {
      setLoading(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        fontFamily: 'Arial, sans-serif',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
    hidePostalCode: true,
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
        {succeeded ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center space-y-4"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
            <p className="text-gray-600">Your WiFi device will be delivered to your location. We've sent a confirmation to your email.</p>
            <p className="text-sm text-gray-500 mt-2">Share a photo of your adventure by replying to the confirmation email!</p>
            <button 
              onClick={() => window.location.href = '/'}
              className="mt-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center space-x-2 hover:from-orange-600 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg mx-auto"
            >
              <Wifi className="h-5 w-5" />
              <span>Return Home</span>
            </button>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="text-center mb-8">
              <Wifi className="h-10 w-10 text-orange-500 mx-auto mb-2" />
              <h2 className="text-2xl font-bold text-gray-900">Complete Your Booking</h2>
              <div className="text-lg font-semibold text-orange-600 mt-1">${amount.toFixed(2)} {currency.toUpperCase()}</div>
              <p className="text-sm text-gray-600 mt-2">{description}</p>
              <p className="text-xs text-gray-500 mt-1">Payment will be collected upon delivery</p>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Card Details (for pre-authorization only)
                </label>
                <div className="border border-gray-300 rounded-lg p-4 bg-white">
                  <CardElement options={cardElementOptions} />
                </div>
                <p className="text-xs text-gray-500 mt-1">Your card will not be charged until your device is delivered</p>
              </div>
            </div>
            
            {error && (
              <div className="bg-red-50 border border-red-100 text-red-700 p-4 rounded-lg flex items-center space-x-2">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                <p className="text-sm">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading || !stripe}
              className={`w-full ${
                loading || !stripe 
                  ? 'bg-gray-300 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600'
              } text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2`}
            >
              {loading ? (
                <>
                  <Loader className="h-5 w-5 animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Confirm Booking</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </button>
            
            <div className="text-xs text-center text-gray-500">
              By confirming, you agree to our Terms of Service and Privacy Policy.
              <br />Booking confirmations will be sent to your email.
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default StripeCheckoutForm;