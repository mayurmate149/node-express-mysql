var db = require('../dbconnection.js');
var User = require('../modules/user');

var User = {

    getAllUsers: function (callback) {

        return db.query("Select * from user", callback);

    }

};

module.exports = User;