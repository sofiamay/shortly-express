var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',

  initialize: function() {
    this.on('creating', this.hashPassword, this);
  },

  hashPassword: function(model, attrs, options) {
    // var realPassword = model.attributes.password;
    var hash = bcrypt.hashSync(model.attributes.password);
    model.attributes.password = hash;
  },

  comparePassword: function(model, attrs, options) {
    var check = bcrypt.compareSync(model.attributes.password);
  }

});

module.exports = User;