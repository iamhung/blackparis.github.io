<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>ĐĂNG KÝ</title>
</head>

<body>
<table>
<form action="dkthanhcong.php" method="post">
	<th colspan="2">THÔNG TIN ĐĂNG KÍ</th>
    <tr>
    	<td colspan="2">Thông tin tài khoản</td>
    </tr>
    <tr>
    	<td>Email: </td>
        <td><input type="email" name="email"></td>
    </tr>
    <tr>
    	<td>Password: </td>
        <td><input type="password" name="pass"></td>
    </tr>
    <tr>
    	<td>Nhập lại password: </td>
        <td><input type="password" name="repass"></td>
    </tr>
    <tr>
    	<td colspan="2">Thông tin cá nhân</td>
    </tr>
    <tr>
    	<td>Họ và tên: </td>
        <td><input type="text" name="ten"></td>
    </tr>
    <tr>
    	<td>Địa chỉ: </td>
        <td><input type="text" name="diachi"></td>
    </tr>
    <tr>
    	<td>Điện thoại: </td>
        <td><input type="text" name="sdt"></td>
    </tr>
    <tr>
    	<td>Giới tính: </td>
        <td>
        	<input type="radio" name="gtinh" value="Nam">Nam
            <input type="radio" name="gtinh" value="Nữ">Nữ
        </td>
    </tr>
    <tr>
    	<td colspan="2">
        	<input type="submit" name="fsub" value="Đăng Ký">
            <input type="reset" value="Nhập Lại">
        </td>
    </tr>
</form>
</table>
</body>
</html>