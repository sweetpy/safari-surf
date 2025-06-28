import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Wifi, Phone, ChevronDown, Plane, HelpCircle, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Coverage', path: '/coverage' },
    { 
      name: 'Travel Hub', 
      path: '/travel',
      dropdown: [
        { name: 'Destinations', path: '/travel/destinations' },
        { name: 'Safari Tours', path: '/travel/safaris' },
        { name: 'Travel Guides', path: '/travel/guides' },
        { name: 'Itineraries', path: '/travel/itineraries' },
        { name: 'WiFi Blog', path: '/blog' },
        { name: 'Travel Tech Blog', path: '/travel/blog' },
      ]
    },
    { 
      name: 'About & Support', 
      path: '#',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'FAQ & Support', path: '/faq' },
        { name: 'Rent WiFi on Arrival', path: '/airport-wifi' },
        { name: 'Contact Us', path: '/contact' }
      ]
    }
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg h-16' : 'bg-transparent h-20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Wifi className="h-10 w-10 text-orange-500 group-hover:text-orange-600 transition-colors" />
              <div className="absolute -inset-1 bg-orange-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'} group-hover:text-orange-500 transition-colors`}>
                Safari Surf WiFi
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div 
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.dropdown ? item.name : null)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                    location.pathname === item.path || location.pathname.startsWith(item.path)
                      ? 'text-orange-500'
                      : isScrolled
                      ? 'text-gray-700 hover:text-orange-500'
                      : 'text-white hover:text-orange-300'
                  }`}
                  onClick={(e) => item.path === '#' && e.preventDefault()}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="h-4 w-4" />}
                </Link>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Action Buttons & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/255764928408"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-3 rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
              aria-label="Chat on WhatsApp"
              title="60 second average response time"
            >
              <span>💬 Chat Now – 60s Avg Response</span>
            </a>

            <div className="group relative hidden sm:block">
              <Link
                to="/airport-wifi"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-3 rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
                aria-label="Airport pickup WiFi service"
              >
                <span className="whitespace-nowrap">✈️ Airport Pickup (DAR • JRO • ZNZ)</span>
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Get your device directly at the arrival gate
              </div>
            </div>

            <div className="group relative hidden sm:block">
              <Link
                to="/contact"
                className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-3 rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
                aria-label="Home or hotel WiFi delivery"
              >
                <span className="whitespace-nowrap">🏠 Home / Hotel Delivery</span>
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-gray-900 text-white text-xs rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                Delivered to any hotel or home in Tanzania
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-md ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div
                        className={`flex items-center justify-between px-3 py-2 text-base font-medium transition-colors text-gray-700 hover:text-orange-500 hover:bg-gray-50 rounded-md`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="h-4 w-4" />
                      </div>
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="block px-3 py-1 text-sm text-gray-600 hover:text-orange-500 transition-colors"
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-3 py-2 text-base font-medium transition-colors ${
                        location.pathname === item.path
                          ? 'text-orange-500 bg-orange-50'
                          : 'text-gray-700 hover:text-orange-500 hover:bg-gray-50'
                      } rounded-md`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="border-t pt-4 space-y-3">
                <Link
                  to="/airport-wifi"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-4 rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
                >
                  <span>✈️ Airport Pickup (DAR • JRO • ZNZ)</span>
                </Link>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-4 py-4 rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
                >
                  <span>💬 Chat Now – 60s Avg Response</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 py-4 rounded-lg transition-colors font-medium shadow-md hover:shadow-lg"
                >
                  <span>🏠 Home / Hotel Delivery</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;