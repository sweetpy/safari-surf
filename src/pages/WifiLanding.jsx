import React from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';

const landingData = {
  'zanzibar-airport': {
    title: 'Zanzibar Airport WiFi Rental',
    description: 'Get a portable WiFi device delivered to Zanzibar airport for fast internet.',
    heading: 'Zanzibar Airport WiFi Rental'
  },
  'arusha-safari': {
    title: 'Arusha Safari WiFi',
    description: 'Stay connected during your Arusha safari with unlimited data.',
    heading: 'Arusha Safari WiFi'
  },
  'dodoma-city': {
    title: 'Dodoma City Portable WiFi',
    description: 'Unlimited portable WiFi for exploring Dodoma city.',
    heading: 'Dodoma City WiFi'
  }
};

const WifiLanding = () => {
  const { slug } = useParams();
  const data = landingData[slug] || {
    title: 'Portable WiFi in Tanzania',
    description: 'Rent a portable WiFi device anywhere in Tanzania.',
    heading: slug?.replace(/-/g, ' ')
  };

  return (
    <div className="min-h-screen">
      <SEO title={data.title} description={data.description} url={`https://safari.flit.tz/wifi/${slug}`} />
      <section className="py-32 bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 text-white text-center">
        <h1 className="text-5xl font-bold">{data.heading}</h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">{data.description}</p>
      </section>
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 text-center space-y-6">
          <p>Reserve your portable WiFi device for {data.heading.toLowerCase()}.</p>
          <a href="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold">Book Now</a>
        </div>
      </section>
    </div>
  );
};

export default WifiLanding;
