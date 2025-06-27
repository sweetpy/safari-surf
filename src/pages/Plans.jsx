import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { CheckCircle, X, Star } from 'lucide-react';

export default function Plans() {
  const [billingCycle, setBillingCycle] = useState('standard');

  const plans = [
    {
      name: 'Weekly Plan',
      price: 100,
      duration: '7 days',
      popular: false,
      features: [
        'Unlimited 4G data',
        'Airport pickup & return',
        'Device insurance included',
        '24/7 customer support',
        'Works nationwide',
        'Up to 10 connected devices',
        'Battery life: 12+ hours'
      ],
      limitations: [
        'No international roaming'
      ]
    },
    {
      name: 'Monthly Plan',
      price: 150,
      duration: '30 days',
      popular: true,
      features: [
        'Unlimited 4G data',
        'Airport pickup & return',
        'Device insurance included',
        'Priority 24/7 support',
        'Works nationwide',
        'Up to 15 connected devices',
        'Battery life: 12+ hours',
        'Free device replacement',
        'Express support response'
      ],
      limitations: []
    },
    {
      name: 'Extended Stay',
      price: 250,
      duration: '60 days',
      popular: false,
      features: [
        'Unlimited 4G data',
        'Airport pickup & return',
        'Device insurance included',
        'VIP 24/7 support',
        'Works nationwide',
        'Up to 20 connected devices',
        'Battery life: 12+ hours',
        'Free device replacement',
        'Dedicated account manager',
        'Custom pickup locations'
      ],
      limitations: []
    }
  ];

  const addOns = [
    {
      name: 'Extra Battery Pack',
      price: 20,
      description: 'Additional portable battery for extended usage'
    },
    {
      name: 'Car Charger',
      price: 15,
      description: 'Charge your device on the go during safari drives'
    },
    {
      name: 'Express Delivery',
      price: 25,
      description: 'Same-day delivery to your hotel in Dar es Salaam'
    },
    {
      name: 'Device Insurance Plus',
      price: 30,
      description: 'Enhanced coverage including water damage and theft'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Choose Your Perfect Plan</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Flexible WiFi plans designed for every type of traveler. All plans include unlimited data, 
              nationwide coverage, and our signature airport pickup service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className={`relative h-full ${plan.popular ? 'border-2 border-blue-500 shadow-xl' : 'hover:shadow-lg'} transition-shadow duration-300`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-6 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                      <div className="text-5xl font-bold text-green-600 mb-2">${plan.price}</div>
                      <p className="text-gray-600">{plan.duration} of unlimited internet</p>
                    </div>

                    <div className="space-y-4 mb-8">
                      <h4 className="font-semibold text-gray-900">What's included:</h4>
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                      
                      {plan.limitations.length > 0 && (
                        <>
                          <h4 className="font-semibold text-gray-900 mt-6">Limitations:</h4>
                          {plan.limitations.map((limitation, idx) => (
                            <div key={idx} className="flex items-start">
                              <X className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-600">{limitation}</span>
                            </div>
                          ))}
                        </>
                      )}
                    </div>

                    <Button 
                      className={`w-full py-3 ${plan.popular 
                        ? 'bg-blue-600 hover:bg-blue-700' 
                        : 'bg-green-600 hover:bg-green-700'
                      } text-white`}
                    >
                      Choose {plan.name}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Deposit Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12"
          >
            <Card className="bg-orange-50 border-orange-200">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-orange-800 mb-4">Security Deposit</h3>
                <div className="text-4xl font-bold text-orange-600 mb-4">$50</div>
                <p className="text-orange-700 mb-4">
                  A refundable security deposit is required for all plans. This deposit is fully refunded 
                  upon the safe return of your WiFi device in good condition.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>100% refundable</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Instant refund process</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    <span>Multiple payment methods</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Enhance Your Experience</h2>
            <p className="text-xl text-gray-600">Optional add-ons to make your trip even better</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                      <div className="text-2xl font-bold text-green-600">${addon.price}</div>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                    <Button variant="outline" className="w-full">
                      Add to Plan
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Can I change my plan after booking?',
                answer: 'Yes, you can upgrade your plan at any time. Downgrades are subject to availability and may incur fees.'
              },
              {
                question: 'What happens if I lose or damage the device?',
                answer: 'Device insurance is included with all plans. For standard damage, there\'s no additional charge. For loss or severe damage, the security deposit covers replacement costs.'
              },
              {
                question: 'How fast is the internet speed?',
                answer: 'Our devices provide 4G LTE speeds with typical download speeds of 10-50 Mbps, depending on location and network conditions.'
              },
              {
                question: 'Can I use the device outside Tanzania?',
                answer: 'Our standard plans work only within Tanzania. International roaming is available as a custom add-on for specific countries.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}