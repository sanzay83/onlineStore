<?php
    // Retrieve the uploaded image from the database
    $servername = "localhost";
  $username = "u778068254_onlineStore";
  $password = "onlineStore123!";
  $dbname = "u778068254_onlineStore";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    $result = $conn->query("SELECT image FROM images ORDER BY id DESC LIMIT 1");

    if ($result && $result->num_rows > 0) {
      $row = $result->fetch_assoc();
      $imageData = $row['image'];
      echo '<img src="data:image/jpeg;base64,' . base64_encode($imageData) . '" alt="Uploaded Image" style="max-width: 500px;">';
    } else {
      echo 'No image uploaded yet.';
    }

    $conn->close();
    ?>