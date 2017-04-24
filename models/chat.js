const mongoose = require('mongoose');

// Chat Schema
let ChatSchema = new mongoose.Schema({
  user: ObjectId,
  message: String,
  image: String,
  document: String,
  name: String,
  time: 'created_at',
  picture: String,
  group: ObjectId
});

module.exports = mongoose.model('Chat', ChatSchema);
