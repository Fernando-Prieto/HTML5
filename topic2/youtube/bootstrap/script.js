$('document').ready(function(){

	$('#search-input').focus(function(){
		$('#search-link').addClass('search-link-input');	
	});

	$('#search-input').blur(function(){
		$('#search-link').removeClass('search-link-input');	
	});

	$('#search-link').click(function(){
		if($('#search-input').val() != "")
		{
			alert("SEARCHING: "+$('#search-input').val());
			$('#search-form').submit();
		}
		
	});
});