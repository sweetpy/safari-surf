import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Star, 
  Camera, 
  TreePine, 
  Users, 
  Clock,
  Calendar,
  Phone,
  ArrowRight,
  CheckCircle,
  Binoculars,
  Mountain
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Tarangire = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [highlightsRef, highlightsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [wildlifeRef, wildlifeInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [packagesRef, packagesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    {
      icon: TreePine,
      title: 'Ancient Baobab Trees',
      description: 'Massive baobab trees that are over 1,000 years old create a mystical landscape'
    },
    {
      icon: Users,
      title: 'Large Elephant Herds',
      description: 'Home to the largest concentration of elephants in Tanzania'
    },
    {
      icon: Camera,
      title: 'Tree-Climbing Lions',
      description: 'Unique opportunity to see lions resting in acacia trees'
    },
    {
      icon: Binoculars,
      title: 'Bird Paradise',
      description: 'Over 550 bird species including the endemic Ashy Starling'
    }
  ];

  const wildlife = [
    'African Elephants', 'Lions', 'Leopards', 'Cheetahs', 'African Wild Dogs',
    'Giraffes', 'Zebras', 'Wildebeest', 'Buffalo', 'Waterbucks',
    'Impala', 'Grant\'s Gazelles', 'Eland', 'Oryx', 'Ostrich',
    'Secretary Birds', 'Kori Bustards', 'Hornbills', 'Bee-eaters', 'Rollers'
  ];

  const packages = [
    {
      title: 'Tarangire Day Trip',
      duration: '1 Day',
      price: 'From $180',
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Full day game drive',
        'Professional guide',
        'Lunch at safari lodge',
        'Transportation from Arusha'
      ]
    },
    {
      title: 'Tarangire & Lake Manyara Safari',
      duration: '2 Days / 1 Night',
      price: 'From $420',
      image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Two national parks',
        'Mid-range lodge accommodation',
        'All meals included',
        'Game drives in both parks'
      ]
    },
    {
      title: 'Extended Northern Circuit',
      duration: '4 Days / 3 Nights',
      price: 'From $980',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Tarangire, Ngorongoro & Serengeti',
        'Lodge & tented camp stays',
        'Professional safari guide',
        'Crater tour included'
      ]
    }
  ];

  const quickFacts = [
    { label: 'Best Time to Visit', value: 'June - October (Dry Season)' },
    { label: 'Park Size', value: '2,850 km² (1,100 sq miles)' },
    { label: 'Established', value: '1970' },
    { label: 'Distance from Arusha', value: '118 km (73 miles)' },
    { label: 'Altitude', value: '1,100 - 1,500m above sea level' },
    { label: 'Annual Rainfall', value: '650mm (26 inches)' }
  ];

  return (
    <>
      <Helmet>
        <title>Tarangire National Park Safari - Land of Giants & Baobab Trees | Tanzania Travel Hub</title>
        <meta name="description" content="Experience Tarangire National Park - home to massive elephant herds, ancient baobab trees, and tree-climbing lions. Book your Tarangire safari adventure today!" />
        <meta name="keywords" content="Tarangire National Park, Tarangire safari, Tanzania elephants, baobab trees, tree climbing lions, Tanzania wildlife, northern circuit safari" />
        <link rel="canonical" href="https://tanzaniatravelhub.com/destinations/tarangire" />
        <meta property="og:title" content="Tarangire National Park Safari - Land of Giants & Baobab Trees" />
        <meta property="og:description" content="Discover Tarangire's massive elephant herds, ancient baobab trees, and unique wildlife. Perfect for photography and authentic safari experiences." />
        <meta property="og:url" content="https://tanzaniatravelhub.com/destinations/tarangire" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/40" />
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Tarangire National Park
                <span className="block text-3xl md:text-4xl font-normal text-orange-300 mt-4">
                  Land of Giants & Ancient Baobabs
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Experience Tanzania's elephant paradise, where massive herds roam beneath 
                ancient baobab trees in one of Africa's most photogenic landscapes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/booking"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center space-x-2 group"
                >
                  <span>Book Tarangire Safari</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp Expert</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Quick Stats */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-white">
                <div>
                  <div className="text-2xl font-bold text-orange-300">2,850 km²</div>
                  <div className="text-sm text-gray-200">Park Size</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-300">3,000+</div>
                  <div className="text-sm text-gray-200">Elephants</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-300">550+</div>
                  <div className="text-sm text-gray-200">Bird Species</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-orange-300">1,000+</div>
                  <div className="text-sm text-gray-200">Year-old Baobabs</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Tarangire */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  The Elephant Playground
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Tarangire National Park stands as one of Tanzania's hidden gems, renowned for hosting 
                    the largest concentration of elephants in the country. During the dry season, massive 
                    herds of up to 300 elephants gather along the life-giving Tarangire River.
                  </p>
                  <p>
                    The park's iconic landscape is dominated by ancient baobab trees, some over 1,000 years 
                    old, creating a mystical atmosphere that photographers and nature lovers find irresistible. 
                    These majestic trees, known as the "Tree of Life," provide shelter and sustenance for 
                    countless species.
                  </p>
                  <p>
                    Beyond elephants, Tarangire offers exceptional wildlife viewing with tree-climbing lions, 
                    large prides, leopards, cheetahs, and over 550 bird species. The park's diverse ecosystems 
                    range from riverine forests to open grasslands and swamps.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Tarangire elephants and baobab trees"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-2xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold">3,000+</div>
                    <div className="text-sm text-orange-100">Elephants</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section ref={highlightsRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tarangire Highlights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes Tarangire National Park a photographer's paradise and wildlife enthusiast's dream
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow text-center"
                >
                  <div className="inline-flex p-4 rounded-full bg-orange-100 text-orange-600 mb-6">
                    <highlight.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Wildlife Section */}
        <section ref={wildlifeRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={wildlifeInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Wildlife in Tarangire
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                An incredible diversity of mammals and birds call Tarangire home
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={wildlifeInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <img
                  src="https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Tarangire wildlife"
                  className="rounded-2xl shadow-lg"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={wildlifeInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="grid grid-cols-2 gap-4"
              >
                {wildlife.map((animal, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{animal}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Safari Packages */}
        <section ref={packagesRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={packagesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Tarangire Safari Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose your perfect Tarangire adventure from our carefully crafted safari experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={packagesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full font-semibold">
                      {pkg.price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span className="text-sm">{pkg.duration}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/booking"
                      className="w-full bg-orange-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Book This Safari</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Facts & Planning */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Quick Facts */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Quick Facts</h3>
                <div className="space-y-4">
                  {quickFacts.map((fact, index) => (
                    <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-900">{fact.label}</span>
                      <span className="text-gray-600">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Planning Tips */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Planning Your Visit</h3>
                <div className="space-y-6">
                  <div className="bg-orange-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-2">Best Time to Visit</h4>
                    <p className="text-orange-800">
                      Dry season (June-October) offers the best wildlife viewing as animals concentrate 
                      around the river. Wet season (November-May) brings lush landscapes and bird migration.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">What to Bring</h4>
                    <p className="text-blue-800">
                      Binoculars for wildlife viewing, camera with telephoto lens, hat, sunscreen, 
                      light layers for temperature changes, and comfortable closed shoes.
                    </p>
                  </div>
                  
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Photography Tips</h4>
                    <p className="text-green-800">
                      Golden hour (sunrise/sunset) provides the best lighting for baobab trees. 
                      Use telephoto lenses for elephant behavior shots and wide angles for landscape photography.
                    </p>
                  </div>
                </div>
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
                Ready to Explore Tarangire?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join us for an unforgettable safari among giants. Experience the magic of 
                Tarangire's elephants, baobab trees, and incredible wildlife diversity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/booking"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Your Safari</span>
                </Link>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Tarangire;