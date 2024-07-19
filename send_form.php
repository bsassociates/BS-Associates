<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $firstName = $_POST['first-name'];
    $lastName = $_POST['last-name'];
    $surname = $_POST['surname'];
    $email = $_POST['email'];
    $mobile = $_POST['mobile'];
    $query = $_POST['query'];

    $to = "bsassociate2000@gmail.com";
    $subject = "New Query from Application Form";
    $message = "
    <html>
    <head>
    <title>New Query from Application Form</title>
    </head>
    <body>
    <p>New query submitted from the application form:</p>
    <table>
    <tr>
    <th>First Name</th><td>$firstName</td>
    </tr>
    <tr>
    <th>Last Name</th><td>$lastName</td>
    </tr>
    <tr>
    <th>Surname</th><td>$surname</td>
    </tr>
    <tr>
    <th>Email</th><td>$email</td>
    </tr>
    <tr>
    <th>Mobile</th><td>$mobile</td>
    </tr>
    <tr>
    <th>Query</th><td>$query</td>
    </tr>
    </table>
    </body>
    </html>
    ";

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: <webmaster@example.com>' . "\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Invalid request method.";
}
?>