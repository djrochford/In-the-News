var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var storySchema = new Schema({
  headline: String,
  source: String,
  byline: String,
  snippet: String,
  url: String
})

var Stories = mongoose.model('stories', storySchema);

module.exports = Stories;