<?php
include("config.php");
session_start();

// Make connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection and throw error if not available
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if($_SERVER["REQUEST_METHOD"] == "POST") {
  $username = mysqli_real_escape_string($db,$_POST['username']);
  $password = mysqli_real_escape_string($db,$_POST['password']); 
  console.log($username, $password);

  $sql = "SELECT `username`, `password` FROM `Admin_Database` WHERE username='$username'AND password='$password'";
  $result = $db->query($sql);
  console.log($result)

  if($result->num_rows > 0) {
    echo("You are logged in! Welcome,", $username)
  }
}
?>