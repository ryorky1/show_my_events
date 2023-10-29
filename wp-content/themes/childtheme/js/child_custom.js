( function( $ ) {

	$( document ).ready(function($){

	    // Trigger mobile menu.
	    // $('#mobile-trigger').sidr({
		// 	timing: 'ease-in-out',
		// 	speed: 500,
		// 	source: '#mob-menu',
		// 	name: 'sidr-main'
	    // });

		// Fix footer widget.
		// if ( $( '#footer-widgets' ).length > 0 ) {
		// 	var footerWidgetHeight = $( '#footer-widgets' ).height();
		// 	$( '#footer-widgets' ).height( footerWidgetHeight );
		// 	$( '#footer-widgets .first-col.footer-widget-area' ).height( footerWidgetHeight - 25 );
		// }

		// Implement go to top.
		// $( window ).on( 'scroll',function(){
		// 	if ($( this ).scrollTop() > 100) {
		// 		$( '#btn-scrollup' ).fadeIn();
		// 	} else {
		// 		$( '#btn-scrollup' ).fadeOut();
		// 	}
		// });

		// $( '#btn-scrollup' ).on( 'click',function(){
		// 	$( 'html, body' ).animate( { scrollTop: 0 }, 600 );
		// 	return false;
		// });

		// Trigger mobile responsive menu
		// var menu_overlay = jQuery('<div id="menu-overlay"> </div>');
		// var menu_overlay = jQuery('<div id="overlay" onclick="off()"><div id="text">Overlay Text</div></div>');
		// var menu_overlay = jQuery('<div id="overlay" onclick="toggleMenu()"><div id="text">Overlay Text</div></div>');
		var mobile_menu = jQuery('#mob-menu').html();
		// console.log(mobile_menu);
		var menu_overlay = jQuery('<div id="overlay" class="hide-menu"><div id="text"><div id="#mob-menu">'+mobile_menu+'</div></div></div>');
		menu_overlay.appendTo(document.body);
		// let value = document.getElementById("overlay").className;
		// console.log(value);
		$('#mobile-trigger').removeAttr('href');
		$('#mobile-trigger').click(function(){
			// let menu_class = document.getElementById("overlay");
			// console.log(value);
			toggleMenu()
			// document.getElementById("#mobile-trigger").removeAttribute("href");
			// alert('here');
			// document.getElementById("#mobile-trigger").removeAttribute("href");
			// document.getElementById("overlay").style.display = "block";
			// $('#overlay').toggleClass("show-menu");
			// var element = document.getElementById("overlay");
			// element.classList.toggle("show-menu")
		})
		function toggleMenu(){
			const element = document.getElementById("overlay");
			if(element.className == "hide-menu"){
				element.className = "show-menu";
				document.getElementById("overlay").style.display = "block";
				// alert('here');
			}
			else {
				element.className = "hide-menu";
				document.getElementById("overlay").style.display = "none";
			}
			// alert(element.className);
			// var element = document.getElementById("overlay");
			// element.classList.toggle("mystyle");
		}
		// function on() {
		// 	document.getElementById("overlay").style.display = "block";
		//   }
		  
		// function off() {
		// 	document.getElementById("overlay").style.display = "none";
		//   }
	});

} )( jQuery );