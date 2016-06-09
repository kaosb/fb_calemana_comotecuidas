<?php
	include("conexion.php");
	if(isset($_POST['ref']) && !empty($_POST['ref']) && $_POST['ref'] != 'undefined' && isset($_COOKIE['heladerocl']) && $_COOKIE['heladerocl'] != $_POST['userID']){
		// En vaso de tener la cookie y estar referido busco a mi amigo para votar por el.
		$ref = $_POST['ref'];
		$result = mysql_query( " SELECT * FROM participantes WHERE userID = $ref", $link);
		if(!$result){
			die('Invalid query: ' . mysql_error());
		}
		echo json_encode(mysql_fetch_object($result));
	}else{
		// En caso de tratarse de un usuario sin la cookie eso quiere decir que no viene referido, o que podria ya haber votado.
		$exclude = (isset($_POST['userID']) && !empty($_POST['userID']) && $_POST['userID'] != 'undefined') ? $_POST['userID'] : '' ;
		$exclude = (isset($_POST['ref']) && !empty($_POST['ref']) && $_POST['ref'] != 'undefined') ? $exclude.", ".$_POST['ref'] : $exclude ;
		$exclude = (isset($_COOKIE['heladerorefvotecl']) && !empty($_COOKIE['heladerorefvotecl'])) ? $exclude.", ".$_COOKIE['heladerorefvotecl'] : $exclude ;
		// Opcion 1
		$offset_result = mysql_query( " SELECT FLOOR(RAND() * COUNT(*)) AS offset FROM participantes ", $link);
		$offset_row = mysql_fetch_object( $offset_result ); 
		$offset = $offset_row->offset;
		$result = mysql_query( " SELECT * FROM participantes WHERE userID NOT IN ($exclude) LIMIT $offset, 1 ", $link);
		// Opcion 2
		// $result = mysql_query("SELECT * FROM participantes WHERE id >= (SELECT FLOOR( MAX(id) * RAND()) FROM participantes ) ORDER BY id LIMIT 1", $link);
		// Opcion 3
		// $result = mysql_query("SELECT * FROM participantes ORDER BY RAND() LIMIT 1", $link);
		// Opcion 4
		// $max = mysql_fetch_object(mysql_query("SELECT COUNT(*) AS max FROM participantes", $link))->max;
		// $rand = rand(25, $max);
		// $query = " SELECT * FROM participantes WHERE id = $rand and userID NOT IN ($exclude) ";
		// $result = mysql_query($query, $link);
		if (!$result) {
			die('Invalid query: ' . mysql_error());
		}
		echo json_encode(mysql_fetch_object($result));
	}
	mysql_free_result($result);
	mysql_close($link);
?>
