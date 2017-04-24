const mongoose = require('mongoose');
const bcrypt   = require('bcrypt');

// User Schema
let UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  department: String,
  year: Number,
  collegeID: String,
  picture: String,
  password: String,
  group: Array,
  admin: Boolean
});

// Generates Hash for entry
UserSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Validates Password
UserSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
