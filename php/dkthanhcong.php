<?php
 session_start();
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Nguyễn Vĩnh Hưng</title>
</head>

<body>
<?php
	if(isset($_REQUEST["fsub"]))
	{
		echo "Họ và tên: ".$_REQUEST["ten"]."<br>";
		echo "Địa chỉ: ".$_REQUEST["diachi"]."<br>";
		echo "Số điện thoại: ".$_REQUEST["sdt"]."<br>";
		echo "Email: ".$_REQUEST["email"]."<br>";
		echo "Giới tính: ".$_REQUEST["gtinh"]."<br>";
		
		
		
		$_SESSION["mail"] = $_REQUEST["email"];
		$_SESSION["passw"] = $_REQUEST["pass"];
	
		echo header("refresh:0; url=dangnhap.php");
	}
?>
</body>
</html>