import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, User, ArrowRight, Wifi, Smartphone, Globe } from 'lucide-react';
import SEO from '../components/SEO';

const Blog = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [postsRef, postsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Internet in Tanzania: 5G and Beyond',
      excerpt: 'Exploring how 5G technology will revolutionize internet connectivity across Tanzania and what it means for businesses and consumers.',
      author: 'Dr. Amara Mwalimu',
      date: '2025-01-15',
      readTime: '5 min read',
      category: 'Technology',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'How to Optimize Your WiFi Network for Remote Work',
      excerpt: 'Essential tips and tricks to ensure your home WiFi network can handle video calls, file uploads, and multiple devices simultaneously.',
      author: 'James Kiprotich',
      date: '2025-01-10',
      readTime: '7 min read',
      category: 'Tips & Guides',
      image: 'https://images.pexels.com/photos/4491461/pexels-photo-4491461.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 3,
      title: 'Bridging the Digital Divide in Rural Tanzania',
      excerpt: 'Our mission to bring high-speed internet to underserved communities and the innovative solutions making it possible.',
      author: 'Sarah Juma',
      date: '2025-01-05',
      readTime: '6 min read',
      category: 'Community',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 4,
      title: 'WiFi Security Best Practices for Small Businesses',
      excerpt: 'Protect your business network from cyber threats with these essential security measures and best practices.',
      author: 'Michael Nyerere',
      date: '2024-12-28',
      readTime: '8 min read',
      category: 'Security',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 5,
      title: 'Understanding Internet Speeds: What You Really Need',
      excerpt: 'Demystifying internet speeds and helping you choose the right plan for your specific needs and usage patterns.',
      author: 'Dr. Amara Mwalimu',
      date: '2024-12-20',
      readTime: '4 min read',
      category: 'Education',
      image: 'https://images.pexels.com/photos/163064/play-stone-network-networked-163064.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    },
    {
      id: 6,
      title: 'The Impact of Reliable Internet on Tanzania\'s Economy',
      excerpt: 'How improved internet infrastructure is driving economic growth and creating opportunities across Tanzania.',
      author: 'James Kiprotich',
      date: '2024-12-15',
      readTime: '9 min read',
      category: 'Economy',
      image: 'https://images.pexels.com/photos/2376997/pexels-photo-2376997.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      featured: false
    }
  ];

  const categories = ['All', 'Technology', 'Tips & Guides', 'Community', 'Security', 'Education', 'Economy'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const getCategoryIcon = (category) => {
    const icons = {
      'Technology': Globe,
      'Tips & Guides': Wifi,
      'Community': User,
      'Security': Globe,
      'Education': Smartphone,
      'Economy': Globe
    };
    return icons[category] || Globe;
  };

  return (
    <div className="min-h-screen">
      <SEO
        title="Safari Surf WiFi Blog - Connectivity Tips & News"
        description="Read the latest articles on staying connected in Tanzania with portable WiFi and tech advice."
        url="https://safari.flit.tz/blog"
        type="article"
      />
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-32 bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 text-white overflow-hidden"
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
              Safari Surf Blog
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              Stay updated with the latest insights on WiFi technology, digital trends, 
              and how we're connecting Tanzania to the future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-colors ${
                  selectedCategory === category
                    ? 'bg-orange-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-orange-100 hover:text-orange-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {selectedCategory === 'All' && featuredPost && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Article</h2>
            </motion.div>

            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden lg:flex group hover:shadow-2xl transition-shadow"
            >
              <div className="lg:w-1/2">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-64 lg:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold">
                    {featuredPost.category}
                  </span>
                  <span className="text-gray-500 text-sm">{featuredPost.readTime}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <User className="h-5 w-5 text-gray-400" />
                    <span className="text-gray-700 font-medium">{featuredPost.author}</span>
                    <Calendar className="h-5 w-5 text-gray-400 ml-4" />
                    <span className="text-gray-500">
                      {new Date(featuredPost.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <button className="flex items-center space-x-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors group">
                    <span>Read More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.article>
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
              {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-xl text-gray-600">
              Insights and updates from the Safari Surf WiFi team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'All' ? regularPosts : filteredPosts).map((post, index) => {
              const CategoryIcon = getCategoryIcon(post.category);
              return (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={postsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-orange-600">
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
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-700">{post.author}</span>
                      </div>
                      
                      <button className="flex items-center space-x-1 text-orange-600 font-semibold hover:text-orange-700 transition-colors group">
                        <span className="text-sm">Read</span>
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-yellow-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on WiFi technology, 
              network expansions, and digital trends in Tanzania.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            
            <p className="text-orange-100 text-sm mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;