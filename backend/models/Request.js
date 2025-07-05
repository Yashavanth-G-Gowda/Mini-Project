const mongoose = require('mongoose');

const requestSchema = new mongoose.Schema({
  requestID: { type: String, required: true, unique: true },
  userID: { type: mongoose.Schema.Types.ObjectId },
  bookTitle: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Request', requestSchema);
