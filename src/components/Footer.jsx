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
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Newsletter Sign-up */}
        <div className="bg-gradient-to-r from-orange-500/20 to-pink-500/20 rounded-3xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Get WiFi Rental Updates</h3>
              <p className="text-gray-300 max-w-md">Sign up for our newsletter to receive special offers, travel tips, and WiFi rental discounts.</p>
            </div>
            <div className="flex w-full md:w-auto">
              <input 
                type="email"
                placeholder="Your email address"
                className="w-full md:w-64 px-4 py-3 rounded-l-full text-gray-900 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-5 py-3 rounded-r-full font-medium transition-colors">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <Wifi className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="text-2xl font-bold">Safari Surf WiFi</h3>
                <p className="text-gray-400">Rent WiFi On The Spot</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Tanzania's leading portable WiFi rental service. Get instant, 
              high-speed internet anywhere you go, with 3,000+ satisfied customers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-300 hover:text-white transition-colors">WiFi Rental</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/coverage" className="text-gray-300 hover:text-white transition-colors">Coverage</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/travel" className="text-gray-300 hover:text-white transition-colors">Travel Hub</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <a href="https://wa.me/255764928408" className="text-gray-300 hover:text-white transition-colors">
                  +255 764 928 408
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a href="mailto:support@flit.tz" className="text-gray-300 hover:text-white transition-colors">
                  support@flit.tz
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-0.5" />
                <p className="text-gray-300">
                  Dar es Salaam<br />Tanzania
                </p>
              </div>
              
              {/* Payments Accepted */}
              <div className="pt-4 border-t border-gray-800">
                <p className="text-sm text-gray-400 mb-2">Payments Accepted:</p>
                <div className="flex flex-wrap gap-2">
                  <div className="bg-white/10 text-white text-xs px-2 py-1 rounded">USD Cash</div>
                  <div className="bg-white/10 text-white text-xs px-2 py-1 rounded">TZS Cash</div>
                  <div className="bg-white/10 text-white text-xs px-2 py-1 rounded">M-Pesa</div>
                  <div className="bg-white/10 text-white text-xs px-2 py-1 rounded">Tigo Pesa</div>
                  <div className="bg-white/10 text-white text-xs px-2 py-1 rounded">Airtel Money</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Safari Surf WiFi. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
            <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;