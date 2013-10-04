$('document').ready(function(){

	$('#search-input').focus(function(){
		$('#search-link').addClass('search-link-input');	
	});

	$('#search-input').blur(function(){
		$('#search-link').removeClass('search-link-input');	
	});

	$('#search-link').click(function(){
		$('#search-form').submit();
	});
});