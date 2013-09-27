$(document).ready (function (){

	$('.hidden').fadeIn(500, function(){
		$('.alias').focus();
	});

	$('#response-button').click(function (){
		getResponse();
	});
});

function getResponse() {

	var name = $('.alias').val();

	$.get( 'http://bootcamp.aws.af.cm/welcome/'+name, function(resp) {
	  	
	  	var responseContent = '';
	  	var $responseSection = $('#response-section > p');

	  	if(resp.response)
		{
			$responseSection.removeClass('error');
			responseContent = getResponseCode(resp.response,name);			 
		}
		else
		{
			responseContent = $.parseJSON(resp).error;
			$responseSection.addClass('error');
		}

		$responseSection.html(responseContent);	
	});
}

function getResponseCode(response, name) {
	return response.replace(name,'<mark>'+ name +'</mark>');
}