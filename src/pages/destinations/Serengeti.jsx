import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Calendar, Users, Star, Camera, Binary as Binoculars, TreePine, ArrowRight, Clock, Award, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Serengeti = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [experiencesRef, experiencesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const highlights = [
    {
      icon: TreePine,
      title: 'Great Migration',
      description: 'Witness over 2 million wildebeest and zebras in their annual journey'
    },
    {
      icon: Camera,
      title: 'Big Five Safari',
      description: 'Spot lions, leopards, elephants, buffalo, and rhinos in their natural habitat'
    },
    {
      icon: Binoculars,
      title: 'Endless Plains',
      description: 'Experience the vast savannah that stretches beyond the horizon'
    },
    {
      icon: Award,
      title: 'UNESCO Heritage',
      description: 'Explore one of Africa\'s most important protected ecosystems'
    }
  ];

  const experiences = [
    {
      title: 'Game Drives',
      description: 'Morning and evening safari drives to spot incredible wildlife',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: 'Full day',
      price: 'From $150'
    },
    {
      title: 'Hot Air Balloon',
      description: 'Soar above the plains for a bird\'s eye view of the migration',
      image: 'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '3 hours',
      price: 'From $550'
    },
    {
      title: 'Walking Safari',
      description: 'Guided walking tours to experience the wilderness up close',
      image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      duration: '2-3 hours',
      price: 'From $80'
    }
  ];

  const bestTimes = [
    {
      month: 'Jun - Oct',
      season: 'Dry Season',
      description: 'Best for general game viewing and river crossings',
      wildlife: 'Excellent',
      weather: 'Cool & Dry'
    },
    {
      month: 'Dec - Mar',
      season: 'Calving Season',
      description: 'Witness newborn animals and predator action',
      wildlife: 'Outstanding',
      weather: 'Warm'
    },
    {
      month: 'Apr - May',
      season: 'Green Season',
      description: 'Lush landscapes and fewer crowds',
      wildlife: 'Good',
      weather: 'Rainy'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Serengeti National Park Safari - Great Migration & Big Five | Tanzania Travel Hub</title>
        <meta name="description" content="Experience the legendary Serengeti National Park - witness the Great Migration, spot the Big Five, and explore endless plains. Book your Serengeti safari adventure today!" />
        <meta name="keywords" content="Serengeti safari, Great Migration, Big Five, Tanzania national park, wildlife safari, Serengeti tours, Africa safari" />
        <link rel="canonical" href="https://tanzaniatravelhub.com/destinations/serengeti" />
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
              backgroundImage: 'url("https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
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
                Serengeti
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  National Park
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Witness the greatest wildlife spectacle on Earth in Tanzania's most famous national park, 
                home to the legendary Great Migration and Africa's Big Five.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  to="/booking"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center space-x-2 group"
                >
                  <span>Book Safari Now</span>
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

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-400">14,750</div>
                  <div className="text-gray-200 text-sm">km² Park Size</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-400">2M+</div>
                  <div className="text-gray-200 text-sm">Migrating Animals</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-400">Big 5</div>
                  <div className="text-gray-200 text-sm">Wildlife Species</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-orange-400">UNESCO</div>
                  <div className="text-gray-200 text-sm">World Heritage</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  The Crown Jewel of African Safaris
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    The Serengeti National Park is Tanzania's oldest and most prestigious national park, 
                    covering 14,750 square kilometers of pristine wilderness. Famous worldwide for hosting 
                    the Great Migration, this UNESCO World Heritage Site offers unparalleled wildlife viewing opportunities.
                  </p>
                  <p>
                    Home to over 70 large mammal species and 500 bird species, the Serengeti's vast plains 
                    stretch as far as the eye can see. The park's diverse ecosystems support incredible 
                    biodiversity, from grasslands and woodlands to kopjes and rivers.
                  </p>
                  <p>
                    Whether you're witnessing dramatic river crossings during the migration or tracking 
                    the Big Five year-round, the Serengeti promises wildlife encounters that will leave 
                    you speechless and create memories to last a lifetime.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Serengeti wildlife"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Highlights */}
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
                Serengeti Highlights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes the Serengeti one of the world's greatest natural wonders
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
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

        {/* Experiences */}
        <section ref={experiencesRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={experiencesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Serengeti Experiences
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from a variety of activities to explore the Serengeti's wonders
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={experiencesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {experience.price}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{experience.description}</p>
                    <button className="w-full bg-orange-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-700 transition-colors">
                      Book Experience
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Best Time to Visit */}
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
                Best Time to Visit
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Plan your visit based on wildlife patterns and seasonal highlights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {bestTimes.map((period, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{period.month}</h3>
                    <div className="text-orange-600 font-semibold">{period.season}</div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-center">{period.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Wildlife</span>
                      <span className="font-semibold text-green-600">{period.wildlife}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">Weather</span>
                      <span className="font-semibold text-blue-600">{period.weather}</span>
                    </div>
                  </div>
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
                Ready for Your Serengeti Adventure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Experience the magic of the Serengeti with our expert guides. 
                From the Great Migration to Big Five encounters, we'll make your safari dreams come true.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/booking"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Plan My Safari</span>
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

export default Serengeti;