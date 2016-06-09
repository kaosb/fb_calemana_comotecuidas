<?php	
	if(isset($_POST['img']) && isset($_POST['uid'])){
		$uid = $_POST['uid'];
		$data = $_POST['img'];
		$data = substr($data,strpos($data,",")+1);
		$data = base64_decode($data);
		$file = '../recipe/'.$uid.'.png';
		if(file_put_contents($file, $data)){
			echo json_encode(array("status" => "Success!", "data" => $file));
		}else{
			echo json_encode(array("status" => "Fail!"));
		}
	}else{
		echo json_encode(array("status" => "Lost!"));
	}
?>