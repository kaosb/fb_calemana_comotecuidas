$(document).ready(function(){
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
	// Bind campos de captura.
	$('#linea_1').focus(function(){
		Countable.live(document.getElementById('linea_1'), function(counter){
			$.userdata.words_counter_linea_1 = counter;
		});
	});
	$('#linea_2').focus(function(){
		Countable.live(document.getElementById('linea_2'), function(counter){
			$.userdata.words_counter_linea_2 = counter;
		});
	});
	$('#linea_3').focus(function(){
		Countable.live(document.getElementById('linea_3'), function(counter){
			$.userdata.words_counter_linea_3 = counter;
		});
	});
	$('#linea_4').focus(function(){
		Countable.live(document.getElementById('linea_4'), function(counter){
			$.userdata.words_counter_linea_4 = counter;
		});
	});
	/******************* PASO 0 */
	$('#btnstep0').click(function(event){
		// Verificamos el estado del login.
		FB.getLoginStatus(function(response) {
			// Check login status on load, and if the user is
			// already logged in, go directly to the welcome message.
			if(response.status == 'connected'){
				onLogin(response);
				if($.userdata.userID != null && $.userdata.userID != undefined && $.userdata.accessToken != null && $.userdata.accessToken != undefined){
					if(!checkParticipantion($.userdata.userID)){
						alert("Ya habias participado, ahora puedes volver a publicar tu consejo de salud.");
					}
					// avanzamos al paso 1
					$('#step_0').fadeOut('fast', function() {
						$('#step_1').fadeIn('fast');
					});
				}
			}else{
				// Otherwise, show Login dialog first.
				FB.login(function(response){
					onLogin(response);
					if($.userdata.userID != null && $.userdata.userID != undefined && $.userdata.accessToken != null && $.userdata.accessToken != undefined){
						if(!checkParticipantion($.userdata.userID)){
							alert("Ya habias participado, ahora puedes volver a publicar tu consejo de salud.");
						}
						// avanzamos al paso 1
						$('#step_0').fadeOut('fast', function() {
							$('#step_1').fadeIn('fast');
						});
					}
				}, {scope: 'publish_actions, email, public_profile'});
			}
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
			buildCartel($.userdata.words_linea_1, $.userdata.words_linea_2, $.userdata.words_linea_3, $.userdata.words_linea_4);
		});
		// Verifico que la cantidad de palabras sea entre 7 y 10 palabras.
		if($.userdata.hasOwnProperty("words_counter_linea_1") && $.userdata.words_counter_linea_1.words > 0){
			if($.userdata.hasOwnProperty("words_counter_linea_2") && $.userdata.words_counter_linea_2.words > 0){
				if($.userdata.hasOwnProperty("words_counter_linea_3") && $.userdata.words_counter_linea_3.words > 0){
					if($.userdata.hasOwnProperty("words_counter_linea_4") && $.userdata.words_counter_linea_4.words > 0){
						$contador = $.userdata.words_counter_linea_1.words + $.userdata.words_counter_linea_2.words + $.userdata.words_counter_linea_3.words + $.userdata.words_counter_linea_4.words;
						if($contador >= 7 && $contador <= 10){
							$('#step_1').hide();
							$('body').addClass("step-2-bg");
							$('#step_2').show();
							// Guardo el array de palabras en su respectiva variable y en el objeto global.
							$.userdata.words_linea_1 = $('#linea_1').val().split(' ');
							$.userdata.txt_linea_1 = $('#linea_1').val();
							$.userdata.words_linea_2 = $('#linea_2').val().split(' ');
							$.userdata.txt_linea_2 = $('#linea_2').val();
							$.userdata.words_linea_3 = $('#linea_3').val().split(' ');
							$.userdata.txt_linea_3 = $('#linea_3').val();
							$.userdata.words_linea_4 = $('#linea_4').val().split(' ');
							$.userdata.txt_linea_4 = $('#linea_4').val();
							// Guardo el identificador del tema por defecto.
							$.userdata.template = 1
							// Construyo el cartel.
							buildCartel($.userdata.words_linea_1, $.userdata.words_linea_2, $.userdata.words_linea_3, $.userdata.words_linea_4);
						}else{
							// Error conteo palabras texto.
							$('#alert_message').html("Debes usar entre 7 y 10 palabras.");
							$('#alert').fadeIn();
							$('a.close-alert').click(function(event){
								event.preventDefault();
								$('#alert').fadeOut();
							});
						}
					}else{
						// Cuarta linea.
						// Error conteo lineas texto.
						// $('#alert_message').html("Debes completar la cuarta linea con texto.");
						$('#alert_message').html("Debes escribir en todas las líneas.");
						$('#alert').fadeIn();
						$('a.close-alert').click(function(event){
							event.preventDefault();
							$('#alert').fadeOut();
						});
					}
				}else{
					// Tercera linea.
					// Error conteo lineas texto.
					// $('#alert_message').html("Debes completar la tercera linea con texto.");
					$('#alert_message').html("Debes escribir en todas las líneas.");
					$('#alert').fadeIn();
					$('a.close-alert').click(function(event){
						event.preventDefault();
						$('#alert').fadeOut();
					});
				}
			}else{
				// Segunda linea.
				// Error conteo lineas texto.
				// $('#alert_message').html("Debes completar la segunda linea con texto.");
				$('#alert_message').html("Debes escribir en todas las líneas.");
				$('#alert').fadeIn();
				$('a.close-alert').click(function(event){
					event.preventDefault();
					$('#alert').fadeOut();
				});
			}
		}else{
			// Primera linea.
			// Error conteo lineas texto.
			// $('#alert_message').html("Debes completar la primera linea con texto.");
			$('#alert_message').html("Debes escribir en todas las líneas.");
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
	$('#btnstep2_next').click(function(event){
		event.preventDefault();
		$('#select-design-boxes').fadeOut('fast', function(){
			$('#publish-facebook-box').fadeIn('fast');
		});
	});
	$('#btnstep2_share').click(function(event){
		event.preventDefault();
		$('#loader').show();
		html2canvas($('#big_box_msg_'+$.userdata.template), {
			onrendered: function(canvas){
				// document.body.appendChild(canvas);
				// var dataURL = canvas.toDataURL("image/jpeg", 1.0)
				var dataURL = canvas.toDataURL('image/png');
				$.ajax({
					data: { img: dataURL, userID: $.userdata.userID },
					type: 'POST',
					dataType: 'json',
					url: 'src/saveImage.php',
					success: function(data){
						FB.api(
							'/me/photos',
							'POST',
							{
								// caption: $('#text_post_facebook_content').val()+" #comotecuidasen10palabras",
								caption: $('#text_post_facebook_content').val(),
								url: data.file_url
							},
							function(response){
								if(response && !response.error){
									/* Continuamos con el flujo y mostramos el mensaje final */
									$.userdata.post_id = response.post_id;
									$.userdata.origin = "desktop";
									/* Guardamos al participante */
									$.ajax({
										data: {
											action: "save",
											userID: $.userdata.userID,
											accessToken: $.userdata.accessToken,
											first_name: $.userdata.first_name,
											last_name: $.userdata.last_name,
											name: $.userdata.name,
											email: $.userdata.email,
											words: $.userdata.txt,
											template: $.userdata.template,
											origin: $.userdata.origin,
											post_id: $.userdata.post_id
										},
										type: "POST",
										dataType: 'json',
										url: 'src/participant.php',
										success: function(data){
											$('#step_2').hide();
											$('body').removeClass("step-2-bg");
											$('#step_3').show();
										}
									});
								}else{
									console.log('Ocurrio un error.');
									console.log(response.error);
								}
								$('#loader').hide();
							}
						);
					}
				});
			}
		});
	});

	/*** SAMPLE */
	$('#btnstep1_sample').click(function(event){
		$('#help').fadeIn();
		$('a.close-alert').click(function(event){
			event.preventDefault();
			$('#help').fadeOut();
		});
	});

});

/******************* HELPERS */
// After login
function onLogin(response){
	$('#loader').show();
	$.userdata.userID = response.authResponse.userID;
	$.userdata.accessToken = response.authResponse.accessToken;
	// Obtengo informacion del perfil.
	FB.api('/me', {fields: 'name,first_name,last_name,email'}, function(data){
		$.userdata.name = data.name;
		$.userdata.first_name = data.first_name;
		$.userdata.last_name = data.last_name;
		$.userdata.email = data.email;
		console.log($.userdata);
	});
	$('#loader').hide();
	return true;
}
// Check participacion.
function checkParticipantion(userId){
	var respuesta = ""
	$.ajax({
		data: {
			userID: userId
		},
		type: "POST",
		dataType: 'json',
		url: 'src/checkparticipant.php',
		success: function(data){
			respuesta = data.status
		}
	});
	return respuesta
}
// despiela las bases.
function verBases(){
	var WindowObjectReference = window.open("http://www.alemana.cl/concursos/BasesProtocolizadasFBComoTeCuidasNov2016.pdf", "bases_concurso", "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes");
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
function buildCartel(linea_1, linea_2, linea_3, linea_4){
	var cartel = $('.box-featured:visible');
	// Cargamos el template seleccionado.
	$.userdata.template = cartel.attr('template');
	// Largo de cada bloque de texto.
	var length_1 = linea_1.length
	var length_2 = linea_2.length
	var length_3 = linea_3.length
	var length_4 = linea_4.length
	// String con cada bloque de texto unido por " ".
	var length_1_txt = linea_1.join(" ");
	var length_2_txt = linea_2.join(" ");
	var length_3_txt = linea_3.join(" ");
	var length_4_txt = linea_4.join(" ");
	// Acorde a lo seleccionado desplegamos.
	// Importante
	// % respecto al tamaño original -> (tope*100)/cantidad -> %
	// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
	switch(cartel.attr('template')){
		case "1":
			// Construyo bigtext
			var bigtext = length_3_txt + " " + length_4_txt;
			// Reseteamos los estilos.
			cartel.find(".span-title-text").removeAttr('style');
			cartel.find(".line-span2").removeAttr('style');
			// Espacio 1
			cartel.find(".span-title-text").html(length_1_txt);
			cartel.find(".span-title-text").css("text-transform", "uppercase !important");
			if(length_1_txt.length > 11){
				var porcentaje_tamaño_fit = (11*100)/length_1_txt.length;
				var fontdefaultsize = cartel.find(".span-title-text").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".span-title-text").css("font-size", fontfinalsieze);
			}
			// Espacio 2
			cartel.find(".line-span2").html(length_2_txt);
			cartel.find(".line-span2").css("text-transform", "capitalize !important");
			if(length_2_txt.length > 14){
				var porcentaje_tamaño_fit = (14*100)/length_2_txt.length;
				var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span2").css("font-size", fontfinalsieze);
			}
			// Espacio 3
			cartel.find(".line-span3").html(bigtext);
			if((bigtext.length) > 45){
				var porcentaje_tamaño_fit = (45*100)/bigtext.length;
				var fontdefaultsize = cartel.find(".line-span3").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span3").css("font-size", fontfinalsieze);
			}
			break;
		case "2":
			// Construyo bigtext
			var bigtext = length_3_txt + " " + length_4_txt;
			// Reseteamos los estilos.
			cartel.find(".span-title-text").removeAttr('style');
			cartel.find(".line-span2").removeAttr('style');
			cartel.find(".line-span3").removeAttr('style');
			// Espacio 1
			cartel.find(".span-title-text").html(length_1_txt);
			if(length_1_txt.length > 15){
				var porcentaje_tamaño_fit = (15*100)/length_1_txt.length;
				var fontdefaultsize = cartel.find(".span-title-text").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".span-title-text").css("font-size", fontfinalsieze);
			}
			// Espacio 2
			cartel.find(".line-span2").html(length_2_txt);
			if(length_2_txt.length > 8){
				var porcentaje_tamaño_fit = (8*100)/length_2_txt.length;
				var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span2").css("font-size", fontfinalsieze);
			}
			// Espacio 3
			cartel.find(".line-span3").html(bigtext);
			if(bigtext.length > 48){
				var porcentaje_tamaño_fit = (48*100)/bigtext.length;
				var fontdefaultsize = cartel.find(".line-span3").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span3").css("font-size", fontfinalsieze);
			}
			break;
		case "3":
			// Reseteamos los estilos.
			cartel.find(".line-span1").removeAttr('style');
			cartel.find(".last-word-line").removeAttr('style');
			cartel.find(".line-span2").removeAttr('style');
			cartel.find(".span-title-text").removeAttr('style');
			// Espacio 1
			cartel.find(".line-span1").html(length_1_txt+"<span id='big_last_word_01_03' class='last-word-line'>"+length_2_txt+"</span>");
			if(length_1_txt.length > 19){
				var porcentaje_tamaño_fit = (19*100)/length_1_txt.length;
				var fontdefaultsize = cartel.find(".line-span1").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span1").css("font-size", fontfinalsieze);
			}
			// Espacio 2
			if(length_2_txt.length > 44){
				var porcentaje_tamaño_fit = (44*100)/length_2_txt.length;
				var fontdefaultsize = cartel.find(".last-word-line").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".last-word-line").css("font-size", fontfinalsieze);
			}
			// Espacio 3
			cartel.find(".line-span2").html(length_3_txt);
			if(length_3_txt.length > 11){
				var porcentaje_tamaño_fit = (11*100)/length_3_txt.length;
				var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span2").css("font-size", fontfinalsieze);
			}
			// Espacio 4
			cartel.find(".span-title-text").html(length_4_txt);
			if((length_4_txt.length) > 16){
				var porcentaje_tamaño_fit = (16*100)/length_4_txt.length;
				var fontdefaultsize = cartel.find(".span-title-text").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".span-title-text").css("font-size", fontfinalsieze);
			}
			break;
		case "4":
			// Reseteamos los estilos.
			cartel.find(".line-span1").removeAttr('style');
			cartel.find(".line-span2").removeAttr('style');
			cartel.find(".span-title-text").removeAttr('style');
			cartel.find(".last-word-line").removeAttr('style');
			// Espacio 1
			cartel.find(".line-span1").html(length_1_txt);
			if(length_1_txt.length > 18){
				var porcentaje_tamaño_fit = (18*100)/length_1_txt.length;
				var fontdefaultsize = cartel.find(".line-span1").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span1").css("font-size", fontfinalsieze);
			}
			// Espacio 2
			cartel.find(".line-span2").html(length_2_txt);
			if(length_2_txt.length > 13){
				var porcentaje_tamaño_fit = (13*100)/length_2_txt.length;
				var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span2").css("font-size", fontfinalsieze);
			}
			// Espacio 3
			cartel.find(".span-title-text").html(length_3_txt);
			if(length_3_txt.length > 69){
				var porcentaje_tamaño_fit = (69*100)/length_3_txt.length;
				var fontdefaultsize = cartel.find(".span-title-text").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".span-title-text").css("font-size", fontfinalsieze);
			}
			// Espacio 4
			cartel.find(".last-word-line").html(length_4_txt);
			if(length_4_txt.length > 19){
				var porcentaje_tamaño_fit = (19*100)/length_4_txt.length;
				var fontdefaultsize = cartel.find(".last-word-line").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".last-word-line").css("font-size", fontfinalsieze);
			}
			break;
		case "5":
			// Construyo bigtext
			var bigtext = length_1_txt + " " + length_2_txt;
			// Reseteamos los estilos.
			cartel.find(".line-span1").removeAttr('style');
			cartel.find(".line-span2").removeAttr('style');
			cartel.find(".span-title-text").removeAttr('style');
			// Espacio 1
			cartel.find(".line-span1").html(bigtext);
			if(bigtext.length > 45){
				var porcentaje_tamaño_fit = (45*100)/bigtext.length;
				var fontdefaultsize = cartel.find(".line-span1").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span1").css("font-size", fontfinalsieze);
			}
			// Espacio 2
			cartel.find(".line-span2").html(length_3_txt);
			if(length_3_txt.length > 14){
				var porcentaje_tamaño_fit = (14*100)/length_3_txt.length;
				var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span2").css("font-size", fontfinalsieze);
			}
			// Espacio 3
			cartel.find(".span-title-text").html(length_4_txt);
			if(length_4_txt.length > 20){
				var porcentaje_tamaño_fit = (20*100)/length_4_txt.length;
				var fontdefaultsize = cartel.find(".span-title-text").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".span-title-text").css("font-size", fontfinalsieze);
			}
			break;
		case "6":
			// Reseteamos los estilos.
			cartel.find(".line-span1").removeAttr('style');
			cartel.find(".line-span2").removeAttr('style');
			cartel.find(".line-text").removeAttr('style');
			cartel.find(".last-word-line").removeAttr('style');
			// Espacio 1
			cartel.find(".line-span1").html(length_1_txt);
			if(length_1_txt.length > 25){
				var porcentaje_tamaño_fit = (25*100)/length_1_txt.length;
				var fontdefaultsize = cartel.find(".line-span1").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span1").css("font-size", fontfinalsieze);
			}
			// Espacio 2
			cartel.find(".line-span2").html(length_2_txt);
			if(length_2_txt.length > 11){
				var porcentaje_tamaño_fit = (11*100)/length_2_txt.length;
				var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span2").css("font-size", fontfinalsieze);
			}
			// Espacio 3
			cartel.find(".line-text").html(length_3_txt);
			if(length_3_txt.length > 43){
				var porcentaje_tamaño_fit = (43*100)/length_3_txt.length;
				var fontdefaultsize = cartel.find(".line-text").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-text").css("font-size", fontfinalsieze);
			}
			// Espacio 4
			cartel.find(".last-word-line").html(length_4_txt);
			if(length_4_txt.length > 27){
				var porcentaje_tamaño_fit = (27*100)/length_4_txt.length;
				var fontdefaultsize = cartel.find(".last-word-line").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".last-word-line").css("font-size", fontfinalsieze);
			}
			break;
	}
}