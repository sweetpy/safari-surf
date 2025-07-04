import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Camera, Users, Clock, Star, CheckCircle, ArrowRight, Calendar, DollarSign, Award, Binary as Binoculars, Mountain, TreePine } from 'lucide-react';
import { Link } from 'react-router-dom';

const Ngorongoro = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [packagesRef, packagesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [highlightsRef, highlightsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const craterStats = [
    { label: 'Crater Diameter', value: '19 km' },
    { label: 'Crater Area', value: '264 km²' },
    { label: 'Rim Height', value: '2,286 m' },
    { label: 'Wildlife Species', value: '30,000+' }
  ];

  const highlights = [
    {
      icon: Camera,
      title: 'Big Five Viewing',
      description: 'One of the best places in Africa to see all Big Five animals in a single day'
    },
    {
      icon: Binoculars,
      title: 'Black Rhino Population',
      description: 'Home to the largest concentration of black rhinos in Tanzania'
    },
    {
      icon: TreePine,
      title: 'Diverse Ecosystems',
      description: 'Experience grasslands, acacia woodlands, and soda lakes in one location'
    },
    {
      icon: Mountain,
      title: 'Crater Rim Views',
      description: 'Breathtaking panoramic views from the crater rim viewpoints'
    }
  ];

  const safariPackages = [
    {
      title: 'Ngorongoro Day Trip',
      duration: '1 Day',
      price: '$350',
      image: 'https://images.pexels.com/photos/1068738/pexels-photo-1068738.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Full day crater tour',
        'Game drive with expert guide',
        'Packed lunch at hippo pool',
        'Transportation included'
      ],
      popular: false
    },
    {
      title: 'Crater Highlands Safari',
      duration: '3 Days',
      price: '$1,200',
      image: 'https://images.pexels.com/photos/1170621/pexels-photo-1170621.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Ngorongoro Crater exploration',
        'Olduvai Gorge visit',
        'Maasai village cultural tour',
        'Lodge accommodation'
      ],
      popular: true
    },
    {
      title: 'Luxury Crater Experience',
      duration: '2 Days',
      price: '$2,500',
      image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      features: [
        'Luxury crater rim lodge',
        'Private game drives',
        'Champagne breakfast in crater',
        'Professional photography guide'
      ],
      popular: false
    }
  ];

  const wildlife = [
    'African Elephants',
    'Black Rhinoceros',
    'African Lions',
    'African Leopards',
    'Cape Buffalo',
    'Spotted Hyenas',
    'Cheetahs',
    'Zebras',
    'Wildebeest',
    'Flamingos',
    'Hippos',
    'Warthogs'
  ];

  return (
    <>
      <Helmet>
        <title>Ngorongoro Crater Safari - Africa's Eden | Tanzania Travel Hub</title>
        <meta name="description" content="Explore Ngorongoro Crater, the world's largest unbroken volcanic caldera. Big Five safari, black rhinos, and stunning landscapes in Tanzania's natural wonder." />
        <meta name="keywords" content="Ngorongoro Crater, Tanzania safari, Big Five, black rhino, volcanic caldera, Africa Eden, wildlife safari, crater tour" />
        <link rel="canonical" href="https://safari.flit.tz/destinations/ngorongoro" />
        <meta property="og:title" content="Ngorongoro Crater Safari - Africa's Eden" />
        <meta property="og:description" content="Experience the world's largest volcanic caldera with incredible wildlife viewing including the Big Five." />
        <meta property="og:url" content="https://safari.flit.tz/destinations/ngorongoro" />
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
              backgroundImage: 'url("https://images.pexels.com/photos/1068738/pexels-photo-1068738.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
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
                Ngorongoro Crater
                <span className="block text-3xl md:text-4xl font-normal text-orange-300 mt-2">
                  Africa's Eden
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Discover the world's largest unbroken volcanic caldera, home to an incredible 
                concentration of wildlife including the Big Five.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  to="/booking"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center space-x-2 group"
                >
                  <span>Book Crater Safari</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>

              {/* Crater Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {craterStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-orange-400">{stat.value}</div>
                    <div className="text-gray-200 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Ngorongoro */}
        <section ref={aboutRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  The World's Largest Volcanic Caldera
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    The Ngorongoro Crater, often called "Africa's Eden," is a breathtaking natural wonder 
                    formed by a massive volcanic eruption 2-3 million years ago. This UNESCO World Heritage 
                    Site is the world's largest unbroken volcanic caldera.
                  </p>
                  <p>
                    The crater floor spans 264 square kilometers and is home to approximately 30,000 animals, 
                    creating one of the highest wildlife densities in Africa. It's one of the few places 
                    where you can see the Big Five in a single day.
                  </p>
                  <p>
                    What makes Ngorongoro truly special is its diverse ecosystem within the crater walls. 
                    From grasslands and acacia woodlands to the alkaline Lake Magadi, each habitat supports 
                    different species, creating a natural amphitheater of wildlife viewing.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Conservation Success</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Ngorongoro Conservation Area is a pioneering model of sustainable conservation, 
                    where wildlife, local Maasai communities, and tourism coexist harmoniously.
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
                  src="https://images.pexels.com/photos/1170621/pexels-photo-1170621.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Ngorongoro Crater landscape"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Award className="h-5 w-5 text-yellow-400" />
                      <span className="font-semibold">UNESCO World Heritage Site</span>
                    </div>
                    <p className="text-sm text-gray-200">Since 1979</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Wildlife & Highlights */}
        <section ref={highlightsRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Visit Ngorongoro?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experience the unique features that make Ngorongoro Crater one of Africa's most remarkable destinations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

            {/* Wildlife Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={highlightsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Wildlife You Can See</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {wildlife.map((animal, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors"
                  >
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{animal}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Safari Packages */}
        <section ref={packagesRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={packagesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ngorongoro Safari Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our carefully designed crater safari experiences
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {safariPackages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={packagesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow ${
                    pkg.popular ? 'ring-2 ring-orange-500' : ''
                  }`}
                >
                  {pkg.popular && (
                    <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                      <Star className="inline h-4 w-4 mr-1" />
                      Most Popular
                    </div>
                  )}
                  
                  <div className="relative overflow-hidden">
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
                      <div className="flex items-center space-x-1 text-sm text-gray-600">
                        <Clock className="h-4 w-4" />
                        <span>{pkg.duration}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="space-y-3">
                      <Link
                        to="/booking"
                        className="w-full bg-orange-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Book Now</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                      <button className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-full font-semibold hover:border-orange-600 hover:text-orange-600 transition-colors">
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Planning Tips */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Planning Your Crater Safari</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Best Time to Visit</h3>
                    <p className="text-gray-700 leading-relaxed">
                      The crater can be visited year-round, but the dry season (June-October) offers the best 
                      wildlife viewing as animals concentrate around water sources.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">What to Bring</h3>
                    <ul className="space-y-2">
                      {[
                        'Warm clothing for early morning drives',
                        'Camera with telephoto lens',
                        'Binoculars for wildlife viewing',
                        'Sun protection and hat',
                        'Comfortable walking shoes'
                      ].map((item, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  {[
                    { label: 'Location', value: 'Northern Tanzania' },
                    { label: 'Elevation', value: '1,800m above sea level' },
                    { label: 'Best for', value: 'Big Five viewing, photography' },
                    { label: 'Drive time from Arusha', value: '3.5 hours' },
                    { label: 'Accommodation', value: 'Crater rim lodges available' },
                    { label: 'Entry permits', value: 'Required daily' }
                  ].map((fact, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-900">{fact.label}</span>
                      <span className="text-gray-600">{fact.value}</span>
                    </div>
                  ))}
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
                Experience Africa's Eden
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Book your Ngorongoro Crater safari today and witness one of the world's 
                most incredible natural wonders and wildlife spectacles.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/booking"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Book Crater Safari</span>
                </Link>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                >
                  WhatsApp Expert
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Ngorongoro;