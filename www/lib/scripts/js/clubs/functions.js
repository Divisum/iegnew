 $().ready(function() {
 	//$("#map").hide();
	$("#example1").zAccordion({
		timeout: 4000,
		slideWidth: 374,
		width: 697,
		height: 250,
		trigger: "mouseover",
		slideClass: "frame"
	});   
	
});

function show_content_banner(opcion) { 	
 	switch(opcion){
 		case 1:
 			$("#map").css({visibility: "hidden"});
 			$("#example1").show();

			$('#btn_imagenes').removeClass('btn_active');			
			$('#btn_imagenes').addClass('btn_images_club');

  			$('#btn_mapa').removeClass('btn_images_club');
        	$('#btn_mapa').addClass('btn_active');


 		break;
 		case 2:
 			$("#example1").hide();
 			$("#map").css({visibility: ""});

			$('#btn_imagenes').removeClass('btn_images_club');			
			$('#btn_imagenes').addClass('btn_active');

			$('#btn_mapa').removeClass('btn_active');
        	$('#btn_mapa').addClass('btn_images_club');

 		break;
 	}
 }

function show_club(id) {
	$("#"+id).toggle("slow");

}

 $(function() {

 	$("#btn_imagenes").mouseover(function() {
 		if($(this).hasClass('btn_active')) {
 			$(this).addClass('over_effect');
 		} 		
	});

 	$("#btn_imagenes").mouseout(function() {
 		if($(this).hasClass('over_effect')) {
 			$(this).removeClass('over_effect');
 		} 
	});	

 	$("#btn_mapa").mouseover(function() {
 		if($(this).hasClass('btn_active')) {
 			$(this).addClass('over_effect');
 		} 		
	});

 	$("#btn_mapa").mouseout(function() {
 		if($(this).hasClass('over_effect')) {
 			$(this).removeClass('over_effect');
 		} 		
	});

	$("#map").gMap({
		controls: false,
		scrollwheel: true,
		maptype: 'ROADMAP',
		markers: [
			{ 
				latitude: club_latitud,
				longitude: club_longitud,
				icon: { 
					image: URL + "/www/lib/images/gmap_pin_grey.png",
					iconsize: [26, 46],
					iconanchor: [12,46],
					infowindowanchor: [12, 0] 
				} 
			}
		],
		icon: {
			image: URL + "/www/lib/images/gmap_pin_grey.png", 
			iconsize: [26, 46],
			iconanchor: [12, 46]
		},
		latitude: club_latitud,
		longitude: club_longitud,
		zoom: 16
	});	
});