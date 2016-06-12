<?php	
	if(isset($_POST['img']) && isset($_POST['userID'])){
		$userID = $_POST['userID'];
		$data = $_POST['img'];
		$data = substr($data,strpos($data,",")+1);
		$data = base64_decode($data);
		$file = '../cartel/'.$userID.'.png';
		if(file_put_contents($file, $data)){
			$file_name_array = explode("/", $file);
			$file_name = $file_name_array[2];
			$file_url = "https://coddea.com/proyectos/fb_calemana_comotecuidas/cartel/".$file_name;
			echo json_encode(array("status" => true, "msj" => "Se guardo la imagen.", "file_name" => $file_name, "file_url" => $file_url));
		}else{
			echo json_encode(array("status" => false, "msj" => "No fue posible guardar la imagen."));
		}
	}else{
		echo json_encode(array("status" => false, "msj" => "Datos insuficientes."));
	}
?>