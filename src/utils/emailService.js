import emailjs from 'emailjs-com';

// If using in frontend JS only:
emailjs.init('ovqQW5oj4Z8UoQGpa');

/**
 * Sends an email notification for a new WiFi rental
 */
export const sendRentalNotification = async (rentalDetails) => {
  try {
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

    const emailResult = await emailjs.send(
      'service_safari_surf',
      'template_rental_notification',
      emailParams
    );

    console.log('Email sent:', emailResult);

    // Continue to SMS regardless
    await sendSMSNotification(rentalDetails);

    return { success: true, message: 'Email + SMS sent successfully' };

  } catch (error) {
    console.error('Email failed:', error);

    try {
      console.log('Trying SMS fallback...');
      await sendSMSNotification(rentalDetails, true);
      await sendDirectSMS(rentalDetails);
    } catch (smsError) {
      console.error('SMS fallback failed:', smsError);
    }

    return {
      success: false,
      error,
      message: 'Email failed. SMS fallback attempted.'
    };
  }
};

/**
 * Fallback SMS via alternate template
 */
const sendDirectSMS = async (rentalDetails) => {
  try {
    const message = `NEW WIFI RENTAL: ${rentalDetails.name} (${rentalDetails.phone}) - ${rentalDetails.plan} - ${rentalDetails.location} - Start: ${rentalDetails.startDate}`;

    const directSmsParams = {
      to_phone: '+255764928408',
      message: `URGENT BACKUP SMS: ${message}`,
      to_email: 'edwindirect@hotmail.com'
    };

    await emailjs.send(
      'service_safari_surf',
      'template_direct_sms',
      directSmsParams
    );

    console.log('Backup SMS sent');
    return true;

  } catch (error) {
    console.error('Direct SMS failed:', error);
    return false;
  }
};

/**
 * Primary or fallback SMS handler
 */
const sendSMSNotification = async (rentalDetails, isUrgent = false) => {
  try {
    const message = isUrgent
      ? `URGENT! ${rentalDetails.name} (${rentalDetails.phone}) wants ${rentalDetails.plan} at ${rentalDetails.location} from ${rentalDetails.startDate}`
      : `New Rental: ${rentalDetails.name} (${rentalDetails.phone}) wants ${rentalDetails.plan} at ${rentalDetails.location} from ${rentalDetails.startDate}`;

    const smsParams = {
      to_phone: '+255764928408',
      message: message,
      to_email: 'support@flit.tz',
      cc_email: 'edwindirect@hotmail.com',
      subject: isUrgent ? 'URGENT WiFi Rental' : 'New WiFi Rental',
      from_name: rentalDetails.name,
      customer_phone: rentalDetails.phone || 'Not provided'
    };

    await emailjs.send(
      'service_safari_surf',
      'template_sms_notification',
      smsParams
    );

    // Backup
    await emailjs.send(
      'service_safari_surf',
      'template_sms_notification',
      { ...smsParams, message: `BACKUP NOTICE: ${message}`, to_email: 'edwindirect@hotmail.com' }
    );

    console.log('SMS notifications sent');
    return true;

  } catch (error) {
    console.error('SMS failed:', error);

    // Final failover
    try {
      const fallback = {
        to_phone: '+255764928408',
        message: `WIFI RENTAL: ${rentalDetails.name}, ${rentalDetails.phone}, ${rentalDetails.plan}, ${rentalDetails.location}.`,
        to_email: 'support@flit.tz'
      };

      await emailjs.send(
        'service_safari_surf',
        'template_sms_notification',
        fallback
      );

      console.log('Minimal SMS fallback sent');
    } catch (fallbackError) {
      console.error('All SMS attempts failed:', fallbackError);
    }

    return false;
  }
};
