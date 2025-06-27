import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Sun, 
  Cloud, 
  CloudRain, 
  Calendar, 
  Thermometer, 
  Camera, 
  Mountain,
  Waves,
  TreePine,
  DollarSign,
  Users,
  CheckCircle,
  AlertCircle,
  Phone,
  Download
} from 'lucide-react';

const BestTime = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [seasonsRef, seasonsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activitiesRef, activitiesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const seasons = [
    {
      name: "Dry Season",
      period: "June - October",
      icon: Sun,
      temperature: "20-30°C",
      rainfall: "Minimal",
      highlights: [
        "Best wildlife viewing",
        "Clear skies for Kilimanjaro",
        "Great for photography",
        "Comfortable temperatures"
      ],
      cons: [
        "Peak tourist season",
        "Higher prices",
        "Crowded parks"
      ],
      bestFor: ["Safari", "Kilimanjaro climbing", "Photography"],
      color: "from-yellow-500 to-orange-500",
      recommendation: "Excellent"
    },
    {
      name: "Short Dry Season",
      period: "December - February",
      icon: Sun,
      temperature: "25-32°C",
      rainfall: "Low",
      highlights: [
        "Calving season in Serengeti",
        "Great weather",
        "Fewer crowds",
        "Good wildlife viewing"
      ],
      cons: [
        "Can be quite hot",
        "Limited green vegetation"
      ],
      bestFor: ["Safari", "Beach activities", "Cultural tours"],
      color: "from-orange-500 to-red-500",
      recommendation: "Very Good"
    },
    {
      name: "Long Rains",
      period: "March - May",
      icon: CloudRain,
      temperature: "22-28°C",
      rainfall: "Heavy",
      highlights: [
        "Lush green landscapes",
        "Lower prices",
        "Fewer tourists",
        "Great for photography"
      ],
      cons: [
        "Some roads impassable",
        "Wildlife dispersed",
        "Cloudy skies"
      ],
      bestFor: ["Budget travel", "Photography", "Cultural experiences"],
      color: "from-blue-500 to-green-500",
      recommendation: "Good"
    },
    {
      name: "Short Rains",
      period: "November",
      icon: Cloud,
      temperature: "24-30°C",
      rainfall: "Moderate",
      highlights: [
        "Green landscapes",
        "Good wildlife viewing",
        "Pleasant temperatures",
        "Lower prices"
      ],
      cons: [
        "Unpredictable weather",
        "Some afternoon showers"
      ],
      bestFor: ["Safari", "Flexible travelers", "Budget-conscious"],
      color: "from-green-500 to-blue-500",
      recommendation: "Good"
    }
  ];

  const activities = [
    {
      activity: "Safari (Serengeti & Ngorongoro)",
      bestTime: "June - October",
      details: "Dry season offers the best wildlife viewing as animals gather around water sources",
      icon: Camera
    },
    {
      activity: "Kilimanjaro Climbing",
      bestTime: "June - October, December - February",
      details: "Clear skies and dry conditions provide the best summit success rates",
      icon: Mountain
    },
    {
      activity: "Zanzibar Beach Holiday",
      bestTime: "June - October, December - February",
      details: "Dry seasons offer the best beach weather with minimal rainfall",
      icon: Waves
    },
    {
      activity: "Great Migration",
      bestTime: "December - July",
      details: "Follow the herds from Serengeti calving grounds to Masai Mara river crossings",
      icon: TreePine
    }
  ];

  const monthlyGuide = [
    { month: "January", weather: "Hot & Dry", wildlife: "Excellent", crowds: "High", prices: "High" },
    { month: "February", weather: "Hot & Dry", wildlife: "Excellent", crowds: "High", prices: "High" },
    { month: "March", weather: "Warm & Wet", wildlife: "Good", crowds: "Low", prices: "Low" },
    { month: "April", weather: "Warm & Wet", wildlife: "Fair", crowds: "Low", prices: "Low" },
    { month: "May", weather: "Cool & Wet", wildlife: "Fair", crowds: "Low", prices: "Low" },
    { month: "June", weather: "Cool & Dry", wildlife: "Excellent", crowds: "Medium", prices: "Medium" },
    { month: "July", weather: "Cool & Dry", wildlife: "Excellent", crowds: "High", prices: "High" },
    { month: "August", weather: "Cool & Dry", wildlife: "Excellent", crowds: "High", prices: "High" },
    { month: "September", weather: "Warm & Dry", wildlife: "Excellent", crowds: "High", prices: "High" },
    { month: "October", weather: "Warm & Dry", wildlife: "Very Good", crowds: "Medium", prices: "Medium" },
    { month: "November", weather: "Warm & Wet", wildlife: "Good", crowds: "Low", prices: "Low" },
    { month: "December", weather: "Hot & Dry", wildlife: "Very Good", crowds: "Medium", prices: "Medium" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Excellent': case 'Very Good': return 'text-green-600 bg-green-100';
      case 'Good': return 'text-yellow-600 bg-yellow-100';
      case 'Fair': return 'text-orange-600 bg-orange-100';
      case 'High': return 'text-red-600 bg-red-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <>
      <Helmet>
        <title>Best Time to Visit Tanzania 2025 - Weather, Safari & Travel Guide</title>
        <meta name="description" content="Discover the best time to visit Tanzania for safari, Kilimanjaro climbing, and beach holidays. Complete weather guide, seasonal tips, and expert travel advice for 2025." />
        <meta name="keywords" content="best time visit Tanzania, Tanzania weather, safari season, Kilimanjaro climbing season, Tanzania travel guide, when to visit Tanzania" />
        <link rel="canonical" href="https://tanzaniatravelhub.com/guides/best-time-to-visit-tanzania" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white overflow-hidden"
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
              <Calendar className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Best Time to Visit Tanzania
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Plan your perfect Tanzania adventure with our comprehensive seasonal guide. 
                Discover the ideal time for safari, Kilimanjaro climbing, and beach holidays.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quick Answer */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Quick Answer</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Sun className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Overall</h3>
                    <p className="text-orange-600 font-bold">June - October</p>
                    <p className="text-gray-600 text-sm">Dry season, perfect for safari & Kilimanjaro</p>
                  </div>
                  <div className="text-center">
                    <DollarSign className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Best Value</h3>
                    <p className="text-green-600 font-bold">March - May</p>
                    <p className="text-gray-600 text-sm">Lower prices, fewer crowds, green landscapes</p>
                  </div>
                  <div className="text-center">
                    <Users className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Fewer Crowds</h3>
                    <p className="text-blue-600 font-bold">November</p>
                    <p className="text-gray-600 text-sm">Good weather, lower prices, less crowded</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Guide */}
        <section ref={seasonsRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={seasonsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tanzania's Seasons Explained
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Understanding Tanzania's climate patterns will help you choose the perfect time for your adventure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seasons.map((season, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={seasonsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                  <div className={`h-32 bg-gradient-to-r ${season.color} flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <season.icon className="h-12 w-12 mx-auto mb-2" />
                      <h3 className="text-2xl font-bold">{season.name}</h3>
                      <p className="text-lg">{season.period}</p>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <Thermometer className="h-4 w-4 text-orange-500" />
                          <span className="text-sm font-semibold text-gray-700">Temperature</span>
                        </div>
                        <p className="text-gray-600">{season.temperature}</p>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2 mb-2">
                          <CloudRain className="h-4 w-4 text-blue-500" />
                          <span className="text-sm font-semibold text-gray-700">Rainfall</span>
                        </div>
                        <p className="text-gray-600">{season.rainfall}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                        season.recommendation === 'Excellent' ? 'bg-green-100 text-green-800' :
                        season.recommendation === 'Very Good' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {season.recommendation}
                      </span>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Highlights:</h4>
                      <ul className="space-y-2">
                        {season.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Considerations:</h4>
                      <ul className="space-y-2">
                        {season.cons.map((con, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <AlertCircle className="h-4 w-4 text-orange-500" />
                            <span className="text-gray-700 text-sm">{con}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Best For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {season.bestFor.map((activity, i) => (
                          <span key={i} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Activity-Based Guide */}
        <section ref={activitiesRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={activitiesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Best Time by Activity
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose your travel time based on your main interests and activities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {activities.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={activitiesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <activity.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.activity}</h3>
                      <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold inline-block mb-4">
                        {activity.bestTime}
                      </div>
                      <p className="text-gray-700 leading-relaxed">{activity.details}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Monthly Guide */}
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
                Month-by-Month Guide
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Detailed breakdown of what to expect each month in Tanzania
              </p>
            </motion.div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Month</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Weather</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Wildlife</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Crowds</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Prices</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {monthlyGuide.map((month, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{month.month}</td>
                        <td className="px-6 py-4 text-sm text-gray-700">{month.weather}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(month.wildlife)}`}>
                            {month.wildlife}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(month.crowds)}`}>
                            {month.crowds}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(month.prices)}`}>
                            {month.prices}
                          </span>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Expert Travel Tips</h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Book Early for Peak Season</h3>
                    <p className="text-blue-800">June-October is peak season. Book accommodations and flights 6-9 months in advance for best rates.</p>
                  </div>
                  
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                    <h3 className="font-semibold text-green-900 mb-2">Pack for All Weather</h3>
                    <p className="text-green-800">Tanzania's altitude creates varied climates. Pack layers, rain gear, and warm clothes for evenings.</p>
                  </div>
                  
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                    <h3 className="font-semibold text-orange-900 mb-2">Consider Shoulder Seasons</h3>
                    <p className="text-orange-800">November and December offer great value with good weather and fewer crowds.</p>
                  </div>
                  
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                    <h3 className="font-semibold text-purple-900 mb-2">Malaria Prevention</h3>
                    <p className="text-purple-800">Malaria risk is year-round. Consult your doctor about prophylaxis regardless of travel season.</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-3xl p-8"
              >
                <h3 className="text-3xl font-bold mb-6">Free Travel Planning Kit</h3>
                <p className="text-xl mb-8 text-orange-100">
                  Get our comprehensive Tanzania travel guide with seasonal calendars, packing lists, and budget planning tools.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Seasonal weather calendar',
                    'Month-by-month activity guide',
                    'Packing checklists by season',
                    'Budget planning calculator'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-200" />
                      <span className="text-orange-100">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Free Guide</span>
                </button>
              </motion.div>
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
                Ready to Plan Your Tanzania Adventure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our travel experts can help you choose the perfect time and create a customized itinerary for your dream Tanzania trip.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>Get Expert Advice</span>
                </a>
                <a
                  href="/booking"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                >
                  Start Planning Your Trip
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BestTime;