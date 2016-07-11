import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const schema = new Schema({
  a_str: { type: String },
  a_bool: { type: Boolean },
  a_double: { type: Number },
  a_date: { type: Date },
  a_32bit: { type: Number },
  a_64bit: { type: Number },
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Thing', schema);
