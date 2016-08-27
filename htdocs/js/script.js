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
						$('#alert_message').html("Debes completar la cuarta linea con texto.");
						$('#alert').fadeIn();
						$('a.close-alert').click(function(event){
							event.preventDefault();
							$('#alert').fadeOut();
						});
					}
				}else{
					// Tercera linea.
					// Error conteo lineas texto.
					$('#alert_message').html("Debes completar la tercera linea con texto.");
					$('#alert').fadeIn();
					$('a.close-alert').click(function(event){
						event.preventDefault();
						$('#alert').fadeOut();
					});
				}
			}else{
				// Segunda linea.
				// Error conteo lineas texto.
				$('#alert_message').html("Debes completar la segunda linea con texto.");
				$('#alert').fadeIn();
				$('a.close-alert').click(function(event){
					event.preventDefault();
					$('#alert').fadeOut();
				});
			}
		}else{
			// Primera linea.
			// Error conteo lineas texto.
			$('#alert_message').html("Debes completar la primera linea con texto.");
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
function buildCartel(linea_1, linea_2, linea_3, linea_4){
	var cartel = $('.box-featured:visible');
	// Cargamos el template seleccionado.
	$.userdata.template = cartel.attr('template');


	// obtengo el array y la cantidad de palabras entre de 7 a 10.
	var length_1 = linea_1.length
	var length_2 = linea_2.length
	var length_3 = linea_3.length
	var length_4 = linea_4.length

	var length_1_txt = linea_1.join(" ");
	var length_2_txt = linea_2.join(" ");
	var length_3_txt = linea_3.join(" ");
	var length_4_txt = linea_4.join(" ");





	// Concateno acorde al largo maximo de palabras y las palabras aportadas para evitar los textos undefined.
	// var bigtext = "";
	// for(i = 2;(i < length-1) && (palabras[i] !== undefined);i++){
	// 	bigtext += palabras[i]+" ";
	// }
	// var bigtext_alt = "";
	// for(i = 1;(i < length-2) && (palabras[i] !== undefined);i++){
	// 	bigtext_alt += palabras[i]+" ";
	// }
	// var bigtext_five = "";
	// for(i = 0;(i < length-2) && (palabras[i] !== undefined);i++){
	// 	bigtext_five += palabras[i]+" ";
	// }





	// Acorde a lo seleccionado desplegamos.
	// Importante
	// % respecto al tamaño original -> (tope*100)/cantidad -> %
	// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
	switch(cartel.attr('template')){
		case "1":
			// Construyo bigtext
			var bigtext = length_3_txt + " " + length_4_txt;
			console.log(bigtext);
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
			cartel.find(".line-span3").html(bigtext+' '+'<span id="big_last_word_03_01" class="last-word-line">'+ palabras[length-1] +'</span>');
			if((bigtext.length + palabras[length-1].length) > 45){
				var porcentaje_tamaño_fit = (45*100)/(bigtext.length + palabras[length-1].length);
				var fontdefaultsize = cartel.find(".line-span3").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span3").css("font-size", fontfinalsieze);
			}
			break;
		case "2":
			// Reseteamos los estilos.
			cartel.find(".span-title-text").removeAttr('style');
			cartel.find(".line-span2").removeAttr('style');
			cartel.find(".line-span3").removeAttr('style');
			/////////////////////////////////////////////
			/// Espacio 1 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".span-title-text").html(palabras[0]);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(palabras[0].length > 15){
				var porcentaje_tamaño_fit = (15*100)/palabras[0].length;
				var fontdefaultsize = cartel.find(".span-title-text").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".span-title-text").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 2 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".line-span2").html(palabras[1]);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(palabras[1].length > 8){
				var porcentaje_tamaño_fit = (8*100)/palabras[1].length;
				var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span2").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 3 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".line-span3").html(bigtext+' '+'<span id="big_last_word_03_02" class="last-word-line">'+ palabras[length-1] +'</span>');
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if((bigtext.length + palabras[length-1].length) > 48){
				var porcentaje_tamaño_fit = (48*100)/(bigtext.length + palabras[length-1].length);
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
			/////////////////////////////////////////////
			/// Espacio 1 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".line-span1").html(palabras[0]+"<span id='big_last_word_01_03' class='last-word-line'>"+bigtext_alt+"</span>");
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(palabras[0].length > 19){
				var porcentaje_tamaño_fit = (19*100)/palabras[0].length;
				var fontdefaultsize = cartel.find(".line-span1").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span1").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 2 ///////////////////////////////
			/////////////////////////////////////////////
			if(bigtext_alt.length > 44){
				var porcentaje_tamaño_fit = (44*100)/bigtext_alt.length;
				var fontdefaultsize = cartel.find(".last-word-line").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".last-word-line").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 3 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".line-span2").html(palabras[length - 2]);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(palabras[length - 2].length > 11){
				var porcentaje_tamaño_fit = (11*100)/palabras[length - 2].length;
				var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span2").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 4 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".span-title-text").html(palabras[length - 1]);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if((palabras[length - 1].length) > 16){
				var porcentaje_tamaño_fit = (16*100)/palabras[length - 1].length;
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
			/////////////////////////////////////////////
			/// Espacio 1 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".line-span1").html(palabras[0]);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(palabras[0].length > 18){
				var porcentaje_tamaño_fit = (18*100)/palabras[0].length;
				var fontdefaultsize = cartel.find(".line-span1").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span1").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 2 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".line-span2").html(palabras[1]);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(palabras[1].length > 13){
				var porcentaje_tamaño_fit = (13*100)/palabras[1].length;
				var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span2").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 3 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".span-title-text").html(bigtext);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(bigtext.length > 69){
				var porcentaje_tamaño_fit = (69*100)/bigtext.length;
				var fontdefaultsize = cartel.find(".span-title-text").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".span-title-text").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 4 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".last-word-line").html(palabras[length-1]);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(palabras[length-1].length > 19){
				var porcentaje_tamaño_fit = (19*100)/palabras[length-1].length;
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
			/////////////////////////////////////////////
			/// Espacio 1 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".line-span1").html(bigtext_five);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(bigtext_five.length > 45){
				var porcentaje_tamaño_fit = (45*100)/bigtext_five.length;
				var fontdefaultsize = cartel.find(".line-span1").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span1").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 2 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".line-span2").html(palabras[length-2]);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(palabras[length-2].length > 14){
				var porcentaje_tamaño_fit = (14*100)/palabras[length-2].length;
				var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span2").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 3 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".span-title-text").html(palabras[length-1]);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(palabras[length-1].length > 20){
				var porcentaje_tamaño_fit = (20*100)/palabras[length-1].length;
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
			/////////////////////////////////////////////
			/// Espacio 1 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".line-span1").html(palabras[0]);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(palabras[0].length > 25){
				var porcentaje_tamaño_fit = (25*100)/palabras[0].length;
				var fontdefaultsize = cartel.find(".line-span1").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span1").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 2 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".line-span2").html(palabras[1]);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(palabras[1].length > 11){
				var porcentaje_tamaño_fit = (11*100)/palabras[1].length;
				var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span2").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 3 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".line-text").html(bigtext);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(bigtext.length > 43){
				var porcentaje_tamaño_fit = (43*100)/bigtext.length;
				var fontdefaultsize = cartel.find(".line-text").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-text").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 4 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".last-word-line").html(palabras[length-1]);
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(palabras[length-1].length > 27){
				var porcentaje_tamaño_fit = (27*100)/palabras[length-1].length;
				var fontdefaultsize = cartel.find(".last-word-line").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".last-word-line").css("font-size", fontfinalsieze);
			}
			break;
	}
}