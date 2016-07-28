<!DOCTYPE html>
<html lang="es">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
		<title>Clínica Alemana - Cómo te cuidas en 10 palabras</title>
		<!-- FavIcon -->
		<link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico">
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
		<script src="js/jquery.min.js"></script>
	</head>
	<body>
		<script>
			// Objeto Global para almacenar informacion del usuario
			$.userdata = {};
			// fb snippet
			window.fbAsyncInit = function() {
				// Inicializamos
				FB.init({
					appId      : '287403201596704',
					xfbml      : true,
					version    : 'v2.6'
				});
			};
			(function(d, s, id){
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) {return;}
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/es_LA/sdk.js";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		</script>
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
		<div id="loader" style="position:absolute;top:0px;left:0px;width:100%;height:100%;background:rgba(0, 0, 0, 0.7);z-index:9;display: none;">
			<img src="assets/img/hourglass.svg" alt="loader" style="max-width:90px;position:absolute;top:50%;margin-top:-45px;left:50%;margin-left:-45px;z-index:10;" />
		</div>
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
						<div id="step_0" class="content-message text-center" style="">
							<p class="advice-msg">Hazte fan de la Clínica Alemana en Facebook,
							<br>
							comparte tu mejor consejo de salud y
							<br>
							participa por una de las 
							<br>
							6 gift card de $50.000</p>
							<!-- boton participar -->
							<div class="form-group">
								<div class="text-center">
									<!-- boton facebook -->
									<button id="btnstep0" type="submit" class="btn btn-facebook">Iniciar sesión con Facebook</button>
									<!--
									<button id="btnstep0" type="submit" class="btn btn-lg btn-default">Participar</button>
									-->
								</div>
							</div>
							<!-- fin boton participar -->
						</div>
						<!-- FIN PASO 0 -->
						<!-- PASO 1 -->
						<div id="step_1" class="content-message text-center" style="display: none;">
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
								<!-- TEMA 1 ROJO -->
								<div id="big_box_msg_1" class="box-msg-1 box-featured" template="1" style="">
									<span id="big_line_01_01" class="line-span1"><span class="span-title-1"></span><span class="span-title-text">Riéndome</span><span class="span-title-2"></span></span>
									<span id="big_line_02_01" class="line-span2">Disfrutando</span>
									<span id="big_line_03_01" class="line-span3">y regaloneando con mi <span id="big_last_word_03_01" class="last-word-line">familia</span></span>
									<span class="logos-box-min">
										<img class="hashtag-10-p-min" src="assets/img/post-image-bg/como-te-cuidas-min.svg">
										<img class="logo-clinica-min" src="assets/img/post-image-bg/logo-alemana-min-2.svg">
									</span>
									<span class="corners">
										<span class="c-top-left"></span>
										<span class="c-top-right"></span>
										<span class="c-bottom-left"></span>
										<span class="c-bottom-right"></span>
									</span>
								</div>
								<!-- TEMA 2 MORADO -->
								<div id="big_box_msg_2" class="box-msg-2 box-featured" template="2" style="display: none;">
									<span id="big_line_01_02" class="line-span1"><span class="span-title-1"></span><span class="span-title-text">Riéndome</span><span class="span-title-2"></span></span>
									<span class="pre-line-span2">
										<span class="point point-left">.</span>
										<span id="big_line_02_02" class="line-span2">Disfrutando</span>
										<span class="point point-right">.</span>
									</span>
									<span id="big_line_03_02" class="line-span3">y regaloneando con mi <span class="last-line"></span></span>
									<span class="logos-box-min">
										<img class="hashtag-10-p-min" src="assets/img/post-image-bg/como-te-cuidas-min.svg">
										<img class="logo-clinica-min" src="assets/img/post-image-bg/logo-alemana-min-2.svg">
									</span>
									<span class="corners">
										<span class="c-top-left"></span>
										<span class="c-top-right"></span>
										<span class="c-bottom-left"></span>
										<span class="c-bottom-right"></span>
										<span class="c-top-left-line"></span>
										<span class="c-top-right-line"></span>
										<span class="c-bottom-left-line"></span>
										<span class="c-bottom-right-line"></span>
									</span>
								</div>
								<!-- TEMA 3 NARANJO -->
								<div id="big_box_msg_3" class="box-msg-3 box-featured" template="3" style="display: none;">
									<span id="big_line_01_03" class="line-span1">Riéndome <span id="big_last_word_01_03" class="last-word-line">con mi familia lorem ipsum</span></span>
									<span class="pre-line-span2">
										<span class="point point-left">.</span>
										<span id="big_line_02_03" class="line-span2">Disfrutando</span>
										<span class="point point-right">.</span>
									</span>
									<span id="big_line_03_03" class="line-span3"><span class="span-title-1"></span><span class="span-title-text">y regaloneando con mi</span><span class="span-title-2"></span></span>
									<span class="logos-box-min">
										<img class="hashtag-10-p-min" src="assets/img/post-image-bg/como-te-cuidas-min.svg">
										<img class="logo-clinica-min" src="assets/img/post-image-bg/logo-alemana-min-2.svg">
									</span>
									<span class="corners">
										<span class="c-top-left"></span>
										<span class="c-top-right"></span>
										<span class="c-bottom-left"></span>
										<span class="c-bottom-right"></span>
									</span>
								</div>
								<!-- TEMA 4 VERDE AGUA -->
								<div id="big_box_msg_4" class="box-msg-4 box-featured" template="4" style="display: none;">
									<span id="big_line_01_03" class="line-span1">Riéndome</span>
									<span id="big_line_02_03" class="line-span2">Disfrutando</span>
									<span id="big_line_03_03" class="line-span3"><span class="span-title-1"></span><span class="span-title-text">y regaloneando con mi</span><span class="span-title-2"></span> <span id="big_last_word_03_04" class="last-word-line">familia</span> </span>
									<!--
									<span id="big_last_word_03_04" class="last-word-line">familia</span>
									-->
									<span class="logos-box-min">
										<img class="hashtag-10-p-min" src="assets/img/post-image-bg/como-te-cuidas-min.svg">
										<img class="logo-clinica-min" src="assets/img/post-image-bg/logo-alemana-min-2.svg">
									</span>
									<span class="corners">
										<span class="c-top-left"></span>
										<span class="c-top-right"></span>
										<span class="c-bottom-left"></span>
										<span class="c-bottom-right"></span>
									</span>
								</div>
								<!-- TEMA 5 VERDE LIMON -->
								<div id="big_box_msg_5" class="box-msg-5 box-featured" template="5" style="display: none;">
									<!-- esto debe estar en 2 lineas -->
									<span id="big_line_01_05" class="line-span1">Riéndome</span>
									<!-- -->
									<span id="big_line_02_05" class="line-span2">Disfrutando</span>
									<span id="big_line_03_05" class="line-span3"><span class="span-title-1"></span><span class="span-title-text">y regaloneando con mi</span><span class="span-title-2"></span>
									<!-- -->
									</span>
									<span class="logos-box-min">
										<img class="hashtag-10-p-min" src="assets/img/post-image-bg/como-te-cuidas-min.svg">
										<img class="logo-clinica-min" src="assets/img/post-image-bg/logo-alemana-min-2.svg">
									</span>
									<span class="corners">
										<span class="c-top-left"></span>
										<span class="c-top-right"></span>
										<span class="c-bottom-left"></span>
										<span class="c-bottom-right"></span>
									</span>
								</div>
								<!-- TEMA 6 CELESTE -->
								<div id="big_box_msg_6" class="box-msg-6 box-featured" template="6" style="display: none;">
									<span id="big_line_01_06" class="line-span1">Riéndome</span>
									<!-- -->

									<span class="pre-line-span2">
										<span class="point point-left">.</span>
										<span id="big_line_02_06" class="line-span2">Disfrutando</span>
										<span class="point point-right">.</span>
									</span>
									<!-- -->
									<span id="big_line_03_06" class="line-span3"><span class="line-text">y regaloneando con mi</span></span>

									<span id="big_last_word_03_06" class="last-word-line"><span class="span-title-1"></span>familia<span class="span-title-2"></span></span>
									
									<span class="logos-box-min">
										<img class="hashtag-10-p-min" src="assets/img/post-image-bg/como-te-cuidas-min.svg">
										<img class="logo-clinica-min" src="assets/img/post-image-bg/logo-alemana-min-2.svg">
									</span>
									<span class="corners">
										<span class="c-top-left"></span>
										<span class="c-top-right"></span>
										<span class="c-bottom-left"></span>
										<span class="c-bottom-right"></span>
									</span>
								</div>
								<!-- fin caja principal elegida -->
								<!-- se agrego un div con id para esconder -->

								<!-- selector diseños -->
								<div id="select-design-boxes" style="">
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
										<a id="btnstep2_back" class="btn btn-lg btn-default">Volver</a> <a id="btnstep2_next" class="btn btn-lg btn-default">Siguiente</a>
									</div>
								</div>
								<!-- publicar en facebook -->
								<div id="publish-facebook-box" class="publish-facebook" style="display: none">
									<form>
										<div class="form-group">
											<label for="text_post_content" style="display: none">Publicar en Facebook</label>
											<!-- 🗣Comparte tu consejo de salud y participa por una de las 🎉🎊 6 gift card de $50.000 🎊🎉 con Clínica Alemana. -->
											<!-- sacar -->
											<!--
											<textarea rows="5" class="form-control publish-face" id="text_post_facebook_content"></textarea>
											-->
										</div>
										<div class="form-group">
											<div class="text-center">
												<button id="btnstep2_share" type="submit" class="btn btn-lg btn-default">Publicar en Facebook</button>
											</div>
										</div>
									</form>
								</div>
								<!-- // -->
							</div>
						</div>
						<!-- fin PASO 2 -->
						<!-- PASO 3 -->
						<div id="step_3" class="content-message text-center" style="display: none;">
							<!--<h1 class="title-advice-msg">¡Listo!</h1>-->
							<p class="advice-msg">Listo, ya estás participando
							<br>por una de las 6 gift card de $50.000
							<br>con Clínica Alemana en Facebook.
							<br><span class="smal-text">Recuerda hacer “me gusta” en nuestro fanpage para participar.</span></p>
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
		<script src="js/html2canvas.min.js"></script>
		<script src="js/bootstrap.min.js"></script>
		<script src="js/countable.js"></script>
		<script src="js/script.js"></script>
	</body>
</html>
