Movies.Router.map(function () {
  this.resource('movies', { path: '/' });
});

Movies.MoviesRoute = Ember.Route.extend({
  model: function () {
    return this.store.find('movie');
  }
});