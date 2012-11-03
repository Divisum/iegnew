function carga_calendario(monthname,day,direction,newmonth,camino) {
	//alert(PATH+"/pages/ajax/createcalendar/" + monthname + "/" + day + "/" + direction + "/" + newmonth + "/" + camino);

	$.ajax({
		type: 'POST',	  
	 	url :  PATH+"/pages/ajax/createcalendar/" + monthname + "/" + day + "/" + direction + "/" + newmonth + "/" + camino,
	 	dataType : "json",

	    success: function(data){
	    	
	      	$("#lists_calendar").html(
				data,
				'<div class="separador"></div>'
			);

			$("#carousel").elastislide({
				imageW 		: 110,
				margin		: 20,
				border		: 4,
				easing		: 'easeInBack'
			});   			
	    },
	    beforeSend: function(){
	      $('#ajax_loader').show();
	    },
	    complete: function(){
	      $('#ajax_loader').hide();
	    }
	});
}

function get_month(monthname,day,direction,newmonth) {
	//alert(monthname + " < - > " + day + " < - > " + direction);
	var camino = 0;
	carga_calendario(monthname,day,direction,newmonth,camino);
}

function load_custom_event(fecha,idclub,camino){
	//
	if(fecha == "current" && idclub == 0 && camino == 0) {
		url_accion = PATH+"/pages/ajax/geteventbydate/" + fecha + "/0/0";		
	}
	else {
		url_accion = PATH+"/pages/ajax/geteventbydate/" + fecha + "/" + idclub + "/" + camino;
	}
	//alert(url_accion);

	$.ajax({
		type: 'POST',	  
	 	url :  url_accion,
	 	dataType : "json",

	    success: function(data){	    	
	    	$("#events").empty();	
	      	$("#events").html(
				data
			);
	    },
	    beforeSend: function(){
	      $('#ajax_loader').show();
	    },
	    complete: function(){
	      $('#ajax_loader').hide();
	    }
	});	
}

function load_clubslider_event(fecha){
		
	$("span").removeClass("active_day");
	$("span").addClass("no_active_days");

	$("#titulo_"+fecha).removeClass("no_active_days");
	$("#numero_"+fecha).removeClass("no_active_days");

	$("#titulo_"+fecha).addClass("active_day");
	$("#numero_"+fecha).addClass("active_day");

	carga_slider_carrousel(fecha);

	$.ajax({
		type: 'POST',	  
	 	url: PATH+"/pages/ajax/getpackbydate/" + fecha + "/0/0",
	 	dataType : "json",

	    success: function(data){
	    	$("#events").empty();
	      	$("#events").html(data);
	    }
	});		
}

function show_clubways_info(way,option,eventid) {
	if(option == 1){
		switch(way){
			case 1:
				$(".sub_right_"+eventid).html('Lista Gratuita');
			break;
			case 2:
				$(".sub_right_"+eventid).html('Una botella gratis');
			break;
			case 3:
				$(".sub_right_"+eventid).html('hola');
			break;
		}
	}
	else{		
		switch(way){
			case 1:				
				$(".sub_right_"+eventid).empty();
			break;
			case 2:
				$(".sub_right_"+eventid).empty();
			break;
			case 3:
				$(".sub_right_"+eventid).empty();
			break;
		}			
	}
}

function order_eventsby_club(fecha,idclub,camino){
	url_accion = PATH+"/pages/ajax/geteventbydate/" + fecha + "/" + idclub + "/" + camino;

	$.ajax({
		type: 'POST',	  
	 	url :  url_accion,
	 	dataType : "json",

	    success: function(data){	    	
	    	$("#events").empty();	
	      	$("#events").html(
				data
			);
	    },
	    beforeSend: function(){
	      $('#ajax_loader').show();
	    },
	    complete: function(){
	      $('#ajax_loader').hide();
	    }
	});
}

function isPastDate(value) {
	var now    = new Date;
	var target = new Date(value);

	if (now.getYear() < target.getYear()) {
		return false;
	}
	else if (now.getMonth() < target.getMonth()) {
		return false;
	}
	else if (now.getDate() <= target. getDate()) {
		return false;
	}

	return true;
}

//alert(isPastDate('2012-08-28'));

function carga_slider_carrousel(fecha){	
	url_accion = PATH+"/pages/ajax/getcarrousel/" + fecha;
	$("#carousel").remove();
	$(".numeros_fecha").empty();
//2012-08-27



	var format_day = fecha.split("-");
	year = format_day[0];
	month = format_day[1];
	day = format_day[2];
	$(".numeros_fecha").removeClass("no_active_days");


	var mes = "";
	switch(month){
		case "01":
			mes = 'enero';
			break;
		case "02":
			mes = 'febrero';
			break;
		case "03":
		 	mes = 'marzo';
		 	break;
		case "04":
		 	mes = 'abril';
		 	break
		case "05":
		 	mes = 'mayo';
		 	break;
		case "06":
		 	mes = 'junio';
		 	break;
		case "07":
		 	mes = 'julio';
		 	break;
		case "08":
		 	mes = 'agosto';
		 	break;
		case "09":
		 	mes = 'septiembre';
		 	break;
		case "10":
		 	mes = 'octubre';
		 	break;
		case "11":
		 	mes = 'noviembre';
		 	break;
		case "12":
			mes = 'diciembre';
			break;
	};
	
	if(isPastDate(fecha) == true){
		$("#lists_calendar h2").css("color","#ccc");
	}
	else{
		$("#lists_calendar h2").css("color","#bfbb6c");
	}


	$(".numeros_fecha").html(day + " de " + mes + " del " + year);
	$.ajax({
		type: 'POST',	  
	 	url :  url_accion,
	 	dataType : "json",

	    success: function(data){
			$('#lists_calendar').append(
				data
			);

			$("#carousel").elastislide({
				imageW 		: 110,
				margin		: 20,
				border		: 4,
				easing		: 'easeInBack'
			});
	    }
	});
}