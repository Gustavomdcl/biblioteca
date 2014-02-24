// JavaScript Document
$(document).scroll(function () {
  var y = $(this).scrollTop();
  var footer_anchor = ($(this).height()-$(window).height())-$(footerAnchor).height();

//TOP SIZE APPEARS ===============
	if (y > topSize) {
		$('#scroll_button').fadeIn();
	} else {
		$('#scroll_button').fadeOut();
	}

//FOOTER ANCHOR ===============
  if (y < footer_anchor) {
      $('#scroll_button').css('bottom','20px');
  } else {
      $('#scroll_button').css('bottom',((y-footer_anchor)+20)+'px');
  }
});

//SCROLL BUTTON UP ===============
$(function(){
  $("#scroll_button").click(function() {
    $('html, body').animate({
			scrollTop: (0)
		}, 800);
  })
})