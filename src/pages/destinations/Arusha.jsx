import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Clock, 
  Users, 
  Star, 
  Camera, 
  Mountain, 
  ShoppingBag,
  Coffee,
  ArrowRight,
  Calendar,
  Heart,
  Compass,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Arusha = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [highlightsRef, highlightsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [experiencesRef, experiencesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [packagesRef, packagesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    {
      icon: Mountain,
      title: 'Gateway to Safari',
      description: 'Starting point for Northern Tanzania safari circuit'
    },
    {
      icon: ShoppingBag,
      title: 'Cultural Heritage Centre',
      description: 'Discover Tanzania\'s rich cultural heritage and crafts'
    },
    {
      icon: Coffee,
      title: 'Coffee Plantations',
      description: 'Visit local coffee farms and taste world-class coffee'
    },
    {
      icon: Users,
      title: 'Maasai Culture',
      description: 'Experience authentic Maasai traditions and markets'
    }
  ];

  const experiences = [
    {
      title: 'Cultural Heritage Centre',
      description: 'Explore Tanzania\'s diverse cultures, art, and traditions in this comprehensive cultural center.',
      image: 'https://images.pexels.com/photos/6977411/pexels-photo-6977411.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: 'Half day',
      difficulty: 'Easy'
    },
    {
      title: 'Arusha National Park',
      description: 'Small but diverse park featuring Mount Meru, crater lakes, and colobus monkeys.',
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: 'Full day',
      difficulty: 'Easy'
    },
    {
      title: 'Coffee Tour Experience',
      description: 'Learn about coffee cultivation and enjoy fresh brews at local plantations.',
      image: 'https://images.pexels.com/photos/4022091/pexels-photo-4022091.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: 'Half day',
      difficulty: 'Easy'
    },
    {
      title: 'Maasai Market & Villages',
      description: 'Shop for authentic crafts and visit traditional Maasai communities nearby.',
      image: 'https://images.pexels.com/photos/6977411/pexels-photo-6977411.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: 'Half day',
      difficulty: 'Easy'
    }
  ];

  const packages = [
    {
      title: 'Arusha City & Culture Day Trip',
      duration: '1 Day',
      price: 'From $89',
      image: 'https://images.pexels.com/photos/6977411/pexels-photo-6977411.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      highlights: ['Cultural Heritage Centre', 'Local Markets', 'Coffee Tasting', 'City Tour'],
      rating: 4.6
    },
    {
      title: 'Arusha National Park Adventure',
      duration: '1 Day',
      price: 'From $159',
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      highlights: ['Mount Meru Views', 'Momella Lakes', 'Colobus Monkeys', 'Walking Safari'],
      rating: 4.7
    },
    {
      title: 'Complete Arusha Experience',
      duration: '2 Days',
      price: 'From $299',
      image: 'https://images.pexels.com/photos/4022091/pexels-photo-4022091.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop',
      highlights: ['Arusha National Park', 'Cultural Experiences', 'Coffee Plantation', 'Safari Preparation'],
      rating: 4.8
    }
  ];

  const quickFacts = [
    { label: 'Best Time to Visit', value: 'Year-round destination' },
    { label: 'Altitude', value: '1,400m above sea level' },
    { label: 'Population', value: 'Over 400,000 people' },
    { label: 'Climate', value: 'Tropical highland climate' },
    { label: 'Language', value: 'Swahili & English' },
    { label: 'Currency', value: 'Tanzanian Shilling (TZS)' }
  ];

  return (
    <>
      <Helmet>
        <title>Arusha Tanzania - Gateway to Safari Adventures | Cultural Heritage & Mount Meru</title>
        <meta name="description" content="Discover Arusha, Tanzania's safari capital. Explore cultural heritage, visit Mount Meru, experience Maasai culture, and start your northern circuit safari adventure." />
        <meta name="keywords" content="Arusha Tanzania, safari gateway, cultural heritage centre, Mount Meru, Maasai culture, coffee tours, northern safari circuit" />
        <link rel="canonical" href="https://tanzaniatravelhub.com/destinations/arusha" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/6977411/pexels-photo-6977411.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Arusha
                <span className="block text-4xl md:text-5xl text-orange-400 mt-2">
                  Gateway to Safari Adventures
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover Tanzania's vibrant safari capital, where culture meets adventure 
                at the foot of Mount Meru.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  to="/booking"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center space-x-2 group"
                >
                  <span>Plan Your Visit</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp Guide</span>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">1,400m</div>
                  <div className="text-sm text-gray-200">Elevation</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">Year-Round</div>
                  <div className="text-sm text-gray-200">Best Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">2-3 Days</div>
                  <div className="text-sm text-gray-200">Recommended</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-orange-400">Easy</div>
                  <div className="text-sm text-gray-200">Difficulty</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Overview Section */}
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
                  Tanzania's Safari Capital
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Arusha, nestled at the foot of Mount Meru, serves as the gateway to Tanzania's 
                    world-famous northern safari circuit. This vibrant city perfectly blends modern 
                    amenities with rich cultural heritage.
                  </p>
                  <p>
                    From here, adventurers embark on journeys to the Serengeti, Ngorongoro Crater, 
                    and Tarangire. But Arusha itself offers unique experiences, from exploring 
                    Maasai culture to tasting some of the world's finest coffee.
                  </p>
                  <p>
                    Whether you're starting your safari adventure or exploring Tanzania's cultural 
                    heart, Arusha provides the perfect introduction to this incredible country.
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
                  src="https://images.pexels.com/photos/6977411/pexels-photo-6977411.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Arusha city and Mount Meru"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section ref={highlightsRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Visit Arusha
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes Arusha the perfect starting point for your Tanzania adventure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex p-4 rounded-full bg-orange-100 text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <highlight.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{highlight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiences Section */}
        <section ref={experiencesRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={experiencesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Arusha Experiences
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From cultural immersion to nature adventures, Arusha offers diverse experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={experiencesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={experience.image}
                        alt={experience.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{experience.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{experience.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{experience.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Mountain className="h-4 w-4" />
                          <span>{experience.difficulty}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages Section */}
        <section ref={packagesRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={packagesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Arusha Tour Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our carefully crafted Arusha experiences
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
                  <div className="relative">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-orange-600 font-bold">{pkg.price}</span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{pkg.title}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-semibold text-gray-700">{pkg.rating}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2 mb-4 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{pkg.duration}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {pkg.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link
                      to="/booking"
                      className="w-full bg-orange-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Book Now</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Facts */}
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
                Plan Your Visit
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Essential information for your Arusha adventure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {quickFacts.map((fact, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-xl p-6 text-center"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{fact.label}</h3>
                  <p className="text-orange-600 font-bold text-lg">{fact.value}</p>
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
                Start Your Tanzania Adventure in Arusha
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let us help you explore Arusha and plan your perfect safari adventure. 
                Our local experts know all the best spots and experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/booking"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Plan Your Visit</span>
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

export default Arusha;