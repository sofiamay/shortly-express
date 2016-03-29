var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',

  addUser: function(req, res) {
    bcrypt.hash(req.body.password, 4, function(err, hash) {
      console.log('password is under the hashing knife!');
      // Store hash in your password DB.
      if (err) {
        throw err;
      } else {
        this.forge({
          name: req.body.name,
          password: hash 
        })
        .save()
        .catch(function(err) {
          res.status(500);
        });
      }
    });
  }
});

module.exports = User;