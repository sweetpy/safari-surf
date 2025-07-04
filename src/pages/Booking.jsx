import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Calendar, 
  Users, 
  MapPin, 
  Star, 
  CheckCircle, 
  Clock,
  Phone,
  Mail,
  ArrowRight,
  Heart,
  Shield,
  Award
} from 'lucide-react';
import toast from 'react-hot-toast';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    travelers: '2',
    destination: '',
    travelDates: '',
    duration: '',
    budget: '',
    interests: [],
    message: ''
  });

  const [step, setStep] = useState(1);
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const destinations = [
    'Zanzibar Beach Holiday',
    'Serengeti Safari',
    'Kilimanjaro Climbing',
    'Ngorongoro Crater',
    'Tarangire National Park',
    'Multi-destination Tour',
    'Custom Itinerary'
  ];

  const interests = [
    'Wildlife Safari',
    'Beach & Relaxation',
    'Mountain Climbing',
    'Cultural Experiences',
    'Photography',
    'Adventure Activities',
    'Luxury Travel',
    'Budget Travel'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `Hi! I'd like to book a Tanzania trip:
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Travelers: ${formData.travelers} people
Destination: ${formData.destination}
Travel Dates: ${formData.travelDates}
Duration: ${formData.duration}
Budget: ${formData.budget}
Interests: ${formData.interests.join(', ')}

Message: ${formData.message}`;

    const whatsappUrl = `https://wa.me/255764928408?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    toast.success('Redirecting to WhatsApp to complete your booking!');
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <>
      <Helmet>
        <title>Book Your Tanzania Safari & Travel Adventure | Best Deals 2025</title>
        <meta name="description" content="Book your dream Tanzania safari, Kilimanjaro climb, or Zanzibar holiday. Expert planning, best prices, instant booking confirmation. Start your adventure today!" />
        <meta name="keywords" content="book Tanzania safari, safari booking, Kilimanjaro booking, Zanzibar holidays, Tanzania travel booking, safari packages" />
        <link rel="canonical" href="https://safari.flit.tz/booking" />
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
                Book Your Dream Trip
              </h1>
              <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
                Let our expert travel consultants create your perfect Tanzania adventure. 
                From safaris to beaches, we handle everything.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Trust Indicators */}
        <section className="py-12 bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex items-center justify-center space-x-3">
                <Shield className="h-8 w-8 text-green-500" />
                <div>
                  <div className="font-semibold text-gray-900">Secure Booking</div>
                  <div className="text-sm text-gray-600">SSL Protected</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Award className="h-8 w-8 text-orange-500" />
                <div>
                  <div className="font-semibold text-gray-900">15+ Years Experience</div>
                  <div className="text-sm text-gray-600">Trusted by 50,000+ travelers</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <Heart className="h-8 w-8 text-red-500" />
                <div>
                  <div className="font-semibold text-gray-900">100% Satisfaction</div>
                  <div className="text-sm text-gray-600">Money-back guarantee</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Progress Indicator */}
            <div className="mb-12">
              <div className="flex items-center justify-center space-x-4 mb-4">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      step >= num
                        ? 'bg-orange-500 text-white'
                        : 'bg-gray-200 text-gray-500'
                    }`}
                  >
                    {step > num ? <CheckCircle className="h-6 w-6" /> : num}
                  </div>
                ))}
              </div>
              <div className="text-center text-gray-600">
                Step {step} of 3: {
                  step === 1 ? 'Trip Details' :
                  step === 2 ? 'Preferences' : 'Contact Information'
                }
              </div>
            </div>

            <motion.div
              key={step}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <form onSubmit={handleSubmit}>
                {/* Step 1: Trip Details */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Tell us about your trip</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Preferred Destination *
                        </label>
                        <select
                          name="destination"
                          value={formData.destination}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                        >
                          <option value="">Select destination</option>
                          {destinations.map(dest => (
                            <option key={dest} value={dest}>{dest}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Number of Travelers *
                        </label>
                        <select
                          name="travelers"
                          value={formData.travelers}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                        >
                          {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'person' : 'people'}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Travel Dates *
                        </label>
                        <input
                          type="text"
                          name="travelDates"
                          value={formData.travelDates}
                          onChange={handleInputChange}
                          placeholder="e.g., March 2025 or Flexible"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Trip Duration *
                        </label>
                        <select
                          name="duration"
                          value={formData.duration}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                        >
                          <option value="">Select duration</option>
                          <option value="3-4 days">3-4 days</option>
                          <option value="5-7 days">5-7 days</option>
                          <option value="8-10 days">8-10 days</option>
                          <option value="11-14 days">11-14 days</option>
                          <option value="15+ days">15+ days</option>
                          <option value="Flexible">Flexible</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Budget Range (USD per person) *
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                      >
                        <option value="">Select budget range</option>
                        <option value="Under $1,000">Under $1,000</option>
                        <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                        <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000+">$10,000+</option>
                        <option value="Please advise">Please advise</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Preferences */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">What interests you most?</h2>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-4">
                        Select your interests (choose multiple)
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {interests.map(interest => (
                          <button
                            key={interest}
                            type="button"
                            onClick={() => handleInterestToggle(interest)}
                            className={`p-4 rounded-xl border-2 text-left transition-colors ${
                              formData.interests.includes(interest)
                                ? 'border-orange-500 bg-orange-50 text-orange-700'
                                : 'border-gray-200 hover:border-orange-300'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="font-medium">{interest}</span>
                              {formData.interests.includes(interest) && (
                                <CheckCircle className="h-5 w-5 text-orange-500" />
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Special Requests or Questions
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Tell us about any special requirements, dietary restrictions, celebrations, or questions you have..."
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Contact Information */}
                {step === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+1 234 567 8900"
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your.email@example.com"
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-orange-500 focus:outline-none"
                      />
                    </div>

                    {/* Summary */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="font-semibold text-gray-900 mb-4">Trip Summary</h3>
                      <div className="space-y-2 text-sm">
                        <div><strong>Destination:</strong> {formData.destination}</div>
                        <div><strong>Travelers:</strong> {formData.travelers} people</div>
                        <div><strong>Duration:</strong> {formData.duration}</div>
                        <div><strong>Budget:</strong> {formData.budget}</div>
                        <div><strong>Travel Dates:</strong> {formData.travelDates}</div>
                        {formData.interests.length > 0 && (
                          <div><strong>Interests:</strong> {formData.interests.join(', ')}</div>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-6 py-3 border border-gray-300 rounded-full font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      Previous
                    </button>
                  )}
                  
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="ml-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center space-x-2"
                    >
                      <span>Continue</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="ml-auto bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-semibold transition-colors flex items-center space-x-2"
                    >
                      <Phone className="h-4 w-4" />
                      <span>Complete Booking via WhatsApp</span>
                    </button>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Need Help Planning?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our travel experts are available 24/7 to help you create the perfect Tanzania experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-2xl">
                <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp Support</h3>
                <p className="text-gray-600 mb-4">Get instant help and personalized recommendations</p>
                <a
                  href="https://wa.me/255764928408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-full font-semibold transition-colors inline-block"
                >
                  Chat Now
                </a>
              </div>

              <div className="bg-orange-50 p-6 rounded-2xl">
                <Mail className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Consultation</h3>
                <p className="text-gray-600 mb-4">Detailed trip planning and custom itineraries</p>
                <a
                  href="mailto:support@flit.tz"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors inline-block"
                >
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Booking;