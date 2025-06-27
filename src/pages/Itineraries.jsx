import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Clock, Users, Star, ArrowRight, Calendar, Camera, Mountain, Palmtree, Binary as Binoculars, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Itineraries = () => {
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [itinerariesRef, itinerariesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const itineraries = [
    {
      id: 1,
      title: 'Classic Northern Safari',
      duration: '7 days',
      durationDays: 7,
      price: 'From $2,500',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Experience the best of Tanzania\'s northern circuit including Serengeti, Ngorongoro Crater, and Tarangire.',
      highlights: ['Serengeti National Park', 'Ngorongoro Crater', 'Tarangire National Park', 'Lake Manyara'],
      bestFor: ['First-time visitors', 'Wildlife enthusiasts'],
      difficulty: 'Easy',
      groupSize: '2-8 people',
      rating: 4.9,
      reviews: 342,
      featured: true
    },
    {
      id: 2,
      title: 'Kilimanjaro Trekking Adventure',
      duration: '8 days',
      durationDays: 8,
      price: 'From $1,800',
      image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Conquer Africa\'s highest peak via the scenic Machame route with professional guides.',
      highlights: ['Machame Route', 'Uhuru Peak', 'Barranco Wall', 'Shira Plateau'],
      bestFor: ['Adventure seekers', 'Mountain climbers'],
      difficulty: 'Challenging',
      groupSize: '4-12 people',
      rating: 4.8,
      reviews: 256,
      featured: false
    },
    {
      id: 3,
      title: 'Zanzibar Beach Paradise',
      duration: '5 days',
      durationDays: 5,
      price: 'From $1,200',
      image: 'https://images.pexels.com/photos/1450360/pexels-photo-1450360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Relax on pristine beaches, explore Stone Town, and experience Zanzibar\'s rich culture.',
      highlights: ['Stone Town', 'Nungwi Beach', 'Spice Tour', 'Dhow Cruise'],
      bestFor: ['Beach lovers', 'Culture enthusiasts'],
      difficulty: 'Easy',
      groupSize: '2-10 people',
      rating: 4.7,
      reviews: 189,
      featured: false
    },
    {
      id: 4,
      title: 'Complete Tanzania Explorer',
      duration: '14 days',
      durationDays: 14,
      price: 'From $4,500',
      image: 'https://images.pexels.com/photos/1170621/pexels-photo-1170621.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'The ultimate Tanzania experience combining safari, Kilimanjaro, and Zanzibar beaches.',
      highlights: ['Full Northern Circuit', 'Kilimanjaro Trek', 'Zanzibar Extension', 'Cultural Visits'],
      bestFor: ['Adventure seekers', 'Comprehensive experience'],
      difficulty: 'Moderate to Challenging',
      groupSize: '4-8 people',
      rating: 4.9,
      reviews: 98,
      featured: true
    },
    {
      id: 5,
      title: 'Southern Circuit Discovery',
      duration: '10 days',
      durationDays: 10,
      price: 'From $3,200',
      image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Explore Tanzania\'s pristine southern parks with fewer crowds and incredible wildlife.',
      highlights: ['Ruaha National Park', 'Selous Game Reserve', 'Mikumi National Park', 'Walking Safaris'],
      bestFor: ['Off-the-beaten-path', 'Photography enthusiasts'],
      difficulty: 'Moderate',
      groupSize: '2-6 people',
      rating: 4.8,
      reviews: 156,
      featured: false
    },
    {
      id: 6,
      title: 'Luxury Safari Experience',
      duration: '6 days',
      durationDays: 6,
      price: 'From $5,500',
      image: 'https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
      description: 'Indulge in luxury accommodations while experiencing the best wildlife viewing in Africa.',
      highlights: ['Luxury Lodges', 'Private Game Drives', 'Hot Air Balloon', 'Champagne Bush Dinner'],
      bestFor: ['Luxury travelers', 'Honeymoons'],
      difficulty: 'Easy',
      groupSize: '2-4 people',
      rating: 5.0,
      reviews: 87,
      featured: false
    }
  ];

  const durations = ['all', '5-7 days', '8-10 days', '10+ days'];

  const filteredItineraries = selectedDuration === 'all' 
    ? itineraries 
    : itineraries.filter(itinerary => {
        if (selectedDuration === '5-7 days') return itinerary.durationDays >= 5 && itinerary.durationDays <= 7;
        if (selectedDuration === '8-10 days') return itinerary.durationDays >= 8 && itinerary.durationDays <= 10;
        if (selectedDuration === '10+ days') return itinerary.durationDays > 10;
        return true;
      });

  const features = [
    {
      icon: MapPin,
      title: 'Expert Local Guides',
      description: 'Experienced guides with deep knowledge of Tanzania\'s wildlife and culture'
    },
    {
      icon: Calendar,
      title: 'Flexible Scheduling',
      description: 'Customizable itineraries to match your travel dates and preferences'
    },
    {
      icon: Camera,
      title: 'Photography Focus',
      description: 'Perfect timing and locations for incredible wildlife and landscape photography'
    },
    {
      icon: Heart,
      title: 'Small Group Sizes',
      description: 'Intimate experiences with small groups for personalized attention'
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-green-600 bg-green-100';
      case 'Moderate': return 'text-yellow-600 bg-yellow-100';
      case 'Challenging': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 text-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/30" />
        <div 
          className="absolute inset-0 opacity-20"
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
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Tanzania Itineraries
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Carefully crafted journeys to experience the best of Tanzania. 
              From wildlife safaris to mountain adventures and pristine beaches.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Duration Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {durations.map((duration) => (
              <button
                key={duration}
                onClick={() => setSelectedDuration(duration)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors capitalize ${
                  selectedDuration === duration
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                }`}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Itineraries Grid */}
      <section ref={itinerariesRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={itinerariesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Adventure
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From short getaways to comprehensive expeditions, find the perfect itinerary for your Tanzania experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItineraries.map((itinerary, index) => (
              <motion.div
                key={itinerary.id}
                initial={{ opacity: 0, y: 30 }}
                animate={itinerariesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 ${
                  itinerary.featured ? 'ring-2 ring-orange-500' : ''
                }`}
              >
                {itinerary.featured && (
                  <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                    ⭐ Most Popular
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={itinerary.image}
                    alt={itinerary.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1 text-sm font-semibold text-orange-600">
                      <Clock className="h-4 w-4" />
                      <span>{itinerary.duration}</span>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className={`text-xs font-semibold px-2 py-1 rounded-full ${getDifficultyColor(itinerary.difficulty)}`}>
                      {itinerary.difficulty}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{itinerary.title}</h3>
                    <div className="text-2xl font-bold text-orange-600">{itinerary.price}</div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{itinerary.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <Users className="h-4 w-4 text-orange-500" />
                      <span>{itinerary.groupSize}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-700">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{itinerary.rating} ({itinerary.reviews} reviews)</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Highlights:</h4>
                    <div className="flex flex-wrap gap-2">
                      {itinerary.highlights.slice(0, 3).map((highlight, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                          {highlight}
                        </span>
                      ))}
                      {itinerary.highlights.length > 3 && (
                        <span className="text-orange-600 text-xs">+{itinerary.highlights.length - 3} more</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Link
                      to="/contact"
                      className="flex-1 bg-orange-600 text-white py-3 px-4 rounded-full font-semibold hover:bg-orange-700 transition-colors text-center"
                    >
                      Book Now
                    </Link>
                    <button className="px-4 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Our Itineraries?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every journey is crafted with care to ensure unforgettable experiences
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-flex p-4 rounded-full bg-orange-100 text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Itinerary CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need a Custom Itinerary?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Can't find the perfect itinerary? Let us create a personalized journey 
              tailored to your interests, budget, and timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <span>Plan My Trip</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/255764928408"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Itineraries;