import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  Calendar, 
  DollarSign, 
  Backpack, 
  CreditCard,
  MapPin,
  Clock,
  Users,
  ArrowRight,
  Download,
  Star,
  BookOpen,
  Compass
} from 'lucide-react';

const Guides = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [guidesRef, guidesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const guides = [
    {
      title: 'Tanzania Visa Guide',
      slug: 'visa-to-tanzania',
      description: 'Complete guide to getting your Tanzania visa - requirements, process, and tips',
      icon: FileText,
      readTime: '8 min read',
      difficulty: 'Essential',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Best Time to Visit Tanzania',
      slug: 'best-time-to-visit-tanzania',
      description: 'Discover the perfect time for safaris, climbing, and beach holidays',
      icon: Calendar,
      readTime: '6 min read',
      difficulty: 'Essential',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Tanzania Safari Costs',
      slug: 'tanzania-safari-cost',
      description: 'Budget breakdown and cost-saving tips for your Tanzania safari',
      icon: DollarSign,
      readTime: '10 min read',
      difficulty: 'Planning',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Tanzania Packing List',
      slug: 'tanzania-packing-list',
      description: 'Essential items to pack for safaris, Kilimanjaro, and Zanzibar',
      icon: Backpack,
      readTime: '12 min read',
      difficulty: 'Preparation',
      featured: false,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Tanzania Travel Budget',
      slug: 'tanzania-travel-budget',
      description: 'Complete budget planning guide for all types of Tanzania trips',
      icon: CreditCard,
      readTime: '15 min read',
      difficulty: 'Planning',
      featured: false,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const guideCategories = [
    {
      title: 'Planning & Preparation',
      description: 'Essential guides to plan your perfect Tanzania trip',
      guides: ['visa-to-tanzania', 'best-time-to-visit-tanzania', 'tanzania-travel-budget'],
      icon: Compass
    },
    {
      title: 'Safari & Activities',
      description: 'Everything you need to know about Tanzania safaris and adventures',
      guides: ['tanzania-safari-cost', 'tanzania-packing-list'],
      icon: MapPin
    }
  ];

  const stats = [
    { number: '25+', label: 'Travel Guides' },
    { number: '500K+', label: 'Guide Downloads' },
    { number: '4.9/5', label: 'Reader Rating' },
    { number: '2025', label: 'Updated for' }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Essential': return 'bg-red-100 text-red-800';
      case 'Planning': return 'bg-yellow-100 text-yellow-800';
      case 'Preparation': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <Helmet>
        <title>Tanzania Travel Guides 2025 - Visa, Safari Costs, Best Time to Visit | Expert Tips</title>
        <meta name="description" content="Complete Tanzania travel guides covering visa requirements, safari costs, best time to visit, packing lists, and budget planning. Free expert advice for 2025." />
        <meta name="keywords" content="Tanzania travel guide, Tanzania visa guide, safari costs, best time visit Tanzania, Tanzania packing list, travel budget Tanzania" />
        <link rel="canonical" href="https://safari.flit.tz/guides" />
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
              backgroundImage: 'url("https://images.pexels.com/photos/1170621/pexels-photo-1170621.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
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
              <BookOpen className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Tanzania Travel Guides
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Expert guides to help you plan the perfect Tanzania adventure. 
                From visa requirements to safari costs - we've got you covered.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Guides */}
        <section ref={guidesRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={guidesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Essential Travel Guides
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Everything you need to know for an amazing Tanzania experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guides.map((guide, index) => (
                <motion.div
                  key={guide.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={guidesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={`/guides/${guide.slug}`} className="block">
                    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group-hover:-translate-y-2 ${
                      guide.featured ? 'ring-2 ring-orange-500' : ''
                    }`}>
                      {guide.featured && (
                        <div className="bg-orange-500 text-white text-center py-2 text-sm font-semibold">
                          <Star className="inline h-4 w-4 mr-1" />
                          Most Popular
                        </div>
                      )}
                      
                      <div className={`h-32 bg-gradient-to-r ${guide.color} flex items-center justify-center`}>
                        <guide.icon className="h-16 w-16 text-white" />
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(guide.difficulty)}`}>
                            {guide.difficulty}
                          </span>
                          <div className="flex items-center space-x-1 text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span className="text-sm">{guide.readTime}</span>
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                          {guide.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-2">{guide.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-orange-600 font-semibold">Read Guide</span>
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

        {/* Guide Categories */}
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
                Browse by Category
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find exactly what you need for your Tanzania adventure
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {guideCategories.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 rounded-2xl p-8"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <category.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {category.guides.map((guideSlug) => {
                      const guide = guides.find(g => g.slug === guideSlug);
                      if (!guide) return null;
                      
                      return (
                        <Link
                          key={guideSlug}
                          to={`/guides/${guideSlug}`}
                          className="flex items-center justify-between p-4 bg-white rounded-xl hover:shadow-md transition-shadow group"
                        >
                          <div className="flex items-center space-x-3">
                            <guide.icon className="h-5 w-5 text-gray-400" />
                            <div>
                              <div className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                                {guide.title}
                              </div>
                              <div className="text-sm text-gray-500">{guide.readTime}</div>
                            </div>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-orange-600 group-hover:translate-x-1 transition-all" />
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Free Downloads CTA */}
        <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-500 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Free Travel Resources
                </h2>
                <p className="text-xl mb-8 leading-relaxed">
                  Download our comprehensive travel guides, checklists, and planning tools 
                  to make your Tanzania trip planning easier and more organized.
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    'Complete Tanzania Packing Checklist',
                    'Safari Budget Planning Calculator',
                    'Visa Application Step-by-Step Guide',
                    'Emergency Contacts & Important Numbers'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Download className="h-5 w-5 text-yellow-300" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2">
                  <Download className="h-5 w-5" />
                  <span>Download Free Travel Kit</span>
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/1170621/pexels-photo-1170621.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Tanzania travel planning"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Need Help CTA */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Still Have Questions?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
                Our travel experts are here to help you plan the perfect Tanzania adventure. 
                Get personalized advice and recommendations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors flex items-center space-x-2"
                >
                  <Users className="h-5 w-5" />
                  <span>Talk to an Expert</span>
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
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Guides;