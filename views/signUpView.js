Shortly.signUpView = Backbone.View.extend({
  template: Templates['signup'],

  events: {
    'submit': 'signUpUser'
  }, 

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  signUpUser: function(e) {
    e.preventDefault();
    //put user into database
    console.log('This is the signupUser function.');
  },

  success: function(link) {
    this.stopSpinner();
    console.log('Great, you\'re all signed up!');
  },

  failure: function(model, res) {
    this.stopSpinner();
    console.log('Sorry, you failed to sign up!');
  },

  startSpinner: function() {
    this.$el.find('img').show();
    this.$el.find('form input[type=submit]').attr('disabled', 'true');
    this.$el.find('.message')
      .html('')
      .removeClass('error');
  },

  stopSpinner: function() {
    this.$el.find('img').fadeOut('fast');
    this.$el.find('form input[type=submit]').attr('disabled', null);
    this.$el.find('.message')
      .html('')
      .removeClass('error');
  }
});
