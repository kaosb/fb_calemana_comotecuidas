<?php
if(isset($_POST['userID'])){
	include("connection.php");
	$userID = $_POST['userID'];
	$query = "select * from participant where userID = '$userID'";

	$queryExiste = mysqli_real_query($link, $query);
	$contadorExiste = mysqli_num_rows($queryExiste);
	if($contadorExiste < 1){
		echo json_encode(array("status" => true, "msj" => "El usuario no a participado anteriormente."));
	}else{
		echo json_encode(array("status" => false, "msj" => "El usuario ya habia participado.", "data" => mysqli_fetch_assoc($queryExiste)));
	}
}else{
	echo json_encode(array("status" => false, "msj" => "Parametros insuficientes para ejecutar la accion solicitada."));
}
?>