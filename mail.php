<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $recipient = "fgyamfi15@gmail.com"; // Your Gmail address
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $headers = "From: " . $_POST["email"];

    // Send the email
    if (mail($recipient, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Error sending email.";
    }
}
?>