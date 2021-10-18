// Note.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  title: String,
  text: String,
  author: Schema.Types.ObjectId,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Note = mongoose.model('Note', NoteSchema);
module.exports = Note;
