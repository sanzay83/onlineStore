<?php
   include("config.php");
   session_start();
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      // username and password sent from form 
      
      $myusername = mysqli_real_escape_string($db,$_POST['username']);
      $mypassword = mysqli_real_escape_string($db,$_POST['password']); 
      
      $sql =  "SELECT username, password FROM Admin_Database WHERE username='$myusername' and password = '$mypassword'";
      $result = mysqli_query($db,$sql);
      $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
      $active = $row['active'];
      
      $count = mysqli_num_rows($result);
      
      // If result matched $myusername and $mypassword, table row must be 1 row
	    
      if($count == 1) {
         $_SESSION['login_user'] = $myusername;
         header("location: main.php");
      }else {
         $error = "Your Login Name or Password is invalid";
      }
   }
?>

<!doctype html>
<html lang="en">
<head>
	<title>Admin Login</title>
	<meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="bg">
        <form class="modal-content animate" action="" method="post">
            <div class="container">
            <H1>LOGIN</H1>
            <label for="username"><b>Username</b></label><br>
            <input type="text" placeholder="Enter admin ID" name="username" required><br>
            <label for="password"><b>Password</b></label><br>
            <input type="password" placeholder="Enter Password" name="password" required><br><br>
            <button type="submit" value="Submit">Login</button><br>
            <label><input type="checkbox" checked="checked" name="checkbox" id="ckbox"> Remember Me</label><br>
            </div>
        </form>
    </div>
</body>
</html>