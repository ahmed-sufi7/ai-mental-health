const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  preferences: Object
});
module.exports = mongoose.model('User', UserSchema);
