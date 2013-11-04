define(["underscore","backbone","models/Movie"], function(_, Backbone) {

  var movieView = Backbone.View.extend({

    tagName:  'li',

    // Cache the template function for a single item.
    template: _.template($('#underscoreTemplate').html()),

    events: {
      'click .delete': 'clear',
      'dblclick .info-movie': 'edit',
      'keypress .edit-title': 'updateOnEnter',
      'keypress .edit-year': 'updateOnEnter'
    },

    initialize: function() {
        this.listenTo(this.model, 'destroy', this.remove);
        this.listenTo(this.model, 'change', this.render);
    },

    render: function() {      
      this.$el.html(this.template(this.model.toJSON()));
      return this;
    },

    edit: function() {
      this.$('.info-movie').addClass("hidden");
      this.$('.edit-movie').removeClass("hidden");

      this.$('.edit-title').show();
      this.$('.edit-year').show();
      this.$('.edit-title').focus();
    },

    updateOnEnter: function(e) {
        if (e.keyCode == 13) 
        {
          this.model.save({title: this.$('.edit-title').val(), year: this.$('.edit-year').val()});
          this.$('.info-movie').removeClass("hidden");
          this.$('.edit-movie').addClass("hidden");
        }
    },

    clear: function() {
      this.model.destroy();
    },

    remove: function(){
      this.$el.remove();
    }

  });

  return movieView;

});