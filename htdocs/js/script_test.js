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
			buildCartel($.userdata.words);
		});
		// Verifico que la cantidad de palabras sea entre 7 y 10 palabras.
		if($.userdata.hasOwnProperty("words_counter") && $.userdata.words_counter.words >= 7 && $.userdata.words_counter.words <= 10){
			$('#step_1').hide();
			$('body').addClass("step-2-bg");
			$('#step_2').show();
			// Guardo el array de palabras en el objeto global.
			$.userdata.words = $('#text_post_content').val().split(' ');
			$.userdata.txt = $('#text_post_content').val();
			// Guardo el identificador del tema por defecto.
			$.userdata.template = 1
			// Construyo el cartel.
			buildCartel($.userdata.words);
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
		// $('#loader').show();
		html2canvas($('#big_box_msg_'+$.userdata.template), {
			onrendered: function(canvas){
				document.body.appendChild(canvas);
				// var dataURL = canvas.toDataURL('image/png');
				// window.open(canvas.toDataURL("image/jpeg", 1.0), '_blank');
				// return;
				// $.ajax({
				// 	data: { img: dataURL, userID: $.userdata.userID },
				// 	type: 'POST',
				// 	dataType: 'json',
				// 	url: 'src/saveImage.php',
				// 	success: function(data){
				// 		FB.api(
				// 			'/me/photos',
				// 			'POST',
				// 			{
				// 				caption: "✍ 🗣Comparte tu consejo de 💪 salud y participa por una de las 6 gift card de $50.000 🎊 🎉 con Clínica Alemana. #comotecuidasen10palabras",
				// 				url: data.file_url
				// 			},
				// 			function(response){
				// 				if(response && !response.error){
				// 					/* Continuamos con el flujo y mostramos el mensaje final */
				// 					$.userdata.post_id = response.post_id;
				// 					$.userdata.origin = "desktop";
				// 					/* Guardamos al participante */
				// 					$.ajax({
				// 						data: {
				// 							action: "save",
				// 							userID: $.userdata.userID,
				// 							accessToken: $.userdata.accessToken,
				// 							first_name: $.userdata.first_name,
				// 							last_name: $.userdata.last_name,
				// 							name: $.userdata.name,
				// 							email: $.userdata.email,
				// 							words: $.userdata.txt,
				// 							template: $.userdata.template,
				// 							origin: $.userdata.origin,
				// 							post_id: $.userdata.post_id
				// 						},
				// 						type: "POST",
				// 						dataType: 'json',
				// 						url: 'src/participant.php',
				// 						success: function(data){
				// 							$('#step_2').hide();
				// 							$('body').removeClass("step-2-bg");
				// 							$('#step_3').show();
				// 						}
				// 					});
				// 				}else{
				// 					console.log('Ocurrio un error.');
				// 					console.log(response.error);
				// 				}
				// 				$('#loader').hide();
				// 			}
				// 		);
				// 	}
				// });
			}
		});
	});
});

/******************* HELPERS */
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
	var bigtext_alt = "";
	for(i = 1;(i < length-2) && (palabras[i] !== undefined);i++){
		bigtext_alt += palabras[i]+" ";
	}
	var bigtext_five = "";
	for(i = 0;(i < length-3) && (palabras[i] !== undefined);i++){
		bigtext_five += palabras[i]+" ";
	}
	// Acorde a lo seleccionado desplegamos.
	switch(cartel.attr('template')){
		case "1":
			// Reseteamos los estilos.
			cartel.find(".span-title-text").removeAttr('style');
			cartel.find(".line-span2").removeAttr('style');
			/////////////////////////////////////////////
			/// Espacio 1 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".span-title-text").html(palabras[0]);
			cartel.find(".span-title-text").css("text-transform", "uppercase !important");
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(palabras[0].length > 11){
				var porcentaje_tamaño_fit = (11*100)/palabras[0].length;
				var fontdefaultsize = cartel.find(".span-title-text").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".span-title-text").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 2 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".line-span2").html(palabras[1]);
			cartel.find(".line-span2").css("text-transform", "capitalize !important");
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if(palabras[1].length > 14){
				var porcentaje_tamaño_fit = (14*100)/palabras[1].length;
				var fontdefaultsize = cartel.find(".line-span2").css("font-size").replace("px", "");
				var fontfinalsieze = (fontdefaultsize*porcentaje_tamaño_fit)/100;
				cartel.find(".line-span2").css("font-size", fontfinalsieze);
			}
			/////////////////////////////////////////////
			/// Espacio 3 ///////////////////////////////
			/////////////////////////////////////////////
			cartel.find(".line-span3").html(bigtext+' '+'<span id="big_last_word_03_01" class="last-word-line">'+ palabras[length-1] +'</span>');
			// % respecto al tamaño original -> (tope*100)/cantidad -> %
			// tamaño fuente equivalente al % calculado -> (tamaño_inicial*porcentaje_al_cual_corresponde_el_tamaño)/100 -> pixeles
			if((bigtext.length + palabras[length-1].length) > 70){
				var porcentaje_tamaño_fit = (70*100)/(bigtext.length + palabras[length-1].length);
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
			if(palabras[0].length > 45){
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
			if(palabras[1].length > 14){
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
			if(bigtext.length > 43){
				var porcentaje_tamaño_fit = (43*100)/palabras[length-1].length;
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