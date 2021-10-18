// archivo /api/note.js
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

router
.route('/api/notes')
.get((req, res) => {
  Note.find((err, notes) => {
    res.json(notes);
  })
})
.post((req, res) => {
  res.send('Crear nota');
});

router
.route('/api/notes/:id')
.get((req, res) => {
  res.send('Una nota por ID');
})
.put((req, res) => {
  res.send('Actualizar la nota');
})
.delete((req, res) => {
  res.send('Borrar nota');
})

module.exports = router;
