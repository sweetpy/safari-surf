import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { 
  Wifi, 
  MapPin, 
  Clock, 
  Shield, 
  Zap, 
  Users, 
  Star,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

export default function Home() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', plan: '' });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleQuickBooking = (e) => {
    e.preventDefault();
    console.log('Quick booking:', form);
    alert('Thank you! We will contact you shortly to confirm your booking.');
    setForm({ name: '', email: '', phone: '', plan: '' });
  };

  const features = [
    {
      icon: MapPin,
      title: 'Airport Pickup',
      description: 'Convenient pickup at Julius Nyerere International Airport'
    },
    {
      icon: Wifi,
      title: 'Nationwide Coverage',
      description: 'Stay connected from Serengeti to Zanzibar'
    },
    {
      icon: Zap,
      title: 'High-Speed 4G',
      description: 'Lightning-fast internet for all your needs'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer assistance'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      country: 'USA',
      rating: 5,
      comment: 'Excellent service! The WiFi worked perfectly throughout our safari in Serengeti.'
    },
    {
      name: 'Marco Silva',
      country: 'Brazil',
      rating: 5,
      comment: 'Very reliable connection. Made it easy to share our amazing experiences in real-time.'
    },
    {
      name: 'Emma Thompson',
      country: 'UK',
      rating: 5,
      comment: 'Professional service and great coverage. Highly recommend for any Tanzania trip!'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 text-white min-h-screen flex items-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Stay Connected
                <span className="block text-yellow-400">Anywhere in Tanzania</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100 max-w-lg">
                Premium WiFi devices with unlimited data, airport pickup, and nationwide coverage. 
                Perfect for tourists, digital nomads, and business travelers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 text-lg">
                  Book Your Device
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                  View Plans
                </Button>
              </div>
            </motion.div>

            {/* Quick Booking Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Booking</h3>
                  <form onSubmit={handleQuickBooking} className="space-y-4">
                    <Input
                      placeholder="Full Name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={form.plan}
                      onChange={(e) => setForm({ ...form, plan: e.target.value })}
                      required
                    >
                      <option value="">Select a Plan</option>
                      <option value="weekly">Weekly Plan - $100</option>
                      <option value="monthly">Monthly Plan - $150</option>
                    </select>
                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                      Get Quote
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Safari Surf WiFi?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide reliable, high-speed internet connectivity across Tanzania with unmatched service quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Choose the perfect plan for your Tanzania adventure</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Weekly Plan</h3>
                <div className="text-4xl font-bold text-green-600 mb-4">$100</div>
                <p className="text-gray-600 mb-6">Perfect for short stays</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>7 days unlimited data</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Airport pickup</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>24/7 support</span>
                  </li>
                </ul>
                <Button className="w-full bg-green-600 hover:bg-green-700">Choose Plan</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Monthly Plan</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">$150</div>
                <p className="text-gray-600 mb-6">Best for digital nomads</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>30 days unlimited data</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Airport pickup</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Choose Plan</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Deposit</h3>
                <div className="text-4xl font-bold text-orange-600 mb-4">$50</div>
                <p className="text-gray-600 mb-6">Refundable security deposit</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Required for all plans</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>100% refundable</span>
                  </li>
                  <li className="flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    <span>Upon device return</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/plans">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white">
                View All Plans & Details
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Join thousands of satisfied travelers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4">"{testimonial.comment}"</p>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.country}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-4">Ready to Stay Connected?</h2>
          <p className="text-xl mb-8">
            Book your WiFi device now and enjoy seamless internet throughout your Tanzania adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Book Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}