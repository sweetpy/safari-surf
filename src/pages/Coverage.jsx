import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, MapPin, Wifi, Signal } from 'lucide-react';

export default function Coverage() {
  const regions = [
    {
      name: 'Dar es Salaam',
      coverage: '99%',
      speed: 'Excellent',
      description: 'Full 4G coverage throughout the commercial capital'
    },
    {
      name: 'Arusha',
      coverage: '95%',
      speed: 'Excellent',
      description: 'Complete coverage in the safari gateway city'
    },
    {
      name: 'Serengeti National Park',
      coverage: '85%',
      speed: 'Good',
      description: 'Strong coverage in main areas and lodges'
    },
    {
      name: 'Ngorongoro Crater',
      coverage: '80%',
      speed: 'Good',
      description: 'Reliable connectivity at crater rim and lodges'
    },
    {
      name: 'Zanzibar',
      coverage: '90%',
      speed: 'Excellent',
      description: 'Comprehensive coverage across Stone Town and beaches'
    },
    {
      name: 'Mwanza',
      coverage: '92%',
      speed: 'Excellent',
      description: 'Strong coverage in Lake Victoria region'
    },
    {
      name: 'Dodoma',
      coverage: '88%',
      speed: 'Good',
      description: 'Reliable coverage in the capital city'
    },
    {
      name: 'Moshi',
      coverage: '90%',
      speed: 'Excellent',
      description: 'Great coverage near Kilimanjaro base'
    }
  ];

  const networkPartners = [
    {
      name: 'Vodacom Tanzania',
      coverage: 'Primary network with nationwide 4G coverage',
      logo: '🔴'
    },
    {
      name: 'Airtel Tanzania',
      coverage: 'Secondary network for enhanced reliability',
      logo: '🔴'
    },
    {
      name: 'Tigo Tanzania',
      coverage: 'Backup network for remote areas',
      logo: '🔵'
    }
  ];

  const popularDestinations = [
    {
      name: 'Serengeti National Park',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=600',
      coverage: 'Excellent coverage at all major lodges and camps'
    },
    {
      name: 'Ngorongoro Crater',
      image: 'https://images.pexels.com/photos/1670732/pexels-photo-1670732.jpeg?auto=compress&cs=tinysrgb&w=600',
      coverage: 'Strong signal at crater rim and descent areas'
    },
    {
      name: 'Mount Kilimanjaro',
      image: 'https://images.pexels.com/photos/259967/pexels-photo-259967.jpeg?auto=compress&cs=tinysrgb&w=600',
      coverage: 'Coverage up to base camps and Moshi town'
    },
    {
      name: 'Zanzibar Beaches',
      image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg?auto=compress&cs=tinysrgb&w=600',
      coverage: 'Full coverage across all beach resorts'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Nationwide Coverage</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Stay connected across Tanzania with our comprehensive network coverage. 
              From bustling cities to remote safari destinations, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Coverage Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-4xl font-bold text-green-600 mb-2">95%</div>
              <div className="text-gray-600">National Coverage</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Cities & Towns</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
              <div className="text-gray-600">Network Uptime</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-orange-600 mb-2">4G</div>
              <div className="text-gray-600">LTE Speed</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regional Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Regional Coverage Details</h2>
            <p className="text-xl text-gray-600">Detailed coverage information for major regions and cities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={region.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <MapPin className="h-5 w-5 text-green-600 mr-2" />
                      <h3 className="text-lg font-semibold text-gray-900">{region.name}</h3>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Coverage:</span>
                        <span className="font-semibold text-green-600">{region.coverage}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Speed:</span>
                        <span className="font-semibold text-blue-600">{region.speed}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-600">{region.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Coverage at Popular Destinations</h2>
            <p className="text-xl text-gray-600">Stay connected at Tanzania's most visited tourist attractions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {popularDestinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Signal className="h-3 w-3 mr-1" />
                      Connected
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{destination.name}</h3>
                    <p className="text-sm text-gray-600">{destination.coverage}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Network Partners</h2>
            <p className="text-xl text-gray-600">We partner with Tanzania's leading mobile networks for maximum coverage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {networkPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="text-4xl mb-4">{partner.logo}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{partner.name}</h3>
                    <p className="text-gray-600">{partner.coverage}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Coverage Features</h2>
            <p className="text-xl text-gray-600">What makes our network coverage exceptional</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wifi,
                title: 'Multi-Network Support',
                description: 'Automatic switching between networks for optimal connectivity'
              },
              {
                icon: Signal,
                title: 'Signal Boosting',
                description: 'Advanced antenna technology for stronger signal reception'
              },
              {
                icon: CheckCircle,
                title: 'Redundant Coverage',
                description: 'Multiple network partnerships ensure backup connectivity'
              },
              {
                icon: MapPin,
                title: 'Remote Area Access',
                description: 'Specialized equipment for safari and remote locations'
              },
              {
                icon: Wifi,
                title: '4G LTE Priority',
                description: 'Priority access to fastest available networks'
              },
              {
                icon: Signal,
                title: 'Real-time Monitoring',
                description: '24/7 network monitoring and optimization'
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}