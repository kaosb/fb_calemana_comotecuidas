<?php
include("conexion.php");
$offset_result = mysql_query( " SELECT FLOOR(RAND() * COUNT(*)) AS offset FROM participantes ", $link);
$offset_row = mysql_fetch_object( $offset_result ); 
$offset = $offset_row->offset;
$result = mysql_query( " SELECT * FROM participantes LIMIT $offset, 1 ", $link);
if($result){
	echo json_encode(mysql_fetch_object($result));
}else{
	echo json_encode("error");
	die(mysql_error());
}
?>