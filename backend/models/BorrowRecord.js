const mongoose = require('mongoose');

const borrowRecordSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, required: true, refPath: 'userModel' },
  userModel: { type: String, required: true, enum: ['Student', 'Faculty'] },
  bookID: { type: mongoose.Schema.Types.ObjectId, ref: 'Book' },
  borrowDate: { type: Date, default: Date.now },
  dueDate: { type: Date },
  fineAmount: { type: Number, default: 0 }
});

module.exports = mongoose.model('BorrowRecord', borrowRecordSchema);
