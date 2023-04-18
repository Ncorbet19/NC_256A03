const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  Key: Number,
  Title: String,
  Genre: [String],
  Actors: [String],
  Year: Number,
  Runtime: Number,
  Revenue: Number
});

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;
