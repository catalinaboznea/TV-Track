var mongoose = require('mongoose');

var schemaOptions = {
  timestamps: true,
  toJSON: {
    virtuals: true
  }
};

var showSchema = new mongoose.Schema({
  name: String,
  season: Number,
  status: String,
  list: {type: String, enum: ['watching', 'waiting', 'finished']}
}, schemaOptions);

var Show = mongoose.model('Show', showSchema);

module.exports = Show;
