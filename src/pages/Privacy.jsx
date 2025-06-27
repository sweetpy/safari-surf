import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';
import { Shield, Eye, Lock, Users } from 'lucide-react';

export default function Privacy() {
  const principles = [
    {
      icon: Shield,
      title: 'Data Protection',
      description: 'We implement industry-standard security measures to protect your personal information.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We are clear about what data we collect and how we use it.'
    },
    {
      icon: Lock,
      title: 'Privacy by Design',
      description: 'Privacy considerations are built into all our systems and processes.'
    },
    {
      icon: Users,
      title: 'User Control',
      description: 'You have control over your personal data and can request changes or deletion.'
    }
  ];

  const sections = [
    {
      title: '1. Information We Collect',
      content: `We collect information you provide directly to us, such as when you create an account, make a booking, or contact us for support. This includes:

• Personal Information: Name, email address, phone number, and payment information
• Booking Information: Travel dates, pickup locations, and service preferences
• Communication Records: Support tickets, emails, and chat conversations
• Device Usage Data: Connection logs and basic usage statistics (not browsing history)`
    },
    {
      title: '2. How We Use Your Information',
      content: `We use the information we collect to:

• Provide and maintain our WiFi rental services
• Process bookings and payments
• Communicate with you about your service
• Provide customer support
• Improve our services and develop new features
• Comply with legal obligations
• Prevent fraud and ensure security`
    },
    {
      title: '3. Information Sharing',
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in these limited circumstances:

• With service providers who help us operate our business (payment processors, device suppliers)
• When required by law or to protect our rights
• In connection with a business transfer or acquisition
• With your explicit consent

All third parties are bound by confidentiality agreements and data protection requirements.`
    },
    {
      title: '4. Data Security',
      content: `We implement appropriate technical and organizational measures to protect your personal information:

• Encryption of sensitive data in transit and at rest
• Regular security assessments and updates
• Access controls and authentication systems
• Staff training on data protection practices
• Incident response procedures

While we strive to protect your information, no method of transmission over the internet is 100% secure.`
    },
    {
      title: '5. Data Retention',
      content: `We retain your personal information only as long as necessary to:

• Provide our services to you
• Comply with legal obligations
• Resolve disputes and enforce agreements
• Improve our services

Booking and payment records are typically retained for 7 years for accounting and legal purposes. Marketing communications can be unsubscribed from at any time.`
    },
    {
      title: '6. Your Rights',
      content: `You have the following rights regarding your personal information:

• Access: Request a copy of the personal information we hold about you
• Correction: Request correction of inaccurate or incomplete information
• Deletion: Request deletion of your personal information (subject to legal requirements)
• Portability: Request transfer of your data to another service provider
• Objection: Object to certain types of processing
• Restriction: Request restriction of processing in certain circumstances

To exercise these rights, contact us at support@flit.tz.`
    },
    {
      title: '7. Cookies and Tracking',
      content: `Our website uses cookies and similar technologies to:

• Remember your preferences and settings
• Analyze website traffic and usage patterns
• Provide personalized content and advertisements
• Ensure website security and functionality

You can control cookie settings through your browser preferences. Some features may not work properly if cookies are disabled.`
    },
    {
      title: '8. International Transfers',
      content: `Your information may be transferred to and processed in countries other than Tanzania. When we transfer information internationally, we ensure appropriate safeguards are in place:

• Adequacy decisions by relevant authorities
• Standard contractual clauses
• Binding corporate rules
• Certification schemes

We ensure the same level of protection applies regardless of where your data is processed.`
    },
    {
      title: '9. Children\'s Privacy',
      content: `Our services are not directed to children under 16. We do not knowingly collect personal information from children under 16. If we become aware that we have collected personal information from a child under 16, we will take steps to delete such information promptly.

Parents or guardians who believe their child has provided personal information should contact us immediately.`
    },
    {
      title: '10. Changes to This Policy',
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will:

• Post the updated policy on our website
• Notify you of significant changes via email or service notifications
• Indicate the effective date of changes

Your continued use of our services after changes become effective constitutes acceptance of the updated policy.`
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
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              We are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
            <div className="mt-6 text-sm opacity-90">
              Last updated: January 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Privacy Principles</h2>
            <p className="text-xl text-gray-600">The core values that guide our approach to data protection</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <principle.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{principle.title}</h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-green-900 mb-4">Your Privacy Matters</h2>
                <p className="text-green-800">
                  This Privacy Policy explains how Safari Surf WiFi collects, uses, and protects your 
                  personal information when you use our services. We are committed to maintaining the 
                  highest standards of data protection and privacy.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <Card>
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                    <div className="text-gray-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12"
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-blue-900 mb-4">Contact Our Privacy Team</h3>
                <p className="text-blue-800 mb-4">
                  If you have any questions about this Privacy Policy or how we handle your personal information, 
                  please contact our privacy team:
                </p>
                <div className="space-y-2 text-blue-700">
                  <div><strong>Email:</strong> privacy@flit.tz</div>
                  <div><strong>General Support:</strong> support@flit.tz</div>
                  <div><strong>Phone:</strong> +255 764 928 408</div>
                  <div><strong>Address:</strong> Dar es Salaam, Tanzania</div>
                </div>
                <p className="text-blue-800 mt-4 text-sm">
                  We will respond to privacy-related inquiries within 30 days.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}