/*! Suiting v1.00.0 | (c) 2014, 2014 | http://browserhacks.com/ */

//Mac ou Windows
var isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
if(isMac){
	//Is Mac
	$('body').addClass('mac');
} else {
	//Is Windows
	$('body').addClass('windows');
}

//Chrome
var isChrome = !!window.chrome && !!window.chrome.webstore;
if(isChrome){
	//Is Chrome
	$('body').addClass('chrome');
}

//FireFox
var isFF = !!navigator.userAgent.match(/firefox/i);
if(isFF){
	//Is FireFox
	$('body').addClass('firefox');
}

//Internet Explorer
var ieVersion = (function() { if (new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})").exec(navigator.userAgent) != null) { return parseFloat( RegExp.$1 ); } else { return false; } })();
if(ieVersion) {
	//Is FireFox
	$('body').addClass('ie');
}

	//IE 8
	var isIE8 = document.all && document.querySelector && !document.addEventListener;
	if(isIE8) {
		//Is IE8
		$('body').addClass('ie8');
	}

	//IE 9
	var isIE9 = document.all && document.addEventListener && !window.atob;
	if(isIE9) {
		//Is IE9
		$('body').addClass('ie9');
	}

	//IE 10
	var isIE10 = eval("/*@cc_on!@*/false") && document.documentMode === 10;
	if(isIE10) {
		//Is IE10
		$('body').addClass('ie10');
	}

	//IE 11
	var isIE11 = '-ms-scroll-limit' in document.documentElement.style && '-ms-ime-align' in document.documentElement.style;
	if(isIE11) {
		//Is IE11
		if($('body').hasClass("ie")){} else {
			$('body').addClass('ie');
		}
		if($('body').hasClass("ie10")){} else {
			$('body').addClass('ie11');
		}
	}

//Opera
var isOpera = !!window.opera || /opera|opr/i.test(navigator.userAgent);
if(isOpera){
	//Is Opera
	$('body').addClass('opera');
}

//Safari
var isSafari = /constructor/i.test(window.HTMLElement);
if(isSafari){
	//Is Safari
	$('body').addClass('safari');
}