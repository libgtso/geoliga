$(document).ready(function() {
	$('a#service').fancybox();
	$('a#service').fancybox({
		hideOnContentClick:true
	});

	$('.objects-carousel').owlCarousel({
		loop: false,
		items: 1,
		dots: true,
		navText: " ",
		mouseDrag: false
	});

	$('.slider-list').owlCarousel({
		loop: false,
		items: 1,
		dots: true,
		navText: " ",
		mouseDrag: false
	});
});