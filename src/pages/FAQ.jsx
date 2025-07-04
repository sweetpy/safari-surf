import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, ChevronUp, Search, HelpCircle, Phone, Mail } from 'lucide-react';
import SEO from '../components/SEO';

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openFAQ, setOpenFAQ] = useState(null);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [faqRef, faqInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const faqCategories = {
    'Getting Started': [
      {
        question: 'How do I sign up for Safari Surf WiFi?',
        answer: 'Getting started is easy! Contact us via WhatsApp (+255 764 928 408), email (support@flit.tz), or fill out our contact form. We\'ll schedule a free site survey and get you connected within 24-48 hours.'
      },
      {
        question: 'What do I need to get WiFi installed?',
        answer: 'All you need is a location for our equipment and access to power. We provide all necessary hardware including routers, cables, and antennas. Our technicians handle the complete installation process.'
      },
      {
        question: 'How long does installation take?',
        answer: 'Most residential installations take 2-4 hours. Business installations may take longer depending on the complexity of your setup. We\'ll provide a time estimate during your site survey.'
      },
      {
        question: 'Is there a contract or minimum commitment?',
        answer: 'No long-term contracts required! You can cancel anytime with 30 days notice. However, our yearly plans offer significant savings compared to monthly billing.'
      }
    ],
    'Technical Support': [
      {
        question: 'What speeds can I expect?',
        answer: 'You\'ll get the full advertised speed for your plan. Our network is designed to deliver consistent performance even during peak hours. We regularly monitor and optimize our infrastructure to maintain quality.'
      },
      {
        question: 'What if my internet is slow or not working?',
        answer: 'Contact our 24/7 support team immediately. We provide remote diagnostics and can often resolve issues instantly. If needed, we\'ll dispatch a technician usually within 4 hours for priority issues.'
      },
      {
        question: 'Do you provide WiFi routers?',
        answer: 'Yes! All plans include a high-quality WiFi router suitable for your package. For larger homes or businesses, we may provide additional access points or WiFi extenders at no extra cost.'
      },
      {
        question: 'Can I use my own router?',
        answer: 'Absolutely! You can use your own router if you prefer. Our technicians can help configure it during installation, or you can contact support for assistance anytime.'
      },
      {
        question: 'What happens during power outages?',
        answer: 'Our network infrastructure has backup power systems. Your service will resume immediately when power returns to your location. Consider a UPS for your router to maintain connectivity during short outages.'
      }
    ],
    'Billing & Plans': [
      {
        question: 'How much does Safari Surf WiFi cost?',
        answer: 'Our residential plans start from TSh 25,000/month for 10 Mbps. Business plans begin at TSh 120,000/month. Check our pricing page for detailed plan comparisons and current promotions.'
      },
      {
        question: 'What payment methods do you accept?',
        answer: 'We accept mobile money (M-Pesa, Tigo Pesa, Airtel Money), bank transfers, and cash payments. You can pay monthly, quarterly, or annually for additional savings.'
      },
      {
        question: 'Can I change my plan anytime?',
        answer: 'Yes! Plan upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle. Contact support to change your plan - no fees for plan changes.'
      },
      {
        question: 'Are there any hidden fees?',
        answer: 'No hidden fees! Our pricing is transparent. Installation is free, equipment is included, and there are no surprise charges. You pay exactly what\'s advertised for your chosen plan.'
      },
      {
        question: 'Do you offer student or family discounts?',
        answer: 'Yes! We offer special rates for students with valid ID and family packages for multiple connections. Contact us to learn about current discount programs available in your area.'
      }
    ],
    'Coverage & Availability': [
      {
        question: 'Where is Safari Surf WiFi available?',
        answer: 'We currently serve Dar es Salaam, Arusha, Dodoma, Mwanza, Zanzibar, and Morogoro with full coverage. We\'re expanding to Mbeya, Tanga, Iringa, and Tabora in 2025. Check our coverage page for detailed area maps.'
      },
      {
        question: 'How do I know if service is available at my location?',
        answer: 'Contact us with your specific address and we\'ll check availability immediately. We can often extend service to nearby areas not yet on our coverage maps.'
      },
      {
        question: 'When will you expand to my area?',
        answer: 'We\'re rapidly expanding across Tanzania! Contact us to express interest in your area - high demand locations get prioritized in our expansion plans. We announce new coverage areas monthly.'
      },
      {
        question: 'Do you serve rural areas?',
        answer: 'Yes! We\'re committed to bridging the digital divide. We use advanced wireless technology to reach rural communities and offer special programs for underserved areas.'
      }
    ],
    'Business Solutions': [
      {
        question: 'What makes business plans different?',
        answer: 'Business plans include dedicated bandwidth, static IP addresses, priority support, advanced security features, and service level agreements (SLA) with uptime guarantees.'
      },
      {
        question: 'Can you handle large organizations?',
        answer: 'Absolutely! We serve businesses from small cafes to large corporations. Our enterprise solutions include redundant connections, load balancing, and dedicated account management.'
      },
      {
        question: 'Do you provide guest WiFi for businesses?',
        answer: 'Yes! Our business plans include guest network setup with customizable portals, usage controls, and analytics to help you understand customer behavior and engagement.'
      },
      {
        question: 'What about WiFi for events?',
        answer: 'We provide temporary high-capacity WiFi for events, conferences, and gatherings. Our portable solutions can handle hundreds of simultaneous users with enterprise-grade performance.'
      }
    ]
  };

  const allFAQs = Object.entries(faqCategories).flatMap(([category, faqs]) => 
    faqs.map(faq => ({ ...faq, category }))
  );

  const filteredFAQs = allFAQs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Safari Surf WiFi FAQ - Get Answers to Common Questions"
        description="Find answers about installation, plans and troubleshooting for Safari Surf WiFi services in Tanzania."
        url="https://safari.flit.tz/faq"
        schema={{
          "@context": "https://schema.org",
          "@type": "FAQPage"
        }}
      />
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <HelpCircle className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Find answers to common questions about Safari Surf WiFi services, 
              installation, billing, and technical support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
            <input
              type="text"
              placeholder="Search frequently asked questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-300 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm ? (
            /* Search Results */
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold text-gray-900 mb-8"
              >
                Search Results ({filteredFAQs.length} found)
              </motion.h2>
              
              {filteredFAQs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm text-orange-600 font-medium">{faq.category}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    </div>
                    {openFAQ === index ? (
                      <ChevronUp className="h-6 w-6 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-6 w-6 text-gray-400" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-6"
                    >
                      <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          ) : (
            /* Category-based FAQs */
            <div className="space-y-12">
              {Object.entries(faqCategories).map(([category, faqs], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">{category}</h2>
                  <div className="space-y-4">
                    {faqs.map((faq, faqIndex) => {
                      const globalIndex = categoryIndex * 10 + faqIndex; // Unique index across all FAQs
                      return (
                        <div
                          key={faqIndex}
                          className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                          <button
                            onClick={() => toggleFAQ(globalIndex)}
                            className="w-full px-8 py-6 text-left hover:bg-gray-50 transition-colors flex items-center justify-between"
                          >
                            <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                            {openFAQ === globalIndex ? (
                              <ChevronUp className="h-6 w-6 text-gray-400" />
                            ) : (
                              <ChevronDown className="h-6 w-6 text-gray-400" />
                            )}
                          </button>
                          
                          {openFAQ === globalIndex && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="px-8 pb-6"
                            >
                              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Our support team is available 24/7 to help you with any questions or concerns.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-8 rounded-2xl">
                <Phone className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">WhatsApp Support</h3>
                <p className="mb-6 opacity-90">Get instant help via WhatsApp. Our team responds within minutes.</p>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Message Us Now
                </a>
              </div>

              <div className="bg-gradient-to-br from-orange-500 to-red-600 text-white p-8 rounded-2xl">
                <Mail className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-4">Email Support</h3>
                <p className="mb-6 opacity-90">Send us detailed questions and we'll respond within 2 hours.</p>
                <a
                  href="mailto:support@flit.tz"
                  className="bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-block"
                >
                  Email Us
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;