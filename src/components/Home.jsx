import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  const [form, setForm] = useState({ name: '', date: '', location: '', duration: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', form);
    // Here you would typically send the data to your backend
    alert('Booking request submitted! We will contact you shortly.');
  };

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative p-8 text-center bg-gradient-to-r from-green-600 to-blue-600 text-white min-h-[500px] flex flex-col justify-center">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-6 leading-tight">Stay Connected Anywhere in Tanzania</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Unlimited WiFi for tourists, picked up directly at the airport. Experience seamless connectivity throughout your safari adventure.</p>
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
            Reserve Your Device
          </Button>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📅</span>
                </div>
                <h3 className="font-bold text-2xl mb-2">Weekly Plan</h3>
                <div className="text-3xl font-bold text-green-600 mb-2">$100</div>
                <p className="text-gray-600 mb-4">7 Days of unlimited internet</p>
                <p className="text-sm text-gray-500">Perfect for short-stay tourists</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300 border-2 border-orange-500">
              <CardContent className="p-8 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="font-bold text-2xl mb-2">Monthly Plan</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">$150</div>
                <p className="text-gray-600 mb-4">30 Days of unlimited internet</p>
                <p className="text-sm text-gray-500">Ideal for digital nomads</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h3 className="font-bold text-2xl mb-2">Refundable Deposit</h3>
                <div className="text-3xl font-bold text-orange-600 mb-2">$50</div>
                <p className="text-gray-600 mb-4">Required for all plans</p>
                <p className="text-sm text-gray-500">Fully refunded upon device return</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Safari Surf WiFi?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✈️</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Airport Pickup</h3>
              <p className="text-gray-600 text-sm">Convenient pickup at Julius Nyerere International Airport</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌍</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Nationwide Coverage</h3>
              <p className="text-gray-600 text-sm">Stay connected from Serengeti to Zanzibar</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">High-Speed Internet</h3>
              <p className="text-gray-600 text-sm">4G LTE speeds for all your connectivity needs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔋</span>
              </div>
              <h3 className="font-semibold text-lg mb-2">Long Battery Life</h3>
              <p className="text-gray-600 text-sm">Up to 12 hours of continuous use</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Book Your WiFi Device</h2>
          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <Input 
                    placeholder="Enter your full name" 
                    value={form.name} 
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Arrival Date</label>
                  <Input 
                    type="date" 
                    value={form.date} 
                    onChange={e => setForm({ ...form, date: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Location</label>
                  <Input 
                    placeholder="e.g., Julius Nyerere International Airport" 
                    value={form.location} 
                    onChange={e => setForm({ ...form, location: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Plan Duration</label>
                  <select 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={form.duration} 
                    onChange={e => setForm({ ...form, duration: e.target.value })}
                    required
                  >
                    <option value="">Select a plan</option>
                    <option value="weekly">Weekly Plan - $100</option>
                    <option value="monthly">Monthly Plan - $150</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3 text-lg">
                    Confirm Booking
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-green-600 text-white py-12 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">24/7 Support Available</h2>
          <p className="text-lg mb-6">Need help? Our support team is always ready to assist you.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl">📞</span>
              <span className="text-lg">+255-686-120-646</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">✉️</span>
              <span className="text-lg">support@safarisurfwifi.com</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Safari Surf WiFi</h3>
            <p className="text-gray-400">Your reliable internet companion in Tanzania</p>
          </div>
          <div className="border-t border-gray-700 pt-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Safari Surf WiFi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}