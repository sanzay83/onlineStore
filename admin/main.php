<?php
   include('session.php');
   
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>


  <form action="upload.php" method="post" enctype="multipart/form-data">
      <input type="file" name="image" accept="image/*" />
      <input type="submit" value="Upload" />
  </form> 
  <?php 
  if (isset($_FILES["image"]) && $_FILES["image"]["error"] == 0) {
    $image = $_FILES['image']['tmp_name'];
    $imgContent = file_get_contents($image);

    // Insert image data into database as BLOB
    $sql = "INSERT INTO images(image) VALUES(?)";
    $statement = $conn->prepare($sql);
    $statement->bind_param('s', $imgContent);
    $current_id = $statement->execute() or die("<b>Error:</b> Problem on Image Insert<br/>" . mysqli_connect_error());

    if ($current_id) {
        echo "Image uploaded successfully.";
    } else {
        echo "Image upload failed, please try again.";
    }
} else {
    echo "Please select an image file to upload.";
}
  ?>

<?php 

  $result = mysqli_query($db,"SELECT image FROM images ORDER BY id DESC LIMIT 1");

  if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $imageData = $row['image'];
    echo '<img src="data:image/jpeg;base64,' . base64_encode($imageData) . '" alt="Uploaded Image" style="max-width: 500px;">';
  } else {
    echo 'No image uploaded yet.';
  }
  
  ?>
</body>
</html>