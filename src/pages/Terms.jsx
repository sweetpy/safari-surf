import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card';

export default function Terms() {
  const sections = [
    {
      title: '1. Service Agreement',
      content: `By booking and using Safari Surf WiFi services, you agree to these terms and conditions. Our service provides portable WiFi device rental for internet connectivity throughout Tanzania.`
    },
    {
      title: '2. Booking and Payment',
      content: `Bookings must be made at least 24 hours in advance. Payment is required at the time of booking. A refundable security deposit of $50 is required for all rentals. We accept major credit cards, PayPal, and mobile money payments.`
    },
    {
      title: '3. Device Usage',
      content: `The rented device remains the property of Safari Surf WiFi. You are responsible for the device's care and security. The device should not be tampered with, modified, or used for illegal activities. Maximum connection limits apply based on your selected plan.`
    },
    {
      title: '4. Data Usage',
      content: `All plans include unlimited data. However, fair usage policies apply. After 50GB daily usage, speeds may be reduced during peak hours. The service is intended for personal use and not for commercial redistribution.`
    },
    {
      title: '5. Pickup and Return',
      content: `Devices must be picked up at the agreed location and time. Late pickup may result in additional charges. Devices must be returned by the agreed date. Failure to return the device will result in additional charges and potential legal action.`
    },
    {
      title: '6. Damage and Loss',
      content: `Normal wear and tear is expected and covered. You are liable for damage due to misuse, negligence, or accidents. Lost or stolen devices will be charged at replacement cost. Device insurance is included in all plans for standard damage coverage.`
    },
    {
      title: '7. Service Availability',
      content: `While we strive for 99.9% uptime, we cannot guarantee uninterrupted service. Network coverage depends on local infrastructure and may vary by location. We are not liable for service interruptions due to factors beyond our control.`
    },
    {
      title: '8. Cancellation Policy',
      content: `Cancellations made 24+ hours before pickup: Full refund. Cancellations within 24 hours: 75% refund. No-shows: No refund. Plan changes are subject to availability and price differences.`
    },
    {
      title: '9. Privacy and Data',
      content: `We respect your privacy and do not monitor your internet usage. However, we may collect connection data for service improvement. We comply with applicable data protection laws and do not share personal information with third parties.`
    },
    {
      title: '10. Limitation of Liability',
      content: `Safari Surf WiFi's liability is limited to the rental fee paid. We are not responsible for indirect damages, lost profits, or consequential damages. Our maximum liability shall not exceed the total amount paid for the service.`
    },
    {
      title: '11. Governing Law',
      content: `These terms are governed by the laws of Tanzania. Any disputes will be resolved through arbitration in Dar es Salaam, Tanzania. If any provision is found unenforceable, the remaining terms remain in effect.`
    },
    {
      title: '12. Changes to Terms',
      content: `We reserve the right to modify these terms at any time. Changes will be posted on our website and communicated to active customers. Continued use of our service constitutes acceptance of modified terms.`
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
            <h1 className="text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our WiFi rental services.
            </p>
            <div className="mt-6 text-sm opacity-90">
              Last updated: January 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">Important Notice</h2>
                <p className="text-blue-800">
                  By using Safari Surf WiFi services, you acknowledge that you have read, understood, 
                  and agree to be bound by these Terms of Service. If you do not agree to these terms, 
                  please do not use our services.
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
                    <p className="text-gray-600 leading-relaxed">{section.content}</p>
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
            <Card className="bg-gray-50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Questions About These Terms?</h3>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-2 text-gray-700">
                  <div><strong>Email:</strong> support@flit.tz</div>
                  <div><strong>Phone:</strong> +255 764 928 408</div>
                  <div><strong>Address:</strong> Dar es Salaam, Tanzania</div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}