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
		renderFraction: function (currentClass, totalClass) {
			return '<span class="' + currentClass + '"></span>' +
			'<font class="strip"> ----- </font> ' +
			'<span class="' + totalClass + '"></span>';
		}
	},

});

function getScrollPosition(menu){
	if ($(this).scrollTop() > 80) {
		if(menu){
			$(".move").removeClass('white');
			$(".move").addClass('black');
			$(".inverse").append('<style>.btn4 .icon:before{background-color:black;}</style>');
			$(".inverse").append('<style>.btn4 .icon:after{background-color:black;}</style>');
		}
		$(".nav-mob").addClass('white');
	} else {
		if(menu){
			$(".move").removeClass('black');
			$(".move").addClass('white');
			$(".inverse").append('<style>.btn4 .icon:before{background-color:white;}</style>');
			$(".inverse").append('<style>.btn4 .icon:after{background-color:white;}</style>');
		}
	}
}

$(document).ready(function(){
	var menu = true;

	getScrollPosition(menu);



	// ONSCROLL
	$(window).scroll(function(){
		getScrollPosition(menu);	
	});

	// SLIDE MENU
	$(".btn-menu").click(function(){
		$(".menu").removeClass('menu-in');
		$(".menu").addClass('menu-out');
		$(".container-fluid").removeClass('cont-up');
		$(".container-fluid").addClass('cont-down');
	});
	
	$(".convert").append('<style>.btn4 .icon:after{background-color:black;}</style>');
	$(".convert").append('<style>.btn4 .icon:before{background-color:black;}</style>')
	$('.burger-menu').click(function(){
		if (menu) {
			menu = false;
			$(".menu").removeClass('menu-in');
			$(".menu").addClass('menu-out');
			$(".nav-mob").addClass('white');
			$(".nav-mob").removeClass('black');
			$(".move").addClass('white');
			$(".move").removeClass('black');
			$(".container-fluid").removeClass('cont-up');
			$(".container-fluid").addClass('cont-down');
			$(".convert").append('<style>.btn4 .icon:after{background-color:white;}</style>');
			$(".convert").append('<style>.btn4 .icon:before{background-color:white;}</style>');
			$(".inverse").append('<style>.btn4 .icon:after{background-color:white;}</style>');
			$(".inverse").append('<style>.btn4 .icon:before{background-color:white;}</style>');
		}else{
			menu = true;
			$(".nav-mob").removeClass('white');
			$(".nav-mob").addClass('black');
			$(".menu").removeClass('menu-out');
			$(".menu").addClass('menu-in');
			$(".container-fluid").removeClass('cont-down');
			$(".container-fluid").addClass('cont-up');
			$(".convert").append('<style>.btn4 .icon:after{background-color:black;}</style>');
			$(".convert").append('<style>.btn4 .icon:before{background-color:black;}</style>');
			if ($(window).scrollTop() > 80) {
				$(".move").removeClass('white');
				$(".move").addClass('black');
				$(".inverse").append('<style>.btn4 .icon:before{background-color:black;}</style>');
				$(".inverse").append('<style>.btn4 .icon:after{background-color:black;}</style>');
			} else {
				$(".move").removeClass('black');
				$(".move").addClass('white');
				$(".inverse").append('<style>.btn4 .icon:before{background-color:white;}</style>');
				$(".inverse").append('<style>.btn4 .icon:after{background-color:white;}</style>');
			}
		}
	});
	// $(".burger-menu").click(function(){
	// 	$(".menu").removeClass('menu-in');
	// 	$(".menu").addClass('menu-out');
	// 	$(".move").addClass('white');
	// 	$(".move").removeClass('black');
	// 	$(".container-fluid").removeClass('cont-up');
	// 	$(".container-fluid").addClass('cont-down');
	// 	$(".inverse").append('<style>.btn4 .icon:after{background-color:white;}</style>');
	// 	$(".inverse").append('<style>.btn4 .icon:before{background-color:white;}</style>');
	// });
	$(".btn-close").click(function(){
		$(".menu").removeClass('menu-out');
		$(".menu").addClass('menu-in');
		$(".container-fluid").removeClass('cont-down');
		$(".container-fluid").addClass('cont-up');
	});

	$('.burger-menu').click (function(){
		$(this).toggleClass('open');
	});

});