$('document').ready(function(){

	$('#search-input').focus(function(){
		$('#search-link').addClass('search-link-input');	
	});

	$('#search-input').blur(function(){
		$('#search-link').removeClass('search-link-input');	
	});
	

	$('#search-form').submit(function(){
		if($('#search-input').val() != "")
		{
			alert("Submit simulation. Searching: "+$('#search-input').val());
		}
		else
		{
			return false;
		}
	});
});