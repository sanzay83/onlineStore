<?php
$directory = "./images/shoes/*";
$datalist = glob($directory);
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link rel="stylesheet" href="./styles/main.css" />
</head>

<body>
  <div id="myModal" class="modal">
    <span class="close">&times;</span>
    <div class="modal-content" id="imgId">
    </div>
  </div>
  <div class="grid-container">
    <div id="header-contents" class="item1"></div>
    <div id="body-contents" class="item2"></div>
    <div id="footer-contents" class="item3"></div>
  </div>


  <script>
    data = "";
    more = <?php echo json_encode($datalist); ?>;

    data += `<div class="card-container">
  <div class="card-title">Shoes Collection</div>
  <div class="grid-container-card">`;
    for (i = 0; i < more.length; i++) {
      data += `<div class="card">
        <img onclick="imageModal('${more[i]}')"
          src="${more[i]}"
          alt="Avatar"
          style="width: 100%"
        />Code #${i}
      </div>`;
    }
    data += `</div></div>`;
    var more = <?php echo json_encode($datalist); ?>;

    document.getElementById("body-contents").innerHTML = data;
  </script>
  <script src="../JScripts/header.js"></script>
  <script src="../JScripts/footer.js"></script>
  <script src="./JScripts/route.js"></script>
  <script src="./JScripts/modal.js"></script>
</body>

</html>