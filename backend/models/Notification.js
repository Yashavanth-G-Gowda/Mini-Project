const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  message: String,
  userID: { type: mongoose.Schema.Types.ObjectId },
  sendDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Notification', notificationSchema);
