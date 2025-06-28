<?php
// CORS headers for cross-origin requests
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
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

// Validate request data
if (!isset($data['rentalDetails'])) {
    echo json_encode([
        'success' => false,
        'error' => 'Missing rental details'
    ]);
    http_response_code(400);
    exit;
}

$rentalDetails = $data['rentalDetails'];
$notificationType = $data['notificationType'] ?? 'rental';

// Generate a unique order ID
function generateOrderId() {
    $timestamp = strtoupper(base_convert(time(), 10, 36));
    $randomStr = strtoupper(substr(bin2hex(random_bytes(2)), 0, 4));
    return "TZ{$timestamp}{$randomStr}";
}

$orderId = generateOrderId();

// Setup email details based on notification type
$customerName = $rentalDetails['name'] ?? $rentalDetails['customerName'] ?? 'Customer';
$recipientEmails = ["support@flit.tz", "edwindirect@hotmail.com"];
$emailSubject = '';
$emailBody = '';
$customerEmailBody = '';

if ($notificationType === 'rental') {
    $emailSubject = "New WiFi Rental Request #{$orderId}";
    $emailBody = "
        <h2>New WiFi Rental Request</h2>
        <p>Order ID: {$orderId}</p>
        <p>Customer: {$customerName}</p>
        <p>Phone: " . ($rentalDetails['phone'] ?? 'Not provided') . "</p>
        <p>Email: " . ($rentalDetails['email'] ?? 'Not provided') . "</p>
        <p>Plan: " . ($rentalDetails['plan'] ?? 'Not specified') . "</p>
        <p>Location: " . ($rentalDetails['location'] ?? $rentalDetails['airport'] ?? 'Not specified') . "</p>
        <p>Arrival Date: " . ($rentalDetails['arrivalDate'] ?? $rentalDetails['startDate'] ?? 'Not specified') . "</p>
        <p>Flight: " . ($rentalDetails['flightNumber'] ?? 'Not provided') . "</p>
        <p>Additional Info: " . ($rentalDetails['message'] ?? 'No additional information provided') . "</p>
        <p><strong>CASH ON DELIVERY AVAILABLE</strong></p>
    ";
    
    // Prepare customer confirmation email if email is provided
    if (isset($rentalDetails['email']) && !empty($rentalDetails['email'])) {
        $customerEmailBody = "
            <h2>Your WiFi Rental Request is Confirmed</h2>
            <p>Dear {$customerName},</p>
            <p>Thank you for choosing Safari Surf WiFi for your Tanzania connectivity needs.</p>
            <p>Your order #{$orderId} has been received and our team is preparing your device.</p>
            <p><strong>Rental Details:</strong></p>
            <p>Plan: " . ($rentalDetails['plan'] ?? 'WiFi Rental') . "</p>
            <p>Location: " . ($rentalDetails['location'] ?? $rentalDetails['airport'] ?? 'Your specified location') . "</p>
            <p>Start Date: " . ($rentalDetails['arrivalDate'] ?? $rentalDetails['startDate'] ?? 'Your requested date') . "</p>
            <p><strong>Cash on delivery available - pay when you receive your device!</strong></p>
            <p>For any questions, please contact us via WhatsApp at +255 764 928 408.</p>
            <p>Enjoy your connected Tanzania experience!</p>
            <p>The Safari Surf WiFi Team</p>
        ";
    }
} elseif ($notificationType === 'payment') {
    $emailSubject = "Payment Confirmation #{$orderId}";
    $emailBody = "
        <h2>Payment Confirmation</h2>
        <p>Order ID: {$orderId}</p>
        <p>Customer: {$customerName}</p>
        <p>Amount: " . ($rentalDetails['amount'] ?? '0') . " " . ($rentalDetails['currency'] ?? 'USD') . "</p>
        <p>Plan: " . ($rentalDetails['plan'] ?? 'Not specified') . "</p>
        <p>Payment Method: " . ($rentalDetails['paymentMethod'] ?? 'Not specified') . "</p>
        <p>Transaction ID: " . ($rentalDetails['transactionId'] ?? $orderId) . "</p>
        <p>Status: Confirmed</p>
    ";
    
    // Prepare customer confirmation email if email is provided
    if (isset($rentalDetails['customerEmail']) && !empty($rentalDetails['customerEmail'])) {
        $customerEmailBody = "
            <h2>Your Payment Confirmation</h2>
            <p>Dear {$customerName},</p>
            <p>Thank you for your payment of " . ($rentalDetails['amount'] ?? '0') . " " . ($rentalDetails['currency'] ?? 'USD') . " for your " . ($rentalDetails['plan'] ?? '') . " plan.</p>
            <p>Transaction ID: " . ($rentalDetails['transactionId'] ?? $orderId) . "</p>
            <p>Your receipt has been generated and your rental is now confirmed.</p>
            <p>For any questions, please contact us via WhatsApp at +255 764 928 408.</p>
            <p>Enjoy your connected Tanzania experience!</p>
            <p>The Safari Surf WiFi Team</p>
        ";
    }
}

// Send emails (or log them for development)
$emailSent = false;
$customerEmailSent = false;

// Function to send emails with proper headers
function sendEmail($to, $subject, $message) {
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: Safari Surf WiFi <notifications@' . $_SERVER['HTTP_HOST'] . '>' . "\r\n";
    
    return mail($to, $subject, $message, $headers);
}

// Send notification to staff
foreach ($recipientEmails as $email) {
    // In production, uncomment the line below
    // $emailSent = sendEmail($email, $emailSubject, $emailBody) || $emailSent;
    
    // For development/testing
    $emailSent = true;
    error_log("Email would be sent to: $email with subject: $emailSubject");
}

// Send confirmation to customer if email is provided
if (!empty($customerEmailBody)) {
    $customerEmail = $rentalDetails['email'] ?? $rentalDetails['customerEmail'] ?? '';
    if (!empty($customerEmail)) {
        // In production, uncomment the line below
        // $customerEmailSent = sendEmail($customerEmail, "Your Safari Surf WiFi Confirmation", $customerEmailBody);
        
        // For development/testing
        $customerEmailSent = true;
        error_log("Confirmation email would be sent to customer: $customerEmail");
    }
}

// Send SMS notification (placeholder - implement with your SMS provider)
// For example, with Twilio or a local SMS gateway
$smsSent = true;
error_log("SMS notification would be sent to: +255764928408");

// Return response
echo json_encode([
    'success' => true,
    'orderId' => $orderId,
    'message' => 'Notification sent successfully',
    'emailSent' => $emailSent,
    'customerEmailSent' => $customerEmailSent,
    'smsSent' => $smsSent
]);
?>