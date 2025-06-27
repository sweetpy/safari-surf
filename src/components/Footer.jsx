import React from 'react';
import { Link } from 'react-router-dom';
import { Wifi, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Wifi className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="text-xl font-bold">Safari Surf WiFi</h3>
                <p className="text-gray-400 text-sm">WiFi Solutions</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Tanzania's premier WiFi service provider, connecting communities across the nation with reliable, high-speed internet solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-orange-500 transition-colors">Pricing</Link></li>
              <li><Link to="/coverage" className="text-gray-300 hover:text-orange-500 transition-colors">Coverage</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Home WiFi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Business Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Public Hotspots</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Enterprise Network</a></li>
              <li><a href="#" className="text-gray-300 hover:text-orange-500 transition-colors">Technical Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
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
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Safari Surf WiFi. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;