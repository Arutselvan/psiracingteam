/*
	Project Name : Mountain Biking
	Author Company : Ewebcraft
	Project Date: 16 June, 2015
	Author Website : http://www.ewebcraft.com
	Author Email : ewebcraft@gmail.com
*/

$(window).load(function(){
            $('#loader').fadeOut("slow");
        });

(function($) {
	"use strict";

					/* for Animation */

				new WOW().init();

					/* for Animation */


					/* Main Slider */

				 var slider = new MasterSlider();
    			 slider.setup('mainSlider' , {
			        width:1170,
			        height:675,
			        autoplay:true,
			        space:1,
			        loop:true,
			        dir:"v",
			        fullwidth:true,
			        centerControls:false,
			        speed:80,
			        preload:0,
					view:'scale'
			    });
			    slider.control('arrows');
			    slider.control('timebar' , {color:"#ffa800"});
			    
			    /* Smooth-Scroll */

				$(".scroll").click(function(event){
					
				event.preventDefault();
				$('html,body').animate({scrollTop:$(this.hash).offset().top}, 2000);
				});

				/* Smooth-Scroll */

				// pretty photo function call
				$("a[data-gal^='prettyPhoto']").prettyPhoto({hook: 'data-gal'});

				
				/* Map */

			function initialize() {
			    var mapCanvas = document.getElementById('map-canvas');
			    var mapOptions = {
			      center: new google.maps.LatLng(44.5403, -78.5463),
			      zoom: 8,
			      scrollwheel: false,
			      mapTypeId: google.maps.MapTypeId.ROADMAP
			    }
			    var map = new google.maps.Map(mapCanvas, mapOptions);
			}
		 	google.maps.event.addDomListener(window, 'load', initialize);

		 		/* Map */			

})(jQuery);