<?php
// Simple PHP mailer script for cPanel hosting
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode([
        'success' => false,
        'error' => 'Method not allowed'
    ]);
    http_response_code(405);
    exit;
}

// Get JSON data
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Basic validation
if (!isset($data['type']) || !isset($data['details'])) {
    echo json_encode([
        'success' => false,
        'error' => 'Missing required fields'
    ]);
    http_response_code(400);
    exit;
}

// Generate order ID
function generateOrderId() {
    $timestamp = strtoupper(base_convert(time(), 10, 36));
    $randomStr = strtoupper(substr(bin2hex(random_bytes(2)), 0, 4));
    return "TZ{$timestamp}{$randomStr}";
}

$orderId = generateOrderId();
$details = $data['details'];
$notificationType = $data['type'];

// Log request for debugging
error_log("Mail request received: " . $notificationType);
error_log("Order ID generated: " . $orderId);

// Prepare email details
$customerName = $details['name'] ?? $details['customerName'] ?? 'Customer';
$to = 'edwindirect@hotmail.com, support@flit.tz'; // Admin emails
$subject = '';
$message = '';

if ($notificationType === 'rental') {
    // Rental notification
    $subject = "New WiFi Rental Request #{$orderId}";
    $message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
            h2 { color: #f97316; }
            .details { margin: 15px 0; }
            .important { font-weight: bold; color: #f97316; }
        </style>
    </head>
    <body>
        <div class='container'>
            <h2>New WiFi Rental Request</h2>
            <div class='details'>
                <p><strong>Order ID:</strong> {$orderId}</p>
                <p><strong>Customer:</strong> {$customerName}</p>
                <p><strong>Phone:</strong> " . ($details['phone'] ?? 'Not provided') . "</p>
                <p><strong>Email:</strong> " . ($details['email'] ?? 'Not provided') . "</p>
                <p><strong>Plan:</strong> " . ($details['plan'] ?? 'Not specified') . "</p>
                <p><strong>Location:</strong> " . ($details['location'] ?? $details['airport'] ?? 'Not specified') . "</p>
                <p><strong>Start Date:</strong> " . ($details['startDate'] ?? $details['arrivalDate'] ?? 'Not specified') . "</p>
                <p><strong>Message:</strong> " . ($details['message'] ?? 'No additional information') . "</p>
                <p class='important'>CASH ON DELIVERY AVAILABLE</p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Send customer confirmation if email provided
    if (isset($details['email']) && !empty($details['email'])) {
        $customerSubject = "Your WiFi Rental is Confirmed - Safari Surf WiFi";
        $customerMessage = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
                h2 { color: #f97316; }
                .details { margin: 15px 0; }
                .important { font-weight: bold; color: #f97316; }
                .footer { margin-top: 30px; font-size: 12px; color: #666; }
            </style>
        </head>
        <body>
            <div class='container'>
                <h2>Your WiFi Rental Request is Confirmed</h2>
                <p>Dear {$customerName},</p>
                <p>Thank you for choosing Safari Surf WiFi for your Tanzania connectivity needs.</p>
                <p>Your order #{$orderId} has been received and our team is preparing your device.</p>
                
                <div class='details'>
                    <p><strong>Rental Details:</strong></p>
                    <p>Plan: " . ($details['plan'] ?? 'WiFi Rental') . "</p>
                    <p>Location: " . ($details['location'] ?? $details['airport'] ?? 'Your specified location') . "</p>
                    <p>Start Date: " . ($details['startDate'] ?? $details['arrivalDate'] ?? 'Your requested date') . "</p>
                </div>
                
                <p class='important'>Cash on delivery available - pay when you receive your device!</p>
                
                <p>For any questions, please contact us via WhatsApp at +255 764 928 408.</p>
                
                <div class='footer'>
                    <p>Enjoy your connected Tanzania experience!</p>
                    <p>The Safari Surf WiFi Team</p>
                </div>
            </div>
        </body>
        </html>
        ";
        
        // Send customer email
        $customerTo = $details['email'];
        sendMail($customerTo, $customerSubject, $customerMessage);
    }
} else if ($notificationType === 'payment') {
    // Payment confirmation
    $subject = "Payment Confirmation #{$orderId}";
    $message = "
    <html>
    <head>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
            h2 { color: #f97316; }
            .details { margin: 15px 0; }
        </style>
    </head>
    <body>
        <div class='container'>
            <h2>Payment Confirmation</h2>
            <div class='details'>
                <p><strong>Order ID:</strong> {$orderId}</p>
                <p><strong>Customer:</strong> {$customerName}</p>
                <p><strong>Amount:</strong> " . ($details['amount'] ?? '0') . " " . ($details['currency'] ?? 'USD') . "</p>
                <p><strong>Plan:</strong> " . ($details['plan'] ?? 'Not specified') . "</p>
                <p><strong>Payment Method:</strong> " . ($details['paymentMethod'] ?? 'Not specified') . "</p>
                <p><strong>Transaction ID:</strong> " . ($details['transactionId'] ?? $orderId) . "</p>
                <p><strong>Status:</strong> Confirmed</p>
            </div>
        </div>
    </body>
    </html>
    ";

    // Send customer receipt if email provided
    if (isset($details['customerEmail']) && !empty($details['customerEmail'])) {
        $customerSubject = "Your Payment Receipt - Safari Surf WiFi";
        $customerMessage = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
                h2 { color: #f97316; }
                .details { margin: 15px 0; }
                .footer { margin-top: 30px; font-size: 12px; color: #666; }
            </style>
        </head>
        <body>
            <div class='container'>
                <h2>Your Payment Confirmation</h2>
                <p>Dear {$customerName},</p>
                <p>Thank you for your payment of " . ($details['amount'] ?? '0') . " " . ($details['currency'] ?? 'USD') . " for your " . ($details['plan'] ?? '') . " plan.</p>
                
                <div class='details'>
                    <p><strong>Transaction ID:</strong> " . ($details['transactionId'] ?? $orderId) . "</p>
                    <p>Your receipt has been generated and your rental is now confirmed.</p>
                </div>
                
                <p>For any questions, please contact us via WhatsApp at +255 764 928 408.</p>
                
                <div class='footer'>
                    <p>Enjoy your connected Tanzania experience!</p>
                    <p>The Safari Surf WiFi Team</p>
                </div>
            </div>
        </body>
        </html>
        ";
        
        // Send customer email
        $customerTo = $details['customerEmail'];
        sendMail($customerTo, $customerSubject, $customerMessage);
    }
}

// Function to send email
function sendMail($to, $subject, $message) {
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: Safari Surf WiFi <no-reply@" . $_SERVER['HTTP_HOST'] . ">\r\n";
    
    // Log the attempt
    error_log("Sending email to: " . $to . " with subject: " . $subject);
    
    return mail($to, $subject, $message, $headers);
}

// Send the main notification email
$emailSent = sendMail($to, $subject, $message);

// Return the result
echo json_encode([
    'success' => $emailSent,
    'orderId' => $orderId,
    'message' => $emailSent ? 'Email sent successfully' : 'Failed to send email'
]);
?>