import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle, X, Star, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [plansRef, plansInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const plans = {
    residential: [
      {
        name: 'Basic',
        speed: '10 Mbps',
        price: { monthly: 25000, yearly: 270000 },
        features: [
          'Up to 10 Mbps download speed',
          'Unlimited data usage',
          'Free installation',
          'Basic email support',
          'Suitable for 1-2 devices'
        ],
        notIncluded: [
          'Priority support',
          'Advanced security features'
        ],
        popular: false,
        color: 'from-blue-500 to-cyan-500'
      },
      {
        name: 'Standard',
        speed: '50 Mbps',
        price: { monthly: 45000, yearly: 486000 },
        features: [
          'Up to 50 Mbps download speed',
          'Unlimited data usage',
          'Free installation & setup',
          '24/7 phone support',
          'Suitable for 3-5 devices',
          'Basic security package'
        ],
        notIncluded: [
          'Premium security features',
          'Business-grade SLA'
        ],
        popular: true,
        color: 'from-orange-500 to-red-500'
      },
      {
        name: 'Premium',
        speed: '100 Mbps',
        price: { monthly: 75000, yearly: 810000 },
        features: [
          'Up to 100 Mbps download speed',
          'Unlimited data usage',
          'Free installation & configuration',
          'Priority 24/7 support',
          'Suitable for 6-10 devices',
          'Advanced security package',
          'Free WiFi extender'
        ],
        notIncluded: [],
        popular: false,
        color: 'from-purple-500 to-pink-500'
      }
    ],
    business: [
      {
        name: 'Startup',
        speed: '100 Mbps',
        price: { monthly: 120000, yearly: 1296000 },
        features: [
          'Up to 100 Mbps dedicated bandwidth',
          'Unlimited data usage',
          'Professional installation',
          'Business-grade support',
          'Static IP address',
          'Basic firewall protection'
        ],
        notIncluded: [
          'Advanced security features',
          'Load balancing'
        ],
        popular: false,
        color: 'from-green-500 to-emerald-500'
      },
      {
        name: 'Professional',
        speed: '500 Mbps',
        price: { monthly: 250000, yearly: 2700000 },
        features: [
          'Up to 500 Mbps dedicated bandwidth',
          'Unlimited data usage',
          'Expert installation & setup',
          'Priority business support',
          'Multiple static IP addresses',
          'Advanced firewall & security',
          'Load balancing',
          '99.9% uptime SLA'
        ],
        notIncluded: [],
        popular: true,
        color: 'from-orange-500 to-red-500'
      },
      {
        name: 'Enterprise',
        speed: '1 Gbps+',
        price: { monthly: 'Custom', yearly: 'Custom' },
        features: [
          'Up to 1 Gbps+ dedicated bandwidth',
          'Unlimited data usage',
          'White-glove installation',
          'Dedicated account manager',
          'Custom IP allocation',
          'Enterprise security suite',
          'Redundancy & failover',
          '99.99% uptime SLA',
          'Custom solutions'
        ],
        notIncluded: [],
        popular: false,
        color: 'from-purple-500 to-pink-500'
      }
    ]
  };

  const [selectedCategory, setSelectedCategory] = useState('residential');

  const formatPrice = (price) => {
    if (typeof price === 'string') return price;
    return `TSh ${price.toLocaleString()}`;
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Safari Surf WiFi Pricing - Affordable Internet Plans"
        description="Compare our daily, weekly and monthly portable WiFi rental prices."
        url="https://safari.flit.tz/pricing"
        schema={{
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Portable WiFi Rental",
          "offers": { "@type": "Offer", "priceCurrency": "USD", "price": "4.85" }
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
            backgroundImage: 'url("https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
              Choose the perfect WiFi plan for your needs. No hidden fees, no surprises.
            </p>
            
            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`${billingCycle === 'monthly' ? 'text-white' : 'text-white/70'}`}>Monthly</span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`${billingCycle === 'yearly' ? 'text-white' : 'text-white/70'}`}>
                Yearly <span className="text-yellow-300 text-sm">(Save 10%)</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Selection */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-full">
              <button
                onClick={() => setSelectedCategory('residential')}
                className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === 'residential'
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                Residential Plans
              </button>
              <button
                onClick={() => setSelectedCategory('business')}
                className={`px-8 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === 'business'
                    ? 'bg-orange-600 text-white'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
              >
                Business Plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section ref={plansRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans[selectedCategory].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={plansInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                    <Star className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className={`h-32 bg-gradient-to-r ${plan.color} flex items-center justify-center ${plan.popular ? 'mt-10' : ''}`}>
                  <div className="text-center">
                    <Zap className="h-12 w-12 text-white mx-auto mb-2" />
                    <div className="text-white font-bold text-lg">{plan.speed}</div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  
                  <div className="mb-6">
                    <div className="text-4xl font-bold text-gray-900">
                      {formatPrice(plan.price[billingCycle])}
                    </div>
                    {typeof plan.price[billingCycle] !== 'string' && (
                      <div className="text-gray-600">
                        per {billingCycle === 'monthly' ? 'month' : 'year'}
                      </div>
                    )}
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3 opacity-50">
                        <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-500 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2 group ${
                      plan.popular
                        ? 'bg-orange-600 text-white hover:bg-orange-700'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Pricing FAQs
            </h2>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                question: 'Are there any setup fees?',
                answer: 'No! Installation and setup are completely free for all our plans. Our technicians will visit your location and get you connected at no extra cost.'
              },
              {
                question: 'Can I upgrade or downgrade my plan?',
                answer: 'Absolutely! You can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the start of your next billing cycle.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept mobile money (M-Pesa, Tigo Pesa, Airtel Money), bank transfers, and cash payments. Monthly and yearly billing options are available.'
              },
              {
                question: 'Is there a contract or commitment?',
                answer: 'No long-term contracts required! You can cancel your service at any time with 30 days notice. However, yearly plans offer better value.'
              },
              {
                question: 'What happens if I exceed my speed limit?',
                answer: 'Our plans come with unlimited data at the advertised speeds. We don\'t throttle or charge extra fees for usage.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Connected?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Choose your plan and get high-speed WiFi installed within 24 hours!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <span>Order Now</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/255764928408"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Questions? WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;