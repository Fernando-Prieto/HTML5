Movies.EditMovieView = Ember.TextField.extend({
  didInsertElement: function () {
    this.$().focus();
  }
});

Ember.Handlebars.helper('edit-movie', Movies.EditMovieView);