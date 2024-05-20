const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema({ 
    producto: { type: String, required: true },
    cantidad: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});



module.exports = mongoose.model('Note', NoteSchema);

// Path: src/routers/note.js