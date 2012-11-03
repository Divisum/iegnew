/* Copyright (C) 2007 - 2011 YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

jQuery(function($){
	var Warp = Warp || {}; Warp.Settings = {"bganimation":"1","background":"disco","itemColor":null};
	
	/* Animate background position */
	var animateBackgroungPos = function(selector, options) {
		
		if((navigator.userAgent.match(/(iPhone|iPod|iPad)/i))) {
			return;
		}
		
		var elements = $(selector);

		var options = $.extend({
			transition: 'linear',
			repeat: 5,
			duration: 5000,
			direction: 1,
			width: 558
		}, options);
		
		var timer = false;
		
		function animate() {
			
			if(options.repeat==-1) {
				clearInterval(timer);
				return;
			}
			
			$(elements).each(function(i){
				
				if ($.browser.msie) {
					$(this).stop().css({'background-position-x': "0px", 'background-position-y': "40px"}).animate({ 
						'background-position-x': (options.direction * options.width) + "px",
						'background-position-y': "40px" 
					}, options.duration, options.transition );
				} else {
				
					$(this).stop().css('background-position', "0px 40px").animate({ 
						'background-position': (options.direction * options.width) + "px 40px" 
					}, options.duration, options.transition );
				
				}
			});
			
			options.repeat--;
			
			if(options.repeat==0) {
				options.transition = 'easeOutSine';
				options.duration = 2 * options.duration;
			}	
		}
		
		if (options.repeat) {
			timer = window.setInterval(animate, options.duration);
			animate();
		}	
	}
	
	var bgwidth = 558;
	var bgduration = 5000;
	
	switch(Warp.Settings.background) {
		
		case 'disco':
			repeat = 2;
			bgduration = 12500;
			bgwidth = 759;
			break;
	}
	
	$('#menu').css("visibility", "hidden");
	
	$(window).bind("load", function(){
		
		//matchHeight();
		
		/* Dropdown menu */
		//$('#menu').dropdownMenu({ mode: 'slide', dropdownSelector: 'div.dropdown:first', centerDropdown: true, fixWidth: true}).css("visibility", "visible");	
		
		if (Warp.Settings.bganimation == 1) {			
			//animateBackgroungPos('div#wrapper_content', {direction: -1, width: bgwidth, duration: bgduration});
		}		
	})
	
});