<?php 
// Create Connection
	$DB_HOST = 'localhost';
  $DB_USER = 'root';
$DB_NAME = 'database name';
$DB_PASS = 'password';


$query = "SELECT name, email, treatment, message FROM 'yourtable';

// Get Result
$result = mysqli_query($conn, $query);

// Fetch Data
$clients = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($clients);
