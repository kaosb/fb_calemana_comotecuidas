<?php
if(isset($_POST['uid'])){
	include("conexion.php");
	$uid = $_POST['uid'];
	$query = "select * from participantes where userID = '$uid'";
	mysql_query("SET NAMES 'utf8'", $link);
	$queryExiste = mysql_query($query, $link);
	$contadorExiste = mysql_num_rows($queryExiste);
	if($contadorExiste < 1){
		echo json_encode(array("code" => "0"));
	}else{
		echo json_encode(array("code" => "1", "data" => mysql_fetch_assoc($queryExiste)));
	}
}else{
	echo json_encode(array("code" => "2"));
}
?>