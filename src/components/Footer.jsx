import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
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
              <Compass className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="text-xl font-bold">Tanzania Travel Hub</h3>
                <p className="text-gray-400 text-sm">Your Safari Companion</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Your ultimate Tanzania travel companion. We specialize in creating unforgettable 
              safari experiences, from the iconic Serengeti to the pristine beaches of Zanzibar.
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

          {/* Destinations */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Top Destinations</h4>
            <ul className="space-y-2">
              <li><Link to="/destinations/zanzibar" className="text-gray-300 hover:text-orange-500 transition-colors">Zanzibar</Link></li>
              <li><Link to="/destinations/serengeti" className="text-gray-300 hover:text-orange-500 transition-colors">Serengeti</Link></li>
              <li><Link to="/destinations/kilimanjaro" className="text-gray-300 hover:text-orange-500 transition-colors">Kilimanjaro</Link></li>
              <li><Link to="/destinations/ngorongoro" className="text-gray-300 hover:text-orange-500 transition-colors">Ngorongoro</Link></li>
              <li><Link to="/destinations/tarangire" className="text-gray-300 hover:text-orange-500 transition-colors">Tarangire</Link></li>
            </ul>
          </div>

          {/* Travel Guides */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Travel Guides</h4>
            <ul className="space-y-2">
              <li><Link to="/guides/visa-to-tanzania" className="text-gray-300 hover:text-orange-500 transition-colors">Tanzania Visa Guide</Link></li>
              <li><Link to="/guides/best-time-to-visit-tanzania" className="text-gray-300 hover:text-orange-500 transition-colors">Best Time to Visit</Link></li>
              <li><Link to="/guides/tanzania-safari-cost" className="text-gray-300 hover:text-orange-500 transition-colors">Safari Costs</Link></li>
              <li><Link to="/guides/tanzania-packing-list" className="text-gray-300 hover:text-orange-500 transition-colors">Packing List</Link></li>
              <li><Link to="/guides/tanzania-travel-budget" className="text-gray-300 hover:text-orange-500 transition-colors">Travel Budget</Link></li>
            </ul>
          </div>

          {/* Contact & Downloads */}
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

            {/* Free Downloads */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3 flex items-center space-x-2">
                <Download className="h-4 w-4 text-orange-500" />
                <span>Free Downloads</span>
              </h5>
              <ul className="space-y-2 text-sm">
                <li><a href="/downloads/tanzania-packing-checklist.pdf" className="text-gray-300 hover:text-orange-500 transition-colors">Tanzania Packing Checklist</a></li>
                <li><a href="/downloads/safari-budget-planner.pdf" className="text-gray-300 hover:text-orange-500 transition-colors">Safari Budget Planner</a></li>
                <li><a href="/downloads/travel-itinerary-template.pdf" className="text-gray-300 hover:text-orange-500 transition-colors">Itinerary Template</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-gray-400 text-sm">
                &copy; 2025 Tanzania Travel Hub. All rights reserved.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Globe className="h-4 w-4" />
                <span>Available in 6 languages</span>
              </div>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="/terms" className="text-gray-400 hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="/sitemap" className="text-gray-400 hover:text-orange-500 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;