<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Nguyễn Vĩnh Hưng</title>
</head>

<body>
	<?php session_start(); 
 
if (isset($_SESSION['username'])){
    unset($_SESSION['username']); // xóa session login
}
?>
<a href="trangchu.php">HOME</a>
</body>
</html>