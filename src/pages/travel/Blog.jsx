import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Wifi, 
  Smartphone, 
  Globe,
  Search,
  Plane,
  Map,
  Clock,
  Bookmark,
  Tag,
  Share2
} from 'lucide-react';
import VisitorCounter from '../../components/VisitorCounter';

const TravelBlog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [postsRef, postsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const blogPosts = [
    {
      id: 1,
      title: 'How to Stay Connected While Hiking Mount Kilimanjaro',
      excerpt: 'Complete guide to internet connectivity options on Africa\'s tallest mountain. Tips for maintaining communication during your climb.',
      author: 'Sarah M.',
      date: '2025-02-10',
      readTime: '7 min read',
      category: 'Travel Tech',
      image: 'https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true,
      slug: 'how-to-stay-connected-while-hiking-kilimanjaro'
    },
    {
      id: 2,
      title: 'Digital Nomad Guide to Working Remotely in Zanzibar',
      excerpt: 'Everything you need to know about internet speeds, coworking spaces, and accommodation with reliable connectivity in Zanzibar.',
      author: 'Michael T.',
      date: '2025-02-01',
      readTime: '10 min read',
      category: 'Digital Nomad',
      image: 'https://images.pexels.com/photos/3155830/pexels-photo-3155830.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      slug: 'digital-nomad-guide-working-remotely-zanzibar'
    },
    {
      id: 3,
      title: 'Best Apps for Planning Your Tanzania Safari',
      excerpt: 'Essential mobile apps for wildlife spotting, navigation, language translation, and sharing your safari experience in real-time.',
      author: 'David L.',
      date: '2025-01-20',
      readTime: '6 min read',
      category: 'Travel Tech',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      slug: 'best-apps-for-planning-tanzania-safari'
    },
    {
      id: 4,
      title: 'Internet Connectivity in Serengeti: What to Expect',
      excerpt: 'Realistic guide to internet availability across different areas of Serengeti National Park. Plan ahead for your connected safari.',
      author: 'Emma K.',
      date: '2025-01-15',
      readTime: '8 min read',
      category: 'Travel Tech',
      image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      slug: 'internet-connectivity-in-serengeti'
    },
    {
      id: 5,
      title: 'How to Create Stunning Tanzania Travel Content',
      excerpt: 'Tips from professional content creators on capturing, editing and sharing your Tanzania travel moments while on the go.',
      author: 'James W.',
      date: '2025-01-05',
      readTime: '9 min read',
      category: 'Content Creation',
      image: 'https://images.pexels.com/photos/3329292/pexels-photo-3329292.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false,
      slug: 'create-stunning-tanzania-travel-content'
    },
    {
      id: 6,
      title: 'Why Your Family Needs WiFi During Tanzania Travel',
      excerpt: 'From keeping kids entertained to navigating unfamiliar places, discover why having reliable internet transforms family travel in Tanzania.',
      author: 'Lisa M.',
      date: '2024-12-20',
      readTime: '6 min read',
      category: 'Family Travel',
      image: 'https://images.pexels.com/photos/5081918/pexels-photo-5081918.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true,
      slug: 'why-family-needs-wifi-during-tanzania-travel'
    }
  ];

  const categories = ['All', 'Travel Tech', 'Digital Nomad', 'Family Travel', 'Content Creation'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = searchTerm 
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : selectedCategory === 'All' 
      ? blogPosts 
      : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPosts = blogPosts.filter(post => post.featured);
  
  return (
    <>
      <Helmet>
        <title>Travel Technology Blog - Tips for Staying Connected in Tanzania | Safari Surf WiFi</title>
        <meta name="description" content="Expert travel technology tips, digital nomad guides, and connectivity solutions for Tanzania. Learn about staying connected on safari, at beaches, and in remote areas." />
        <meta name="keywords" content="Tanzania travel blog, Tanzania WiFi solutions, travel tech tips, digital nomad Tanzania, safari connectivity" />
        <link rel="canonical" href="https://safarisurfwifi.com/travel/blog" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative py-32 bg-gradient-to-br from-indigo-600 via-purple-500 to-blue-500 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
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
                Travel Technology Blog
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Expert tech tips, connectivity solutions, and digital nomad insights
                for your perfect Tanzania adventure.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search Section */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-8 justify-between items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative w-full md:w-auto flex-grow md:max-w-xl"
              >
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 text-lg border-2 border-gray-300 rounded-full focus:border-indigo-500 focus:outline-none transition-colors"
                />
              </motion.div>
              
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        {searchTerm === '' && selectedCategory === 'All' && (
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Articles</h2>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPosts.map((post) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden group hover:shadow-2xl transition-shadow"
                  >
                    <Link to={`/travel/blog/${post.slug}`} className="block">
                      <div className="relative">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute top-4 left-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                      </div>
                      <div className="p-8">
                        <div className="flex items-center space-x-4 mb-4">
                          <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm font-semibold">
                            {post.category}
                          </span>
                          <span className="text-gray-500 text-sm">{post.readTime}</span>
                        </div>
                        
                        <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 text-lg leading-relaxed mb-6 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <User className="h-5 w-5 text-gray-400" />
                            <span className="text-gray-700 font-medium">{post.author}</span>
                            <Calendar className="h-5 w-5 text-gray-400 ml-4" />
                            <span className="text-gray-500">
                              {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                              })}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group">
                            <span>Read More</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Blog Posts Grid */}
        <section ref={postsRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={postsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {searchTerm ? 'Search Results' : selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
              </h2>
              <p className="text-xl text-gray-600">
                {searchTerm
                  ? `Found ${filteredPosts.length} articles matching "${searchTerm}"`
                  : 'Expert insights, travel tech tips, and connectivity solutions for your Tanzania adventure'
                }
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => {
                const categoryIcons = {
                  'Travel Tech': Wifi,
                  'Digital Nomad': Globe,
                  'Family Travel': Users,
                  'Content Creation': Camera
                };
                
                const CategoryIcon = categoryIcons[post.category] || Map;
                
                return (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={postsInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 border border-gray-100"
                  >
                    <Link to={`/travel/blog/${post.slug}`} className="block">
                      <div className="relative overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-semibold text-indigo-600">
                            <CategoryIcon className="h-4 w-4" />
                            <span>{post.category}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                          <span>{post.readTime}</span>
                          <span>•</span>
                          <span>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors line-clamp-2 h-[3.75rem]">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 h-[4.5rem]">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-gray-400" />
                            <span className="text-sm text-gray-700">{post.author}</span>
                          </div>
                          
                          <div className="flex items-center space-x-1 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group/arrow">
                            <span className="text-sm">Read</span>
                            <ArrowRight className="h-4 w-4 group-hover/arrow:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                );
              })}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search term or browse by category</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Stay Connected in Tanzania
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Don't miss a moment of your adventure. Rent a portable WiFi device for reliable internet anywhere in Tanzania.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/contact"
                  className="bg-white text-indigo-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <Wifi className="h-5 w-5" />
                  <span>Rent WiFi Now</span>
                </Link>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                >
                  Ask Via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Customer Stats */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Growing Community</h2>
              <p className="text-lg text-gray-600">
                <VisitorCounter /> travelers trust our connectivity solutions during their Tanzania adventures
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TravelBlog;