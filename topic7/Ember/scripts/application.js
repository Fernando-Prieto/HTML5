window.Movies = Ember.Application.create();

Movies.ApplicationAdapter = DS.LSAdapter.extend({
  namespace: 'movies-emberjs'
});