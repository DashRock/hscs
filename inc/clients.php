
<?php
	error_reporting(0);
	
	$DB_HOST = 'localhost';
    $DB_USER = 'root';
    $DB_NAME = 'db_name';
    $DB_PASS = '!password';
		// Create Connection
	$conn = mysqli_connect($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);

	// Check Connection
	if(mysqli_connect_errno()){
		// Connection Failed
		echo 'Failed to connect to MySQL '. mysqli_connect_errno();
	}


	// Create Query
	$query = 'SELECT * FROM testimonials ORDER BY RAND() LIMIT 0, 4 ';

	// Get Result
	$result = mysqli_query($conn, $query);

	// Fetch Data
	$posts = mysqli_fetch_all($result, MYSQLI_ASSOC);
	//var_dump($posts);

	// Free Result
	mysqli_free_result($result);

	// Close Connection
	mysqli_close($conn);
?>
		   


    <?php foreach ($posts as $post) : ?>
    <table class='client-tstmnl'>
        <tr><td class='cName'> <?php echo $post['name']; ?></td></tr>
		    <tr><td class='cEmail'><?php echo $post['email']; ?> </td></tr>
		    <tr><td class='cTrtmnt'><?php echo $post['treatment'] ; ?></td></tr>
		    <tr><td class='cReview'><?php echo $post['message']; ?> </td></tr></table>
		 <?php endforeach; ?>
		 
		
	

