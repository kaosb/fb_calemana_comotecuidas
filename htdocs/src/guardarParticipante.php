<?php
if(isset($_POST['userID'])){
	include("conexion.php");
	$userID = $_POST['userID'];
	$accessToken = $_POST['accessToken'];
	$first_name = mysql_real_escape_string($_POST['first_name']);
	$last_name = mysql_real_escape_string($_POST['last_name']);
	$name = mysql_real_escape_string($_POST['name']);
	if(isset($_POST['email'])){$email = $_POST['email'];}else{$email = "";}
	if(isset($_POST['terms'])){$terms = 1;}else{$terms = 0;}
	$flavor1 = $_POST['flavor1'];
	$flavor2 = $_POST['flavor2'];
	$flavor3 = $_POST['flavor3'];
	$topping = $_POST['topping'];
	$recipesrc = $_POST['recipesrc'];
	$queryInsert = "INSERT INTO participantes (userID, accessToken, first_name, last_name, name, email, terms, flavor1, flavor2, flavor3, topping, recipesrc)
					VALUES ('$userID', '$accessToken', '$first_name', '$last_name', '$name', '$email', '$terms', '$flavor1', '$flavor2', '$flavor3', '$topping', '$recipesrc')";
	if(mysql_query($queryInsert,$link)){
		// insert exitoso
		echo json_encode(array("msj" => "Se guardaron los datos de forma exitosa.", "cod" => "1"));
	}else{
		// algun error en la insert
		echo json_encode(array("msj" => "Ocurrio un problema al intentar guardar los datos.", "cod" => "2", "query" => $queryInsert));
	}
}else{
	// No indicaron datos a insertar
	echo json_encode(array("msj" => "No se indicaron los datos a insertar", "cod" => "0"));
}
?>