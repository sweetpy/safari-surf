<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");

// Get localStorage debugging data
$response = [
    "status" => "success",
    "message" => "Use this script to debug localStorage issues on cPanel",
    "time" => date("Y-m-d H:i:s"),
    "server" => $_SERVER['SERVER_NAME'],
    "ip" => $_SERVER['REMOTE_ADDR'],
    "user_agent" => $_SERVER['HTTP_USER_AGENT'],
    "instructions" => "To test localStorage in your browser, run these commands in console:
1. localStorage.getItem('customerCount')
2. localStorage.getItem('visitorId')
3. localStorage.getItem('customerCountryData')
Then reload the page several times and check if values persist and increment."
];

echo json_encode($response, JSON_PRETTY_PRINT);
?>