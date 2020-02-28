
<?php

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

?>

<div class="container-form" id="cForm">
<h1 class="form-title">Contact Form</h1>
    <?php if($msg != ""); ?>
        <div class="alert <?php echo $msgClass; ?>">
        <?php echo $msg; ?></div>
    <form method="post" acton="<?php echo $_SERVER['PHP_SELF']; ?>">
        <div class="form-group">
            <label>Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="name" class="form-control" value="<?php echo isset($_POST['name']) ? $name : ""; ?>"/>
        </div>
        <div class="form-group">
            <label>Email</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <input type="text" name="email" class="form-control" value="<?php echo isset($_POST['email']) ? $email : ""; ?>" />
        </div>
        <div class="form-group">
            <label>Treatment</label>
            <input type="text" name="treatment" class="form-control" value="<?php echo isset($_POST['treatment']) ? $treatment : ""; ?>" />
        </div>
        <div class="form-group">
            <label>Message</label>&nbsp;&nbsp;&nbsp;
            <textarea type="text" maxlength="200" name="message" class="form-control" cols="20"><?php echo isset($_POST['message']) ? $message : ""; ?></textarea>
        </div>
        <br />
        <input type="submit" name="submit" class="btn btn-primary" /></button>
    </form>
</div> 
