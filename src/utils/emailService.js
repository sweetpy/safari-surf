import emailjs from 'emailjs-com';

// Initialize EmailJS with the provided private key
emailjs.init("cHCIRoZ584r3_KQUaFPrj");

/**
 * Generates a unique order ID for tracking
 * @returns {string} - A unique order ID
 */
const generateOrderId = () => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `TZ${timestamp}${randomStr}`;
};

/**
 * Sends an email and SMS notification for a new WiFi rental
 * @param {Object} rentalDetails - Customer and rental information
 * @returns {Promise} - A promise that resolves when notifications are sent
 */
export const sendRentalNotification = async (rentalDetails) => {
  // Generate a unique order ID for this rental request
  const orderId = generateOrderId();
  
  try {
    // Prepare parameters for the email template, matching the expected format
    const emailParams = {
      from_name: rentalDetails.name || 'Customer',
      reply_to: rentalDetails.email || 'no-email@provided.com',
      customer_phone: rentalDetails.phone || 'Not provided',
      rental_plan: rentalDetails.plan || 'Not specified',
      rental_location: rentalDetails.location || 'Not specified',
      rental_start: rentalDetails.startDate || 'Not specified',
      rental_purpose: rentalDetails.service || 'Not specified',
      additional_info: rentalDetails.message || 'No additional information provided',
      order_id: orderId,
      // Multiple recipients
      to_email: 'support@flit.tz',
      cc_email: 'edwindirect@hotmail.com',
      // Add cash on delivery notice
      payment_options: '💰 CASH ON DELIVERY AVAILABLE 💰'
    };

    console.log("Sending email notification with params:", emailParams);

    // Send primary email notification to team
    const emailPromise = emailjs.send(
      'service_safari_surf', 
      'template_rental_notification',
      emailParams
    );
    
    // Prepare SMS template parameters 
    const smsParams = {
      to_phone: '+255764928408',
      message: `NEW RENTAL #${orderId}: ${rentalDetails.name} (${rentalDetails.phone}) wants ${rentalDetails.plan || 'WiFi'} at ${rentalDetails.location || 'location TBD'}. Start: ${rentalDetails.startDate || 'ASAP'}. CASH ON DELIVERY AVAILABLE!`,
      from_name: rentalDetails.name || 'Customer',
      order_id: orderId
    };

    console.log("Sending SMS notification with params:", smsParams);

    // Send SMS notification
    const smsPromise = emailjs.send(
      'service_safari_surf',
      'template_sms_notification',
      smsParams
    );

    // Send customer confirmation email
    const customerConfirmParams = {
      customer_name: rentalDetails.name || 'Valued Customer',
      to_email: rentalDetails.email,
      rental_plan: rentalDetails.plan || 'WiFi Rental',
      order_id: orderId,
      rental_location: rentalDetails.location || 'your specified location',
      rental_start: rentalDetails.startDate || 'your requested date',
      payment_options: 'Cash on delivery available - pay when you receive your device!'
    };

    // Only send customer confirmation if email is provided
    const customerPromise = rentalDetails.email ? 
      emailjs.send(
        'service_safari_surf',
        'template_customer_confirmation',
        customerConfirmParams
      ) : 
      Promise.resolve({status: 'skipped', text: 'No customer email'});

    // Execute all notifications in parallel
    const results = await Promise.allSettled([emailPromise, smsPromise, customerPromise]);
    
    // Log results for debugging
    console.log('Notification results:', results.map(r => r.status));
    
    // Send backup SMS if any notifications failed
    if (results.some(r => r.status === 'rejected')) {
      const backupSmsParams = {
        to_phone: '+255764928408',
        message: `URGENT BACKUP: Order #${orderId} - ${rentalDetails.name} (${rentalDetails.phone}) wants ${rentalDetails.plan || 'WiFi'} - CASH ON DELIVERY OK`,
        order_id: orderId
      };
      
      try {
        await emailjs.send(
          'service_safari_surf',
          'template_sms_notification',
          backupSmsParams
        );
        console.log('Backup SMS sent successfully');
      } catch (backupError) {
        console.error('Backup SMS also failed:', backupError);
      }
    }

    return { 
      success: true, 
      orderId,
      results: results.map(r => r.status)
    };
  } catch (error) {
    console.error('Notification system error:', error);
    
    // Final emergency fallback - direct SMS with minimal data
    try {
      const emergencyParams = {
        to_phone: '+255764928408',
        message: `EMERGENCY: Rental system error. Customer: ${rentalDetails.name || 'Unknown'}, Phone: ${rentalDetails.phone || 'Unknown'}. CASH ON DELIVERY.`,
      };
      
      await emailjs.send(
        'service_safari_surf',
        'template_sms_notification',
        emergencyParams
      );
      
      return { 
        success: false, 
        error: error.message,
        fallback: true,
        message: 'Emergency notification sent'
      };
    } catch (fallbackError) {
      console.error('All notification attempts failed:', fallbackError);
      return { 
        success: false, 
        error: error.message,
        message: 'All notification methods failed'
      };
    }
  }
};

/**
 * Sends a payment confirmation to customer and team
 * @param {Object} paymentDetails - Payment information
 * @returns {Promise} - A promise that resolves when confirmations are sent
 */
export const sendPaymentConfirmation = async (paymentDetails) => {
  try {
    const confirmationParams = {
      customer_name: paymentDetails.customerName,
      customer_email: paymentDetails.customerEmail,
      order_id: paymentDetails.orderId || generateOrderId(),
      amount: paymentDetails.amount,
      currency: paymentDetails.currency,
      plan_name: paymentDetails.plan,
      payment_method: paymentDetails.paymentMethod,
      transaction_id: paymentDetails.transactionId,
      payment_status: 'Confirmed',
      to_email: paymentDetails.customerEmail,
      cc_email: 'support@flit.tz',
      bcc_email: 'edwindirect@hotmail.com',
      payment_note: 'CASH ON DELIVERY OPTION AVAILABLE'
    };

    // Send customer receipt
    const emailResult = await emailjs.send(
      'service_safari_surf',
      'template_payment_confirmation',
      confirmationParams
    );

    // Notify team about the payment
    const teamNotificationParams = {
      to_phone: '+255764928408',
      message: `PAYMENT: ${paymentDetails.customerName} paid ${paymentDetails.amount} ${paymentDetails.currency} for ${paymentDetails.plan}. Method: ${paymentDetails.paymentMethod}`,
      order_id: paymentDetails.orderId || 'UNKNOWN',
    };

    const smsResult = await emailjs.send(
      'service_safari_surf',
      'template_sms_notification',
      teamNotificationParams
    );

    return { 
      success: true, 
      emailResult, 
      smsResult 
    };
  } catch (error) {
    console.error('Payment confirmation error:', error);
    
    // Try SMS fallback if email fails
    try {
      const fallbackSmsParams = {
        to_phone: '+255764928408',
        message: `URGENT: Payment confirmation failed to send for ${paymentDetails.customerName} (${paymentDetails.amount} ${paymentDetails.currency}). Please contact them at ${paymentDetails.customerEmail || 'No email'}.`,
      };
      
      await emailjs.send(
        'service_safari_surf',
        'template_sms_notification',
        fallbackSmsParams
      );
      
      return { 
        success: false, 
        error: error.message,
        fallback: true
      };
    } catch (fallbackError) {
      console.error('All confirmation attempts failed:', fallbackError);
      return { 
        success: false, 
        error: error.message 
      };
    }
  }
};