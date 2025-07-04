import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  MapPin, 
  Star, 
  Camera, 
  Mountain, 
  Waves, 
  TreePine,
  ArrowRight,
  Clock,
  Users,
  DollarSign
} from 'lucide-react';

const Destinations = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [destinationsRef, destinationsInView] = useInView({ triggerOnce: true });

  const destinations = [
    {
      name: 'Zanzibar',
      slug: 'zanzibar',
      image: 'https://images.pexels.com/photos/3155830/pexels-photo-3155830.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop&fm=webp',
      description: 'Pristine white sand beaches, historic Stone Town, and aromatic spice plantations',
      highlights: ['Stone Town UNESCO Site', 'Spice Tours', 'Pristine Beaches', 'Diving & Snorkeling'],
      duration: '3-7 days',
      bestFor: 'Beach lovers, History buffs',
      priceFrom: '$150',
      rating: 4.9,
      icon: Waves,
      featured: true
    },
    {
      name: 'Serengeti National Park',
      slug: 'serengeti',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop&fm=webp',
      description: 'Witness the Great Migration and encounter the Big Five in endless savannah',
      highlights: ['Great Migration', 'Big Five Safari', 'Hot Air Balloons', 'Luxury Lodges'],
      duration: '3-5 days',
      bestFor: 'Wildlife enthusiasts',
      priceFrom: '$400',
      rating: 4.9,
      icon: TreePine,
      featured: true
    },
    {
      name: 'Mount Kilimanjaro',
      slug: 'kilimanjaro',
      image: 'https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop&fm=webp',
      description: 'Conquer Africa\'s highest peak and witness breathtaking sunrise views',
      highlights: ['Summit Uhuru Peak', 'Multiple Routes', 'Diverse Ecosystems', 'Certification'],
      duration: '5-9 days',
      bestFor: 'Adventure seekers',
      priceFrom: '$1,200',
      rating: 4.8,
      icon: Mountain,
      featured: true
    },
    {
      name: 'Ngorongoro Crater',
      slug: 'ngorongoro',
      image: 'https://images.pexels.com/photos/1068738/pexels-photo-1068738.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop&fm=webp',
      description: 'Africa\'s Eden - a natural amphitheater teeming with wildlife',
      highlights: ['Crater Floor Safari', 'Flamingo Lakes', 'Maasai Villages', 'Black Rhinos'],
      duration: '1-2 days',
      bestFor: 'Wildlife photography',
      priceFrom: '$250',
      rating: 4.8,
      icon: Camera,
      featured: false
    },
    {
      name: 'Tarangire National Park',
      slug: 'tarangire',
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop&fm=webp',
      description: 'Land of giants with massive baobab trees and large elephant herds',
      highlights: ['Elephant Herds', 'Baobab Trees', 'Bird Watching', 'Tree Climbing Lions'],
      duration: '1-2 days',
      bestFor: 'Elephant lovers',
      priceFrom: '$200',
      rating: 4.7,
      icon: TreePine,
      featured: false
    },
    {
      name: 'Arusha',
      slug: 'arusha',
      image: 'https://images.pexels.com/photos/2662816/pexels-photo-2662816.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop&fm=webp',
      description: 'Gateway to the northern safari circuit and cultural experiences',
      highlights: ['Cultural Heritage Centre', 'Local Markets', 'Coffee Tours', 'Maasai Markets'],
      duration: '1-3 days',
      bestFor: 'Culture enthusiasts',
      priceFrom: '$80',
      rating: 4.6,
      icon: Users,
      featured: false
    }
  ];

  const featuredDestinations = destinations.filter(dest => dest.featured);
  const otherDestinations = destinations.filter(dest => !dest.featured);

  return (
    <>
      <Helmet>
        <title>Top Tanzania Destinations - Zanzibar, Serengeti, Kilimanjaro | Travel Guide 2025</title>
        <meta name="description" content="Explore Tanzania's best destinations: pristine Zanzibar beaches, Serengeti wildlife safaris, Mount Kilimanjaro climbing, and Ngorongoro Crater. Expert travel guides and booking." />
        <meta name="keywords" content="Tanzania destinations, Zanzibar beaches, Serengeti safari, Kilimanjaro climbing, Ngorongoro crater, Tarangire national park, Arusha travel" />
        <link rel="canonical" href="https://tanzaniatravelhub.com/destinations" />
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
              backgroundImage: 'url("https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop&fm=webp")',
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
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Tanzania's Best Destinations
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                From the pristine beaches of Zanzibar to the wildlife-rich plains of the Serengeti, 
                discover the destinations that make Tanzania truly magical.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured Destinations */}
        <section ref={destinationsRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={destinationsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Must-Visit Destinations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our top-rated destinations that define the Tanzania experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {featuredDestinations.map((destination, index) => (
                <motion.div
                  key={destination.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={destinationsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/destinations/${destination.slug}`} className="block">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2">
                      <div className="relative h-64">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <destination.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <div className="flex items-center space-x-2 mb-2">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="text-sm font-medium">{destination.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{destination.name}</h3>
                        <p className="text-gray-600 mb-4 line-clamp-2">{destination.description}</p>
                        
                        <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600">{destination.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-600">From {destination.priceFrom}</span>
                          </div>
                        </div>
                        
                        <div className="mb-6">
                          <div className="text-sm text-gray-500 mb-2">Top Highlights:</div>
                          <div className="flex flex-wrap gap-2">
                            {destination.highlights.slice(0, 3).map((highlight, idx) => (
                              <span
                                key={idx}
                                className="bg-orange-50 text-orange-600 px-2 py-1 rounded-full text-xs font-medium"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Best for: {destination.bestFor}</span>
                          <ArrowRight className="h-5 w-5 text-orange-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Other Destinations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={destinationsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Amazing Destinations</h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherDestinations.map((destination, index) => (
                <motion.div
                  key={destination.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={destinationsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <Link to={`/destinations/${destination.slug}`} className="block">
                    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
                      <div className="relative h-48">
                        <img
                          src={destination.image}
                          alt={destination.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm rounded-full p-2">
                          <destination.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="absolute bottom-3 left-3 text-white">
                          <div className="flex items-center space-x-1">
                            <Star className="h-3 w-3 text-yellow-400 fill-current" />
                            <span className="text-xs font-medium">{destination.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-5">
                        <h4 className="text-lg font-bold text-gray-900 mb-2">{destination.name}</h4>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{destination.description}</p>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500">{destination.duration}</span>
                          <span className="text-orange-600 font-semibold">From {destination.priceFrom}</span>
                        </div>
                        
                        <div className="mt-3 flex items-center justify-between">
                          <span className="text-xs text-gray-500">{destination.bestFor}</span>
                          <ArrowRight className="h-4 w-4 text-orange-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
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
                Can't Choose Just One?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Create a custom multi-destination itinerary and experience the best of Tanzania 
                in one incredible journey.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/itineraries"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <MapPin className="h-5 w-5" />
                  <span>View Itineraries</span>
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
                >
                  Plan Custom Trip
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Destinations;