const mongoose = require('mongoose');

const TweetSchema = new mongoose.Schema({
  heading: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    default: 'Anonymous',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Tweet = mongoose.model('Tweet', TweetSchema);

module.exports = Tweet;
