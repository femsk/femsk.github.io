$(function() {

	// Custom JS
	$('.mnu-search-btn').click(function() {
		$(this).css('display', 'none');
		$(this).next('.input-search-btn').css('display', 'block').focus();
	});

	$('.input-search-btn').keydown(function(e){
		if(e.keyCode==13){
			$(this).css('display', 'none');
			$(this).prev('.mnu-search-btn').css('display', 'block');
		}
		else if(e.keyCode===27){
			$(this).css('display', 'none');
			$(this).prev('.mnu-search-btn').css('display', 'block');
		}
	});
	$("#header_login").click(function() {
    $(this).next("#myModal").modal('show');
  });

});
