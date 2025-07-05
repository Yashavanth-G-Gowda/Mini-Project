const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BorrowRecord' }]
});

module.exports = mongoose.model('Student', studentSchema);
