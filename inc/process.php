<?php

// Connect to a database

$conn = mysqli_connect('localhost', 'root', 'password', 'dbase name');

      $msg = "";
      $msgClass = "";
      // Check for Submit
      if(filter_has_var(INPUT_POST, 'submit')){
          // Get Data
          $name = htmlspecialchars($_POST['name']);
          $email = htmlspecialchars($_POST['email']);
          $treatment = htmlspecialchars($_POST['treatment']);
          $message = htmlspecialchars($_POST['message']);
   
      // Check Required Fields
      if(!empty($email) && !empty($name) && !empty($treatment) && !empty($message)){
          // Passed
          // Check email
          if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
               // Failed
               $msg = 'Please Use A Valid Email';
               $msgClass = 'alert-danger';
          } else {

          $query = "INSERT INTO testimonials(name, email, treatment, message) VALUES('$name, $email, $treatment, $message')";
              // Passed
              // Recipient Email
              $toEmail = 'your email address';
              $subject = 'Contact Request From ' .$name;
              $body = '<h2>Contact Request</h2>
                      <h4>Name</h4><p>'.$name.'</p>
                      <h4>Email</h4><p>'.$email.'</p>
                      <h4>Treatment</h4><p>'.$treatment.'</p>
                      <h4>Message</h4><p>'.$message.'</p>
                      ';
  
                      // Email Headers
                      $headers = "MIME-VERSION: 1.0" . "\r\n";
                      $headers .= "Content-Type:text/html;charset=utf-8" . "\r\n";
  
                      // Additional Headers
                      $headers .= "From: " .$name. "<".$email.">". "\r\n";
  
                      if(mail($toEmail, $subject, $body, $headers)){
                          // Email Sent
                          $msg = '';
                          $msgClass = 'alert-success';
                          $name = "";
                          $email= "";
                          $treatment = "";
                          $message = "";
                      } else {
                          // Failed
                          $msg = '';
                          $msgClass = 'alert-email-danger';
                      }
                  }
          } else {
              // Failed
              $msg = '';
              $msgClass = 'alert-danger';
          }
      }
  
  
   
