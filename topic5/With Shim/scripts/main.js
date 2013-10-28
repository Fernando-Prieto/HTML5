require(["modules/Movie","modules/Director", 'jquery'],
    function(Movie, Director, jQueryModule) {

        var topGun = new Movie('Top Gun', 1986);

		console.log('*** Movie created: '+topGun.get('title')+' ('+topGun.get('year')+') ***');

		topGun.play();
		topGun.stop();

		var tony = new Director('Tony Scott');
		tony.set('quotes',['quote1','quote2','quote3','quote4']);

		topGun.set('director',tony);

		jQueryModule('#quotes-section').append('<p>'+topGun.get('director').speak()+'</p>');
	
});