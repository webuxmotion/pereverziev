const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const docSchema = new Schema({
  title: { type: String, required: true, maxlength: 256 },
  content: { type: String },
  link: { type: String },
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Card', docSchema);
