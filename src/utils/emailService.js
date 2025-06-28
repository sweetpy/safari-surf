/**
 * Sends a rental notification to admins and customer
 * @param {Object} rentalDetails - Customer and rental information
 * @returns {Promise} - A promise that resolves when notifications are sent
 */
export const sendRentalNotification = async (rentalDetails) => {
  try {
    // Try to use the Supabase Edge Function first
    const apiUrl = import.meta.env.VITE_SUPABASE_URL 
      ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-notification`
      : '';

    // Try PHP fallback if running on cPanel (relative path from deployment)
    const phpFallbackUrl = './php/send-notification.php';
      
    // Try serverless function first
    try {
      if (apiUrl) {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || ''}`,
          },
          body: JSON.stringify({
            rentalDetails,
            notificationType: 'rental'
          })
        });
        
        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.error || 'Failed to send notification');
        }

        return { 
          success: true, 
          orderId: result.orderId
        };
      } else {
        throw new Error('No Supabase URL configured');
      }
    } catch (serverlessError) {
      console.warn('Serverless function error, trying PHP fallback:', serverlessError);
      
      // Try PHP fallback
      const response = await fetch(phpFallbackUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rentalDetails,
          notificationType: 'rental'
        })
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to send notification');
      }

      return { 
        success: true, 
        orderId: result.orderId
      };
    }
  } catch (error) {
    console.error('All notification methods failed:', error);
    
    // Fallback to WhatsApp
    try {
      // Generate a unique order ID for tracking
      const timestamp = Date.now().toString(36).toUpperCase();
      const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
      const orderId = `TZ${timestamp}${randomStr}`;
      
      // Format WhatsApp message as fallback
      const whatsappMessage = `Hello! I'd like to rent a WiFi device.
      
Name: ${rentalDetails.name || 'Not provided'}
Email: ${rentalDetails.email || 'Not provided'}
Phone: ${rentalDetails.phone || 'Not provided'}
Plan: ${rentalDetails.plan || 'Not specified'}
Location: ${rentalDetails.location || rentalDetails.airport || 'Not specified'}
Start Date: ${rentalDetails.startDate || rentalDetails.arrivalDate || 'Not specified'}
Additional Info: ${rentalDetails.message || 'No additional information'}

ORDER ID: ${orderId}
CASH ON DELIVERY AVAILABLE - I can pay when receiving the device.`;
      
      return { 
        success: false, 
        error: error.message,
        fallback: 'whatsapp',
        whatsappMessage,
        orderId
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
    // Try to use the Supabase Edge Function first
    const apiUrl = import.meta.env.VITE_SUPABASE_URL 
      ? `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-notification`
      : '';
    
    // Try PHP fallback if running on cPanel (relative path from deployment)
    const phpFallbackUrl = './php/send-notification.php';
    
    // Try serverless function first
    try {
      if (apiUrl) {
        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || ''}`,
          },
          body: JSON.stringify({
            rentalDetails: {
              customerName: paymentDetails.customerName,
              customerEmail: paymentDetails.customerEmail,
              amount: paymentDetails.amount,
              currency: paymentDetails.currency,
              plan: paymentDetails.plan,
              paymentMethod: paymentDetails.paymentMethod,
              transactionId: paymentDetails.transactionId,
            },
            notificationType: 'payment'
          })
        });
        
        const result = await response.json();
        
        if (!result.success) {
          throw new Error(result.error || 'Failed to send payment confirmation');
        }

        return { 
          success: true, 
          orderId: result.orderId,
        };
      } else {
        throw new Error('No Supabase URL configured');
      }
    } catch (serverlessError) {
      console.warn('Serverless function error, trying PHP fallback:', serverlessError);
      
      // Try PHP fallback
      const response = await fetch(phpFallbackUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          rentalDetails: {
            customerName: paymentDetails.customerName,
            customerEmail: paymentDetails.customerEmail,
            amount: paymentDetails.amount,
            currency: paymentDetails.currency,
            plan: paymentDetails.plan,
            paymentMethod: paymentDetails.paymentMethod,
            transactionId: paymentDetails.transactionId,
          },
          notificationType: 'payment'
        })
      });
      
      const result = await response.json();
      
      if (!result.success) {
        throw new Error(result.error || 'Failed to send payment confirmation');
      }

      return { 
        success: true, 
        orderId: result.orderId
      };
    }
  } catch (error) {
    console.error('Payment confirmation error:', error);
    
    // Format WhatsApp message as fallback
    const whatsappMessage = `Hello! I just completed a payment for WiFi rental.
    
Name: ${paymentDetails.customerName || 'Not provided'} 
Email: ${paymentDetails.customerEmail || 'Not provided'}
Amount: ${paymentDetails.amount} ${paymentDetails.currency}
Plan: ${paymentDetails.plan}
Method: ${paymentDetails.paymentMethod || 'Not specified'}

I'd like to confirm my payment was received.`;
    
    return { 
      success: false, 
      error: error.message,
      fallback: 'whatsapp',
      whatsappMessage
    };
  }
};