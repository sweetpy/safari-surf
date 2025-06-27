import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Camera, MapPin, Clock, Users, Star, CheckCircle, ArrowRight, Calendar, Binary as Binoculars, Tent, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Safaris = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [safariRef, safariInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [experienceRef, experienceInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const safariPackages = [
    {
      id: 1,
      title: "Serengeti Classic Safari",
      duration: "5 Days / 4 Nights",
      price: "$1,299",
      image: "https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Big Five Game Viewing", "Serengeti National Park", "Ngorongoro Crater", "Cultural Village Visit"],
      rating: 4.9,
      reviews: 245,
      popular: true
    },
    {
      id: 2,
      title: "Kilimanjaro & Safari Combo",
      duration: "12 Days / 11 Nights",
      price: "$2,899",
      image: "https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Mount Kilimanjaro Trek", "Serengeti Safari", "Tarangire National Park", "Certified Guides"],
      rating: 4.8,
      reviews: 189,
      popular: false
    },
    {
      id: 3,
      title: "Northern Circuit Adventure",
      duration: "8 Days / 7 Nights",
      price: "$1,899",
      image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Tarangire National Park", "Lake Manyara", "Ngorongoro Crater", "Serengeti Plains"],
      rating: 4.9,
      reviews: 312,
      popular: false
    },
    {
      id: 4,
      title: "Budget Safari Experience",
      duration: "3 Days / 2 Nights",
      price: "$699",
      image: "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Ngorongoro Crater", "Tarangire National Park", "Camping Experience", "Local Guides"],
      rating: 4.7,
      reviews: 156,
      popular: false
    },
    {
      id: 5,
      title: "Luxury Serengeti Safari",
      duration: "6 Days / 5 Nights",
      price: "$3,499",
      image: "https://images.pexels.com/photos/802112/pexels-photo-802112.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Luxury Lodges", "Private Game Drives", "Hot Air Balloon", "Gourmet Dining"],
      rating: 5.0,
      reviews: 89,
      popular: false
    },
    {
      id: 6,
      title: "Migration Safari Special",
      duration: "7 Days / 6 Nights",
      price: "$2,299",
      image: "https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      highlights: ["Great Migration", "River Crossings", "Masai Mara Extension", "Professional Photography"],
      rating: 4.9,
      reviews: 278,
      popular: true
    }
  ];

  const safariTypes = [
    {
      icon: Camera,
      title: "Photography Safaris",
      description: "Capture stunning wildlife with professional photography guides and equipment."
    },
    {
      icon: Tent,
      title: "Camping Safaris",
      description: "Authentic bush camping experience under the African stars."
    },
    {
      icon: Award,
      title: "Luxury Safaris",
      description: "Premium lodges and personalized service for the ultimate safari experience."
    },
    {
      icon: Users,
      title: "Group Safaris",
      description: "Join like-minded travelers for shared adventures and memories."
    }
  ];

  const whyChooseUs = [
    "Expert local guides with 15+ years experience",
    "Small group sizes (max 6 people per vehicle)",
    "All-inclusive packages with no hidden fees",
    "24/7 support during your safari",
    "Sustainable tourism practices",
    "Guaranteed window seat for all guests"
  ];

  return (
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
            backgroundImage: 'url("https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
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
              Unforgettable
              <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Safari Adventures
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Experience the magic of Tanzania's wildlife with expert guides, 
              comfortable accommodations, and memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/booking"
                className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors flex items-center space-x-2 group"
              >
                <span>Book Your Safari</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://wa.me/255123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
              >
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Safari Packages */}
      <section ref={safariRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={safariInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Safari Packages
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully crafted safari experiences, designed to showcase 
              the best of Tanzania's incredible wildlife and landscapes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {safariPackages.map((safari, index) => (
              <motion.div
                key={safari.id}
                initial={{ opacity: 0, y: 30 }}
                animate={safariInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
              >
                {safari.popular && (
                  <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                    <Star className="inline h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                )}
                
                <div className="relative overflow-hidden">
                  <img
                    src={safari.image}
                    alt={safari.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-orange-600 font-bold text-lg">{safari.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{safari.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{safari.rating}</span>
                      <span className="text-sm text-gray-500">({safari.reviews})</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4 text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{safari.duration}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {safari.highlights.map((highlight, highlightIndex) => (
                      <li key={highlightIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{highlight}</span>
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

      {/* Safari Types */}
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
              Safari Experiences
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Different ways to experience Tanzania's incredible wildlife
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {safariTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="inline-flex p-4 rounded-full bg-orange-100 text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  <type.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={experienceRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={experienceInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why Choose Our Safaris?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With over 15 years of experience in Tanzania's wilderness, we provide 
                authentic, safe, and unforgettable safari experiences that exceed expectations.
              </p>
              
              <ul className="space-y-4">
                {whyChooseUs.map((reason, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={experienceInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Safari experience"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
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
              Ready for Your Adventure?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Book your dream safari today and create memories that will last a lifetime. 
              Our expert team is ready to help you plan the perfect African adventure.
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
                href="https://wa.me/255123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Safaris;