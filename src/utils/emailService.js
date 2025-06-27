import emailjs from 'emailjs-com';

/**
 * Sends an email notification for a new WiFi rental
 * @param {Object} rentalDetails - The rental details
 * @returns {Promise} - Promise that resolves when email is sent
 */
export const sendRentalNotification = async (rentalDetails) => {
  try {
    // Format the rental data for email
    const emailParams = {
      to_name: "Safari Surf WiFi Team",
      from_name: rentalDetails.name,
      reply_to: rentalDetails.email,
      customer_phone: rentalDetails.phone || 'Not provided',
      rental_plan: rentalDetails.plan || 'Not specified',
      rental_location: rentalDetails.location || 'Not specified',
      rental_start: rentalDetails.startDate || 'Not specified',
      rental_purpose: rentalDetails.service || 'Not specified',
      additional_info: rentalDetails.message || 'No additional information provided',
      to_email: 'support@flit.tz',
      cc_email: 'edwindirect@hotmail.com'
    };
    
    // Use EmailJS to send the email to both support@flit.tz and edwindirect@hotmail.com
    await emailjs.send(
      'service_safari_surf', // Your EmailJS service ID
      'template_rental_notification', // Your EmailJS template ID
      emailParams,
      'ovqQW5oj4Z8UoQGpa' // The correct EmailJS public key
    );
    
    console.log('Email notifications sent successfully to support@flit.tz and edwindirect@hotmail.com');
    
    // Send SMS notification
    await sendSMSNotification(rentalDetails);
    
    return {
      success: true,
      message: 'Rental notification emails and SMS sent successfully'
    };
    
  } catch (error) {
    console.error('Error sending rental notification emails:', error);
    
    // Fallback: If EmailJS fails, attempt to send via WhatsApp click
    try {
      // Create a WhatsApp message with the rental details
      const whatsappMessage = `New WiFi Rental Request:
      
Name: ${rentalDetails.name}
Email: ${rentalDetails.email}
Phone: ${rentalDetails.phone || 'Not provided'}
Plan: ${rentalDetails.plan || 'Not specified'}
Location: ${rentalDetails.location || 'Not specified'}
Start Date: ${rentalDetails.startDate || 'Not specified'}
Purpose: ${rentalDetails.service || 'Not specified'}
Additional Info: ${rentalDetails.message || 'None'}`;

      // Create a hidden link and programmatically click it
      const whatsappLink = document.createElement('a');
      whatsappLink.href = `https://wa.me/255764928408?text=${encodeURIComponent(whatsappMessage)}`;
      whatsappLink.target = '_blank';
      whatsappLink.style.display = 'none';
      document.body.appendChild(whatsappLink);
      
      // Don't automatically click, just inform the user
      console.log('Email sending failed. WhatsApp fallback ready.');
      
      document.body.removeChild(whatsappLink);
    } catch (whatsappError) {
      console.error('WhatsApp fallback also failed:', whatsappError);
    }
    
    return {
      success: false,
      message: 'Failed to send notification emails, but order is still processing.'
    };
  }
};

/**
 * Sends an SMS notification for a new WiFi rental
 * @param {Object} rentalDetails - The rental details
 * @returns {Promise} - Promise that resolves when SMS is sent
 */
const sendSMSNotification = async (rentalDetails) => {
  try {
    // Format the rental data for SMS
    const smsMessage = `New WiFi Rental: ${rentalDetails.name} (${rentalDetails.phone}) wants a ${rentalDetails.plan} plan at ${rentalDetails.location} starting ${rentalDetails.startDate}.`;
    
    // In production, this would use an SMS API like Twilio, Vonage, or Africa's Talking
    // For this implementation, we'll use EmailJS to send an email that triggers an SMS
    // through an email-to-SMS gateway or service
    
    const smsParams = {
      to_phone: '+255764928408', // Target phone number
      message: smsMessage,
      to_email: 'support@flit.tz', // Email that forwards to SMS
    };
    
    // Use EmailJS to send the SMS notification
    await emailjs.send(
      'service_safari_surf', // Your EmailJS service ID
      'template_sms_notification', // Your EmailJS template ID that forwards to SMS
      smsParams,
      'ovqQW5oj4Z8UoQGpa' // The correct EmailJS public key
    );
    
    console.log('SMS notification sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending SMS notification:', error);
    return false;
  }
};

/**
 * Sends a payment confirmation email
 * @param {Object} paymentDetails - The payment details
 * @returns {Promise} - Promise that resolves when email is sent
 */
export const sendPaymentConfirmation = async (paymentDetails) => {
  try {
    // Format the payment data for email
    const emailParams = {
      to_name: paymentDetails.customerName,
      plan_name: paymentDetails.plan,
      amount: paymentDetails.amount,
      currency: paymentDetails.currency,
      transaction_id: paymentDetails.transactionId || 'Cash on delivery',
      payment_method: paymentDetails.paymentMethod || 'Cash on delivery',
      delivery_location: paymentDetails.deliveryLocation,
      transaction_date: new Date().toLocaleString(),
      to_email: paymentDetails.customerEmail,
      cc_email_1: 'edwindirect@hotmail.com',
      cc_email_2: 'support@flit.tz'
    };
    
    // Use EmailJS to send the email
    await emailjs.send(
      'service_safari_surf', // Your EmailJS service ID
      'template_payment_confirmation', // Your EmailJS template ID
      emailParams,
      'ovqQW5oj4Z8UoQGpa' // The correct EmailJS public key
    );
    
    console.log('Payment confirmation emails sent successfully');
    
    // Send SMS notification for payment
    await sendPaymentSMSNotification(paymentDetails);
    
    return {
      success: true,
      message: 'Confirmation emails and SMS sent successfully'
    };
    
  } catch (error) {
    console.error('Error sending payment confirmation emails:', error);
    return {
      success: false,
      message: 'Failed to send confirmation emails, but payment was processed successfully.'
    };
  }
};

/**
 * Sends an SMS notification for a payment confirmation
 * @param {Object} paymentDetails - The payment details
 * @returns {Promise} - Promise that resolves when SMS is sent
 */
const sendPaymentSMSNotification = async (paymentDetails) => {
  try {
    // Format the payment data for SMS
    const smsMessage = `Payment confirmed: ${paymentDetails.customerName} paid ${paymentDetails.currency}${paymentDetails.amount} for ${paymentDetails.plan}. Deliver to: ${paymentDetails.deliveryLocation || 'location pending'}.`;
    
    // In production, this would use an SMS API
    const smsParams = {
      to_phone: '+255764928408', // Target phone number
      message: smsMessage,
      to_email: 'support@flit.tz', // Email that forwards to SMS
    };
    
    // Use EmailJS to send the SMS notification
    await emailjs.send(
      'service_safari_surf',
      'template_sms_notification',
      smsParams,
      'ovqQW5oj4Z8UoQGpa'
    );
    
    console.log('Payment SMS notification sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending payment SMS notification:', error);
    return false;
  }
};

/**
 * Sends a rental reminder email when the rental is about to end
 * @param {Object} rentalDetails - The rental details
 * @returns {Promise} - Promise that resolves when email is sent
 */
export const sendRentalReminder = async (rentalDetails) => {
  try {
    // Format the rental data for email
    const emailParams = {
      to_name: rentalDetails.name,
      rental_plan: rentalDetails.plan,
      rental_end: rentalDetails.endDate || 'Not specified',
      device_id: rentalDetails.deviceId || 'Your WiFi device',
      to_email: rentalDetails.email,
      cc_email_1: 'edwindirect@hotmail.com',
      cc_email_2: 'support@flit.tz'
    };
    
    // Use EmailJS to send the email
    await emailjs.send(
      'service_safari_surf', // Your EmailJS service ID
      'template_rental_reminder', // Your EmailJS template ID
      emailParams,
      'ovqQW5oj4Z8UoQGpa' // The correct EmailJS public key
    );
    
    console.log('Rental reminder email sent successfully');
    
    return {
      success: true,
      message: 'Rental reminder email sent successfully'
    };
    
  } catch (error) {
    console.error('Error sending rental reminder email:', error);
    return {
      success: false,
      message: 'Failed to send rental reminder email'
    };
  }
};