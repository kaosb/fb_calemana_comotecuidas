<?php
	if(isset($_POST['action'])){
		include("connection.php");
		if($_POST['action'] == 'save'){
			if(isset($_POST['userID']) && isset($_POST['accessToken']) && isset($_POST['first_name']) && isset($_POST['last_name']) && isset($_POST['name']) && isset($_POST['words']) && isset($_POST['template']) && isset($_POST['origin']) && isset($_POST['post_id'])){
				$userID = $_POST['userID'];
				$accessToken = $_POST['accessToken'];
				$first_name = mysqli_real_escape_string($link, $_POST['first_name']);
				$last_name = mysqli_real_escape_string($link, $_POST['last_name']);
				$name = mysqli_real_escape_string($link, $_POST['name']);
				if(isset($_POST['email'])){$email = $_POST['email'];}else{$email = "";}
				$words = mysqli_real_escape_string($link, $_POST['words']);
				$template = $_POST['template'];
				$origin = $_POST['origin'];
				$post_id = $_POST['post_id'];
				$queryInsert = "INSERT INTO participantes (userID, accessToken, first_name, last_name, name, email, words, template, origin, post_id) VALUES ('$userID', '$accessToken', '$first_name', '$last_name', '$name', '$email', '$words', '$template', '$origin', '$post_id')";
				// $queryInsert = mysqli_real_escape_string($link, $queryInsert);
				if(mysqli_real_query($link, $queryInsert)){
					// insert exitoso
					echo json_encode(array("status" => true, "msj" => "Se guardaron los datos de forma exitosa."));
				}else{
					// algun error en la insert
					echo json_encode(array("status" => false, "msj" => "Ocurrio un problema al intentar guardar los datos.", "cod" => "2", "query" => $queryInsert));
				}
			}else{
				// Parametros insuficientes.
				echo json_encode(array("status" => false, "msj" => "Parametros insuficientes para ejecutar la accion solicitada."));
			}
		}else if($_POST['action'] == 'update'){
			// $userID = $_POST['userID'];
			// $flavor1 = $_POST['flavor1'];
			// $flavor2 = $_POST['flavor2'];
			// $flavor3 = $_POST['flavor3'];
			// $topping = $_POST['topping'];
			// $queryUpdate = "UPDATE participantes SET flavor1 = '$flavor1', flavor2 = '$flavor2', flavor3 = '$flavor3', topping = '$topping' WHERE userID = '$userID'";
			// if(mysql_query($queryUpdate,$link)){
			// 	// insert exitoso
			// 	echo json_encode(array("msj" => "Se actualizaron los datos de forma exitosa.", "cod" => "1"));
			// }else{
			// 	// algun error en la insert
			// 	echo json_encode(array("msj" => "Ocurrio un problema al intentar actualizar los datos.", "cod" => "2", "query" => $queryUpdate));
			// }
			// // Parametros insuficientes.
			echo json_encode(array("status" => false, "msj" => "Parametros insuficientes para ejecutar la accion solicitada."));
		}else{
			// La accion no existe.
			echo json_encode(array("status" => false, "msj" => "La accion solicitada no existe."));
		}
	}else{
		// No se indico la accion.
		echo json_encode(array("status" => false, "msj" => "No se indico la accion."));
	}
?>