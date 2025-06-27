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
    const emailResult = await emailjs.send(
      'service_safari_surf', // Your EmailJS service ID
      'template_rental_notification', // Your EmailJS template ID
      emailParams,
      'cHCIRoZ584r3_KQUaFPrj' // The correct EmailJS public key
    );
    
    console.log('Email notifications sent successfully:', emailResult);
    
    // ALWAYS send SMS notification regardless of email success
    await sendSMSNotification(rentalDetails);
    
    return {
      success: true,
      message: 'Rental notification emails and SMS sent successfully'
    };
    
  } catch (error) {
    console.error('Error sending rental notification emails:', error);
    
    // If email fails, make a stronger attempt to send SMS as fallback
    try {
      console.log('Email failed, attempting SMS notification as fallback...');
      await sendSMSNotification(rentalDetails, true);
      
      // Direct SMS through alternative service (backup method)
      await sendDirectSMS(rentalDetails);
      
    } catch (smsError) {
      console.error('SMS fallback also failed:', smsError);
    }
    
    return {
      success: false,
      error: error,
      message: 'Failed to send notification emails, but order is still processing.'
    };
  }
};

/**
 * Sends a direct SMS using an alternative service as a backup
 * This function provides redundancy in case EmailJS SMS fails
 */
const sendDirectSMS = async (rentalDetails) => {
  try {
    // Format the message for direct SMS
    const message = `NEW WIFI RENTAL: ${rentalDetails.name} (${rentalDetails.phone}) - ${rentalDetails.plan} plan - ${rentalDetails.location} - Starting: ${rentalDetails.startDate}. CASH ON DELIVERY AVAILABLE.`;
    
    // Try direct SMS service (simulated here - would be replaced with actual SMS API)
    console.log('Sending direct SMS via alternative service:', message);
    
    // For now, we'll use another EmailJS template as yet another fallback
    const directSmsParams = {
      to_phone: '+255764928408',
      message: `URGENT BACKUP SMS: ${message}`,
      to_email: 'edwindirect@hotmail.com',
    };
    
    await emailjs.send(
      'service_safari_surf',
      'template_direct_sms',  // A different template configured for most reliable delivery
      directSmsParams,
      'cHCIRoZ584r3_KQUaFPrj'
    );
    
    console.log('Direct SMS sent via backup method');
    return true;
  } catch (error) {
    console.error('Even direct SMS failed:', error);
    return false;
  }
};

/**
 * Sends an SMS notification for a new WiFi rental
 * Enhanced with multiple delivery attempts and clear formatting
 * @param {Object} rentalDetails - The rental details
 * @param {boolean} isUrgent - Whether this is a fallback/urgent notification
 * @returns {Promise<boolean>} - Promise that resolves to true if SMS is sent successfully
 */
const sendSMSNotification = async (rentalDetails, isUrgent = false) => {
  try {
    // Format the rental data for SMS in a compact, easy-to-read format
    const smsMessage = isUrgent 
      ? `URGENT! New WiFi Rental: ${rentalDetails.name} (${rentalDetails.phone}) wants a ${rentalDetails.plan} plan at ${rentalDetails.location} starting ${rentalDetails.startDate}. CASH ON DELIVERY AVAILABLE.`
      : `New WiFi Rental: ${rentalDetails.name} (${rentalDetails.phone}) wants a ${rentalDetails.plan} plan at ${rentalDetails.location} starting ${rentalDetails.startDate}. CASH ON DELIVERY AVAILABLE.`;
    
    // Send SMS notification via EmailJS
    const smsParams = {
      to_phone: '+255764928408', // Target phone number
      message: smsMessage,
      to_email: 'support@flit.tz', // Email that forwards to SMS
      cc_email: 'edwindirect@hotmail.com', // Additional email recipient
      subject: isUrgent ? 'URGENT: New WiFi Rental Request' : 'New WiFi Rental Request',
      from_name: rentalDetails.name,
      customer_phone: rentalDetails.phone || 'Not provided'
    };
    
    // Send the primary SMS notification
    const smsResult = await emailjs.send(
      'service_safari_surf',
      'template_sms_notification', 
      smsParams,
      'cHCIRoZ584r3_KQUaFPrj'
    );
    
    console.log('SMS notification sent successfully:', smsResult);
    
    // Send a redundant notification to ensure delivery
    try {
      const backupSmsParams = {
        ...smsParams,
        message: `BACKUP NOTICE: ${smsMessage}`,
        to_email: 'edwindirect@hotmail.com', // Direct to personal email
      };
      
      await emailjs.send(
        'service_safari_surf',
        'template_sms_notification',
        backupSmsParams,
        'cHCIRoZ584r3_KQUaFPrj'
      );
      
      console.log('Backup SMS notification sent');
    } catch (backupError) {
      console.warn('Backup SMS failed but primary was sent:', backupError);
    }
    
    return true;
  } catch (error) {
    console.error('Error sending SMS notification:', error);
    
    // Try multiple fallback methods
    try {
      // Simplified message with minimal formatting
      const simpleSmsParams = {
        to_phone: '+255764928408',
        message: `WIFI RENTAL: ${rentalDetails.name}, ${rentalDetails.phone}, ${rentalDetails.plan} plan, ${rentalDetails.location}. CASH ON DELIVERY OK.`,
        to_email: 'support@flit.tz',
        subject: 'URGENT WIFI RENTAL',
        from_name: 'Backup System'
      };
      
      await emailjs.send(
        'service_safari_surf',
        'template_sms_notification',
        simpleSmsParams,
        'cHCIRoZ584r3_KQUaFPrj'
      );
      
      console.log('Simplified SMS notification sent as fallback');
      return true;
    } catch (retryError) {
      console.error('All SMS notification attempts failed:', retryError);
      return false;
    }
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
      'cHCIRoZ584r3_KQUaFPrj' // The correct EmailJS public key
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
    
    // Try SMS as fallback
    try {
      const fallbackSmsResult = await sendPaymentSMSNotification(paymentDetails, true);
      console.log('Fallback payment SMS result:', fallbackSmsResult);
    } catch (smsError) {
      console.error('SMS fallback also failed for payment confirmation:', smsError);
    }
    
    return {
      success: false,
      message: 'Failed to send confirmation emails, but payment was processed successfully.'
    };
  }
};

/**
 * Sends an SMS notification for a payment confirmation
 * @param {Object} paymentDetails - The payment details
 * @param {boolean} isUrgent - Whether this is a fallback/urgent notification
 * @returns {Promise<boolean>} - Promise that resolves to true if SMS is sent successfully
 */
const sendPaymentSMSNotification = async (paymentDetails, isUrgent = false) => {
  try {
    // Format the payment data for SMS
    const smsMessage = isUrgent
      ? `URGENT! Email failed. Payment: ${paymentDetails.customerName} paid ${paymentDetails.currency}${paymentDetails.amount} for ${paymentDetails.plan}. Contact: ${paymentDetails.customerEmail}. CASH ON DELIVERY AVAILABLE.`
      : `Payment confirmed: ${paymentDetails.customerName} paid ${paymentDetails.currency}${paymentDetails.amount} for ${paymentDetails.plan}. Deliver to: ${paymentDetails.deliveryLocation || 'location pending'}. CASH ON DELIVERY OPTION.`;
    
    // In production, this would use an SMS API
    const smsParams = {
      to_phone: '+255764928408', // Target phone number
      message: smsMessage,
      to_email: 'support@flit.tz', // Email that forwards to SMS
      cc_email: 'edwindirect@hotmail.com', // Send copy to this email
      subject: isUrgent ? 'URGENT: Payment Confirmation' : 'Payment Confirmation',
      from_name: paymentDetails.customerName
    };
    
    // Use EmailJS to send the SMS notification
    await emailjs.send(
      'service_safari_surf',
      'template_sms_notification',
      smsParams,
      'cHCIRoZ584r3_KQUaFPrj'
    );
    
    console.log('Payment SMS notification sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending payment SMS notification:', error);
    
    // Try one more time with a simplified message
    try {
      const simpleSmsParams = {
        to_phone: '+255764928408',
        message: `Payment Alert: ${paymentDetails.customerName}, ${paymentDetails.currency}${paymentDetails.amount}, ${paymentDetails.plan}. CASH ON DELIVERY OK.`,
        to_email: 'support@flit.tz',
      };
      
      await emailjs.send(
        'service_safari_surf',
        'template_sms_notification',
        simpleSmsParams,
        'cHCIRoZ584r3_KQUaFPrj'
      );
      
      console.log('Simplified payment SMS notification sent as fallback');
      return true;
    } catch (retryError) {
      console.error('All payment SMS notification attempts failed:', retryError);
      return false;
    }
  }
};