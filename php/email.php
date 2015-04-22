<?php

/*$name = $email = $comment = $message = "";

$dest_email="davhern@gmail.com";
$name=$_POST["name"];
$email=$_POST["email"];
$comment=$_POST["message"];

$subject="Email de contacto de la pagina del portafolio";

$message= 	"<p><strong>Name: </strong>" . $name . "</p>
<p><strong>Email: </strong>" . $email . "</p>
<p><strong>Comment: </strong>" . $comment . "</p>"; 

$message=wordwrap($message,70);


echo $message;

mail($dest_email, $subject, $message);*/


require_once 'c:/xampp_/php/vendor/autoload.php';
require_once 'c:/xampp_/php/vendor/swiftmailer/lib/swift_required.php';

$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, "ssl")
  ->setUsername('davhern@gmail.com')
  ->setPassword('KarmaPolice5');

$mailer = Swift_Mailer::newInstance($transport);

$message = Swift_Message::newInstance('Test Subject')
  ->setFrom(array('abc@example.com' => 'ABC'))
  ->setTo(array('davhern@gmail.com'))
  ->setBody('This is a test mail.');

$result = $mailer->send($message);

?>