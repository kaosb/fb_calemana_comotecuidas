<?php
if(isset($_POST['userID'])){
	include("conexion.php");
	$userID = $_POST['userID'];
	$queryUpdate = "UPDATE participantes SET puntaje=puntaje+1 WHERE userID = '$userID'";
	if(mysql_query($queryUpdate, $link)){
		// update exitoso
		echo json_encode(array("msj" => "Se actualizo el puntaje de forma exitosa.", "cod" => "1"));
	}else{
		// algun error en el update
		echo json_encode(array("msj" => "Ocurrio un problema al actualizar el puntaje.", "cod" => "2", "query" => $queryInsert));
	}
}else{
	// No indicaron datos a actualizar
	echo json_encode(array("msj" => "No se indicaron los datos a insertar", "cod" => "0"));
}
?>