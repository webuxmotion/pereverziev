const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const docSchema = new Schema({
  title: { type: String, required: true, maxlength: 128 },
  content: { type: String, required: true },
});

module.exports = mongoose.model('Doc', docSchema);
