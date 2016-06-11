// Necesario para el Uploader
jQuery.event.props.push('dataTransfer');
// Cuando el dom este cargado entonces.
$(document).ready(function(){
	// Constante con la URL para enviar a los referidos.
	APP_DOMAIN = 'http://reframe.cl/proyectos/freddo/cl';

	/******************************************** Objeto Global para almacenar la seleccion y avance */
	$.participantdata = {};

	/******************************************** Funcion que despliega el documento con las bases */
	$('#btnbases').bind('click', function(event){
		event.preventDefault();
		verBases();
	});

	$('#btnbasealert').bind('click', function(){
		$('#basesalert').hide();
	});

	// Verificamos si es un referido
	if(readCookie('heladerocl') && !readCookie('heladerorefvotecl')){
		$.participantdata.ref = readCookie('heladerocl');
		$('#step1').hide();
		$('#refscreen').show();
	}

	/********************************************/
	$('#btncomenzar, #btnrefcontinue').bind('click', function(){
		if($('#agree').is(':checked')){
			FB.getLoginStatus(function(response){
				if(response.status === 'connected'){
					// Chequeamos si ya participo.
					$('#loader').css('height',$(document).height());
					$('#loader').show();
					$.participantdata.userID = response.authResponse.userID;
					$.ajax({
						url: 'src/checkParticipacion.php',
						type: 'POST',
						dataType: 'json',
						data: { uid: response.authResponse.userID },
						success: function(data){
							$('#loader').hide();
							if(data.code == 1){
								// Mostramos el menu intermedio
								$('#step1, #refscreen').hide();
								$('#stepintermedio').show();
								$('#newrecipe').click(function(){
									goToStep2();
								});
								$('#stepintergotovote').click(function(){
									goToVote();
								});
							}else if(data.code == 0){
								// Todo ok no habia participado pasamos al paso2
								goToStep2();
							}
						}
					});
				}else if (response.status === 'not_authorized'){
					// Logeado pero no autorizo a la app.
					getLogin();
				}else{
					// No logeado
					getLogin();
				}
			},{scope: 'email, publish_stream'});
		}else{
			$('#basesalert').show();
			//alert("Para continuar es necesario que aceptes los términos y condiciones.");
		}
	});

	/******************************************** Function que chequea el status (conectado / no conectado) */
	function getStatus(){
		var islogin;
		FB.getLoginStatus(function(response){
			if(response && response.authResponse && response.status === 'connected'){
				islogin = true;
			}else{
				islogin = false;
			}
		});
		return islogin;
	}

	/******************************************** Funcion que ejecuta el login de la app */
	function getLogin(){
		var login;
		FB.login(function(response){
			if (response && response.authResponse && response.status === 'connected'){
				login = true;
				$('#btncomenzar').click();
			}else{
				login = false;
				alert('Para continuar es necesario que aceptes la aplicacion.');
			}
		},{scope: 'email, publish_stream'});
		return login;
	}

	/******************************************** Function que se encarga de lo necesario para pasar al paso 2 de la app */
	function goToStep2(){
		// Obtenemos los permisos y conectamos la aplicacion para continuar.
		$.participantdata.terms = true;
		// Verificamos si ya inicio session y/o autorizo la aplicacion.
		FB.getLoginStatus(function(response){
			$.participantdata.accessToken = response.authResponse.accessToken;
			$.participantdata.userID = response.authResponse.userID;
			// Obtengo informacion del perfil.
			FB.api('/me', function(data){
				$.participantdata.name = data.name;
				$.participantdata.first_name = data.first_name;
				$.participantdata.last_name = data.last_name;
				$.participantdata.email = data.email;
				$.participantdata.avatarsrc = 'https://graph.facebook.com/'+$.participantdata.userID+'/picture?width=150&height=150';
				// Convertimos la imagen de FB a un formato amistoso para html2canvas
				$.ajax({
					url: 'src/proxy.php',
					type: 'GET',
					dataType: 'json',
					data: { url: $.participantdata.avatarsrc },
					success: function(data){
						$.participantdata.avatarsrc = data;
						$('#avatarfoto').attr('src', $.participantdata.avatarsrc);
					}
				});
				$('#step1, #stepintermedio, #refscreen, #stepvote').hide();
				// Mostramos el paso 2 y cargamos el marco de la foto por dentras de la capa que contiene los elementos del paso.
				$('#step2, #marcofoto').fadeIn(function(){
					$('#btncambiafoto').click(function(){
						$('#container').fadeIn();
						// para cerrar el modal con esc.
						$(document).keyup(function(e) {
							if (e.keyCode == 27){
								$('#container').hide();
							}
						});
						// Para cerrar el modal con click en la X.
						$('#cerrarcontainer').click(function(){
							$('#container').hide();
						});
						// Maneja el drop down para cargar la imagen
						var imageLoader = document.getElementById('filePhoto');
						imageLoader.addEventListener('change', handleImage, false);
						function handleImage(e){
							var reader = new FileReader();
							reader.onload = function(event){
								// Cuando carga la imagen la muestro en el preview object.
								$('#cropimage').attr('src',event.target.result);
								// Cuando la imagen ya esta cargada inicializo el cropbox.
								$('#cropimage').cropbox({
									width: 200,
									height: 200,
									showControls: 'auto'
								}).on('cropbox', function(e, data, img){
									// Cada ves que se modifica la imagen.
									$.participantdata.avatarsrc = img.getDataURL();
								});
								$('#contbtnok').show();
								$('#contbtnok').click(function(){
									$('#avatarfoto').attr('src', $.participantdata.avatarsrc);
									$('#container').hide();
								});
							}
							reader.readAsDataURL(e.target.files[0]);
						}
					});
				});
			});
		});
	}

	/******************************************* Funcion encargada de desplegar la interfaz para Votos */
	function goToVote(){
		$('#loader').css('height',$(document).height());
		$('#loader').show();
		$('#stepintermedio').hide();
		$('#stepvote').show();
		$.ajax({
			url: 'src/getVoteCandidate.php',
			type: 'POST',
			dataType: 'json',
			data: { userID: $.participantdata.userID , ref : $.participantdata.ref },
			success: function(data){
				$('#recipeview').css('background-image', 'url('+ APP_DOMAIN +'/recipe/'+ data.userID +'.png)');
				$('#nameparticipant').html(data.name);
				$('#recipelike').attr('userID', data.userID);
				$('#loader').hide();
			}
		});
	}

	/******************************************** Function que detecta el click en el boton Listo */
	$('#btnlisto').click(function(){
		$('#step2, #marcofoto').hide();
		$('#step3').fadeIn();
	});
	/******************************************** Function que detecta el click en el Comenzar en las instrucciones */
	$('#btninstructionok').click(function(){
		$('#step3').hide();
		$('#step4').fadeIn();
		$.participantdata.step = 1;
		// Marcamos el sabor que seleccionaremos en el menu lateral.
		$('.sabor' + $.participantdata.step + ' .currentstep').show();
		$.participantdata.flavorlist = [];
		$.participantdata.toppinglist = [];
		// Llenamos el array con sabores
		for(var i = 1; i <= 27; i++){
			$.participantdata.flavorlist.push(i);
		}
		// Inicializamos el sabor del paso 3 de forma dinamica y aleatoria.
		if($.participantdata.flavorlist.length <= 0){
			for(var i = 1; i <= 27; i++){
				var flag = true;
				for(var j = 1; j <= 3; j++){
					if($.participantdata['flavor'+j] == i){
						flag = false;
					}
				}
				if(flag){
					$.participantdata.flavorlist.push(i);
				}
			}
		}
		var random = Math.floor(Math.random() * $.participantdata.flavorlist.length);
		var number = $.participantdata.flavorlist[random];
		$.participantdata.flavorlist.splice(random, 1);
		// console.log(number);
		// console.log($.participantdata.flavorlist);
		$('#selectmenu').addClass('flavor'+number);
		$('#selectmenu').attr('flavor', number);
		// Llenamos el array con toppings
		for(var i = 1; i <= 16; i++){
			$.participantdata.toppinglist.push(i);
		}
	});
	/******************************************** Function que detecta el click en el dont like de sabores como en thinder y continua mostrando sabores de forma aleatoria */
	$('#dontlike').click(function(){
		if($.participantdata.step < 4){
			// Flavor search
			// Removemos el sabor y cargamos otro de forma aleatoria.
			$('#selectmenu').removeClass(function(index, css){
				return (css.match (/\bflavor\S+/g) || []).join(' ');
			});
			// Cambiamos el sabor por uno aleatorio.
			if($.participantdata.flavorlist.length <= 0){
				for(var i = 1; i <= 27; i++){
					var flag = true;
					for(var j = 1; j <= 3; j++){
						if($.participantdata['flavor'+j] == i){
							flag = false;
						}
					}
					if(flag){
						$.participantdata.flavorlist.push(i);
					}
				}
			}
			var random = Math.floor(Math.random() * $.participantdata.flavorlist.length);
			var number = $.participantdata.flavorlist[random];
			$.participantdata.flavorlist.splice(random, 1);
			// console.log(number);
			// console.log($.participantdata.flavorlist);
			$('#selectmenu').addClass('flavor'+number);
			$('#selectmenu').attr('flavor', number);
		}else{
			// Topping search
			// Removemos el topping y cargamos otro de forma aleatoria.
			$('#selectmenu').removeClass(function(index, css){
				return (css.match (/\btopping\S+/g) || []).join(' ');
			});
			// Cambiamos el sabor por uno aleatorio.
			if($.participantdata.toppinglist.length <= 0){
				for(var i = 1; i <= 16; i++){
					$.participantdata.toppinglist.push(i);
				}
			}
			var random = Math.floor(Math.random() * $.participantdata.toppinglist.length);
			var number = $.participantdata.toppinglist[random];
			$.participantdata.toppinglist.splice(random, 1);
			// console.log(number);
			// console.log($.participantdata.toppinglist);
			$('#selectmenu').addClass('topping'+number);
			$('#selectmenu').attr('topping', number);
			$('#selectmenu').removeAttr('flavor');
		}
	});
	/******************************************** Function que detecta el click en el like de sabores como en thinder, almacena el sabor y continua con el siguiente */
	$('#like').click(function(){
		// Ocultamos todos los marcadores de paso.
		$('.currentstep').hide();
		if($.participantdata.step < 4){
			// Marcamos el paso actual.
			if($.participantdata.step < 3){
				$('.sabor' + (parseInt($.participantdata.step)+1) + ' .currentstep').show();
			}else{
				$('.topping .currentstep').show();
			}
			// Creamos el attributo en el objeto indicando el sabor y el orden.
			$.participantdata['flavor'+$.participantdata.step] = $('#selectmenu').attr('flavor');
			// Cargamos el nombre del sabor seleccionado.
			$('.sabor' + $.participantdata.step + ' .titulostep').html(getNameFlavor($.participantdata['flavor'+$.participantdata.step.toString()]));
			// Creamos la representacion del sabor seleccionado.
			// Para cargar todos los sabores correspondientes y en el orden indicado.
			for(i = 1; i <= $.participantdata.step; i++){
				$('.sabor' + $.participantdata.step)
				.removeClass('circulodisable')
				.addClass('circuloenable')
				.append("<div class='conoenable'></div>")
				.append("<div class='layer layer"+i.toString()+" "+getClassFlavor($.participantdata['flavor'+i.toString()])+"'></div>");
			}
			// Incrementamos la referencia para marcar la etapa en la construccion del objeto.
			$.participantdata.step = $.participantdata.step + 1;
			// Removemos el sabor y cargamos otro de forma aleatoria.
			$('#selectmenu').removeClass(function(index, css){
				return (css.match (/\bflavor\S+/g) || []).join(' ');
			});
			// Cambiamos el sabor por uno aleatorio.
			if($.participantdata.flavorlist.length <= 0){
				for(var i = 1; i <= 27; i++){
					var flag = true;
					for(var j = 1; j <= 3; j++){
						if($.participantdata['flavor'+j] == i){
							flag = false;
						}
					}
					if(flag){
						$.participantdata.flavorlist.push(i);
					}
				}
			}
			var random = Math.floor(Math.random() * $.participantdata.flavorlist.length);
			var number = $.participantdata.flavorlist[random];
			$.participantdata.flavorlist.splice(random, 1);
			// console.log(number);
			// console.log($.participantdata.flavorlist);
			$('#selectmenu').addClass('flavor'+number);
			$('#selectmenu').attr('flavor', number);
			// en caso de ser el ultimo sabor cargo los toppings
			if($.participantdata.step == 4){
				// Activamos el icono de topping.
				$('.topping').removeClass('circulotoppingdisable').addClass('circulotoppingenable');
				// Topping search
				// Removemos el topping y cargamos otro de forma aleatoria.
				$('#selectmenu').removeClass(function(index, css){
					return (css.match (/\bflavor\S+/g) || []).join(' ');
				});
				// Cambiamos el sabor por uno aleatorio.
				if($.participantdata.toppinglist.length <= 0){
					for(var i = 1; i <= 16; i++){
						$.participantdata.toppinglist.push(i);
					}
				}
				var random = Math.floor(Math.random() * $.participantdata.toppinglist.length);
				var number = $.participantdata.toppinglist[random];
				$.participantdata.toppinglist.splice(random, 1);
				// console.log(number);
				// console.log($.participantdata.toppinglist);
				$('#selectmenu').addClass('topping'+number);
				$('#selectmenu').attr('topping', number);
			}
		}else{
			// Creamos el attributo en el objeto indicando el topping y el orden.
			$.participantdata['topping'] = $('#selectmenu').attr('topping');
			// Incrementamos la referencia para marcar la etapa en la construccion del objeto.
			$.participantdata.step = $.participantdata.step + 1;
			// Cerramos el paso 4 y continuamos al 5.
			$('#step4').hide();
			$('#step5inside, #step5').fadeIn();
			$('#avatarfinal, #avatarfinalfoto').show();
			// Cargamos el detalle de la receta.
			$('#recetahelado ul')
				.append('<li>Cono</li>')
				.append('<li>'+ getNameFlavor($.participantdata.flavor1) +'</li>')
				.append('<li>'+ getNameFlavor($.participantdata.flavor2) +'</li>')
				.append('<li>'+ getNameFlavor($.participantdata.flavor3) +'</li>')
				.append('<li>'+ getNameTopping($.participantdata.topping) +'</li>')
			$('#avatarfinal').css('background-image', 'url("'+$.participantdata.avatarsrc+'")');
			// Cargamos los sabores en el cono grande.
			$('#flavor1final').addClass('flavor'+$.participantdata.flavor1+'_big');
			$('#flavor2final').addClass('flavor'+$.participantdata.flavor2+'_big');
			$('#flavor3final').addClass('flavor'+$.participantdata.flavor3+'_big');
			$('#toppingfinal').addClass('topping'+$.participantdata.topping+'_grande');
			// Cosas que requieren tiempo Guardar crear guardar marcar.
			// Preparamos el loader y lo mostramos.
			$('#loader').css('height',$(document).height());
			$('#loader').show();
			html2canvas($("#finalexportlayer"),{
				onrendered: function(canvas){
					var myImage = canvas.toDataURL("image/png");
					$.ajax({
						url: 'src/saveImage.php',
						type: 'POST',
						dataType: 'json',
						data: { img: myImage, uid : $.participantdata.userID },
						success: function(data){
							if(data.status === 'Success!'){
								// Chequeamos si ya participo.
								$.ajax({
									url: 'src/checkParticipacion.php',
									type: 'POST',
									dataType: 'json',
									data: { uid: $.participantdata.userID },
									success: function(data){
										if(data.code == 1){
											// Actualizamos la receta del participante
											$.post('src/actualizarParticipante.php',
												{
													userID: $.participantdata.userID,
													flavor1: $.participantdata.flavor1,
													flavor2: $.participantdata.flavor2,
													flavor3: $.participantdata.flavor3,
													topping: $.participantdata.topping
												});
										}else if(data.code == 0){
											// Guardamos participante
											$.post('src/guardarParticipante.php',
												{
													userID: $.participantdata.userID,
													accessToken: $.participantdata.accessToken,
													first_name: $.participantdata.first_name,
													last_name: $.participantdata.last_name,
													name: $.participantdata.name,
													email: $.participantdata.email,
													terms: $.participantdata.terms,
													flavor1: $.participantdata.flavor1,
													flavor2: $.participantdata.flavor2,
													flavor3: $.participantdata.flavor3,
													topping: $.participantdata.topping,
													ref: $.participantdata.ref
												});
										}else{
											//console.log("Ocurrio un error.");
										}
										// // Compartir cualquiera sea el caso.
										// $.post('src/wallpostfb.php', { token: $.participantdata.accessToken, url: "freddo.cl" },function(data){
										// 	$('#loader').hide();
										// });
										$('#loader').hide();
										//console.log($.participantdata);
									}
								});
							}else{
								alert("Ocurrio un problema al cargar tu imagen, por favor vuelve a intentarlo.");
							}
						}
					});
				}
			});
			// Fin html2canvas			
		}
	});

	/******************************************* Encargado de desplegar la interfaz de voto desde el paso final de la creacion de receta */
	$('#btnvotefinal').click(function(){
		$('#step5').hide();
		goToVote();
	});

	/******************************************* Encargado de desplegar el ranking desde la interfaz de voto */
	$('#gotoranking').click(function(){
		$('#stepvote').hide();
		$('#ranking').show();
		$.ajax({
			url: 'src/getRanking.php',
			type: 'POST',
			dataType: 'json',
			data: { userID: $.participantdata.userID },
			success: function(data){
				console.log(data);
				if(data.code == 1){
					var index = 0;
					if(data.ranking != null){
						data.ranking.forEach(function(obj){
							index = index + 1;;
							$('#pos'+index+' .rankingimg').attr('src', 'https://graph.facebook.com/'+obj.userID+'/picture?width=50&height=50');
							$('#pos'+index+' .username').html(obj.name);
							$('#pos'+index+' .userrecipe').html(getNameFlavor(obj.flavor1)+" - "+getNameFlavor(obj.flavor2)+" - "+getNameFlavor(obj.flavor3)+" - "+getNameTopping(obj.topping));
							$('#pos'+index+' .userpoints').html(obj.puntaje);
						});
					}
					$('#youpos .rankingimg').attr('src', 'https://graph.facebook.com/'+data.user.userID+'/picture?width=50&height=50');
					$('#youpos .username').html(data.user.name);
					$('#youpos .userrecipe').html(getNameFlavor(data.user.flavor1)+" - "+getNameFlavor(data.user.flavor2)+" - "+getNameFlavor(data.user.flavor3)+" - "+getNameTopping(data.user.topping));
					$('#youpos .userpoints').html(data.user.puntaje);
					$('#loader').hide();
				}
			}
		});
	});

	/******************************************** Funcion que bindea el boton Like para votar por recetas de otros participantes like Tinder */
	$('#recipelike').click(function(){
		$('#loader').css('height',$(document).height());
		$('#loader').show();
		$.ajax({
			url: 'src/voteCandidate.php',
			data: {userID : $('#recipelike').attr('userID')},
			type: 'POST',
			dataType: 'json',
			success: function(data){
				if(readCookie('heladerocl') && !readCookie('heladerorefvotecl')){
					deleteCookie('heladerocl', '/', '.reframe.cl');
					$.cookie('heladerorefvotecl', $('#recipelike').attr('userID'), { expires: 1, path: '/', domain: '.reframe.cl' });
				}
				$.ajax({
					url: 'src/getVoteCandidate.php',
					type: 'POST',
					dataType: 'json',
					data: { userID: $.participantdata.userID , ref : $.participantdata.ref },
					success: function(data){
						$('#recipeview').css('background-image', 'url('+ APP_DOMAIN +'/recipe/'+ data.userID +'.png)');
						$('#nameparticipant').html(data.name);
						$('#recipelike').attr('userID', data.userID);
						$('#loader').hide();
					}
				});
			}
		});
	});

	/******************************************** Funcion que bindea el boton Not Like para cambiar la receta por la de otro participante al azar like Tinder */
	$('#recipedontlike').click(function(){
		$('#loader').css('height',$(document).height());
		$('#loader').show();
		$.ajax({
			url: 'src/getVoteCandidate.php',
			type: 'POST',
			dataType: 'json',
			data: { userID: $.participantdata.userID , ref : $.participantdata.ref },
			success: function(data){
				$('#recipeview').css('background-image', 'url('+ APP_DOMAIN +'/recipe/'+ data.userID +'.png)');
				$('#nameparticipant').html(data.name);
				$('#recipelike').attr('userID', data.userID);
				$('#loader').hide();
			}
		});
	});

	/******************************************** Funcion que bindea el boton copiar URL y emula la funcionalidad al dar click en el boton */
	$('#copiarurl').bind('click', function(){
		$('#url').select();
		alert('Para copiar la url a tu portapapeles:\nPresiona ctrl + C ');
	});

	/** Share on Facebook */
	$('#sharefacebook').one('click', function(e){
		FB.ui({
			method: 'share',
			href: APP_DOMAIN + '/?id=' + $.participantdata.userID + '&frompreview=true'
		}, function(response){});
	});

	/** Share on Twitter */
	$('#sharetwitter').click(function(){
		var width  = 575,
		height = 400,
		left   = ($(window).width()  - width)  / 2,
		top    = ($(window).height() - height) / 2,
		url    = 'http://twitter.com/share?text=' + 'Ya cree mi combinación perfecta con el Heladero Freddo Participa con la tuya en: ' + APP_DOMAIN + '?id=' + $.participantdata.userID,
		opts   = 'status=1' +
				',width='  + width  +
				',height=' + height +
				',top='    + top    +
				',left='   + left;
		window.open(url, 'twitter', opts);
	});

	/******************* Funcion que obtine los permisos para publicar en tu nombre */
	function get_publish_stream(){
		FB.login(function(response){
			$.participantdata.accessToken = response.authResponse.accessToken;
			checkPermisions();
		},{scope: 'publish_actions'});
	}

	/******************* Funcion que chequea si se le dieron los permisos a la aplicacion para publicar en tu nombre */
	function checkPermisions(){
		FB.api('/me/permissions', function(response){
			console.log(response);
			// var perms = response.data[0];
			// if(!perms.publish_stream){
			// 	get_publish_stream();
			// }else{
			// 	$('#loader').css('height',$(document).height());
			// 	$('#loader').show();
			// 	$.post('src/wallpostfb.php', { token: $.participantdata.accessToken, url: "freddo.cl" },function(data){
			// 		alert("Acabas de compartir tu enlace de forma exitosa.");
			// 		$('#loader').hide();
			// 	});
			// 	return true;
			// }
		});
	}

	// Volver desde el ranking
	$('#btnback').click(function(){
		$('#ranking').hide();
		goToVote();
	});

	// Crear un nuevo helado desde el voto
	$('#makenewicecreamstepvote').click(function(){
		// $.participantdata = null;
		// $.participantdata = {};
		// goToStep2();
		location.reload();
	});

	// Crear un nuevo helado desde el ranking
	$('#makenewicecreamstepranking').click(function(){
		// $.participantdata = null;
		// $.participantdata = {};
		// goToStep2();
		location.reload();
	});

});

/* Helpers */

/******************* Funcion que permite abrir las bases del concurso */
function verBases(){
	var WindowObjectReference = window.open("bases.pdf", "bases_concurso", "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes");
}

/******************* Virifica si un objeto esta vacio */
function isEmpty(obj){
	for(var prop in obj){
		if(obj.hasOwnProperty(prop)){
			return false;
		}
	}
	return true;
}

/******************* Cookies Toolbox */
/******************* funcion capaz de crear una Cookie */
function createCookie(name, value, days){
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	var fixedName = '<%= Request["formName"] %>';
	name = fixedName + name;
	document.cookie = name + "=" + value + expires + "; path=/";
}

/******************* funcion capaz de leer una Cookie */
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

/******************* funcion capaz de eliminar una Cookie */
function deleteCookie(name, path, domain){
	path = (path ? ";path=" + path : "");
	domain = (domain ? ";domain=" + domain : "");
	var expiration = "Thu, 01-Jan-1970 00:00:01 GMT";
	document.cookie = name + "=" + path + domain + ";expires=" + expiration;
}

/****************** Funcion que recibe el id numero de referencia de un sabor y retorna la clase que lo representa. */
function getClassFlavor(id){
	id = parseInt(id);
	var clase = "";
	switch(id){
		case 1:
			clase = "crema_americana";
		break;
		case 2:
			clase = "anana";
		break;
		case 3:
			clase = "banana_split";
		break;
		case 4:
			clase = "banana";
		break;
		case 5:
			clase = "chocolate_blanco";
		break;
		case 6:
			clase = "chocolate_freddo";
		break;
		case 7:
			clase = "chocolate_italiano";
		break;
		case 8:
			clase = "coco_dulce_de_leche";
		break;
		case 9:
			clase = "crema_irlandesa";
		break;
		case 10:
			clase = "crema_suiza";
		break;
		case 11:
			clase = "dulce_de_leche";
		break;
		case 12:
			clase = "dulce_leche_vauquita";
		break;
		case 13:
			clase = "frambuesa";
		break;
		case 14:
			clase = "frutilla_a_la_crema";
		break;
		case 15:
			clase = "frutilla";
		break;
		case 16:
			clase = "mascarpone";
		break;
		case 17:
			clase = "granizado";
		break;
		case 18:
			clase = "limon";
		break;
		case 19:
			clase = "malbec_y_frutos_rojos";
		break;
		case 20:
			clase = "mantecol";
		break;
		case 21:
			clase = "maracuya";
		break;
		case 22:
			clase = "melon";
		break;
		case 23:
			clase = "menta_granizada";
		break;
		case 24:
			clase = "mousse_arandanos";
		break;
		case 25:
			clase = "mousse_maracuya";
		break;
		case 26:
			clase = "sambayon_Italiano";
		break;
		case 27:
			clase = "tramontana";
		break;
		default:
			clase = "crema_americana";
	}
	return clase;
}

/****************** Funcion que recibe el id numero de referencia de un sabor y retorna el nombre que lo representa. */
function getNameFlavor(id){
	id = parseInt(id);
	var clase = "";
	switch(id){
		case 1:
			clase = "Crema Americana";
		break;
		case 2:
			clase = "Ananá";
		break;
		case 3:
			clase = "Banana Split";
		break;
		case 4:
			clase = "Banana";
		break;
		case 5:
			clase = "Chocolate Blanco";
		break;
		case 6:
			clase = "Chocolate Freddo";
		break;
		case 7:
			clase = "Chocolate Italiano";
		break;
		case 8:
			clase = "Coco con Dulce de Leche";
		break;
		case 9:
			clase = "Crema Irlandesa";
		break;
		case 10:
			clase = "Crema Suiza";
		break;
		case 11:
			clase = "Dulce de leche granizado";
		break;
		case 12:
			clase = "Dulce de Leche Vauquita";
		break;
		case 13:
			clase = "Frambuesa";
		break;
		case 14:
			clase = "Frutilla a la Crema";
		break;
		case 15:
			clase = "Frutilla";
		break;
		case 16:
			clase = "Mascarpone";
		break;
		case 17:
			clase = "Granizado";
		break;
		case 18:
			clase = "Limón";
		break;
		case 19:
			clase = "Malbec y frutos rojos";
		break;
		case 20:
			clase = "Mantecol";
		break;
		case 21:
			clase = "Maracuyá";
		break;
		case 22:
			clase = "Melón";
		break;
		case 23:
			clase = "Menta Granizada";
		break;
		case 24:
			clase = "Mousse de Arándanos";
		break;
		case 25:
			clase = "Mousse de Maracuyá";
		break;
		case 26:
			clase = "Sambayón Italiano";
		break;
		case 27:
			clase = "Tramontana";
		break;
		default:
			clase = "Crema Americana";
	}
	return clase;
}

/****************** Funcion que recibe el id numero de referencia de un sabor y retorna el nombre que lo representa. */
function getNameTopping(id){
	id = parseInt(id);
	var clase = "";
	switch(id){
		case 1:
			clase = "Alemndras";
		break;
		case 2:
			clase = "Granola";
		break;
		case 3:
			clase = "Brownie";
		break;
		case 4:
			clase = "Chips de Chocolate";
		break;
		case 5:
			clase = "Galletas de Chocolate Blanco";
		break;
		case 6:
			clase = "Galletas de Chocolate";
		break;
		case 7:
			clase = "Merenguitos";
		break;
		case 8:
			clase = "M&M";
		break;
		case 9:
			clase = "Nueces";
		break;
		case 10:
			clase = "Praliné";
		break;
		case 11:
			clase = "Salsa de Chocolate";
		break;
		case 12:
			clase = "Salsa de Frambuesa";
		break;
		case 13:
			clase = "Salsa de Leche Condensada";
		break;
		case 14:
			clase = "Salsa de dulce de leche";
		break;
		case 15:
			clase = "Salsa de Mora";
		break;
		case 16:
			clase = "Salsa de Naranja";
		break;
		default:
			clase = "Alemndras";
	}
	return clase;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

/********************************************/
function getBase64Image(img){
	// Create an empty canvas element
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;
	// Copy the image contents to the canvas
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0);
	// Get the data-URL formatted image
	// Firefox supports PNG and JPEG. You could check img.src to guess the
	// original format, but be aware the using "image/jpg" will re-encode the image.
	var dataURL = canvas.toDataURL("image/png");
	return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
