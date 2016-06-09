<?php
try{
	if(isset($_POST['token']) && isset($_POST['url'])){
		require 'fb/facebook.php';
		$facebook = new Facebook(array(
			'appId' => '248426285316008',
			'secret' => '661a35ba5056c1d2d8204bf59f9b92f1',
			'cookie' => true
			));
		if(isset($_POST['token'])){
				$wallpost = $facebook->api("/me/feed", "post", array(
					'access_token' => $_POST['token'],
				    'picture' => "https://fbcdn-photos-d-a.akamaihd.net/hphotos-ak-prn1/851584_248426835315953_717266067_n.png",
				    'link' => $_POST['url'],
				    'message' => "Ayudame a ganar un iPad mini con toctoc.com, hazte fan siguiendo este link ".$_POST['url'].".",
				    'name' => "TocToc.com",
					'description' => "Tu tambien puedes participar."
				));
		}
		echo json_encode(array("msj" => "OK", "response" => $wallpost));
	}else{
		echo json_encode(array("msj" => "Falto indicar la imagen"));
	}
}catch(Exception $e){
	echo json_encode(array("msj" => "OK", "response" => "ble"));
}
?>