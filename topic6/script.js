$(document).ready(function(){

	$.getJSON('data/profile.json', function(resp){

		setupHandlebars(resp);
		setupUnderscore(resp);
		setupDust(resp);
	
	});

	$('#myTab a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
	});

});

function setupHandlebars(data) {

	var source   = $("#handlebarsTemplate").html();
	var template = Handlebars.compile(source);
	var html = template(data);

	$('#handlebars-column').html(html);

}

function setupUnderscore(data) {

	var source   = $("#underscoreTemplate").html();

	var compiled = _.template(source);
   	var html = compiled(data);

   	$("#underscore-column").html(html);

}

function setupDust(data) {

	var compiled = dust.compile($('#dustTemplate').html(), $('#dustTemplate').attr('id'));
	dust.loadSource(compiled);

    dust.render($('#dustTemplate').attr('id'), data, function(err, out) {
    	$('#dust-column').html(out);
    });
    
}