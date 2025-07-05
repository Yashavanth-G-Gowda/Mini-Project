const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookID: { type: String, required: true },
  title: { type: String, required: true },
  author: String,
  publisher:String,
  rackLocation: String,
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model('Book', bookSchema);
