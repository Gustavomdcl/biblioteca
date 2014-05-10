/*! jQuery Dropdown v1.00.0 | (c) 2014, 2014 | */

$('.nav li').mouseenter(function () {
	$(this).children('.nav').css('display','block');
});

$('.nav li').mouseleave(function () {
	$(this).children('.nav').css('display','none');
});