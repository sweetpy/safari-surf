import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Backpack, 
  Shirt, 
  Camera, 
  Sun, 
  Mountain, 
  Waves,
  Shield,
  Pill,
  Smartphone,
  CheckCircle,
  AlertTriangle,
  Download,
  Phone,
  Calendar,
  Thermometer
} from 'lucide-react';

const PackingList = () => {
  const [selectedTrip, setSelectedTrip] = useState('safari');
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [listsRef, listsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [tipsRef, tipsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const tripTypes = {
    safari: {
      title: 'Safari Packing List',
      description: 'Essential items for your Tanzania safari adventure',
      icon: Camera,
      color: 'from-green-500 to-emerald-600'
    },
    kilimanjaro: {
      title: 'Kilimanjaro Packing List',
      description: 'Complete gear guide for climbing Africa\'s highest peak',
      icon: Mountain,
      color: 'from-blue-500 to-cyan-600'
    },
    zanzibar: {
      title: 'Zanzibar Beach Packing List',
      description: 'Beach essentials for your tropical island getaway',
      icon: Waves,
      color: 'from-orange-500 to-red-600'
    }
  };

  const packingLists = {
    safari: {
      clothing: [
        { item: 'Neutral colored clothing (khaki, olive, brown)', essential: true },
        { item: 'Long-sleeved shirts (3-4)', essential: true },
        { item: 'Short-sleeved shirts (2-3)', essential: true },
        { item: 'Lightweight pants (2-3 pairs)', essential: true },
        { item: 'Shorts (1-2 pairs)', essential: false },
        { item: 'Warm fleece or jacket', essential: true },
        { item: 'Rain jacket or poncho', essential: true },
        { item: 'Comfortable walking shoes', essential: true },
        { item: 'Sandals for camp', essential: false },
        { item: 'Wide-brimmed hat', essential: true },
        { item: 'Warm hat for early mornings', essential: false },
        { item: 'Underwear (5-7 pairs)', essential: true },
        { item: 'Socks (5-7 pairs)', essential: true }
      ],
      accessories: [
        { item: 'Sunglasses (UV protection)', essential: true },
        { item: 'Binoculars (8x32 or 10x42)', essential: true },
        { item: 'Camera with extra batteries', essential: true },
        { item: 'Telephoto lens (300mm+)', essential: false },
        { item: 'Headlamp with extra batteries', essential: true },
        { item: 'Power bank', essential: true },
        { item: 'Universal adapter', essential: true },
        { item: 'Day pack', essential: true }
      ],
      health: [
        { item: 'Malaria prophylaxis', essential: true },
        { item: 'Insect repellent (DEET 30%+)', essential: true },
        { item: 'Sunscreen (SPF 50+)', essential: true },
        { item: 'First aid kit', essential: true },
        { item: 'Personal medications', essential: true },
        { item: 'Rehydration salts', essential: false },
        { item: 'Anti-diarrheal medication', essential: false }
      ]
    },
    kilimanjaro: {
      clothing: [
        { item: 'Base layers (merino wool) - 2 sets', essential: true },
        { item: 'Insulating layers (fleece/down)', essential: true },
        { item: 'Waterproof shell jacket', essential: true },
        { item: 'Waterproof shell pants', essential: true },
        { item: 'Hiking pants (2 pairs)', essential: true },
        { item: 'Hiking shorts (1 pair)', essential: false },
        { item: 'Insulated jacket (down/synthetic)', essential: true },
        { item: 'Warm hat (wool/fleece)', essential: true },
        { item: 'Sun hat with brim', essential: true },
        { item: 'Neck gaiter/buff', essential: true },
        { item: 'Hiking boots (broken in)', essential: true },
        { item: 'Camp shoes (lightweight)', essential: true },
        { item: 'Gaiters', essential: true },
        { item: 'Hiking socks (wool) - 4-5 pairs', essential: true },
        { item: 'Underwear (5-6 pairs)', essential: true },
        { item: 'Liner socks (prevent blisters)', essential: false }
      ],
      gear: [
        { item: 'Sleeping bag (-10°C rating)', essential: true },
        { item: 'Sleeping pad (insulated)', essential: true },
        { item: 'Trekking poles', essential: true },
        { item: 'Headlamp + spare', essential: true },
        { item: 'Water bottles/hydration system', essential: true },
        { item: 'Water purification tablets', essential: true },
        { item: 'Backpack (40-50L)', essential: true },
        { item: 'Duffel bag for porters', essential: true },
        { item: 'Sunglasses (glacier glasses)', essential: true }
      ],
      health: [
        { item: 'Altitude sickness medication', essential: true },
        { item: 'Pain relievers', essential: true },
        { item: 'Blister treatment', essential: true },
        { item: 'Personal medications', essential: true },
        { item: 'Comprehensive first aid kit', essential: true },
        { item: 'Lip balm with SPF', essential: true },
        { item: 'Sunscreen (SPF 50+)', essential: true }
      ]
    },
    zanzibar: {
      clothing: [
        { item: 'Swimwear (2-3 pieces)', essential: true },
        { item: 'Beach cover-ups', essential: true },
        { item: 'Light cotton dresses/shirts', essential: true },
        { item: 'Shorts (3-4 pairs)', essential: true },
        { item: 'Sundresses (2-3)', essential: false },
        { item: 'Light cardigan for evenings', essential: true },
        { item: 'Flip-flops/sandals', essential: true },
        { item: 'Comfortable walking shoes', essential: true },
        { item: 'Sun hat', essential: true },
        { item: 'Lightweight scarf (for mosque visits)', essential: true },
        { item: 'Underwear (5-7 pairs)', essential: true }
      ],
      beach: [
        { item: 'Beach towel', essential: true },
        { item: 'Waterproof phone case', essential: true },
        { item: 'Snorkeling gear (mask, fins)', essential: false },
        { item: 'Beach bag', essential: true },
        { item: 'Underwater camera', essential: false },
        { item: 'Reef-safe sunscreen', essential: true },
        { item: 'After-sun lotion', essential: true },
        { item: 'Water shoes', essential: false }
      ],
      accessories: [
        { item: 'Sunglasses', essential: true },
        { item: 'Power bank', essential: true },
        { item: 'Universal adapter', essential: true },
        { item: 'Mosquito net (if not provided)', essential: false },
        { item: 'Insect repellent', essential: true },
        { item: 'Day pack for excursions', essential: true }
      ]
    }
  };

  const seasonalTips = [
    {
      season: 'Dry Season (June - October)',
      icon: Sun,
      tips: [
        'Pack warm layers for early morning game drives',
        'Dust-proof camera equipment recommended',
        'Light, breathable fabrics for daytime',
        'Warm jacket essential for high altitudes'
      ]
    },
    {
      season: 'Wet Season (November - May)',
      icon: Shield,
      tips: [
        'Waterproof everything is crucial',
        'Quick-dry clothing recommended',
        'Extra plastic bags for electronics',
        'Waterproof footwear essential'
      ]
    }
  ];

  const packingTips = [
    {
      icon: Thermometer,
      title: 'Layer Smart',
      tip: 'Tanzania has varied climates. Pack layers you can add or remove as temperatures change throughout the day.'
    },
    {
      icon: Sun,
      title: 'Sun Protection',
      tip: 'The equatorial sun is strong. Pack high SPF sunscreen, protective clothing, and quality sunglasses.'
    },
    {
      icon: Backpack,
      title: 'Pack Light',
      tip: 'Most domestic flights have 15kg baggage limits. Pack essentials and leave room for souvenirs.'
    },
    {
      icon: Shield,
      title: 'Protect Electronics',
      tip: 'Use waterproof cases and dust covers. Bring extra batteries as charging opportunities may be limited.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tanzania Packing List 2025 - Safari, Kilimanjaro & Zanzibar Essentials | Complete Guide</title>
        <meta name="description" content="Complete Tanzania packing list for safari, Kilimanjaro climbing, and Zanzibar holidays. Essential items, seasonal tips, and expert packing advice for 2025." />
        <meta name="keywords" content="Tanzania packing list, safari packing, Kilimanjaro packing list, Zanzibar packing, Tanzania travel essentials, safari gear, mountain climbing gear" />
        <link rel="canonical" href="https://safari.flit.tz/guides/tanzania-packing-list" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative pt-32 pb-20 bg-gradient-to-br from-green-600 via-blue-600 to-orange-500 text-white overflow-hidden"
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
              <Backpack className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Tanzania Packing List
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Complete packing guides for safari adventures, Kilimanjaro climbs, and Zanzibar beach holidays. 
                Pack smart, travel light, experience more.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trip Type Selection */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {Object.entries(tripTypes).map(([key, trip]) => (
                <motion.button
                  key={key}
                  onClick={() => setSelectedTrip(key)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-8 rounded-2xl transition-all duration-300 ${
                    selectedTrip === key
                      ? `bg-gradient-to-r ${trip.color} text-white shadow-lg`
                      : 'bg-gray-50 text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <trip.icon className={`h-12 w-12 mx-auto mb-4 ${
                    selectedTrip === key ? 'text-white' : 'text-gray-600'
                  }`} />
                  <h3 className="text-xl font-bold mb-2">{trip.title}</h3>
                  <p className={`text-sm ${
                    selectedTrip === key ? 'text-white/90' : 'text-gray-600'
                  }`}>
                    {trip.description}
                  </p>
                </motion.button>
              ))}
            </div>
          </div>
        </section>

        {/* Packing Lists */}
        <section ref={listsRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={listsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {tripTypes[selectedTrip].title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need for your {selectedTrip} adventure in Tanzania
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {Object.entries(packingLists[selectedTrip]).map(([category, items], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={listsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 capitalize flex items-center space-x-3">
                    {category === 'clothing' && <Shirt className="h-6 w-6 text-blue-600" />}
                    {category === 'accessories' && <Camera className="h-6 w-6 text-green-600" />}
                    {category === 'health' && <Pill className="h-6 w-6 text-red-600" />}
                    {category === 'gear' && <Mountain className="h-6 w-6 text-purple-600" />}
                    {category === 'beach' && <Waves className="h-6 w-6 text-orange-600" />}
                    <span>{category}</span>
                  </h3>
                  
                  <div className="space-y-3">
                    {items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className={`flex items-start space-x-3 p-3 rounded-lg ${
                          item.essential ? 'bg-green-50' : 'bg-gray-50'
                        }`}
                      >
                        <CheckCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${
                          item.essential ? 'text-green-600' : 'text-gray-400'
                        }`} />
                        <div className="flex-1">
                          <span className={`text-sm ${
                            item.essential ? 'text-gray-900 font-medium' : 'text-gray-700'
                          }`}>
                            {item.item}
                          </span>
                          {item.essential && (
                            <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                              Essential
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Seasonal Tips */}
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
                Seasonal Packing Tips
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Adjust your packing based on Tanzania's distinct seasons
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {seasonalTips.map((season, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-2xl p-8"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <season.icon className="h-12 w-12 text-orange-600" />
                    <h3 className="text-2xl font-bold text-gray-900">{season.season}</h3>
                  </div>
                  
                  <ul className="space-y-3">
                    {season.tips.map((tip, tipIndex) => (
                      <li key={tipIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packing Tips */}
        <section ref={tipsRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={tipsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Expert Packing Tips
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Professional advice to pack efficiently and travel comfortably
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {packingTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={tipsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center"
                >
                  <div className="inline-flex p-4 rounded-full bg-orange-100 text-orange-600 mb-6">
                    <tip.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{tip.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tip.tip}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Reminders */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Important Reminders</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Baggage Restrictions</h3>
                      <p className="text-gray-700">Domestic flights in Tanzania have 15kg weight limits. International flights typically allow 23kg.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Leave Room for Souvenirs</h3>
                      <p className="text-gray-700">Tanzania has amazing crafts and coffee. Pack light to bring treasures home.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Smartphone className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Keep Essentials Accessible</h3>
                      <p className="text-gray-700">Pack medications, documents, and first day clothes in your carry-on bag.</p>
                    </div>
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
                <h3 className="text-3xl font-bold mb-6">Free Packing Checklist</h3>
                <p className="text-xl mb-8 text-orange-100">
                  Download our printable packing checklist with item-by-item guidance for your specific trip type.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Printable PDF checklists',
                    'Trip-specific recommendations',
                    'Seasonal packing variations',
                    'Weight and space optimization tips'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-orange-200" />
                      <span className="text-orange-100">{item}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-white text-orange-600 px-6 py-3 rounded-full font-semibold hover:bg-orange-50 transition-colors flex items-center justify-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Free Checklist</span>
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Pack for Tanzania?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Our travel experts can provide personalized packing advice and help you 
                plan the perfect Tanzania adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp Packing Help</span>
                </a>
                <a
                  href="/booking"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-colors flex items-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Plan My Trip</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PackingList;