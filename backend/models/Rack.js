const mongoose = require('mongoose');

const rackSchema = new mongoose.Schema({
  rackID: { type: String, unique: true },
  location: String,
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});

module.exports = mongoose.model('Rack', rackSchema);
