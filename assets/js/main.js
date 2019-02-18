$(document).ready(function(){
	// ONSCROLL
	$(window).scroll(function(){
		if ($(this).scrollTop() > 300) {
			$(".move").addClass('black');
		} else {
			$(".move").removeClass('black');
		}
	});

	// SLIDE MENU


});