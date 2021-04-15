const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
});

const Author = mongoose.model('User', AuthorSchema);

module.exports = Author;
