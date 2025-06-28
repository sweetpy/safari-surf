<?php
// Email testing script - You can access this directly to test email functionality
header("Content-Type: text/html; charset=UTF-8");

// Basic authentication to prevent unauthorized access
$authorized = false;

// Simple password protection - in production use proper authentication
if (isset($_GET['key']) && $_GET['key'] === 'testemails123') {
    $authorized = true;
}

if (!$authorized) {
    echo "<h1>Authorization Required</h1>";
    echo "<p>Please provide the correct test key to access this page.</p>";
    exit;
}

// Process test email
$sent = false;
$error = '';
$recipient = '';

if (isset($_POST['send_test'])) {
    $recipient = $_POST['recipient'] ?? '';
    
    if (empty($recipient) || !filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
        $error = "Please provide a valid email address";
    } else {
        // Prepare email
        $subject = "Safari Surf WiFi - Email Test";
        $message = "
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px; }
                h2 { color: #f97316; }
            </style>
        </head>
        <body>
            <div class='container'>
                <h2>Test Email from Safari Surf WiFi</h2>
                <p>This is a test email sent from the cPanel server at " . date('Y-m-d H:i:s') . "</p>
                <p>If you're receiving this email, it means the mail function on your server is working properly.</p>
                <p>Server Information:</p>
                <ul>
                    <li>PHP Version: " . phpversion() . "</li>
                    <li>Server: " . $_SERVER['SERVER_NAME'] . "</li>
                    <li>HTTP Host: " . $_SERVER['HTTP_HOST'] . "</li>
                </ul>
            </div>
        </body>
        </html>
        ";
        
        // Headers
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
        $headers .= "From: Safari Surf WiFi <no-reply@" . $_SERVER['HTTP_HOST'] . ">\r\n";
        
        // Send email
        $sent = mail($recipient, $subject, $message, $headers);
        
        if (!$sent) {
            $error = "Failed to send the test email. Check server logs for details.";
        }
    }
}

// Display the test form
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Test Tool - Safari Surf WiFi</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
        }
        h1 { color: #f97316; }
        .card {
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
            background-color: #f9f9f9;
        }
        .form-group {
            margin-bottom: 15px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
        }
        input[type="email"] {
            width: 100%;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
        }
        button {
            background-color: #f97316;
            color: white;
            border: none;
            padding: 10px 15px;
            border-radius: 4px;
            cursor: pointer;
        }
        button:hover {
            background-color: #ea580c;
        }
        .success {
            color: green;
            padding: 10px;
            background-color: #e7f7e7;
            border-radius: 4px;
        }
        .error {
            color: red;
            padding: 10px;
            background-color: #ffebeb;
            border-radius: 4px;
        }
        .server-info {
            margin-top: 30px;
            font-size: 14px;
            color: #666;
        }
    </style>
</head>
<body>
    <h1>Email Test Tool</h1>
    <p>Use this tool to test email functionality on your cPanel server.</p>
    
    <div class="card">
        <form method="post">
            <div class="form-group">
                <label for="recipient">Recipient Email:</label>
                <input type="email" id="recipient" name="recipient" value="<?php echo htmlspecialchars($recipient); ?>" required>
            </div>
            <button type="submit" name="send_test">Send Test Email</button>
        </form>
        
        <?php if ($sent): ?>
        <div class="success">
            <p>Test email sent successfully to <?php echo htmlspecialchars($recipient); ?>!</p>
            <p>Please check your inbox (and spam folder) to confirm receipt.</p>
        </div>
        <?php endif; ?>
        
        <?php if ($error): ?>
        <div class="error">
            <p><?php echo $error; ?></p>
        </div>
        <?php endif; ?>
    </div>
    
    <div class="server-info">
        <h3>Server Information</h3>
        <ul>
            <li><strong>PHP Version:</strong> <?php echo phpversion(); ?></li>
            <li><strong>Server Software:</strong> <?php echo $_SERVER['SERVER_SOFTWARE'] ?? 'Unknown'; ?></li>
            <li><strong>HTTP Host:</strong> <?php echo $_SERVER['HTTP_HOST']; ?></li>
            <li><strong>Server Name:</strong> <?php echo $_SERVER['SERVER_NAME']; ?></li>
            <li><strong>Mail Function Available:</strong> <?php echo function_exists('mail') ? 'Yes' : 'No'; ?></li>
        </ul>
    </div>

    <div class="card">
        <h3>Troubleshooting Tips</h3>
        <ul>
            <li>Make sure your hosting provider allows PHP mail() function</li>
            <li>Check that you have properly configured email accounts in cPanel</li>
            <li>Ensure your domain has proper SPF, DKIM and DMARC records to avoid spam filtering</li>
            <li>Some hosting providers limit the number of emails you can send per hour</li>
            <li>If testing fails, consider using an SMTP library instead of PHP's mail() function</li>
        </ul>
    </div>
</body>
</html>