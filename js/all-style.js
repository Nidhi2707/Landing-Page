$(document).ready(function(){
	// For Mobile Menu
	$("#mobilemenu").click(function(){
		$("header .custnav").slideToggle();
	});
	// For Placeholader Animation
	$('.animtfield').focus(function(){
	  $(this).parents('.fieldcol').addClass('focused');
	});

	$('.animtfield').blur(function(){
	  var inputValue = $(this).val();
	  if ( inputValue == "" ) {
	    $(this).parents('.fieldcol').removeClass('focused');  
	  } 
	});
	// Top Space
	function topspacemt(){
		var topheaderheight = $("header").outerHeight();
	    $(".topspace").css('margin-top', topheaderheight - 1);
	}
	topspacemt();
	$(window).resize(function() {
		topspacemt();
	});

	$(window).scroll(function() {
	    if ($(this).scrollTop() >= 50) {
	        $('#return-to-top').fadeIn(200);
	    } else {
	        $('#return-to-top').fadeOut(200);
	    }
	});
	$('#return-to-top').click(function() {
	    $('body,html').animate({
	        scrollTop : 0
	    }, 500);
	});
});


