var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: String,
  name: String,
  age: String,
  refreshToken: String,
  idToken: String
});

var User = mongoose.model('User', UserSchema);

var dbport = process.env.MONGODB_URI || 'mongodb://localhost/swiftsrv'

mongoose.connect(dbport);

var db = mongoose.connection;

db.on('error', console.error.bind(console,'connection error...'));
db.once('open', function (){
  console.log('db opened');
});

module.exports = User;