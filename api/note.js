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

//crear una nota usando los datos de req.body
.post((req, res)=> {
  const note = new Note ({
    title: req.body.title,
    text:req.body.text
  });
  note.save((err, note) => {
    res.json(note);
  })
});

router
.route('/api/notes/:id')
//buscar una nota por id
.get((req, res) => {
  Note.find({ id : 1 }, (err, note) => {
res.json(note);
});
})
.put((req, res) => {
  Note.findByIdAndUpdate(req.params.id).exec((err,note)=>{
    if(err)return next(err);
    if(!note) return res.status(404).json({msg: 'Not Found'});
    res.status(200).json(note);
  });
})
.delete((req, res) => {
 Note.findByIdAndRemove(req.params.id, (err) => {
   res.json({msg: 'Nota borrada'});
 })
});
module.exports = router;
