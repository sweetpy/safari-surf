// CORS headers for cross-origin requests
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Content-Type": "application/json",
};

// Handle preflight OPTIONS request
function handleOptions() {
  return new Response(null, {
    headers: corsHeaders,
    status: 204
  });
}

// Generate a unique order ID for tracking
const generateOrderId = () => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const randomStr = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `TZ${timestamp}${randomStr}`;
};

Deno.serve(async (req) => {
  // Handle CORS preflight request
  if (req.method === "OPTIONS") {
    return handleOptions();
  }

  try {
    // Only allow POST requests
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        { 
          status: 405, 
          headers: { ...corsHeaders }
        }
      );
    }

    // Parse request body
    const { rentalDetails, notificationType } = await req.json();
    
    if (!rentalDetails) {
      return new Response(
        JSON.stringify({ error: "Missing rental details" }),
        { 
          status: 400, 
          headers: { ...corsHeaders }
        }
      );
    }

    // Generate a unique order ID
    const orderId = generateOrderId();

    // Prepare email content based on notification type
    let emailSubject, emailBody, recipientEmails;
    const customerName = rentalDetails.name || rentalDetails.customerName || 'Customer';
    
    if (notificationType === 'rental') {
      // Rental notification to admins
      emailSubject = `New WiFi Rental Request #${orderId}`;
      emailBody = `
        <h2>New WiFi Rental Request</h2>
        <p>Order ID: ${orderId}</p>
        <p>Customer: ${customerName}</p>
        <p>Phone: ${rentalDetails.phone || 'Not provided'}</p>
        <p>Email: ${rentalDetails.email || 'Not provided'}</p>
        <p>Plan: ${rentalDetails.plan || 'Not specified'}</p>
        <p>Location: ${rentalDetails.location || rentalDetails.airport || 'Not specified'}</p>
        <p>Arrival Date: ${rentalDetails.arrivalDate || rentalDetails.startDate || 'Not specified'}</p>
        <p>Flight: ${rentalDetails.flightNumber || 'Not provided'}</p>
        <p>Additional Info: ${rentalDetails.message || 'No additional information provided'}</p>
        <p><strong>CASH ON DELIVERY AVAILABLE</strong></p>
      `;
      
      recipientEmails = ["support@flit.tz", "edwindirect@hotmail.com"];
      
      // Send customer confirmation if email provided
      if (rentalDetails.email) {
        const customerEmailBody = `
          <h2>Your WiFi Rental Request is Confirmed</h2>
          <p>Dear ${customerName},</p>
          <p>Thank you for choosing Safari Surf WiFi for your Tanzania connectivity needs.</p>
          <p>Your order #${orderId} has been received and our team is preparing your device.</p>
          <p><strong>Rental Details:</strong></p>
          <p>Plan: ${rentalDetails.plan || 'WiFi Rental'}</p>
          <p>Location: ${rentalDetails.location || rentalDetails.airport || 'Your specified location'}</p>
          <p>Start Date: ${rentalDetails.arrivalDate || rentalDetails.startDate || 'Your requested date'}</p>
          <p><strong>Cash on delivery available - pay when you receive your device!</strong></p>
          <p>For any questions, please contact us via WhatsApp at +255 764 928 408.</p>
          <p>Enjoy your connected Tanzania experience!</p>
          <p>The Safari Surf WiFi Team</p>
        `;
        
        console.log("Customer confirmation email prepared for:", rentalDetails.email);
      }
      
    } else if (notificationType === 'payment') {
      // Payment confirmation
      emailSubject = `Payment Confirmation #${orderId}`;
      emailBody = `
        <h2>Payment Confirmation</h2>
        <p>Order ID: ${orderId}</p>
        <p>Customer: ${customerName}</p>
        <p>Amount: ${rentalDetails.amount} ${rentalDetails.currency}</p>
        <p>Plan: ${rentalDetails.plan}</p>
        <p>Payment Method: ${rentalDetails.paymentMethod || 'Not specified'}</p>
        <p>Transaction ID: ${rentalDetails.transactionId || orderId}</p>
        <p>Status: Confirmed</p>
      `;
      
      recipientEmails = ["support@flit.tz", "edwindirect@hotmail.com"];
      
      // Customer confirmation if email provided
      if (rentalDetails.customerEmail) {
        const customerEmailBody = `
          <h2>Your Payment Confirmation</h2>
          <p>Dear ${customerName},</p>
          <p>Thank you for your payment of ${rentalDetails.amount} ${rentalDetails.currency} for your ${rentalDetails.plan} plan.</p>
          <p>Transaction ID: ${rentalDetails.transactionId || orderId}</p>
          <p>Your receipt has been generated and your rental is now confirmed.</p>
          <p>For any questions, please contact us via WhatsApp at +255 764 928 408.</p>
          <p>Enjoy your connected Tanzania experience!</p>
          <p>The Safari Surf WiFi Team</p>
        `;
        
        console.log("Customer payment confirmation email prepared for:", rentalDetails.customerEmail);
      }
    }
    
    // In a production environment, this would actually send emails
    // For this example, we'll just log the action
    console.log(`[${notificationType}] Notification prepared with subject: ${emailSubject}`);
    console.log(`Recipients: ${recipientEmails?.join(', ')}`);

    // Send SMS notification (simulated)
    console.log(`SMS notification prepared for: +255764928408`);
    
    // Return success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        orderId,
        message: "Notification sent successfully" 
      }),
      { headers: { ...corsHeaders } }
    );
  } catch (error) {
    console.error("Error sending notification:", error);
    
    // Return error response
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "An unknown error occurred" 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders }
      }
    );
  }
});