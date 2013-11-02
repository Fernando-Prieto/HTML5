define(["backbone", "collections/MoviesCollection", "views/MovieView"], function(Backbone, MoviesCollection, MovieView) {

	var movies = new MoviesCollection();

	var createView = Backbone.View.extend({

	  el: $('#new-movie-container'),

	  events: {
	    'click #new-movie-button': 'create', 
	  },

	  initialize: function() { 

	    this.listenTo(movies, 'add', this.addOne);
	    this.listenTo(movies, 'reset', this.addAll);
	    movies.fetch();
	  },

	  create: function() {
	  	if(this.$('#new-movie-title').val() !== "" && this.$('#new-movie-year').val()!==""){
		  	movies.create({
					title: this.$('#new-movie-title').val(),
					year: this.$('#new-movie-year').val()
				});
	  	}
	  },

		/* 	Add a single movie item to the list by creating a view for it, and
  			appending its element to the <ul>. */
	  addOne: function(movie) {
	    var view = new MovieView({model: movie});	   
	    this.$("#movie-list").append(view.render().el);
	  },

	  // Add all items in the **movies** collection at once.
    addAll: function() {
      movies.each(this.addOne, this);
    }

	});

	return createView;

});