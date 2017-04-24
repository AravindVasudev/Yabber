const mongoose = require('mongoose');

// Group Schema
let GroupSchema = new mongoose.Schema({
  name: String
  picture: String,
  members: Array,
  messages: Array,
  private: Boolean
});

module.exports = mongoose.model('Group', GroupSchema);
