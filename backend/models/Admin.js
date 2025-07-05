const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  id: { type: String, unique: true },
  password: {type:String }
});

module.exports = mongoose.model('Admin', adminSchema);
