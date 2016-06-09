<?php
if(isset($_POST['userID'])){
	include("conexion.php");
	$userID = $_POST['userID'];
	$flavor1 = $_POST['flavor1'];
	$flavor2 = $_POST['flavor2'];
	$flavor3 = $_POST['flavor3'];
	$topping = $_POST['topping'];
	$queryUpdate = "UPDATE participantes SET flavor1 = '$flavor1', flavor2 = '$flavor2', flavor3 = '$flavor3', topping = '$topping' WHERE userID = '$userID'";			
	if(mysql_query($queryUpdate,$link)){
		// insert exitoso
		echo json_encode(array("msj" => "Se actualizaron los datos de forma exitosa.", "cod" => "1"));
	}else{
		// algun error en la insert
		echo json_encode(array("msj" => "Ocurrio un problema al intentar actualizar los datos.", "cod" => "2", "query" => $queryUpdate));
	}
}else{
	// No indicaron datos a insertar
	echo json_encode(array("msj" => "No se indicaron los datos a actualizar", "cod" => "0"));
}
?>