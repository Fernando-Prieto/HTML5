$(document).ready (function (){

	$('.hidden').fadeIn(1500, function(){
		$('.alias').focus();
	});

	$('#response-button').click(function (){
		getResponse();
	});

	getTweets();
});

function getResponse() {

	var name = $('.alias').val();

	$.get( 'http://bootcamp.aws.af.cm/welcome/'+name, function(resp) {
	  	
	  	var responseContent = '';
	  	var $responseSection = $('#response-div > p');

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

function getTweets() 
{	
	var $tweetsSection = $('#tweets-section');

	var processTweets = function (resp) {
							console.log(resp);

							var responseContent = resp.statuses;

							for(i = 0; i < responseContent.length; i++)
							{
							 	var code =  '<div class="tweet"><p><strong>From: </strong>'+responseContent[i].user.name+'</p>'+
										 	'<p><strong>Created: </strong>'+responseContent[i].user.created_at+'</p>'+
										 	'<p><strong>Img. url: </strong>'+responseContent[i].user.profile_image_url+'</p>'+
										 	'<p><strong>Text: </strong>'+responseContent[i].text+'</p>'+
										 	'</div>'

								$tweetsSection.append(code);
							}
						}


	var errorHandling = function( req, status, err ) {
					    	console.log( 'Something went wrong', status, err );
						}

	$.ajax({
			  url: 'http://tweetproxy.ap01.aws.af.cm/search',
			  type: 'POST',
			  dataType: 'jsonp',
			  data: { q: 'html5' },
			  success: processTweets,
			  error: errorHandling
			});
}