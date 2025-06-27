import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  AlertCircle, 
  Plane, 
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Download,
  Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';

const VisaGuide = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [requirementsRef, requirementsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const visaTypes = [
    {
      type: 'Tourist Visa',
      validity: '90 days',
      fee: '$50 USD',
      description: 'For tourism, visiting friends/family, and leisure activities',
      requirements: ['Passport valid for 6+ months', 'Return flight ticket', 'Hotel booking confirmation', 'Yellow fever certificate (if required)']
    },
    {
      type: 'Business Visa',
      validity: '90 days',
      fee: '$250 USD',
      description: 'For business meetings, conferences, and commercial activities',
      requirements: ['Business invitation letter', 'Company registration', 'Bank statements', 'Travel itinerary']
    },
    {
      type: 'Transit Visa',
      validity: '7 days',
      fee: '$30 USD',
      description: 'For travelers passing through Tanzania to another destination',
      requirements: ['Onward ticket', 'Visa for final destination', 'Passport copy', 'Transit itinerary']
    }
  ];

  const applicationMethods = [
    {
      method: 'Online (eVisa)',
      processingTime: '3-10 business days',
      advantages: ['Convenient', 'Faster processing', 'Pay online', 'Get approval before travel'],
      steps: ['Fill online application', 'Upload required documents', 'Pay visa fee', 'Receive eVisa via email']
    },
    {
      method: 'On Arrival',
      processingTime: '30-60 minutes',
      advantages: ['No advance planning', 'Direct at airport', 'Immediate processing'],
      steps: ['Fill arrival form', 'Present documents', 'Pay cash (USD)', 'Receive visa stamp']
    },
    {
      method: 'Embassy/Consulate',
      processingTime: '5-15 business days',
      advantages: ['Personal assistance', 'Document verification', 'Multiple entry options'],
      steps: ['Submit application', 'Attend interview (if required)', 'Pay fees', 'Collect passport']
    }
  ];

  const exemptCountries = [
    'Kenya', 'Uganda', 'Rwanda', 'Burundi', 'Democratic Republic of Congo',
    'Zambia', 'Malawi', 'Mozambique', 'Zimbabwe', 'Botswana', 'Namibia',
    'South Africa', 'Lesotho', 'Swaziland', 'Madagascar', 'Mauritius', 'Seychelles'
  ];

  const importantTips = [
    {
      icon: Clock,
      title: 'Apply Early',
      tip: 'Apply for your visa at least 2 weeks before travel to avoid delays'
    },
    {
      icon: DollarSign,
      title: 'USD Cash Required',
      tip: 'Bring crisp USD bills for visa on arrival. Old or damaged bills may be rejected'
    },
    {
      icon: Plane,
      title: 'Yellow Fever Certificate',
      tip: 'Required if traveling from yellow fever endemic countries or recent transit'
    },
    {
      icon: FileText,
      title: 'Document Copies',
      tip: 'Keep copies of all documents separate from originals while traveling'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tanzania Visa Guide 2025 - Requirements, Application Process & Fees | Complete Guide</title>
        <meta name="description" content="Complete Tanzania visa guide: requirements, application process, fees, and processing times. eVisa, visa on arrival, and embassy options. Get your Tanzania visa hassle-free." />
        <meta name="keywords" content="Tanzania visa, Tanzania visa requirements, Tanzania eVisa, visa on arrival Tanzania, Tanzania visa application, Tanzania visa fees, Tanzania visa guide 2025" />
        <link rel="canonical" href="https://tanzaniatravelhub.com/guides/visa-to-tanzania" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/3155830/pexels-photo-3155830.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
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
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                <FileText className="h-6 w-6 text-blue-300" />
                <span className="text-blue-100">Updated for 2025</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Tanzania Visa Guide
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Everything you need to know about getting a visa for Tanzania. 
                Requirements, application process, fees, and expert tips.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Facts */}
        <section className="py-16 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="bg-green-50 p-6 rounded-2xl">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">eVisa Available</h3>
                <p className="text-gray-600 text-sm">Apply online from anywhere</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">3-10 Days</h3>
                <p className="text-gray-600 text-sm">Processing time for eVisa</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl">
                <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">$50 USD</h3>
                <p className="text-gray-600 text-sm">Tourist visa fee</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl">
                <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">90 Days</h3>
                <p className="text-gray-600 text-sm">Maximum stay duration</p>
              </div>
            </div>
          </div>
        </section>

        {/* Visa Types */}
        <section ref={requirementsRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={requirementsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Types of Tanzania Visas
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the right visa type based on your purpose of visit
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {visaTypes.map((visa, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={requirementsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{visa.type}</h3>
                    <div className="text-3xl font-bold text-blue-600 mb-2">{visa.fee}</div>
                    <div className="text-gray-600">Valid for {visa.validity}</div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{visa.description}</p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Requirements:</h4>
                    {visa.requirements.map((req, reqIndex) => (
                      <div key={reqIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-sm text-gray-700">{req}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Methods */}
        <section ref={processRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={processInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How to Apply
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Three convenient ways to get your Tanzania visa
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {applicationMethods.map((method, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`bg-gradient-to-br p-8 rounded-2xl text-white ${
                    index === 0 ? 'from-blue-500 to-cyan-600' :
                    index === 1 ? 'from-orange-500 to-red-600' :
                    'from-purple-500 to-indigo-600'
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{method.method}</h3>
                  <div className="text-blue-100 mb-6">Processing: {method.processingTime}</div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Advantages:</h4>
                    <ul className="space-y-2">
                      {method.advantages.map((advantage, advIndex) => (
                        <li key={advIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4" />
                          <span className="text-sm">{advantage}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Steps:</h4>
                    <ol className="space-y-2">
                      {method.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start space-x-2">
                          <span className="flex-shrink-0 w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs font-bold">
                            {stepIndex + 1}
                          </span>
                          <span className="text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visa Exempt Countries */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Visa-Free Entry
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Citizens of these African countries don't need a visa for Tanzania
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {exemptCountries.map((country, index) => (
                  <div key={index} className="flex items-center space-x-2 p-3 rounded-lg bg-green-50">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-gray-800 font-medium">{country}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                <p className="text-blue-800 text-sm">
                  <strong>Note:</strong> Visa-free entry allows stays up to 90 days for tourism or business purposes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Tips */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Important Tips
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Essential advice to ensure a smooth visa application process
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {importantTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-orange-50 to-yellow-50 p-6 rounded-2xl text-center"
                >
                  <tip.icon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{tip.title}</h3>
                  <p className="text-gray-700 text-sm">{tip.tip}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                {
                  question: "Can I extend my Tanzania visa?",
                  answer: "Yes, tourist visas can be extended for up to 90 days at immigration offices in Dar es Salaam, Arusha, or Zanzibar. Extension fees apply and you must apply before your current visa expires."
                },
                {
                  question: "Do I need a yellow fever vaccination?",
                  answer: "Yellow fever vaccination is required if you're traveling from or have transited through a yellow fever endemic country. Check WHO recommendations for your country of origin."
                },
                {
                  question: "Can I get a multiple entry visa?",
                  answer: "Yes, multiple entry visas are available for business purposes and cost $250 USD. They're valid for 12 months and allow multiple entries of up to 90 days each."
                },
                {
                  question: "What if my visa application is rejected?",
                  answer: "Visa rejections are rare if all requirements are met. Common reasons include incomplete documentation or insufficient funds. You can reapply after addressing the issues."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-8 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Need Help with Your Visa?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our travel experts can assist you with visa applications and answer 
                any questions about Tanzania entry requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp Support</span>
                </a>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors flex items-center space-x-2"
                >
                  <Mail className="h-5 w-5" />
                  <span>Email Us</span>
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto">
                <h3 className="font-semibold mb-3 flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Free Download</span>
                </h3>
                <p className="text-purple-100 text-sm mb-4">
                  Get our complete Tanzania visa checklist and application guide
                </p>
                <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Download Guide (PDF)
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VisaGuide;