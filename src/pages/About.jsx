import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Users, Target, Award, Heart, Zap, Shield, Wifi, MapPin, TrendingUp, CheckCircle } from 'lucide-react';
import VisitorCounter from '../components/VisitorCounter';

const About = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [missionRef, missionInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [teamRef, teamInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const values = [
    {
      icon: Zap,
      title: 'Speed & Reliability',
      description: 'Delivering lightning-fast internet with 99.9% uptime guarantee across Tanzania.',
      color: 'text-yellow-500'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Enterprise-grade security protecting our customers\' data and privacy.',
      color: 'text-blue-500'
    },
    {
      icon: Heart,
      title: 'Customer-First',
      description: 'Putting customer satisfaction at the heart of everything we do, 24/7.',
      color: 'text-red-500'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Pioneering portable WiFi solutions that keep Tanzania connected on the go.',
      color: 'text-green-500'
    }
  ];

  const team = [
    {
      name: 'Dr. Amara Mwalimu',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'With over 15 years in telecommunications, Dr. Mwalimu leads our vision to connect all of Tanzania.'
    },
    {
      name: 'James Kiprotich',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Network infrastructure expert ensuring our systems deliver world-class performance.'
    },
    {
      name: 'Sarah Juma',
      role: 'Head of Customer Success',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Passionate about customer satisfaction and building lasting relationships with our community.'
    },
    {
      name: 'Michael Nyerere',
      role: 'Operations Director',
      image: 'https://images.pexels.com/photos/3777942/pexels-photo-3777942.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      bio: 'Ensuring seamless operations and expansion across Tanzania\'s diverse regions.'
    }
  ];

  const achievements = [
    { number: <VisitorCounter />, label: 'Happy Customers', icon: '😊' },
    { number: '15+', label: 'Cities Covered', icon: '🏙️' },
    { number: '99.9%', label: 'Uptime Achieved', icon: '⚡' },
    { number: '5 Years', label: 'Industry Experience', icon: '🏆' }
  ];

  return (
    <>
      <Helmet>
        <title>About Safari Surf WiFi - Tanzania's Leading WiFi Rental Service | Our Story</title>
        <meta name="description" content="Learn about Safari Surf WiFi, Tanzania's premier portable WiFi rental service. Join our growing customer base, 15+ cities, 99.9% uptime. Connecting Tanzania since 2020." />
        <meta name="keywords" content="about Safari Surf WiFi, Tanzania WiFi company, portable internet rental history, WiFi rental team Tanzania, our story" />
        <link rel="canonical" href="https://safarisurfwifi.com/about" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative py-32 bg-gradient-to-br from-orange-600 via-red-500 to-yellow-500 text-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/20" />
          <div 
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
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
              <Wifi className="h-16 w-16 mx-auto mb-6 text-yellow-300" />
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                About Safari Surf WiFi
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Pioneering Tanzania's digital transformation through reliable, 
                portable WiFi solutions that connect people and empower dreams.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-4xl mb-2" aria-hidden="true">{achievement.icon}</div>
                  <div className="text-3xl md:text-4xl font-black text-orange-600">
                    {typeof achievement.number === 'object' ? achievement.number : achievement.number}
                  </div>
                  <div className="text-gray-600 font-medium">{achievement.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
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
                  Our Story
                </h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    Founded in 2020 with a simple yet powerful vision: to revolutionize how Tanzanians 
                    stay connected by providing instant, portable WiFi solutions wherever they go.
                  </p>
                  <p>
                    Starting from humble beginnings in Dar es Salaam, we recognized that reliable internet 
                    access shouldn't be limited to fixed locations. Whether you're a business traveler, 
                    digital nomad, tourist, or local entrepreneur, everyone deserves seamless connectivity.
                  </p>
                  <p>
                    Today, Safari Surf WiFi serves <VisitorCounter showAnimation={false} /> customers across 15+ cities in Tanzania. 
                    Our portable devices have empowered countless individuals and businesses to stay 
                    productive, connected, and competitive in the digital economy.
                  </p>
                  <p>
                    We're proud to be 100% Tanzanian-owned and operated, reinvesting our success back 
                    into local communities and continuing to expand our coverage to reach every corner 
                    of Tanzania that needs reliable internet access.
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
                  src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Tanzania landscape representing our coverage"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-orange-600/30 to-transparent rounded-2xl" />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <span className="font-semibold text-gray-900">15+ Cities Covered</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section ref={missionRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-white p-10 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <Target className="h-12 w-12 text-orange-500 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To democratize internet access across Tanzania by providing reliable, 
                  affordable, and instant portable WiFi solutions that empower individuals, 
                  businesses, and communities to thrive in the digital age.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={missionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-10 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <Users className="h-12 w-12 text-orange-500 mr-4" />
                  <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be East Africa's leading portable WiFi service provider, recognized for 
                  innovation, reliability, and our commitment to connecting every Tanzanian 
                  to opportunities in the global digital economy.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section ref={valuesRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={valuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className={`inline-flex p-4 rounded-full bg-gray-100 ${value.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <value.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section ref={teamRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate professionals dedicated to connecting Tanzania
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={`${member.name}, ${member.role}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-orange-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
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
                  Why Choose Safari Surf WiFi?
                </h2>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  With over 5 years of experience in Tanzania's telecommunications landscape, 
                  we provide reliable, affordable, and instant WiFi solutions that you can trust.
                </p>
                
                <ul className="space-y-4">
                  {[
                    'Instant 5-minute setup anywhere in Tanzania',
                    '99.9% uptime guarantee with 24/7 monitoring',
                    'Nationwide coverage in 15+ major cities',
                    'Enterprise-grade security for all connections',
                    '24/7 customer support via WhatsApp and phone',
                    'Transparent pricing with no hidden fees',
                    `Trusted by ${<VisitorCounter showAnimation={false} />}+ satisfied customers`,
                    '100% Tanzanian-owned and operated'
                  ].map((reason, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{reason}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Safari Surf WiFi service coverage across Tanzania"
                  className="rounded-2xl shadow-2xl"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-6 w-6" />
                    <div>
                      <div className="font-bold">Growing Fast</div>
                      <div className="text-sm text-orange-100">Expanding Daily</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;