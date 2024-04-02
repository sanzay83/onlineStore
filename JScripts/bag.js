function BagsContent() {
  document.getElementById("full-content").style.display = "none";
  document.getElementById("mobile-content").style.display = "none";
  data = `<div class="card-container">
  <div class="card-title">Bags Collection</div>
  <div class="grid-container-card">`;
  for (i = 1; i < 5; i++) {
    data += `<div class="card">
        <img onclick="imageModal('./images/bags/bag${i}.jpg')"
          src="./images/bags/bag${i}.jpg"
          alt="Avatar"
          style="width: 100%"
        />
        <p>Code #${i}</p>
      </div>`;
  }
  data += `</div></div>`;
  php = `<?php 
  define('DB_SERVER', 'localhost');
   define('DB_USERNAME', 'u778068254_onlineStore');
   define('DB_PASSWORD', 'onlineStore123!');
   define('DB_DATABASE', 'u778068254_onlineStore');
   $db = mysqli_connect(DB_SERVER,DB_USERNAME,DB_PASSWORD,DB_DATABASE);

  $result = mysqli_query($db,"SELECT image FROM images ORDER BY id DESC LIMIT 1");

  if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $imageData = $row['image'];
    echo '<img src="data:image/jpeg;base64,' . base64_encode($imageData) . '" alt="Uploaded Image" style="max-width: 500px;">';
  } else {
    echo 'No image uploaded yet.';
  }
  
  ?>`;
  document.getElementById("body-contents").innerHTML = data;
}
