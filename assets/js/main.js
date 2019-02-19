var galleryTop = new Swiper('#slideshow', {
	spaceBetween: 0,
	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	loop:true,
	pagination: {
		el: '.number-image',
		type:'fraction',
	},
});


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
	$(".btn-menu").click(function(){
		$(".menu").removeClass('menu-in');
		$(".menu").addClass('menu-out');
	});
	$(".btn-close").click(function(){
		$(".menu").removeClass('menu-out');
		$(".menu").addClass('menu-in');
	});

});