import React from 'react';
import SEO from '../../components/SEO';

const HowToPickup = () => (
  <div className="min-h-screen p-8 max-w-3xl mx-auto prose">
    <SEO
      title="How to Pick Up Your WiFi Device in Tanzania"
      description="Step-by-step instructions for collecting your Safari Surf WiFi rental at the airport or in town."
      url="https://safari.flit.tz/faq/how-to-pickup-your-device"
      type="article"
      schema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where do I collect my device?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Meet our representative at the arrivals hall or arrange a hotel delivery."
            }
          }
        ]
      }}
    />
    <h1>How to Pick Up Your Device</h1>
    <p>
      After booking, you'll receive a confirmation email with pickup details. Our
      team meets you in the arrivals area with your device ready to go.
    </p>
  </div>
);

export default HowToPickup;
