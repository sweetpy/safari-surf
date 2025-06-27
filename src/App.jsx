import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';

// Main Pages - WiFi Rental Focus
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import Coverage from './pages/Coverage';
import About from './pages/About';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';

// Travel Content - Secondary Features
import Destinations from './pages/Destinations';
import Safaris from './pages/Safaris';
import Itineraries from './pages/Itineraries';
import Guides from './pages/Guides';
import Blog from './pages/Blog';
import Booking from './pages/Booking';

// Destination Pages
import Serengeti from './pages/destinations/Serengeti';
import Kilimanjaro from './pages/destinations/Kilimanjaro';
import Ngorongoro from './pages/destinations/Ngorongoro';
import Tarangire from './pages/destinations/Tarangire';
import Arusha from './pages/destinations/Arusha';

// Guide Pages
import VisaGuide from './pages/guides/VisaGuide';
import BestTime from './pages/guides/BestTime';
import SafariCosts from './pages/guides/SafariCosts';
import PackingList from './pages/guides/PackingList';
import TravelBudget from './pages/guides/TravelBudget';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Routes>
              {/* Core WiFi Rental Business Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/coverage" element={<Coverage />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              
              {/* Travel Content - Secondary Features */}
              <Route path="/travel" element={<Destinations />} />
              <Route path="/travel/destinations" element={<Destinations />} />
              <Route path="/travel/safaris" element={<Safaris />} />
              <Route path="/travel/itineraries" element={<Itineraries />} />
              <Route path="/travel/guides" element={<Guides />} />
              <Route path="/travel/blog" element={<Blog />} />
              <Route path="/travel/booking" element={<Booking />} />
              
              {/* Destination Routes */}
              <Route path="/travel/destinations/serengeti" element={<Serengeti />} />
              <Route path="/travel/destinations/kilimanjaro" element={<Kilimanjaro />} />
              <Route path="/travel/destinations/ngorongoro" element={<Ngorongoro />} />
              <Route path="/travel/destinations/tarangire" element={<Tarangire />} />
              <Route path="/travel/destinations/arusha" element={<Arusha />} />
              
              {/* Guide Routes */}
              <Route path="/travel/guides/visa-to-tanzania" element={<VisaGuide />} />
              <Route path="/travel/guides/best-time-to-visit-tanzania" element={<BestTime />} />
              <Route path="/travel/guides/tanzania-safari-cost" element={<SafariCosts />} />
              <Route path="/travel/guides/tanzania-packing-list" element={<PackingList />} />
              <Route path="/travel/guides/tanzania-travel-budget" element={<TravelBudget />} />
            </Routes>
          </main>
          <Footer />
          <ChatWidget />
          <Toaster position="bottom-right" />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;