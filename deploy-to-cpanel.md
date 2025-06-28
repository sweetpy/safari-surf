# Safari Surf WiFi cPanel Deployment Guide

This document provides detailed instructions for deploying the Safari Surf WiFi application to cPanel hosting.

## Prerequisites

- cPanel hosting account with:
  - Node.js support (if you plan to run any server components)
  - PHP support (most cPanel installations have this by default)
  - FTP or File Manager access
- Built application files (dist folder)
- Domain or subdomain configured in cPanel

## Deployment Steps

### 1. Build the Application

First, build the application on your local machine:

```bash
npm run build
```

This will create a `dist` directory with all the static files needed for deployment.

### 2. Prepare Files for Upload

Before uploading, make sure these critical files are correctly configured:

- ✅ `.htaccess` - Already configured for SPA routing
- ✅ `_redirects` - Already configured for SPA routing
- ✅ `index.html` - Base path is properly set
- ✅ All paths in JS files use relative paths (configured with `base: './'` in vite.config.js)

### 3. Upload Files to cPanel

#### Option A: Using File Manager

1. Log in to your cPanel account
2. Navigate to File Manager
3. Go to the directory where you want to deploy the application (usually `public_html` or a subdirectory)
4. Click "Upload" and select all files from your local `dist` directory
5. Ensure the `.htaccess` file is included in the upload (it might be hidden)

#### Option B: Using FTP

1. Connect to your hosting using an FTP client (like FileZilla)
2. Navigate to your website's root directory (usually `public_html`)
3. Upload all contents from the local `dist` directory to this location
4. Ensure the `.htaccess` file is included in the upload

### 4. Configure Directory Permissions

Set the correct permissions for your files and directories:

1. Directories: `755` (drwxr-xr-x)
2. Files: `644` (rw-r--r--)

In cPanel File Manager:
- Select all files, right-click, and select "Change Permissions"
- For directories, check "Apply to directories only" and set to 755
- For files, check "Apply to files only" and set to 644

### 5. Test the Deployment

1. Navigate to your domain in a web browser
2. Check that all pages load correctly
3. Verify that client-side routing works (direct page access and navigating through the app)
4. Test functionality across different devices and browsers

### 6. Troubleshooting Common Issues

#### White Screen or 404 Errors

This usually indicates a routing issue. Check:
- `.htaccess` file is properly uploaded and has the right permissions
- Your hosting supports the rewrite rules in the `.htaccess` file

```apache
# Content of .htaccess should include:
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
</IfModule>
```

#### Asset Loading Issues

If CSS or JS files aren't loading, check:
- Network tab in browser dev tools for errors
- URLs in the source code (they should all be relative)
- CORS settings if applicable

### 7. Setting up Supabase Edge Functions

For production use with the application, your Supabase Edge Function needs to be properly deployed:

1. Install Supabase CLI on your local development machine
2. Link your project using `supabase link`
3. Deploy the function using `supabase functions deploy send-notification`
4. Update the application's environment variables with the correct Supabase URL

For cPanel hosting without direct Supabase integration, we've made the application fallback to WhatsApp communication when server functions are unavailable.

### 8. Email Configuration (Optional)

To enable direct email sending from your cPanel hosting:

1. Navigate to "Email Accounts" in cPanel
2. Create a new email account (e.g., `notifications@yourdomain.com`)
3. Set up a PHP script to handle email sending (example provided below)
4. Update your application to call this script instead of the Supabase function

**Example PHP Email Script** (save as `send-email.php` in your root directory):

```php
<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Only process POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'error' => 'Method not allowed']);
    exit;
}

// Get JSON input
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);

if (!$data || !isset($data['to']) || !isset($data['subject']) || !isset($data['message'])) {
    echo json_encode(['success' => false, 'error' => 'Missing required fields']);
    exit;
}

// Setup email parameters
$to = $data['to'];
$subject = $data['subject'];
$message = $data['message'];
$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
$headers .= "From: Safari Surf WiFi <notifications@yourdomain.com>\r\n";

if (isset($data['cc']) && $data['cc']) {
    $headers .= "Cc: " . $data['cc'] . "\r\n";
}

// Send email
$success = mail($to, $subject, $message, $headers);

// Return result
echo json_encode(['success' => $success, 'orderId' => uniqid()]);
?>
```

## Additional Resources

- [cPanel Documentation](https://docs.cpanel.net/)
- [React Router for Static Hosting](https://reactrouter.com/en/main/guides/static-hosting)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

## Contact for Support

If you encounter issues during deployment, contact:

- Technical Support: support@flit.tz
- WhatsApp Support: +255 764 928 408