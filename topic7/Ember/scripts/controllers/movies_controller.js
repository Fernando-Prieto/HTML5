Movies.MoviesController = Ember.ArrayController.extend({

  actions: {

    createMovie: function () {
      // Get the movie title set by the "New Movie" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      var year = this.get('newYear');
      if (!year.trim()) { return; }

      // Create the new Movie model
      var movie = this.store.createRecord('movie', {
        title: title,
        year: year
      });

      // Clear the text field
      this.set('newTitle', '');
      this.set('newYear', '');

      // Save the new model
      movie.save();
      
    }
  }
});