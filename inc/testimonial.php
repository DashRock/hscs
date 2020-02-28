
<?php
    error_reporting(0);
		define('ROOT_URL', '');
	$DB_HOST = 'localhost';
    $DB_USER = 'root';
    $DB_NAME = 'database name';
    $DB_PASS = 'password';
		// Create Connection
	$conn = mysqli_connect($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

	// Check Connection
	if(mysqli_connect_errno()){
		// Connection Failed
		echo 'Failed to connect to MySQL '. mysqli_connect_errno();
	}

	// Check For Submit
	if(isset($_POST['submit'])){
		// Get form data
		$name = mysqli_real_escape_string($conn, $_POST['name']);
		$email = mysqli_real_escape_string($conn,$_POST['email']);
		$treatment = mysqli_real_escape_string($conn, $_POST['treatment']);
		$message = mysqli_real_escape_string($conn,$_POST['message']);
		
		

		$query = "INSERT INTO testimonials(name, email, treatment, message) VALUES('$name', '$email', '$treatment', '$message')";

		if(mysqli_query($conn, $query)){
		    $name ='';
		    $email = '';
		    $treatment = '';
		    $message = '';
			header('Location: '.ROOT_URL.'');
		} else {
			echo 'ERROR: '. mysqli_error($conn);
		}
	}

?>

<div class="container-form tstmnls">
<h1 class="form-title">Testimonial</h1>
    <?php if($msg != ""); ?>
        <div class="alert <?php echo $msgClass; ?>">
        <?php echo $msg; ?></div>
    <form id="tstmnlForm" method="post" acton="<?php $_SERVER['PHP_SELF']; ?>; ?>">
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
        <input type="submit" name="submit" class="btn btn-primary"  value="Submit" /></button>
    </form>
</div>    

