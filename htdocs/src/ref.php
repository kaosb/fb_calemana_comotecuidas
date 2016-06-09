<?php
	if(isset($_GET['id'])){
		include("conexion.php");
		// Creamos una cookie valida por 1 hora con el id del referer.
		setcookie("puertaapuerta", $_GET['id'], time()+3600, '/', '.coddea.com');
		// Si marcamos al referer con un nuevo acceso, despues podriamos contrastar efectividad field open.
		$id = $_GET['id'];
		mysql_query("UPDATE participantes SET open=open+1 WHERE userID = '$id'", $link);
	}
	// redireccionamos a la aplicacion
	header('Location: https://www.facebook.com/toctoc.cl/app_248426285316008');
?>