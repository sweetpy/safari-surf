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
  Calendar,
  Users,
  Award,
  ArrowRight,
  Play,
  Download,
  Phone
} from 'lucide-react';

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [destinationsRef, destinationsInView] = useInView({ triggerOnce: true });
  const [experiencesRef, experiencesInView] = useInView({ triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true });

  const topDestinations = [
    {
      name: 'Zanzibar',
      image: 'https://images.pexels.com/photos/3155830/pexels-photo-3155830.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Pristine beaches, spice tours, and Stone Town',
      icon: Waves,
      link: '/destinations/zanzibar'
    },
    {
      name: 'Serengeti',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Witness the Great Migration',
      icon: TreePine,
      link: '/destinations/serengeti'
    },
    {
      name: 'Kilimanjaro',
      image: 'https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Conquer Africa\'s highest peak',
      icon: Mountain,
      link: '/destinations/kilimanjaro'
    },
    {
      name: 'Ngorongoro',
      image: 'https://images.pexels.com/photos/1068738/pexels-photo-1068738.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Africa\'s Eden crater experience',
      icon: Camera,
      link: '/destinations/ngorongoro'
    }
  ];

  const experiences = [
    {
      title: 'Wildlife Safaris',
      description: 'Encounter the Big Five in their natural habitat',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Game drives', 'Bush camping', 'Photography tours']
    },
    {
      title: 'Cultural Immersion',
      description: 'Connect with local Maasai and other tribes',
      image: 'https://images.pexels.com/photos/6977411/pexels-photo-6977411.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Village visits', 'Traditional ceremonies', 'Local crafts']
    },
    {
      title: 'Adventure Activities',
      description: 'Thrilling activities across Tanzania',
      image: 'https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Mountain climbing', 'Hot air balloons', 'Diving & snorkeling']
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'United States',
      rating: 5,
      text: 'The most incredible safari experience! Every detail was perfectly planned. Tanzania exceeded all expectations.',
      image: 'https://images.pexels.com/photos/3775087/pexels-photo-3775087.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Marco Rossi',
      country: 'Italy',
      rating: 5,
      text: 'Climbing Kilimanjaro was a dream come true. The guides were professional and the scenery was breathtaking.',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    },
    {
      name: 'Emma Thompson',
      country: 'United Kingdom',
      rating: 5,
      text: 'Zanzibar was paradise! The beaches, culture, and food created memories that will last a lifetime.',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
    }
  ];

  const stats = [
    { number: '50,000+', label: 'Happy Travelers' },
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Safari Tours' },
    { number: '98%', label: 'Satisfaction Rate' }
  ];

  return (
    <>
      <Helmet>
        <title>Tanzania Travel Hub - Your Ultimate Safari & Travel Guide | Best Safari Tours 2025</title>
        <meta name="description" content="Discover Tanzania with expert safari tours, Kilimanjaro climbing, and Zanzibar holidays. Book your dream Tanzania adventure with local experts. Best prices guaranteed." />
        <meta name="keywords" content="Tanzania safari, Kilimanjaro climbing, Zanzibar holidays, Serengeti tours, Ngorongoro crater, Tanzania travel guide, safari packages, Africa travel" />
        <link rel="canonical" href="https://tanzaniatravelhub.com" />
        <meta property="og:title" content="Tanzania Travel Hub - Ultimate Safari & Travel Guide" />
        <meta property="og:description" content="Book amazing Tanzania safaris, climb Kilimanjaro, explore Zanzibar. Expert local guides, best prices, unforgettable experiences." />
        <meta property="og:url" content="https://tanzaniatravelhub.com" />
        <meta property="og:type" content="website" />
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
              backgroundImage: 'url("https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
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
                Discover 
                <span className="block bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                  Tanzania's Magic
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                From epic safaris in the Serengeti to pristine beaches in Zanzibar, 
                create unforgettable memories with Tanzania's #1 travel experts.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <Link
                  to="/booking"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors flex items-center space-x-2 group"
                >
                  <span>Start Your Adventure</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>Watch Our Story</span>
                </button>
              </div>

              {/* Hero Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-orange-400">{stat.number}</div>
                    <div className="text-gray-200 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </section>

        {/* Top Destinations */}
        <section ref={destinationsRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={destinationsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Top Destinations
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore Tanzania's most iconic destinations, each offering unique experiences and unforgettable memories
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {topDestinations.map((destination, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={destinationsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group cursor-pointer"
                >
                  <Link to={destination.link} className="block">
                    <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center space-x-2 mb-2">
                          <destination.icon className="h-5 w-5 text-orange-400" />
                          <h3 className="text-xl font-bold">{destination.name}</h3>
                        </div>
                        <p className="text-gray-200 text-sm">{destination.description}</p>
                      </div>
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/destinations"
                className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
              >
                <span>Explore All Destinations</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
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
                Unforgettable Experiences
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Immerse yourself in Tanzania's diverse landscapes, wildlife, and cultures
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={experiencesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{experience.title}</h3>
                    <p className="text-gray-600 mb-6">{experience.description}</p>
                    <ul className="space-y-2">
                      {experience.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
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
                    Free Tanzania Travel Resources
                  </h2>
                  <p className="text-xl text-gray-600 mb-8">
                    Download our comprehensive guides and planning tools to make your Tanzania trip perfect.
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      'Complete Tanzania Packing Checklist',
                      'Safari Budget Planning Calculator',
                      '14-Day Tanzania Itinerary Template',
                      'Visa Requirements & Process Guide'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Download className="h-5 w-5 text-orange-500" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 space-y-4">
                    <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center justify-center space-x-2">
                      <Download className="h-5 w-5" />
                      <span>Download Free Travel Kit</span>
                    </button>
                    <p className="text-sm text-gray-500 text-center">
                      No spam, just valuable travel insights. Unsubscribe anytime.
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="https://images.pexels.com/photos/3155830/pexels-photo-3155830.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                    alt="Tanzania travel planning"
                    className="rounded-2xl shadow-lg"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Award className="h-6 w-6" />
                      <div>
                        <div className="font-bold">50,000+</div>
                        <div className="text-sm text-orange-100">Downloads</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section ref={testimonialsRef} className="py-20 bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                What Travelers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Real experiences from adventurers who discovered Tanzania with us
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-800 p-8 rounded-2xl"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.country}</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready for Your Tanzania Adventure?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Let our local experts create your perfect Tanzania experience. 
                From safaris to Kilimanjaro, we make dreams come true.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/booking"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Plan My Trip</span>
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

export default Home;