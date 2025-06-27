import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ChatWidget from './components/ChatWidget';

// Pages
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Safaris from './pages/Safaris';
import Itineraries from './pages/Itineraries';
import Guides from './pages/Guides';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Booking from './pages/Booking';

// Destination Pages
import Zanzibar from './pages/destinations/Zanzibar';
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
              <Route path="/" element={<Home />} />
              <Route path="/destinations" element={<Destinations />} />
              <Route path="/safaris" element={<Safaris />} />
              <Route path="/itineraries" element={<Itineraries />} />
              <Route path="/guides" element={<Guides />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/booking" element={<Booking />} />
              
              {/* Destination Routes */}
              <Route path="/destinations/zanzibar" element={<Zanzibar />} />
              <Route path="/destinations/serengeti" element={<Serengeti />} />
              <Route path="/destinations/kilimanjaro" element={<Kilimanjaro />} />
              <Route path="/destinations/ngorongoro" element={<Ngorongoro />} />
              <Route path="/destinations/tarangire" element={<Tarangire />} />
              <Route path="/destinations/arusha" element={<Arusha />} />
              
              {/* Guide Routes */}
              <Route path="/guides/visa-to-tanzania" element={<VisaGuide />} />
              <Route path="/guides/best-time-to-visit-tanzania" element={<BestTime />} />
              <Route path="/guides/tanzania-safari-cost" element={<SafariCosts />} />
              <Route path="/guides/tanzania-packing-list" element={<PackingList />} />
              <Route path="/guides/tanzania-travel-budget" element={<TravelBudget />} />
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