$('document').ready(function(){

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