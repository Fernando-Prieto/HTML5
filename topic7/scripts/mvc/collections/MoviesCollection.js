define(["backbone", "localStorage", "models/Movie"], function(Backbone, localStorage, Movie) {

	var Movies = Backbone.Collection.extend({

	  model: Movie,

	  // Save all of the movie items under the `"movies"` namespace.
    localStorage: new Backbone.LocalStorage('movies')

	});

	return Movies;

});