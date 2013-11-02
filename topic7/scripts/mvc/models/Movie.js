define(["backbone"], function(Backbone) {
  var Movie = Backbone.Model.extend({

    defaults: {
      title: 'title',
      year: 'year'           
    },

    initialize: function() {

      if (!this.get("title")) {
          this.set({"title": this.defaults.title});
      }

      if (!this.get("year")) {
          this.set({"year": this.defaults.title});
      }   
    }

  });

  return Movie;   
});