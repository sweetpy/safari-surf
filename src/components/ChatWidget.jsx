import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, Phone, Wifi, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

// OpenAI API helper function (simulated)
const getChatResponse = async (userMessage, chatHistory) => {
  // This is where we'd normally call the OpenAI API
  // For now, we'll use intelligent rule-based responses focused on WiFi rental
  
  // Convert input to lowercase for easier matching
  const input = userMessage.toLowerCase();
  
  // Check for price/cost questions
  if (input.includes('price') || input.includes('cost') || input.includes('how much') || 
      input.includes('rate') || input.includes('fee') || input.includes('pricing')) {
    return `Our WiFi rental prices are very simple:
    
• Daily: $25 (TSh 58,000)
• Weekly: $100 (TSh 232,000) - Most popular!
• Monthly: $150 (TSh 348,000)

All plans include unlimited data, free delivery to major hotels, and 24/7 support. Would you like to rent a device today?`;
  }
  
  // Check for rental/booking questions
  if (input.includes('rent') || input.includes('book') || input.includes('get') || 
      input.includes('order') || input.includes('reserve') || input.includes('hire')) {
    return `To rent a WiFi device, you can:

1. Complete the quick form on our Contact page
2. Message us directly on WhatsApp at +255 764 928 408
3. Call us at +255 764 928 408

We'll deliver your device to your location, usually within 1-2 hours in major cities. Would you like me to help you start the rental process?`;
  }
  
  // Check for coverage questions
  if (input.includes('coverage') || input.includes('work') || input.includes('signal') || 
      input.includes('network') || input.includes('area') || input.includes('reach') || 
      input.includes('available')) {
    return `Our WiFi devices provide excellent coverage throughout Tanzania, including:

• All major cities (Dar es Salaam, Arusha, Dodoma, Mwanza)
• Tourist destinations (Zanzibar, Serengeti, Kilimanjaro, Ngorongoro)
• Main highways and transportation routes

We use multiple network providers to ensure reliable connectivity even in remote areas. Where are you planning to use the device?`;
  }
  
  // Check for device specifications
  if (input.includes('device') || input.includes('specification') || input.includes('speed') || 
      input.includes('bandwidth') || input.includes('data') || input.includes('battery')) {
    return `Our portable WiFi devices offer:

• Up to 200 Mbps download speed
• Unlimited data usage
• 12+ hour battery life
• Connect up to 10 devices simultaneously
• Pocket-sized, lightweight design
• Bank-grade encryption for security
• 24/7 technical support

They're perfect for both work and leisure travel throughout Tanzania!`;
  }
  
  // Check for delivery questions
  if (input.includes('delivery') || input.includes('pickup') || input.includes('get it') || 
      input.includes('receive') || input.includes('bring') || input.includes('collect')) {
    return `We offer convenient delivery options:

• Free delivery to all major hotels in Dar es Salaam, Arusha, and Zanzibar
• Airport pickups available with advance notice
• Home/office delivery in major cities
• Express delivery (within 1 hour) available in Dar es Salaam
• Collection points in city centers

Where would you like your device delivered?`;
  }
  
  // Check for tourism-related questions
  if (input.includes('tourist') || input.includes('tourism') || input.includes('travel') || 
      input.includes('safari') || input.includes('serengeti') || input.includes('zanzibar') ||
      input.includes('kilimanjaro')) {
    return `Our WiFi devices are perfect for tourists! They work throughout Tanzania's top attractions including Serengeti, Zanzibar, Kilimanjaro, and Ngorongoro.

You can share photos instantly, use maps for navigation, stay in touch with family, and access travel information anywhere. The weekly plan ($100) is our most popular option for tourists.

Would you like to book a device for your Tanzania adventure?`;
  }
  
  // Return a default response for any other queries
  return `Thanks for contacting Safari Surf WiFi! We provide instant, portable WiFi rentals across Tanzania starting at $100/week with unlimited data.

I can help you with:
• WiFi rental pricing and plans
• Coverage information
• Device specifications
• Booking and delivery
• Tourism connectivity solutions

How can I assist you today?`;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! 👋 I'm Sophia, your WiFi Rental Assistant. How can I help you rent a portable WiFi device today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickReplies = [
    "Rental prices",
    "How to rent",
    "Coverage areas", 
    "Device specifications",
    "Tourist WiFi options",
    "Delivery options"
  ];

  useEffect(() => {
    // Show chat widget automatically after 15 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  // Scroll to bottom when new messages arrive
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    // For debugging
    console.log("Sending message:", text);

    const userMessage = {
      type: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Get AI response
    getChatResponse(text, messages)
      .then(response => {
        setTimeout(() => {
          const botResponse = {
            type: 'bot',
            text: response,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setMessages(prev => [...prev, botResponse]);
          setIsTyping(false);
        }, 1000 + Math.random() * 1000); // Simulate variable response time for realism
      })
      .catch(() => {
        setIsTyping(false);
        
        // Fallback response
        const fallbackResponse = {
          type: 'bot',
          text: "I'm having trouble connecting right now. Please message us directly on WhatsApp at +255 764 928 408 for immediate assistance with your WiFi rental.",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, fallbackResponse]);
      });
  };

  const handleWhatsAppRedirect = () => {
    // Format a predefined message based on chat history
    const lastUserMessage = messages.filter(msg => msg.type === 'user').pop()?.text || '';
    const message = `Hello! I'm interested in renting a WiFi device. ${lastUserMessage ? `I was asking about: ${lastUserMessage}` : 'Please provide information about your rental plans.'}`;
    
    window.open(`https://wa.me/255764928408?text=${encodeURIComponent(message)}`, '_blank');
    toast.success('Redirecting to WhatsApp to complete your rental!');
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-pink-500 text-white p-4 rounded-full shadow-lg z-50 transition-colors animate-pulse-glow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          0
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 w-80 sm:w-96 h-[32rem] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-orange-100"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Sophia</h3>
                    <p className="text-orange-100 text-sm">Online now</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-orange-100 hover:text-white"
                  aria-label="Close chat"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs p-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.type === 'user' ? 'text-orange-100' : 'text-gray-500'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 rounded-2xl p-3">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                      <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Invisible element to scroll to */}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            <div className="p-3 border-t bg-gray-50">
              <div className="flex flex-wrap gap-2 mb-3">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleSendMessage(reply)}
                    className="text-xs bg-white border border-gray-300 rounded-full px-3 py-1 hover:bg-orange-50 hover:border-orange-300 transition-colors"
                    aria-label={`Quick reply: ${reply}`}
                  >
                    {reply}
                  </button>
                ))}
              </div>
              
              {/* Input */}
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(inputText)}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-orange-500"
                  aria-label="Chat message input"
                />
                <button
                  onClick={() => handleSendMessage(inputText)}
                  disabled={!inputText.trim() || isTyping}
                  className={`${
                    !inputText.trim() || isTyping ? 'bg-gray-300' : 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600'
                  } text-white p-2 rounded-full transition-colors`}
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <button
                  onClick={handleWhatsAppRedirect}
                  className="flex items-center justify-center space-x-2 text-green-600 hover:text-green-700 text-sm font-medium bg-green-50 hover:bg-green-100 py-2 rounded-lg transition-colors"
                  aria-label="Chat on WhatsApp"
                >
                  <Phone className="h-4 w-4" />
                  <span>Chat on WhatsApp</span>
                </button>
                
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center space-x-2 text-orange-600 hover:text-orange-700 text-sm font-medium bg-orange-50 hover:bg-orange-100 py-2 rounded-lg transition-colors"
                  aria-label="Rent WiFi Now"
                >
                  <Wifi className="h-4 w-4" />
                  <span>Rent WiFi Now</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatWidget;