import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  DollarSign, 
  TrendingUp, 
  Calendar, 
  Users, 
  MapPin, 
  Utensils,
  Bed,
  Car,
  Camera,
  CheckCircle,
  AlertTriangle,
  Download,
  Phone,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SafariCosts = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [breakdownRef, breakdownInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [factorsRef, factorsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [tipsRef, tipsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const safariTypes = [
    {
      type: 'Budget Safari',
      duration: '3-5 days',
      priceRange: '$500 - $800',
      pricePerDay: '$150 - $200',
      accommodation: 'Camping/Basic lodges',
      transport: 'Shared vehicles',
      meals: 'Basic meals',
      highlights: ['Ngorongoro Crater', 'Tarangire', 'Basic game drives'],
      includes: ['Park fees', 'Basic accommodation', 'Meals', 'Transport'],
      excludes: ['Tips', 'Drinks', 'Personal items'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      type: 'Mid-Range Safari',
      duration: '5-7 days',
      priceRange: '$1,200 - $2,500',
      pricePerDay: '$250 - $400',
      accommodation: 'Mid-range lodges/tented camps',
      transport: 'Private/small group vehicles',
      meals: 'Good quality meals',
      highlights: ['Serengeti', 'Ngorongoro', 'Tarangire', 'Cultural visits'],
      includes: ['All park fees', 'Lodge accommodation', 'All meals', 'Game drives', 'Airport transfers'],
      excludes: ['International flights', 'Tips', 'Optional activities'],
      color: 'from-orange-500 to-red-600',
      popular: true
    },
    {
      type: 'Luxury Safari',
      duration: '6-10 days',
      priceRange: '$3,500 - $8,000+',
      pricePerDay: '$500 - $1,000+',
      accommodation: 'Luxury lodges/exclusive camps',
      transport: 'Private vehicles/planes',
      meals: 'Gourmet dining',
      highlights: ['Premium locations', 'Private guides', 'Hot air balloon', 'Spa treatments'],
      includes: ['Everything', 'Premium accommodation', 'Private guides', 'Flights between parks', 'All activities'],
      excludes: ['International flights', 'Premium drinks', 'Personal shopping'],
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const costFactors = [
    {
      icon: Calendar,
      title: 'Season & Timing',
      description: 'Peak season (June-October) costs 30-50% more than low season',
      impact: 'High',
      tips: ['Visit in shoulder seasons (March-May, November) for better prices', 'Book early for peak season discounts']
    },
    {
      icon: Users,
      title: 'Group Size',
      description: 'Smaller groups mean higher per-person costs due to shared expenses',
      impact: 'High',
      tips: ['Groups of 4-6 people offer the best value', 'Solo travelers pay significant premiums']
    },
    {
      icon: MapPin,
      title: 'Parks & Destinations',
      description: 'Some parks have higher entrance fees and accommodation costs',
      impact: 'Medium',
      tips: ['Serengeti and Ngorongoro are most expensive', 'Tarangire and Lake Manyara are more budget-friendly']
    },
    {
      icon: Bed,
      title: 'Accommodation Level',
      description: 'Accommodation is often the biggest variable in safari costs',
      impact: 'Very High',
      tips: ['Camping can save 60-70% on accommodation', 'Mid-range lodges offer good value for comfort']
    },
    {
      icon: Car,
      title: 'Transport & Vehicle',
      description: 'Private vehicles cost more but offer flexibility and comfort',
      impact: 'Medium',
      tips: ['Shared vehicles reduce costs significantly', 'Flying between parks saves time but adds cost']
    },
    {
      icon: Utensils,
      title: 'Meals & Drinks',
      description: 'Full board vs. limited meal plans affect total costs',
      impact: 'Medium',
      tips: ['All-inclusive packages often provide better value', 'Alcohol and premium drinks cost extra']
    }
  ];

  const budgetBreakdown = [
    { category: 'Park Fees', percentage: 25, amount: '$50-80/day', description: 'Entry fees for national parks and conservation areas' },
    { category: 'Accommodation', percentage: 35, amount: '$30-500/night', description: 'From camping to luxury lodges' },
    { category: 'Transport & Fuel', percentage: 20, amount: '$40-150/day', description: 'Vehicle rental, driver, fuel costs' },
    { category: 'Meals', percentage: 10, amount: '$20-100/day', description: 'All meals during safari' },
    { category: 'Guide & Tips', percentage: 5, amount: '$10-30/day', description: 'Professional guide services' },
    { category: 'Other Expenses', percentage: 5, amount: '$10-50/day', description: 'Activities, drinks, souvenirs' }
  ];

  const savingTips = [
    {
      title: 'Travel in Low Season',
      description: 'Visit during April-May or November for significantly lower prices',
      savings: 'Save 30-50%'
    },
    {
      title: 'Join Group Safaris',
      description: 'Share costs with other travelers instead of private tours',
      savings: 'Save 40-60%'
    },
    {
      title: 'Choose Camping',
      description: 'Opt for camping or budget lodges over luxury accommodations',
      savings: 'Save 60-70%'
    },
    {
      title: 'Book Locally',
      description: 'Book with local operators instead of international tour companies',
      savings: 'Save 20-30%'
    },
    {
      title: 'Shorter Duration',
      description: 'Focus on fewer parks but spend more time in each',
      savings: 'Save 25-40%'
    },
    {
      title: 'Self-Drive Options',
      description: 'Rent a vehicle and guide yourself (where permitted)',
      savings: 'Save 30-50%'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tanzania Safari Costs 2025 - Complete Pricing Guide & Budget Calculator</title>
        <meta name="description" content="Complete guide to Tanzania safari costs 2025. Budget breakdown, pricing factors, money-saving tips. Plan your dream safari within budget. Free cost calculator included." />
        <meta name="keywords" content="Tanzania safari cost, safari prices, budget safari Tanzania, luxury safari cost, Serengeti cost, safari budget calculator, Tanzania travel cost" />
        <link rel="canonical" href="https://tanzaniatravelhub.com/guides/tanzania-safari-cost" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative pt-32 pb-20 bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
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
              <DollarSign className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Tanzania Safari Costs
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-8">
                Complete guide to safari pricing, budget breakdown, and money-saving tips 
                to help you plan your perfect Tanzania adventure within budget.
              </p>

              {/* Quick Cost Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold text-yellow-300">$500-800</div>
                  <div className="text-orange-100">Budget Safari</div>
                  <div className="text-sm text-gray-200">3-5 days</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold text-yellow-300">$1,200-2,500</div>
                  <div className="text-orange-100">Mid-Range Safari</div>
                  <div className="text-sm text-gray-200">5-7 days</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-3xl font-bold text-yellow-300">$3,500+</div>
                  <div className="text-orange-100">Luxury Safari</div>
                  <div className="text-sm text-gray-200">6-10 days</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Safari Types & Pricing */}
        <section ref={breakdownRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={breakdownInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Safari Types & Pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose the safari style that fits your budget and travel preferences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {safariTypes.map((safari, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={breakdownInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                    safari.popular ? 'ring-2 ring-orange-500 scale-105' : ''
                  }`}
                >
                  {safari.popular && (
                    <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                      Most Popular Choice
                    </div>
                  )}
                  
                  <div className={`h-32 bg-gradient-to-r ${safari.color} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <div className="text-2xl font-bold">{safari.type}</div>
                      <div className="text-orange-100">{safari.duration}</div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-gray-900">{safari.priceRange}</div>
                      <div className="text-gray-600">Total cost per person</div>
                      <div className="text-lg font-semibold text-orange-600 mt-2">{safari.pricePerDay}/day</div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Accommodation:</span>
                        <span className="text-gray-900">{safari.accommodation}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Transport:</span>
                        <span className="text-gray-900">{safari.transport}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Meals:</span>
                        <span className="text-gray-900">{safari.meals}</span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Typically Includes:</h4>
                      <ul className="space-y-2">
                        {safari.includes.map((item, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Usually Excludes:</h4>
                      <ul className="space-y-2">
                        {safari.excludes.map((item, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <AlertTriangle className="h-4 w-4 text-orange-500" />
                            <span className="text-gray-700 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link
                      to="/booking"
                      className="w-full bg-gray-900 text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-800 transition-colors text-center block"
                    >
                      Get Quote
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Breakdown */}
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
                Where Your Money Goes
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding the cost breakdown helps you budget effectively and spot good value
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                {budgetBreakdown.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className="w-16 text-right">
                      <div className="text-2xl font-bold text-orange-600">{item.percentage}%</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{item.category}</h3>
                        <span className="text-orange-600 font-semibold">{item.amount}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                        <div 
                          className="bg-orange-600 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Safari cost breakdown"
                  className="rounded-2xl shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-xl font-bold mb-2">Pro Tip</h3>
                  <p className="text-sm text-gray-200">
                    Accommodation is often the biggest variable. Choose your comfort level wisely to control costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cost Factors */}
        <section ref={factorsRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={factorsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Affects Safari Costs?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Key factors that influence your total safari budget
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {costFactors.map((factor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={factorsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <factor.icon className="h-6 w-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{factor.title}</h3>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        factor.impact === 'Very High' ? 'bg-red-100 text-red-800' :
                        factor.impact === 'High' ? 'bg-orange-100 text-orange-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {factor.impact} Impact
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{factor.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Money-Saving Tips:</h4>
                    <ul className="space-y-1">
                      {factor.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="text-sm text-gray-600 flex items-start space-x-2">
                          <div className="w-1 h-1 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Money-Saving Tips */}
        <section ref={tipsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={tipsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How to Save Money on Safari
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Expert tips to reduce costs without compromising your safari experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {savingTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={tipsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">{tip.title}</h3>
                    <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      {tip.savings}
                    </span>
                  </div>
                  <p className="text-gray-700">{tip.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Resources */}
        <section className="py-20 bg-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Free Safari Budget Calculator
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Download our comprehensive budget planning tools to calculate your exact safari costs and compare options.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      'Interactive cost calculator spreadsheet',
                      'Price comparison charts by season',
                      'Money-saving checklist',
                      'Sample budgets for different safari styles'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Download className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center space-x-2">
                    <Download className="h-5 w-5" />
                    <span>Download Free Calculator</span>
                  </button>
                </div>

                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/1068738/pexels-photo-1068738.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Safari budget planning"
                    className="rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="h-6 w-6" />
                      <div>
                        <div className="font-bold">Save 30%</div>
                        <div className="text-sm text-orange-100">Average savings</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                Ready to Plan Your Safari?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Get a personalized quote based on your budget, dates, and preferences. 
                Our experts will help you get the best value for your money.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/booking"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Get Custom Quote</span>
                </Link>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp Expert</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SafariCosts;