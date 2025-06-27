import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Wifi, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Download,
  Globe
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <Wifi className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="text-xl font-bold">Safari Surf WiFi</h3>
                <p className="text-gray-400 text-sm">Rent WiFi On The Spot</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Tanzania's leading portable WiFi rental service. Get instant, high-speed internet 
              anywhere you go. Perfect for tourists, business travelers, and digital nomads.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* WiFi Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">WiFi Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors">All Services</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-orange-500 transition-colors">Rental Plans</Link></li>
              <li><Link to="/coverage" className="text-gray-300 hover:text-orange-500 transition-colors">Coverage Areas</Link></li>
              <li><a href="https://wa.me/255764928408" className="text-gray-300 hover:text-orange-500 transition-colors">Instant Rental</a></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-orange-500 transition-colors">Help & Support</Link></li>
            </ul>
          </div>

          {/* Travel Hub */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Travel Hub</h4>
            <ul className="space-y-2">
              <li><Link to="/travel/destinations" className="text-gray-300 hover:text-orange-500 transition-colors">Tanzania Destinations</Link></li>
              <li><Link to="/travel/safaris" className="text-gray-300 hover:text-orange-500 transition-colors">Safari Tours</Link></li>
              <li><Link to="/travel/guides" className="text-gray-300 hover:text-orange-500 transition-colors">Travel Guides</Link></li>
              <li><Link to="/travel/itineraries" className="text-gray-300 hover:text-orange-500 transition-colors">Trip Itineraries</Link></li>
              <li><Link to="/travel/blog" className="text-gray-300 hover:text-orange-500 transition-colors">Travel Blog</Link></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                <p className="text-gray-300">
                  Dar es Salaam, Tanzania<br />
                  East Africa
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <a href="https://wa.me/255764928408" className="text-gray-300 hover:text-orange-500 transition-colors">
                  +255 764 928 408
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:support@flit.tz" className="text-gray-300 hover:text-orange-500 transition-colors">
                  support@flit.tz
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3 flex items-center space-x-2">
                <Wifi className="h-4 w-4 text-orange-500" />
                <span>Quick Rental</span>
              </h5>
              <div className="space-y-2">
                <a
                  href="https://wa.me/255764928408"
                  className="block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  WhatsApp Rental
                </a>
                <Link
                  to="/contact"
                  className="block bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Online Booking
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Safari Surf WiFi. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Globe className="h-4 w-4" />
                <span>Serving Tanzania</span>
              </div>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
              <Link to="/faq" className="text-gray-400 hover:text-orange-500 transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;