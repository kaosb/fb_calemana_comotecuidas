<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
		<title>Clínica Alemana - ¿Como te cuidas?</title>
		<!-- Fonts -->
		<link href='https://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=PT+Sans:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
		<!-- fuentes especiales -->
		<link href='https://fonts.googleapis.com/css?family=Quicksand:400,700,300' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Great+Vibes' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=BenchNine:400,300,700' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Lobster+Two:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Pathway+Gothic+One' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Cinzel:400,700,900' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Nixie+One' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Cookie' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Dancing+Script:400,700' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Six+Caps' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Pathway+Gothic+One' rel='stylesheet' type='text/css'>
		<link href='https://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'>
		<!-- Bootstrap -->
		<link href="assets/css/style.css" rel="stylesheet">
		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body>
	<!-- se agrega esta clase en el paso 2 para esconder la imagen de la app solo en ese paso -->
		<h1 id="fb-welcome" style="display: none;"></h1>
		<!-- BG LIGHTBOX (ALERTA) -->
		<div id="alert" class="bg-lightbox" style="display: none;">
			<!-- alerta -->
			<div class="box-alert">
				<div class="inner-alert text-center">
					<a class="close-alert" href="#">
						<span class="glyphicon glyphicon-remove"></span>
					</a>
					<p class="message">Debes usar entre 7 y 10 palabras</p>
				</div>
			</div>
			<!-- fin alerta -->
		</div>
		<!-- fin BG LIGHTBOX -->
		<div class="container">
			<div class="row">
				<div class="col-md-8 col-md-offset-2 col-sm-12 square-content-app">
					<!-- CONTENEDOR APP -->
					<div id="app-bg" class="app-bg">
						<span class="square-bg top-left"></span>
						<span class="square-bg bottom-left"></span>
						<span class="square-bg top-right"></span>
						<span class="square-bg bottom-right"></span>
						<!-- LOGO CONCURSO -->
						<img class="feat-image" src="assets/img/llamado-copia.png">
						<!-- contenedor mensaje -->
						<!-- PASO 0 -->
						<div id="step_0" class="content-message text-center" style="display: none;">
							<p class="advice-msg">Hazte fan de la Clínica Alemana en Facebook,
							<br>
							comparte tu mejor consejo de salud
							<br>
							y participa por una de las 6 gift card de $50.000</p>

						</div>
						<!-- FIN PASO 0 -->
						<!-- PASO 1 -->
						<div id="step_1" class="content-message text-center" style="">
							<p class="advice-msg">Escribe tu mejor consejo de salud usando entre 7 y 10 palabras</p>
							<form>
								<div class="form-group">
									<label for="text_post_content" style="display: none">Llena con tu frase</label>
									<input type="text" class="form-control" id="text_post_content" placeholder="">
								</div>
								<div class="form-group">
									<div class="text-center">
										<button id="btnstep1" type="submit" class="btn btn-lg btn-default">Siguiente</button>
									</div>
								</div>
							</form>
						</div>
						<!-- FIN PASO 1 -->
						<!-- PASO 2 -->
						<div id="step_2"  style="display: none;">
							<div class="boxes-style-color">
								<!-- caja principal elegida -->
								<!-- TEMA 1 -->
								<div id="big_box_msg_1" class="box-msg-1 box-featured" template="1" style="">
									<span id="big_line_01_01" class="line-span1"><span class="span-title-1"></span><span class="span-title-text">Riéndome</span><span class="span-title-2"></span></span>
									<span id="big_line_02_01" class="line-span2">Disfrutando</span>
									<span id="big_line_03_01" class="line-span3">y regaloneando con mi <span id="big_last_word_03_01" class="last-word-line">familia</span></span>
									<span class="logos-box-min">
										<img class="hashtag-10-p-min" src="assets/img/post-image-bg/como-te-cuidas-min.png">
										<img class="logo-clinica-min" src="assets/img/post-image-bg/logo-alemana-min.png">
									</span>
									<span class="corners">
										<span class="c-top-left"></span>
										<span class="c-top-right"></span>
										<span class="c-bottom-left"></span>
										<span class="c-bottom-right"></span>
									</span>
								</div>
								<!-- TEMA 2 -->
								<div id="big_box_msg_2" class="box-msg-2 box-featured" template="2" style="display: none;">
									<span id="big_line_01_02" class="line-span1"><span class="span-title-1"></span><span class="span-title-text">Riéndome</span><span class="span-title-2"></span></span>
									<span id="big_line_02_02" class="line-span2">Disfrutando</span>
									<span id="big_line_03_02" class="line-span3">y regaloneando con mi <span id="big_last_word_03_02" class="last-word-line">familia</span></span>
									<span class="logos-box-min">
										<img class="hashtag-10-p-min" src="assets/img/post-image-bg/como-te-cuidas-min.png">
										<img class="logo-clinica-min" src="assets/img/post-image-bg/logo-alemana-min.png">
									</span>
									<span class="corners">
										<span class="c-top-left"></span>
										<span class="c-top-right"></span>
										<span class="c-bottom-left"></span>
										<span class="c-bottom-right"></span>
									</span>
								</div>
								<!-- TEMA 3 -->
								<div id="big_box_msg_3" class="box-msg-3 box-featured" template="3" style="display: none;">
									<span id="big_line_01_03" class="line-span1">Riéndome</span>
									<span id="big_line_02_03" class="line-span2">Disfrutando</span>
									<span id="big_line_03_03" class="line-span3"><span class="span-title-1"></span><span class="span-title-text">y regaloneando con mi</span><span class="span-title-2"></span>  <span id="big_last_word_03_03" class="last-word-line">familia</span></span>
									<span class="logos-box-min">
										<img class="hashtag-10-p-min" src="assets/img/post-image-bg/como-te-cuidas-min.png">
										<img class="logo-clinica-min" src="assets/img/post-image-bg/logo-alemana-min.png">
									</span>
									<span class="corners">
										<span class="c-top-left"></span>
										<span class="c-top-right"></span>
										<span class="c-bottom-left"></span>
										<span class="c-bottom-right"></span>
									</span>
								</div>
								<!-- TEMA 4 -->
								<div id="big_box_msg_4" class="box-msg-4 box-featured" template="4" style="display: none;">
									<span id="big_line_01_03" class="line-span1">Riéndome</span>
									<span id="big_line_02_03" class="line-span2">Disfrutando</span>
									<span id="big_line_03_03" class="line-span3"><span class="span-title-1"></span><span class="span-title-text">y regaloneando con mi</span><span class="span-title-2"></span>  <span id="big_last_word_03_04" class="last-word-line">familia</span></span>
									<span class="logos-box-min">
										<img class="hashtag-10-p-min" src="assets/img/post-image-bg/como-te-cuidas-min.png">
										<img class="logo-clinica-min" src="assets/img/post-image-bg/logo-alemana-min.png">
									</span>
									<span class="corners">
										<span class="c-top-left"></span>
										<span class="c-top-right"></span>
										<span class="c-bottom-left"></span>
										<span class="c-bottom-right"></span>
									</span>
								</div>
								<!-- TEMA 5 -->
								<div id="big_box_msg_5" class="box-msg-5 box-featured" template="5" style="display: none;">
									<span id="big_line_01_05" class="line-span1">Riéndome</span>
									<span id="big_line_02_05" class="line-span2">Disfrutando</span>
									<span id="big_line_03_05" class="line-span3"><span class="span-title-1"></span><span class="span-title-text">y regaloneando con mi</span><span class="span-title-2"></span><span id="big_last_word_03_05" class="last-word-line">familia</span></span>
									<span class="logos-box-min">
										<img class="hashtag-10-p-min" src="assets/img/post-image-bg/como-te-cuidas-min.png">
										<img class="logo-clinica-min" src="assets/img/post-image-bg/logo-alemana-min.png">
									</span>
									<span class="corners">
										<span class="c-top-left"></span>
										<span class="c-top-right"></span>
										<span class="c-bottom-left"></span>
										<span class="c-bottom-right"></span>
									</span>
								</div>
								<!-- TEMA 6 -->
								<div id="big_box_msg_6" class="box-msg-6 box-featured" template="6" style="display: none;">
									<span id="big_line_01_06" class="line-span1">Riéndome</span>
									<span id="big_line_02_06" class="line-span2">Disfrutando</span>
									<span id="big_line_03_06" class="line-span3">y regaloneando con mi<span id="big_last_word_03_06" class="last-word-line"><span class="span-title-1"></span>familia<span class="span-title-2"></span></span></span>
									<span class="logos-box-min">
										<img class="hashtag-10-p-min" src="assets/img/post-image-bg/como-te-cuidas-min.png">
										<img class="logo-clinica-min" src="assets/img/post-image-bg/logo-alemana-min.png">
									</span>
									<span class="corners">
										<span class="c-top-left"></span>
										<span class="c-top-right"></span>
										<span class="c-bottom-left"></span>
										<span class="c-bottom-right"></span>
									</span>
								</div>
								<!-- fin caja principal elegida -->
								<p class="select-design">Selecciona un diseño</p>
								<div class="row row-little-boxes">
									<!-- TEMA 1 rojo -->
									<div class="col-md-2 col-sm-2 col-xs-2">
										<a href="#" id="box_msg_1" class="box-msg-1 box-mini">
											<img src="assets/img/post-image-bg/button-1.png">
										</a>
									</div>
									<!-- TEMA 2 morado -->
									<div class="col-md-2 col-sm-2 col-xs-2">
										<a href="#" id="box_msg_2" class="box-msg-2 box-mini">
											<img src="assets/img/post-image-bg/button-3.png">
										</a>
									</div>
									<!-- TEMA 3 naranjo -->
									<div class="col-md-2 col-sm-2 col-xs-2">
										<a href="#" id="box_msg_3" class="box-msg-3 box-mini">
											<img src="assets/img/post-image-bg/button-2.png">
										</a>
									</div>
									<!-- TEMA 4 verde agua -->
									<div class="col-md-2 col-sm-2 col-xs-2">
										<a href="#" id="box_msg_4" class="box-msg-4 box-mini">
											<img src="assets/img/post-image-bg/button-4.png">
										</a>
									</div>
									<!-- TEMA 5 verde limon -->
									<div class="col-md-2 col-sm-2 col-xs-2">
										<a href="#" id="box_msg_5" class="box-msg-5 box-mini">
											<img src="assets/img/post-image-bg/button-5.png">
										</a>
									</div>
									<!-- TEMA 6 -->
									<div class="col-md-2 col-sm-2 col-xs-2">
										<a href="#" id="box_msg_6" class="box-msg-6 box-mini">
											<img src="assets/img/post-image-bg/button-6.png">
										</a>
									</div>
								</div>
								<div class="button-select">
									<a id="btnstep2_back" class="btn btn-lg btn-default">Volver</a> <a id="btnstep2_share" class="btn btn-lg btn-default">Compartir</a>
								</div>
							</div>
						</div>
						<!-- fin PASO 2 -->
						<!-- PASO 3 -->
						<div id="step_3" class="content-message text-center" style="display: none;">
							<h1 class="title-advice-msg">¡Listo!</h1>
							<p class="advice-msg">Compartiste tu consejo de salud y ya estás participando
							<br>por una de las 6 gift card de $50.000
							<br>con Clínica Alemana en Facebook.
							<br>Recuerda hacer “me gusta” en nuestro fanpage para participar.</p>
						</div>
						<!-- FIN PASO 3 -->
						<!-- fin contendor mensaje -->
						<!-- LOGOS FOOTER -->
						<div class="logos-footer cf clearfix">
							<a href="#" class="hashtag-10-p">
								<img src="assets/img/como-te-cuidas.png">
							</a>
							<a class="logo-clinica" href="https://portal.alemana.cl/wps/wcm/connect/internet/home">
								<img src="assets/img/logo-alemana.png">
							</a>
						</div>
						<!-- fin LOGOS FOOTER -->
					</div>
					<!-- fin CONTENEDOR APP -->
				</div>
			</div>
		</div>
		<script src="js/jquery.min.js"></script>
		<script src="js/html2canvas.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/countable.js"></script>
		<script type="text/javascript">
			/******************************************** Objeto Global para almacenar informacion del usuario */
			$.userdata = {};
			// Scripts de Facebook.
			window.fbAsyncInit = function() {
				FB.init({
					appId      : '287403201596704',
					xfbml      : true,
					version    : 'v2.6'
				});

				// Get estado login.
				FB.getLoginStatus(function(response) {
					// Check login status on load, and if the user is
					// already logged in, go directly to the welcome message.
					if(response.status == 'connected'){
						console.log(response);
						$.userdata.userID = response.authResponse.userID;
					}else{
						// Otherwise, show Login dialog first.
						FB.login(function(response) {
							console.log(response);
						}, {scope: 'publish_actions, email'});
					}
				});
				/******** Al ingresar verificamos si ya inicio sesion o la iniciamos. */
				// FB.getLoginStatus(function(response){
				// 	if(response.status === 'connected'){
						
				// 	}else if (response.status === 'not_authorized'){
				// 		console.log("not_authorized");
				// 		// Logeado pero no autorizo a la app.
				// 		console.log("No dio permiso.");
				// 		// getLogin();
				// 	}else{
				// 		// No logeado
				// 		console.log("No logeado.");
				// 		// getLogin();
				// 	}
				// },{scope: 'email, publish_actions'});

			};
			(function(d, s, id){
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) {return;}
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/es_ES/sdk.js";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));

			// cuando se termina de cargar el DOM
			$(document).ready(function(){
				console.log($.userdata);
				/******************* Bindeo permanente de actividad en el elementos de la interfaz */
				// Bind boton ver bases.
				$('.btnbases').bind('click', function(event){
					event.preventDefault();
					verBases();
				});
				// Bind boton hashtag.
				$('.hashtag-10-p').click(function(event){
					event.preventDefault();
					verHashtag();
				});
				// Bind boton logo alemana.
				$('.logo-clinica').click(function(event){
					event.preventDefault();
					verCAlemana();
				});
				// Bind textarea activity.
				$('#text_post_content').focus(function(){
					// bind counter
					Countable.live(document.getElementById('text_post_content'), function(counter){
						$.userdata.words_counter = counter;
					});
				});
				/******************* PASO 1 */
				$('#btnstep1').click(function(event){
					event.preventDefault();
					// Bindeo el selector de themas
					$('.box-mini').click(function(event){
						event.preventDefault();
						// Ocultamos los preview
						$('.box-featured').hide();
						$('#big_'+$(this).attr('id')).show();
						// Construyo el cartel.
						buildCartel($.userdata.palabras);
					});
					// Verifico que la cantidad de palabras sea entre 7 y 10 palabras.
					if($.userdata.hasOwnProperty("words_counter") && $.userdata.words_counter.words >= 7 && $.userdata.words_counter.words <= 10){
						$('#step_1').hide();
						$('body').addClass("step-2-bg");
						$('#step_2').show();
						// Guardo el array de palabras en el objeto global.
						$.userdata.palabras = $('#text_post_content').val().split(' ');;
						// Guardo el identificador del tema por defecto.
						$.userdata.template = 1
						// Construyo el cartel.
						buildCartel($.userdata.palabras);
					}else{
						$('#alert').fadeIn();
						$('a.close-alert').click(function(event){
							event.preventDefault();
							$('#alert').fadeOut();
						});
					}
				});
				/******************* PASO 2 */
				$('#btnstep2_back').click(function(event){
					event.preventDefault();
					$('#step_2').hide();
					$('body').removeClass("step-2-bg");
					$('#step_1').show();
				});
				/******************* PASO 3 */
				$('#btnstep2_share').click(function(event){
					event.preventDefault();
					html2canvas($('#big_box_msg_'+$.userdata.template), {
						onrendered: function(canvas) {
							var dataURL = canvas.toDataURL("image/png");
							//var WindowObjectReference = window.open(dataURL, "share_img", '_blank');
/* Curso normal */
				var onlyData = dataURL.substring(dataURL.indexOf(',')+1);
				var decoded = atob(onlyData);
				var dl = decoded.length;
				var buffer = new Uint8Array(dl);
				for (var i = 0; i < dl; i++) {
					buffer[i] = decoded.charCodeAt(i);
				};
				var blob = new Blob([buffer], {type: 'image/png'});
				var formData = new FormData();
				formData.append('source', blob);
				formData.append('caption', 'Comparte tu consejo de salud y participa por una de las 6 gift card de $50.000 con Clínica Alemana. #ble');
				FB.api('/me/photos', 'POST', formData, function(resp) {
					console.log('into function');
					if (resp && !resp.error) {
						console.log('uploaded');
						console.log(resp);
					} else {
						console.log('some error');
						console.log(resp.error);
					};
				});
/* Curso normal */
							$('#step_2').hide();
							$('body').removeClass("step-2-bg");
							$('#step_3').show();
						}
					});
				});
			});
			/******************* HELPERS */

			function publishFacebook(){
				console.log('dentro publish');
				var dataURL = canvas.toDataURL('image/png');
				var onlyData = dataURL.substring(dataURL.indexOf(',')+1);
				var decoded = atob(onlyData);
				var dl = decoded.length;
				var buffer = new Uint8Array(dl);
				for (var i = 0; i < dl; i++) {
					buffer[i] = decoded.charCodeAt(i);
				};
				var blob = new Blob([buffer], {type: 'image/png'});
				var formData = new FormData();
				formData.append('source', blob);
				formData.append('message', 'Whatever message we decide');
				FB.api('/me/photos', 'POST', formData, function(resp) {
					console.log('into function');
					if (resp && !resp.error) {
						console.log('uploaded');
						console.log(resp);
					} else {
						console.log('some error');
						console.log(resp.error);
					};
				});
			};

			// despiela las bases.
			function verBases(){
				var WindowObjectReference = window.open("bases.pdf", "bases_concurso", "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes");
			}
			// despiela pagina clinica alemana.
			function verCAlemana(){
				var WindowObjectReference = window.open("https://www.facebook.com/Clinicaalemanadesantiago/", "clinica_alemana", "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes");
			}
			// despiela pagina clinica alemana.
			function verHashtag(){
				var WindowObjectReference = window.open("https://www.facebook.com/hashtag/comotecuidasen10palabras", "ver_hashtag", "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes");
			}
			// construye el cartel.
			function buildCartel(palabras){
				var cartel = $('.box-featured:visible');
				// obtengo el array y la cantidad de palabras entre de 7 a 10.
				var length = palabras.length
				// detectamos que de que plantilla se trata
				// Cargamos el template seleccionado.
				$.userdata.template = cartel.attr('template');
				// Concateno acorde al largo maximo de palabras y las palabras aportadas para evitar los textos undefined.
				var bigtext = "";
				for(i = 2;(i < length-1) && (palabras[i] !== undefined);i++){
					bigtext += palabras[i]+" ";
				}
				// Acorde a lo seleccionado desplegamos.
				switch(cartel.attr('template')){
					case "1":
						// Reseteamos los estilos.
						cartel.find(".span-title-text").removeAttr('style');
						cartel.find(".line-span2").removeAttr('style');
						// comenzamos a asignar las palabras a los elementos del DOM.
						cartel.find(".span-title-text").html(palabras[0]);
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[0].length > 10){
							var porcentaje_tamaño_fit = (10*100)/palabras[0].length;
							var fontdefaultsize = cartel.find(".span-title-text").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".span-title-text").css("font-size", fontfinalsieze);
							cartel.find(".span-title-text").css("text-transform", "uppercase");
						}
						cartel.find(".line-span2").html(palabras[1]);
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[1].length > 14){
							var porcentaje_tamaño_fit = (14*100)/palabras[1].length;
							var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".line-span2").css("font-size", fontfinalsieze);
						}
						var bigword = '<span id="big_last_word_03_01" class="last-word-line">'+ palabras[length-1] +'</span>';
						cartel.find(".line-span3").html(bigtext+" "+bigword);
					break;
					case "2":
						// Reseteamos los estilos.
						cartel.find(".span-title-text").removeAttr('style');
						cartel.find(".line-span2").removeAttr('style');
						cartel.find(".line-span3").removeAttr('style');
						// comenzamos a asignar las palabras a los elementos del DOM.
						cartel.find(".span-title-text").html(palabras[0]);
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[0].length > 14){
							var porcentaje_tamaño_fit = (14*100)/palabras[0].length;
							var fontdefaultsize = cartel.find(".span-title-text").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".span-title-text").css("font-size", fontfinalsieze);
						}
						cartel.find(".line-span2").html(palabras[1]);
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[1].length > 13){
							var porcentaje_tamaño_fit = (13*100)/palabras[1].length;
							var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".line-span2").css("font-size", fontfinalsieze);
						}
						var bigword = '<span id="big_last_word_03_02" class="last-word-line">'+ palabras[length-1] +'</span>';
						cartel.find(".line-span3").html(bigtext+" "+bigword);
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(bigtext > 40){
							var porcentaje_tamaño_fit = (40*100)/bigtext.length;
							var fontdefaultsize = cartel.find(".line-span3").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".line-span3").css("font-size", fontfinalsieze);
						}
					break;
					case "3":
						// Reseteamos los estilos.
						cartel.find(".line-span1").removeAttr('style');
						cartel.find(".line-span2").removeAttr('style');
						cartel.find(".span-title-text").removeAttr('style');
						cartel.find(".last-word-line").removeAttr('style');
						// comenzamos a asignar las palabras a los elementos del DOM.
						cartel.find(".line-span1").html(palabras[0]);
						// 14
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[0].length > 14){
							var porcentaje_tamaño_fit = (14*100)/palabras[0].length;
							var fontdefaultsize = cartel.find(".line-span1").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".line-span1").css("font-size", fontfinalsieze);
						}
						cartel.find(".line-span2").html(palabras[1]);
						// 13
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[1].length > 13){
							var porcentaje_tamaño_fit = (13*100)/palabras[1].length;
							var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".line-span2").css("font-size", fontfinalsieze);
						}
						cartel.find(".span-title-text").html(bigtext);
						// 22
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(bigtext.length > 22){
							var porcentaje_tamaño_fit = (22*100)/bigtext.length;
							var fontdefaultsize = cartel.find(".span-title-text").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".span-title-text").css("font-size", fontfinalsieze);
						}
						cartel.find(".last-word-line").html(palabras[length-1]);
						// 12
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[length-1].length > 12){
							var porcentaje_tamaño_fit = (12*100)/palabras[length-1].length;
							var fontdefaultsize = cartel.find(".last-word-line").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".last-word-line").css("font-size", fontfinalsieze);
						}
					break;
					case "4":
						// Reseteamos los estilos.
						cartel.find(".line-span1").removeAttr('style');
						cartel.find(".line-span2").removeAttr('style');
						cartel.find(".span-title-text").removeAttr('style');
						cartel.find(".last-word-line").removeAttr('style');
						// comenzamos a asignar las palabras a los elementos del DOM.
						cartel.find(".line-span1").html(palabras[0]);
						// 14
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[0].length > 14){
							var porcentaje_tamaño_fit = (14*100)/palabras[0].length;
							var fontdefaultsize = cartel.find(".line-span1").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".line-span1").css("font-size", fontfinalsieze);
						}
						cartel.find(".line-span2").html(palabras[1]);
						// 13
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[1].length > 13){
							var porcentaje_tamaño_fit = (13*100)/palabras[1].length;
							var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".line-span2").css("font-size", fontfinalsieze);
						}
						cartel.find(".span-title-text").html(bigtext);
						// 22
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(bigtext.length > 22){
							var porcentaje_tamaño_fit = (22*100)/bigtext.length;
							var fontdefaultsize = cartel.find(".span-title-text").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".span-title-text").css("font-size", fontfinalsieze);
						}
						cartel.find(".last-word-line").html(palabras[length-1]);
						// 12
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[length-1].length > 12){
							var porcentaje_tamaño_fit = (12*100)/palabras[length-1].length;
							var fontdefaultsize = cartel.find(".last-word-line").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".last-word-line").css("font-size", fontfinalsieze);
						}
					break;
					case "5":
						// Reseteamos los estilos.
						cartel.find(".line-span1").removeAttr('style');
						cartel.find(".line-span2").removeAttr('style');
						cartel.find(".span-title-text").removeAttr('style');
						cartel.find(".last-word-line").removeAttr('style');
						// comenzamos a asignar las palabras a los elementos del DOM.
						cartel.find(".line-span1").html(palabras[0]);
						// 14
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[0].length > 14){
							var porcentaje_tamaño_fit = (14*100)/palabras[0].length;
							var fontdefaultsize = cartel.find(".line-span1").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".line-span1").css("font-size", fontfinalsieze);
						}
						cartel.find(".line-span2").html(palabras[1]);
						// 13
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[1].length > 13){
							var porcentaje_tamaño_fit = (13*100)/palabras[1].length;
							var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".line-span2").css("font-size", fontfinalsieze);
						}
						cartel.find(".span-title-text").html(bigtext);
						// 22
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(bigtext.length > 22){
							var porcentaje_tamaño_fit = (22*100)/bigtext.length;
							var fontdefaultsize = cartel.find(".span-title-text").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".span-title-text").css("font-size", fontfinalsieze);
						}
						cartel.find(".last-word-line").html(palabras[length-1]);
						// 12
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[length-1].length > 12){
							var porcentaje_tamaño_fit = (12*100)/palabras[length-1].length;
							var fontdefaultsize = cartel.find(".last-word-line").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".last-word-line").css("font-size", fontfinalsieze);
						}
					break;
					case "6":
						// Reseteamos los estilos.
						cartel.find(".line-span1").removeAttr('style');
						cartel.find(".line-span2").removeAttr('style');
						cartel.find(".last-word-line").removeAttr('style');
						cartel.find(".line-span3").removeAttr('style');
						// comenzamos a asignar las palabras a los elementos del DOM.
						cartel.find(".line-span1").html(palabras[0]);
						// 14
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[0].length > 14){
							var porcentaje_tamaño_fit = (14*100)/palabras[0].length;
							var fontdefaultsize = cartel.find(".line-span1").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".line-span1").css("font-size", fontfinalsieze);
						}
						cartel.find(".line-span2").html(palabras[1]);
						// 13
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						if(palabras[1].length > 13){
							var porcentaje_tamaño_fit = (13*100)/palabras[1].length;
							var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							cartel.find(".line-span2").css("font-size", fontfinalsieze);
						}
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						// 12
						if(palabras[length-1].length > 12){
							var porcentaje_tamaño_fit = (12*100)/palabras[length-1].length;
							var fontdefaultsize = cartel.find(".last-word-line").css("font-size").replace("px", "");
							var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
							var bigword = '<span id="big_last_word_03_06" class="last-word-line" style="font-size:'+fontfinalsieze+';"><span class="span-title-1"></span>'+palabras[length-1]+'<span class="span-title-2"></span></span>';
						}else{
							var bigword = '<span id="big_last_word_03_06" class="last-word-line"><span class="span-title-1"></span>'+palabras[length-1]+'<span class="span-title-2"></span></span>';
						}
						var largetext = bigtext+" "+bigword;
						cartel.find(".line-span3").html(largetext);
						// 22
						// % respecto al tamaño original -> (tope*100)/cantidad -> %
						// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
						// if(largetext.length > 22){
						// 	var porcentaje_tamaño_fit = (22*100)/largetext.length;
						// 	var fontdefaultsize = cartel.find(".line-span3").css("font-size").replace("px", "");
						// 	var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
						// 	console.log(porcentaje_tamaño_fit);
						// 	console.log(fontdefaultsize);
						// 	console.log(fontfinalsieze);
						// 	//cartel.find(".line-span3").css("font-size", fontfinalsieze);
						// }
					break;
				}
			}
		</script>
	</body>
</html>
