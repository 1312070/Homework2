var mongoose = require('mongoose');
//connect to mongodb
//mongoose.connect('mongodb://localhost/QuanLyUser');
//define a schema
var mySchema = mongoose.Schema({
	username: String,
	email: String,
	password: String
});
//define a model
var User = mongoose.model('User', mySchema);

module.exports = User;