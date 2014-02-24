//Placeholder for IE
$(document).ready(function() {
	    function add() {if($(this).val() == ''){$(this).val($(this).attr('placeholder')).addClass('placeholder');}}
	    function remove() {if($(this).val() == $(this).attr('placeholder')){$(this).val('').removeClass('placeholder');}}
	    if (!('placeholder' in $('<input>')[0])) { // Create a dummy element for feature detection
	        $('input[placeholder], textarea[placeholder]').blur(add).focus(remove).each(add); // Select the elements that have a placeholder attribute
	        $('form').submit(function(){$(this).find('input[placeholder], textarea[placeholder]').each(remove);}); // Remove the placeholder text before the form is submitted
	    }
	});