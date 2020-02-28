<?php 

error_reporting(0);
// Create Connection
	$DB_HOST = 'localhost';
  $DB_USER = 'singNowHow';
 $DB_NAME = 'hscs';
 $DB_PASS = '!web2*whyB^care37';

$query = 'SELECT * FROM testimonials';


// Get Result
$result = mysqli_query($conn, $query);

// Fetch Data
$clients = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($clients);
