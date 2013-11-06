Movies.MovieController = Ember.ObjectController.extend({

  isEditing: false,

  actions: {

    editMovie: function () {
      this.set('isEditing', true);
    },

    acceptChanges: function () {
      this.set('isEditing', false);

      if (Ember.isEmpty(this.get('model.title')) || Ember.isEmpty(this.get('model.year'))) 
      {
        this.send('removeMovie');
      } 
      else 
      {
        this.get('model').save();
      }

    },

    removeMovie: function () {
      var movie = this.get('model');
      movie.deleteRecord();
      movie.save();
    }
  }
});