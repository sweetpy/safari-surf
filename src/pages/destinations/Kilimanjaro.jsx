import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mountain, 
  Clock, 
  Users, 
  Star, 
  Camera, 
  Thermometer,
  MapPin,
  Calendar,
  Award,
  ArrowRight,
  Phone,
  CheckCircle,
  AlertTriangle,
  Sunrise
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Kilimanjaro = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [routesRef, routesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [prepRef, prepInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const routes = [
    {
      name: 'Machame Route',
      duration: '6-7 days',
      difficulty: 'Moderate to Challenging',
      successRate: '85%',
      description: 'Known as the "Whiskey Route" - scenic but challenging with varied terrain.',
      highlights: ['Barranco Wall', 'Lava Tower', 'Shira Plateau', 'Uhuru Peak'],
      image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Marangu Route',
      duration: '5-6 days',
      difficulty: 'Moderate',
      successRate: '65%',
      description: 'The "Coca-Cola Route" - most popular with hut accommodations.',
      highlights: ['Mandara Hut', 'Horombo Hut', 'Kibo Hut', 'Gillman\'s Point'],
      image: 'https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    },
    {
      name: 'Lemosho Route',
      duration: '7-8 days',
      difficulty: 'Moderate',
      successRate: '90%',
      description: 'Longer route with excellent acclimatization and stunning scenery.',
      highlights: ['Shira Cathedral', 'Lava Tower', 'Barranco Valley', 'Uhuru Peak'],
      image: 'https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'
    }
  ];

  const preparationTips = [
    {
      icon: Thermometer,
      title: 'Physical Fitness',
      description: 'Build cardiovascular endurance with regular hiking, running, and strength training at least 3 months before your climb.'
    },
    {
      icon: Mountain,
      title: 'Altitude Training',
      description: 'Practice hiking at higher altitudes if possible. Consider altitude training masks or sessions.'
    },
    {
      icon: Camera,
      title: 'Gear & Equipment',
      description: 'Invest in quality hiking boots, layered clothing system, and proper sleeping gear for extreme conditions.'
    },
    {
      icon: Users,
      title: 'Mental Preparation',
      description: 'Prepare mentally for the challenge. The climb is as much mental as it is physical.'
    }
  ];

  const stats = [
    { number: '5,895m', label: 'Height Above Sea Level' },
    { number: '70%', label: 'Average Success Rate' },
    { number: '7', label: 'Different Routes' },
    { number: '35,000', label: 'Annual Climbers' }
  ];

  const packages = [
    {
      name: 'Machame Route - 7 Days',
      price: '$1,899',
      features: ['Professional guides', 'All meals included', 'Camping equipment', 'Park fees', 'Certificates']
    },
    {
      name: 'Lemosho Route - 8 Days',
      price: '$2,299',
      features: ['Higher success rate', 'Better acclimatization', 'Scenic western approach', 'Small groups', 'Luxury camping']
    },
    {
      name: 'Marangu Route - 6 Days',
      price: '$1,599',
      features: ['Hut accommodations', 'Most economical option', 'Classic route', 'Experienced guides', 'All inclusive']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mount Kilimanjaro Climbing - Tanzania's Highest Peak | Expert Guides & Routes</title>
        <meta name="description" content="Climb Mount Kilimanjaro, Africa's highest peak at 5,895m. Choose from Machame, Lemosho, or Marangu routes. Expert guides, high success rates, all-inclusive packages." />
        <meta name="keywords" content="Mount Kilimanjaro climbing, Kilimanjaro routes, Machame route, Lemosho route, Marangu route, Tanzania mountain climbing, Uhuru Peak" />
        <link rel="canonical" href="https://tanzaniatravelhub.com/destinations/kilimanjaro" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section 
          ref={heroRef}
          className="relative h-screen flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-black/50" />
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
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
                Mount Kilimanjaro
                <span className="block text-3xl md:text-4xl text-orange-400 font-normal">
                  Africa's Highest Peak
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
                Challenge yourself to reach Uhuru Peak at 5,895 meters. 
                Experience the adventure of a lifetime with expert guides and proven routes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Link
                  to="/booking"
                  className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors flex items-center space-x-2 group"
                >
                  <Mountain className="h-5 w-5" />
                  <span>Book Your Climb</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp Guide</span>
                </a>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={heroInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-orange-400">{stat.number}</div>
                    <div className="text-gray-200 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Kilimanjaro */}
        <section ref={aboutRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Africa's Rooftop Awaits
                </h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Mount Kilimanjaro stands majestically at 5,895 meters (19,341 feet), making it the highest 
                  free-standing mountain in the world. This iconic stratovolcano offers climbers the unique 
                  opportunity to traverse through five distinct climate zones.
                </p>
                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  From the lush rainforest at the base to the arctic conditions at the summit, 
                  Kilimanjaro provides an extraordinary journey through diverse ecosystems. 
                  No technical climbing experience is required, making it accessible to determined hikers.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <Sunrise className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Uhuru Peak</div>
                    <div className="text-sm text-gray-600">5,895m Summit</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <Star className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Success Rate</div>
                    <div className="text-sm text-gray-600">70% Average</div>
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    'No technical climbing experience required',
                    'Professional certified guides included',
                    'Multiple route options available',
                    'All equipment and permits provided',
                    'Safety-first approach with medical support'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img
                  src="https://images.pexels.com/photos/808465/pexels-photo-808465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Mount Kilimanjaro peak"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-3">
                    <Award className="h-8 w-8 text-orange-600" />
                    <div>
                      <div className="font-bold text-gray-900">UNESCO Site</div>
                      <div className="text-sm text-gray-600">World Heritage</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Climbing Routes */}
        <section ref={routesRef} className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={routesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Choose Your Route
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Each route offers unique experiences and challenges. Choose the path that matches your 
                fitness level and adventure preferences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {routes.map((route, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={routesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className="relative h-48">
                    <img
                      src={route.image}
                      alt={route.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {route.successRate} Success Rate
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{route.name}</h3>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-orange-600" />
                        <span className="text-sm font-medium text-gray-700">{route.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mountain className="h-4 w-4 text-blue-600" />
                        <span className="text-sm font-medium text-gray-700">{route.difficulty}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">{route.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Route Highlights:</h4>
                      <div className="space-y-2">
                        {route.highlights.map((highlight, highlightIndex) => (
                          <div key={highlightIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Link
                      to="/booking"
                      className="w-full bg-orange-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>Choose This Route</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Preparation Tips */}
        <section ref={prepRef} className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={prepInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Preparation is Key
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proper preparation significantly increases your chances of reaching the summit. 
                Here's how to get ready for your Kilimanjaro adventure.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {preparationTips.map((tip, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={prepInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="inline-flex p-4 rounded-full bg-orange-100 text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                    <tip.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{tip.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tip.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={prepInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-yellow-50 border border-yellow-200 rounded-2xl p-8"
            >
              <div className="flex items-start space-x-4">
                <AlertTriangle className="h-8 w-8 text-yellow-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Important Health & Safety Information</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Consult your doctor before climbing, especially if you have heart or lung conditions</li>
                    <li>• Altitude sickness can affect anyone - listen to your guide and your body</li>
                    <li>• Travel insurance with mountain rescue coverage is mandatory</li>
                    <li>• Start training at least 3 months before your climb date</li>
                    <li>• All climbers must be between 10-89 years old (parental consent required for minors)</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Packages */}
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
                Climbing Packages
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                All-inclusive packages with professional guides, quality equipment, and full support
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{pkg.name}</h3>
                  <div className="text-4xl font-bold text-orange-600 mb-6">{pkg.price}</div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/booking"
                    className="w-full bg-orange-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center space-x-2"
                  >
                    <span>Book This Package</span>
                    <ArrowRight className="h-4 w-4" />
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
                Ready to Conquer Kilimanjaro?
              </h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Join thousands of successful climbers who have reached Africa's highest peak. 
                Your adventure of a lifetime starts with a single step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/booking"
                  className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
                >
                  <Calendar className="h-5 w-5" />
                  <span>Start Planning</span>
                </Link>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors flex items-center space-x-2"
                >
                  <Phone className="h-5 w-5" />
                  <span>WhatsApp Guide</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Kilimanjaro;