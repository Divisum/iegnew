$(document).on("ready", function(){	
	$('#slideshowHolder').jqFancyTransitions({ width: 830, height: 200 });
	carga_calendario("current",0,"next");
	load_custom_event("current",0);

	$('#carousel').elastislide({
		imageW 		: 110,
		margin		: 20,
		border		: 4,
		easing		: 'easeInBack'
	});	
});

function carga_calendario(monthname,day,direction) {

	$.ajax({
		type: 'POST',	  
	 	url :  PATH+"/pages/ajax/loadcalendar/" + monthname + "/" + day + "/" + direction,
	 	dataType : "json",

	    success: function(data){
	    	//alert(PATH+"/pages/ajax/loadcalendar/" + monthname + "/" + day + "/" + direction);
	      	$("#lists_calendar").html(
				data,
				'<div class="separador"></div>'
			);
			
			$('#carousel').elastislide({
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
function get_month(monthname,day,direction) {
	//alert(monthname + " < - > " + day + " < - > " + direction);
	carga_calendario(monthname,day,direction);
}

function load_custom_event(fecha,idclub){
	//
	if(fecha == "current" && idclub == 0) {
		url_accion = PATH+"/pages/ajax/geteventbydate/" + fecha + "/0";		
	}
	else {
		url_accion = PATH+"/pages/ajax/geteventbyclub/" + fecha + "/" + idclub;
	}

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
	alert(fecha);
	$("#carousel").empty();
	$.ajax({
		type: 'POST',	  
	 	url :  PATH+"/pages/ajax/loadClubSlider/" + fecha,
	 	dataType : "json",

	    success: function(data){

	      	$("#carousel").html(
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

function order_eventsby_club(fecha,idclub){
	url_accion = PATH+"/pages/ajax/geteventbydate/" + fecha + "/" + idclub;

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