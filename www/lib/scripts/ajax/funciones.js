 $().ready(function() {
	load_clubs();	
});

function load_clubsbydistrito(id){
	
	$.ajax({
		type: 'POST',	  
	 	url :   PATH+"/pages/ajax/getclubs/"+id,
	 	dataType : "json",

	    success: function(data){
	    	//$(".wrapper_options").empty();
	    	$(".distrito_barcelona").show('slow');
			$.each(data,function(index, value){
				$("#clubs_lists").append(
					'<article onmouseover="show_my_info(' + value.ID_club + ',1);" onmouseout="show_my_info(' + value.ID_club + ',2);"><div id="wrapper_logo_club_' + value.ID_club + '" class="wrapper"><a href="' + URL + '/club/' + value.slug + '"><img  id="club_' + value.ID_club + '" src="'+ URL + "/www/lib/images/discotecas/logos/" + value.logo + '" alt="' + value.nombre + '" title="' + value.nombre + '" /></a><p id="desc_logo_club_' + value.ID_club + '" onclick="window.open(\'' + URL + '/club/' + value.slug + '\',\'_self\');" style="display: none;"><span class="titulo_club">'+value.nombre+'</span><br /> <br />Vestimenta: '+value.vestimenta+'</p></div></article>'
				);
			});				
	    },
	    beforeSend: function(){
	     
	    
	    },
	    complete: function(){
	      
	    }	 	
	});	
}

 $(function() {

});
function show_my_info(id,opcion){
	switch(opcion) {
		case 1:			
			$("#club_"+id).fadeTo('slow',0.2);
			$("#desc_logo_club_"+id).css({display: ""});		
		break;
		case 2:
			$("#club_"+id ).stop(true).fadeTo(100, 1);			
			$("#desc_logo_club_"+id).css({display: "none"});
		break;
	}	 
}
function load_sub_menu_clubs(opcion){
	$.ajax({
		type: 'POST',	  
	 	url :   PATH+"/pages/ajax/getsubmenufilters/"+id,
	 	dataType : "json",

	    success: function(data){	    	
			$.each(data,function(index, value){
				$("#submenu_opciones").append(
					'<article onmouseover="show_my_info(' + value.ID_vestimenta + ',1);" onmouseout="show_my_info(' + value.ID_vestimenta + ',2);"><div id="wrapper_logo_club_' + value.ID_vestimenta + '" class="wrapper"><a href="' + URL + '/club/' + value.slug + '"><img  id="club_' + value.ID_vestimenta + '" src="'+ URL + "/www/lib/images/discotecas/logos/" + value.logo + '" alt="' + value.nombre + '" title="' + value.nombre + '" /></a><p id="desc_logo_club_' + value.ID_vestimenta + '" onclick="window.open(\'' + URL + '/club/' + value.slug + '\',\'_self\');" style="display: none;"><span class="titulo_club">'+value.nombre+'</span><br /> <br />Vestimenta: '+value.vestimenta+'</p></div></article>'
				);
			});				
	    },
	    beforeSend: function(){
	  
	      $(".distrito_barcelona").slideUp();
	    },
	    complete: function(){
	      
	    }	 	
	});	
}
function load_clubs(){
	$.ajax({
		type: 'POST',	  
	 	url :   PATH+"/pages/ajax/getclubs/0",
	 	dataType : "json",

	    success: function(data){
	    	$("#clubs_lists").empty();
	    	$(".wrapper_options").empty();
	    	$('#clubs_lists').show('slow');
			$.each(data,function(index, value){
				$("#clubs_lists").append(
					'<article onmouseover="show_my_info(' + value.ID_club + ',1);" onmouseout="show_my_info(' + value.ID_club + ',2);"><div id="wrapper_logo_club_' + value.ID_club + '" class="wrapper"><a href="' + URL + '/club/' + value.slug + '"><img  id="club_' + value.ID_club + '" src="'+ URL + "/www/lib/images/discotecas/logos/" + value.logo + '" alt="' + value.nombre + '" title="' + value.nombre + '" /></a><p id="desc_logo_club_' + value.ID_club + '" onclick="window.open(\'' + URL + '/club/' + value.slug + '\',\'_self\');" style="display: none;"><span class="titulo_club">'+value.nombre+'</span><br /> <br />Vestimenta: '+value.vestimenta+'</p></div></article>'
				);
			});				
	    },
	    beforeSend: function(){	     
	      $(".distrito_barcelona").slideUp();
	    },
	    complete: function(){	    
	    }	 	
	});
}

function load_distritos(){
	$('#clubs_lists').slideUp();
	$(".wrapper_options").empty();

	$(".wrapper_options").append('<div class="distrito_barcelona"><img src="' + URL + '/www/lib/images/paises/provincias/ciudades/distrito_barcelona.jpg" border="0" usemap="#Map" /></div>');
}

function load_vestimentas(){
	$('#clubs_lists').slideUp();
	
	$.ajax({
		type: 'POST',	  
	 	url :   PATH+"/pages/ajax/getvestimentas",
	 	dataType : "json",

	    success: function(data){
	    	$(".wrapper_options").empty();
			$.each(data,function(index, value){
				$(".wrapper_options").append(
					'<article onmouseover="show_my_info(' + value.ID_vestimenta + ',1);" onmouseout="show_my_info(' + value.ID_vestimenta + ',2);" onclick="load_clubsbyvestimenta(' + value.ID_vestimenta + ');"><div id="wrapper_logo_club_' + value.ID_vestimenta + '" class="wrapper"><img  id="club_' + value.ID_vestimenta + '" src="'+ URL + "/www/lib/themes/royal/images/vestimentas/" + value.slug + '.jpg" alt="' + value.nombre + '" title="' + value.nombre + '" /><p id="desc_logo_club_' + value.ID_vestimenta + '" onclick="" style="display: none;"><span class="titulo_club">'+value.vestimenta+'</span></p></div></article>'
				);
			});				
	    },
	    beforeSend: function(){

	    },
	    complete: function(){
	   
	    }	 	
	});		
}
function load_edades(){
	$('#clubs_lists').slideUp();
	
	$.ajax({
		type: 'POST',	  
	 	url :   PATH+"/pages/ajax/getedades",
	 	dataType : "json",

	    success: function(data){
	    	$(".wrapper_options").empty();
			$.each(data,function(index, value){
				$(".wrapper_options").append(
					'<article onmouseover="show_my_info(' + value.ID_edad + ',1);" onmouseout="show_my_info(' + value.ID_edad + ',2);" onclick="load_clubsbyedad(' + value.ID_edad + ');"><div id="wrapper_logo_club_' + value.ID_edad + '" class="wrapper"><img  id="club_' + value.ID_edad + '" src="'+ URL + "/www/lib/themes/royal/images/edades/" + value.edad + '.png" alt="' + value.edad + '" title="' + value.edad + '" /><p id="desc_logo_club_' + value.ID_edad + '" onclick="" style="display: none;"><span class="titulo_club">'+value.edad+'</span></p></div></article>'
				);
			});				
	    },
	    beforeSend: function(){

	    },
	    complete: function(){
	     
	    }	 	
	});		
}

function load_clubsbyvestimenta(id) {
	$.ajax({
		type: 'POST',	  
	 	url :   PATH+"/pages/ajax/getclubsbyvestimenta/"+id,
	 	dataType : "json",

	    success: function(data){
	    	$("#clubs_lists").empty();
	    	$('#clubs_lists').show('slow');
			$.each(data,function(index, value){

				$("#clubs_lists").append(
					'<article onmouseover="show_my_info(' + value.ID_club + ',1);" onmouseout="show_my_info(' + value.ID_club + ',2);"><div id="wrapper_logo_club_' + value.ID_club + '" class="wrapper"><a href="' + URL + '/club/' + value.slug + '"><img  id="club_' + value.ID_club + '" src="'+ URL + "/www/lib/images/discotecas/logos/" + value.logo + '" alt="' + value.nombre + '" title="' + value.nombre + '" /></a><p id="desc_logo_club_' + value.ID_club + '" onclick="window.open(\'' + URL + '/club/' + value.slug + '\',\'_self\');" style="display: none;"><span class="titulo_club">'+value.nombre+'</span><br /> <br />Vestimenta: '+value.vestimenta+'</p></div></article>'
				);
			});				
	    },
	    beforeSend: function(){

	    },
	    complete: function(){
	    	
	    }	 	
	});	
}

function load_clubsbyedad(id) {
	$.ajax({
		type: 'POST',	  
	 	url :   PATH+"/pages/ajax/getclubsbyedad/"+id,
	 	dataType : "json",

	    success: function(data){
	    	$("#clubs_lists").empty();
	    	$('#clubs_lists').show('slow');
			$.each(data,function(index, value){

				$("#clubs_lists").append(
					'<article onmouseover="show_my_info(' + value.ID_club + ',1);" onmouseout="show_my_info(' + value.ID_club + ',2);"><div id="wrapper_logo_club_' + value.ID_club + '" class="wrapper"><a href="' + URL + '/club/' + value.slug + '"><img  id="club_' + value.ID_club + '" src="'+ URL + "/www/lib/images/discotecas/logos/" + value.logo + '" alt="' + value.nombre + '" title="' + value.nombre + '" /></a><p id="desc_logo_club_' + value.ID_club + '" onclick="window.open(\'' + URL + '/club/' + value.slug + '\',\'_self\');" style="display: none;"><span class="titulo_club">'+value.nombre+'</span><br /> <br />Vestimenta: '+value.vestimenta+'</p></div></article>'
				);
			});				
	    },
	    beforeSend: function(){

	    },
	    complete: function(){
	    
	    }	 	
	});	
}