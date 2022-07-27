<?php
 session_start();
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Nguyễn Vĩnh Hưng</title>
</head>

<body>
<?php
	if(isset($_REQUEST["dangnhap"]))
	{
		$mail=$_REQUEST["email"];
		$passw=$_REQUEST["pass"];
		if($_SESSION["mail"]== $mail && $_SESSION["passw"]== $passw)
		{
			echo "Đăng nhập thành công";
		}else
		{
			echo "Đăng nhập sai, đăng nhập lại !!!";
		}
	}
?>
</body>
</html>