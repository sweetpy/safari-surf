import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  HelpCircle,
  Download,
  Settings,
  Wifi
} from 'lucide-react';
import { useState } from 'react';

export default function Support() {
  const [supportForm, setSupportForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    console.log('Support request:', supportForm);
    alert('Support request submitted! We will get back to you within 2 hours.');
    setSupportForm({ name: '', email: '', subject: '', message: '' });
  };

  const supportChannels = [
    {
      icon: Phone,
      title: '24/7 Phone Support',
      description: 'Call us anytime for immediate assistance',
      contact: '+255 764 928 408',
      availability: 'Available 24/7'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Support',
      description: 'Quick responses via WhatsApp messaging',
      contact: '+255 764 928 408',
      availability: 'Response within 15 minutes'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Detailed support via email',
      contact: 'support@flit.tz',
      availability: 'Response within 2 hours'
    }
  ];

  const quickHelp = [
    {
      icon: Wifi,
      title: 'Device Setup',
      description: 'Step-by-step guide to set up your WiFi device',
      action: 'View Guide'
    },
    {
      icon: Settings,
      title: 'Troubleshooting',
      description: 'Common issues and their solutions',
      action: 'Get Help'
    },
    {
      icon: Download,
      title: 'User Manual',
      description: 'Download the complete user manual',
      action: 'Download PDF'
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Frequently asked questions and answers',
      action: 'Browse FAQ'
    }
  ];

  const commonIssues = [
    {
      issue: 'Device won\'t turn on',
      solution: 'Hold the power button for 10 seconds. If still not working, try charging for 30 minutes first.'
    },
    {
      issue: 'Slow internet speed',
      solution: 'Move to an area with better signal strength. Restart the device if speed doesn\'t improve.'
    },
    {
      issue: 'Can\'t connect to WiFi',
      solution: 'Check if the WiFi name and password match exactly. Restart your device and try again.'
    },
    {
      issue: 'Battery drains quickly',
      solution: 'Reduce the number of connected devices. Enable power saving mode in device settings.'
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
            <h1 className="text-5xl font-bold mb-6">24/7 Customer Support</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We're here to help you stay connected. Get instant support through multiple channels 
              or find answers to common questions in our help center.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Help Now</h2>
            <p className="text-xl text-gray-600">Choose your preferred way to reach our support team</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportChannels.map((channel, index) => (
              <motion.div
                key={channel.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <channel.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{channel.title}</h3>
                    <p className="text-gray-600 mb-4">{channel.description}</p>
                    <div className="text-lg font-semibold text-green-600 mb-2">{channel.contact}</div>
                    <div className="text-sm text-gray-500 mb-6">{channel.availability}</div>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Contact Now
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Help Resources</h2>
            <p className="text-xl text-gray-600">Find instant solutions to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickHelp.map((help, index) => (
              <motion.div
                key={help.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 h-full">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <help.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{help.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{help.description}</p>
                    <Button variant="outline" size="sm" className="w-full">
                      {help.action}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Common Issues & Solutions</h2>
            <p className="text-xl text-gray-600">Quick fixes for the most common problems</p>
          </div>

          <div className="space-y-6">
            {commonIssues.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.issue}</h3>
                    <p className="text-gray-600">{item.solution}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Still Need Help?</h2>
            <p className="text-xl text-gray-600">Send us a detailed message and we'll get back to you quickly</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form onSubmit={handleSupportSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <Input
                      placeholder="Enter your full name"
                      value={supportForm.name}
                      onChange={(e) => setSupportForm({ ...supportForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={supportForm.email}
                      onChange={(e) => setSupportForm({ ...supportForm, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <Input
                    placeholder="Brief description of your issue"
                    value={supportForm.subject}
                    onChange={(e) => setSupportForm({ ...supportForm, subject: e.target.value })}
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[120px]"
                    placeholder="Please describe your issue in detail..."
                    value={supportForm.message}
                    onChange={(e) => setSupportForm({ ...supportForm, message: e.target.value })}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                  Send Support Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-50 border-t-4 border-red-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <Phone className="h-8 w-8 text-red-600 mr-3" />
            <h3 className="text-2xl font-bold text-red-800">Emergency Support</h3>
          </div>
          <p className="text-red-700 mb-4">
            If you're experiencing a critical issue that affects your connectivity during an emergency, 
            call our emergency hotline immediately.
          </p>
          <div className="text-2xl font-bold text-red-600">+255 764 928 408</div>
          <p className="text-sm text-red-600 mt-2">Available 24/7 for emergency situations</p>
        </div>
      </section>
    </div>
  );
}