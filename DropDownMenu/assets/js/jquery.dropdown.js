/*! jQuery Dropdown v1.00.0 | (c) 2014, 2014 | */

$('.nav li').mouseover(function () {
	$(this).children('.nav').css('display','block');
});

$('.nav li').mouseout(function () {
	$(this).children('.nav').css('display','none');
});