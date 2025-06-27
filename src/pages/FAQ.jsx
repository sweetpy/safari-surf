import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';
import { Input } from '../components/ui/input';

export default function FAQ() {
  const [openItems, setOpenItems] = useState({});
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqCategories = [
    {
      category: 'Booking & Pricing',
      questions: [
        {
          question: 'How do I book a WiFi device?',
          answer: 'You can book online through our website, call us at +255 764 928 408, or WhatsApp us. We recommend booking at least 24 hours before your arrival for guaranteed availability.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and mobile money (M-Pesa, Tigo Pesa, Airtel Money).'
        },
        {
          question: 'Can I modify or cancel my booking?',
          answer: 'Yes, you can modify or cancel your booking up to 24 hours before pickup without any charges. Cancellations within 24 hours may incur a 25% fee.'
        },
        {
          question: 'Are there any hidden fees?',
          answer: 'No hidden fees! Our pricing is transparent. You only pay the plan cost plus a refundable $50 security deposit. Additional charges only apply for damage or loss.'
        }
      ]
    },
    {
      category: 'Device & Service',
      questions: [
        {
          question: 'How many devices can connect to the WiFi?',
          answer: 'Our devices support up to 10-20 simultaneous connections depending on your plan. Weekly plans support up to 10 devices, while monthly and extended plans support up to 15-20 devices.'
        },
        {
          question: 'What is the internet speed?',
          answer: 'You can expect 4G LTE speeds with typical download speeds of 10-50 Mbps, depending on your location and network conditions. Urban areas generally have faster speeds.'
        },
        {
          question: 'How long does the battery last?',
          answer: 'Our devices have a battery life of 12+ hours with normal usage. We also provide chargers and recommend charging overnight for all-day use.'
        },
        {
          question: 'What if the device stops working?',
          answer: 'Contact our 24/7 support immediately. We provide free device replacement within 2-4 hours in major cities, or next-day replacement in remote areas.'
        }
      ]
    },
    {
      category: 'Coverage & Usage',
      questions: [
        {
          question: 'Where does the WiFi work in Tanzania?',
          answer: 'Our devices work nationwide with 95% coverage. This includes all major cities, tourist destinations, national parks, and most safari lodges. Coverage may be limited in very remote areas.'
        },
        {
          question: 'Does it work in national parks?',
          answer: 'Yes! We have good coverage in Serengeti, Ngorongoro, Tarangire, Lake Manyara, and other major parks. Coverage is strongest at lodges and main roads.'
        },
        {
          question: 'Is there a data limit?',
          answer: 'No, all our plans include unlimited data. However, after 50GB of usage per day, speeds may be reduced during peak hours to ensure fair usage for all customers.'
        },
        {
          question: 'Can I use it for video calls and streaming?',
          answer: 'Absolutely! Our high-speed connection supports video calls, streaming, and all internet activities. Quality may vary based on location and network conditions.'
        }
      ]
    },
    {
      category: 'Pickup & Return',
      questions: [
        {
          question: 'Where can I pick up the device?',
          answer: 'Primary pickup is at Julius Nyerere International Airport. We also offer pickup at hotels in Dar es Salaam, Arusha, and Zanzibar for an additional fee.'
        },
        {
          question: 'What if my flight is delayed?',
          answer: 'No problem! Just inform us of the delay. Our airport pickup service operates 24/7, and we\'ll adjust the pickup time accordingly at no extra charge.'
        },
        {
          question: 'How do I return the device?',
          answer: 'Return at the airport before departure, at any of our offices, or arrange pickup from your hotel. We provide prepaid return envelopes for convenience.'
        },
        {
          question: 'What happens if I forget to return the device?',
          answer: 'Contact us immediately. You can ship it back using our prepaid envelope, or we can arrange international pickup. Additional charges may apply for extended usage.'
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((q, questionIndex) => ({
      ...q,
      category: category.category,
      index: `${categoryIndex}-${questionIndex}`
    }))
  );

  const filteredQuestions = searchTerm
    ? allQuestions.filter(
        q =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allQuestions;

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
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Find answers to common questions about our WiFi rental service. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search for answers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {searchTerm ? (
            // Search Results
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Search Results ({filteredQuestions.length})
              </h2>
              <div className="space-y-4">
                {filteredQuestions.map((item, index) => (
                  <motion.div
                    key={item.index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                  >
                    <Card>
                      <CardContent className="p-0">
                        <button
                          onClick={() => toggleItem(item.index)}
                          className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="text-sm text-green-600 font-medium mb-1">
                                {item.category}
                              </div>
                              <h3 className="text-lg font-semibold text-gray-900 pr-8">
                                {item.question}
                              </h3>
                            </div>
                            {openItems[item.index] ? (
                              <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        {openItems[item.index] && (
                          <div className="px-6 pb-6">
                            <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            // Categorized FAQ
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                >
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">{category.category}</h2>
                  <div className="space-y-4">
                    {category.questions.map((item, questionIndex) => {
                      const itemIndex = `${categoryIndex}-${questionIndex}`;
                      return (
                        <Card key={questionIndex}>
                          <CardContent className="p-0">
                            <button
                              onClick={() => toggleItem(itemIndex)}
                              className="w-full text-left p-6 hover:bg-gray-50 transition-colors duration-200"
                            >
                              <div className="flex justify-between items-start">
                                <h3 className="text-lg font-semibold text-gray-900 pr-8">
                                  {item.question}
                                </h3>
                                {openItems[itemIndex] ? (
                                  <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                                ) : (
                                  <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                                )}
                              </div>
                            </button>
                            {openItems[itemIndex] && (
                              <div className="px-6 pb-6">
                                <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-green-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Still Have Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our support team is available 24/7 to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+255764928408"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-colors duration-200"
            >
              Call +255 764 928 408
            </a>
            <a
              href="mailto:support@flit.tz"
              className="inline-flex items-center justify-center px-6 py-3 border border-green-600 text-base font-medium rounded-md text-green-600 bg-white hover:bg-green-50 transition-colors duration-200"
            >
              Email Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}