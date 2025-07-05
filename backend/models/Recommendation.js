const mongoose = require('mongoose');

const recommendationSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId },
  recommendedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }]
});

module.exports = mongoose.model('Recommendation', recommendationSchema);
