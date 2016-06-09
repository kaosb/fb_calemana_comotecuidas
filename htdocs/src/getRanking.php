<?php
if(isset($_POST['userID'])){
	include("conexion.php");
	mysql_query("SET NAMES 'utf8'", $link);
	$userID = $_POST['userID'];
	$queryUsuario = mysql_query("select userID, name, puntaje, flavor1, flavor2, flavor3, topping from participantes where userID = '$userID'", $link);
	$queryRanking = mysql_query("select userID, name, puntaje, flavor1, flavor2, flavor3, topping from participantes where userID != '$userID' and status = 1 order by puntaje desc limit 6", $link);
	if(mysql_num_rows($queryUsuario) < 1 && mysql_num_rows($queryRanking) < 1){
		echo json_encode(array("code" => "0"));
	}else{
		while($row = mysql_fetch_assoc($queryRanking)) {
			$ranking[] = $row;
		}
		echo json_encode(array("code" => "1", "user" => mysql_fetch_assoc($queryUsuario), "ranking" => $ranking));
	}
}else{
	echo json_encode(array("code" => "2"));
}
?>