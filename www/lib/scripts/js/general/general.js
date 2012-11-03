$(document).on("ready", function(){
	$(".quienes").colorbox({
    	initialWidth: 612,
		initialHeight: 437,
		opacity: 0.65,
		iframe: true,
		width: 612, 
		height: 577
	});

	$(".organiza-fiesta").colorbox({
    	initialWidth: 612,
		initialHeight: 445,
		opacity: 0.65,
		iframe: true,
		width: 612, 
		height: 585
	});

	$('body').on('click', 'a.ajax', function() {
	    $(this).colorbox({
	    	initialWidth: 612,
			initialHeight: 455,
			opacity: 0.65,
			iframe: true,
			width: 612, 
			height: 468
		});
	});

	$('body').on('click', 'a.m-vips', function() {
	    $(this).colorbox({
	    	initialWidth: 612,
			initialHeight: 455,
			opacity: 0.65,
			iframe: true,
			width: 612, 
			height: 384
		});
	});

	$('body').on('click', 'a.tickets', function() {
	    $(this).colorbox({
	    	initialWidth: 612,
			initialHeight: 455,
			opacity: 0.65,
			iframe: true,
			width: 612, 
			height: 384
		});
	});

	$('body').on('click', 'a.listas', function() {
	    $(this).colorbox({
	    	initialWidth: 612,
			initialHeight: 455,
			opacity: 0.65,
			iframe: true,
			width: 612, 
			height: 384
		});
	});

	$("#keywords").keyup(function(){
		var kw = $("#keywords").val();
		//alert(kw);
		if(kw != ''){
			$('#results').css('display', 'block');
			$.ajax({
				type: 'POST',	  
 				url :  PATH+"/pages/ajax/buscador/" + kw,

				success: function(data){					
					$("#results").html('<li class="results-header">Resultados</li>');
 					$("#results").append( 						
 						data
 					);
					$("#results li").hover(function (){
				        	$(this).addClass('selected');
				    	},
				    	function() {
				        	$(this).removeClass('selected');        
				    	}
				    ); 					
				}
			});
		}
		else{
			$("#results").html("");
		}
		return false;
	});
 
   //Here I did a small html trick by the use of jquery.
   //Think, you are searching something by typing in the input field and the corresponding search
   //result showing in the corresponding specified div, just below the input field. Now if you click
   //on any displayed result, it will go to the specified url, but suppose you don't want to click anywhere
   //on the displayed search searchresults, and want to just close the displayed result, then what you do?
   //For that's why I have added a extra div "overlay" which contain overall viewport, so when you will click
   //anywhere other than "keywords" text field and "inputbox" div, "overlay" and "searchresults" div will set to display none,
   //mean they will hide.
   //Similarly when "keywords" input field regain focus, "overlay" an "searchresults" div become visible to you.
	$(".overlay").click(function(){
   		$(".overlay").css('display','none');

   	});

   	$("#keywords").focus(function(){
    	$(".overlay").css('display','block');
     	$('#results').css('display', 'block');
   });

   	$("#keywords").focusout(function() {
   		$('#results').css('display', 'none');
	});

	$('#tab-side-container').easytabs({
        animate: true,
        transitionIn: "slideDown",
        transitionInEasing: 'swing',
        tabActiveClass: "selected-tab",
        panelActiveClass: "displayed"
    });




	switch(SECTIONID){
		case 1:
			$('#slideshowHolder').jqFancyTransitions({ width: 830, height: 200 });

			var fecha = new Date();
			var month = fecha.getMonth()+1;
			var day = fecha.getDate();
			var year = fecha.getFullYear();

			
			var mes = "";
			switch(month){
				case 1:
					mes = 'enero';
					break;
				case 2:
					mes = 'febrero';
					break;
				case 3:
				 	mes = 'marzo';
				 	break;
				case 4:
				 	mes = 'abril';
				 	break
				case 5:
				 	mes = 'mayo';
				 	break;
				case 6:
				 	mes = 'junio';
				 	break;
				case 7:
				 	mes = 'julio';
				 	break;
				case 8:
				 	mes = 'agosto';
				 	break;
				case 9:
				 	mes = 'septiembre';
				 	break;
				case 10:
				 	mes = 'octubre';
				 	break;
				case 11:
				 	mes = 'noviembre';
				 	break;
				case 12:
					mes = 'diciembre';
					break;
			};
			if(day < 10){
				day = "0"+day;
			}
			
			carga_calendario(mes,day,"next",0,0);
			load_custom_event("current",0,0);

			$('#carousel').elastislide({
				imageW 		: 110,
				margin		: 20,
				border		: 4,
				easing		: 'easeInBack'
			});			
		break;
		case 2:
			carga_calendario("current",0,"next",1);
			load_custom_event("current",0,1);
		break;
		case 3:
			carga_calendario("current",0,"next",3);
			load_custom_event("current",0,3);
		break;
		case 4:
			carga_calendario("current",0,"next",2);
			load_custom_event("current",0,2);
		break;
	}
});

(function($) {
    $.extend($.fx.step,{
        backgroundPosition: function(fx) {
            if (fx.state === 0 && typeof fx.end == 'string') {
                var start = $.curCSS(fx.elem,'backgroundPosition');
                start = toArray(start);
                fx.start = [start[0],start[2]];
                var end = toArray(fx.end);
                fx.end = [end[0],end[2]];
                fx.unit = [end[1],end[3]];
            }
            var nowPosX = [];
            nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
            nowPosX[1] = "40px";     
            
            fx.elem.style.backgroundPosition = nowPosX[0]+' '+nowPosX[1];
            
           function toArray(strg){
               strg = strg.replace(/left|top/g,'0px');
               strg = strg.replace(/right|bottom/g,'100%');
               strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g,"$1px$2");
               var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
               return [parseFloat(res[1],10),res[2],parseFloat(res[3],10),res[4]];
           }
        }
    });

})(jQuery);

$('#royal_animated').css({backgroundPosition:'0px 0px'});

var to; 
function infinite(){
 to = setTimeout(function(){
    $('#royal_animated').animate({backgroundPosition:"-759px 40px"},12500, 'linear' ,function(){
      $('#royal_animated').css({backgroundPosition:'0px 40px'});
      infinite();
    });    
  });
}
infinite();