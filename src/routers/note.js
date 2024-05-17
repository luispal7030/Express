const express = require('express');
const router = express.Router();

const Note = require('../models/Note');

router.get('/notes/add', (req, res) => {
    res.render('notes/new-notes');
})

router.post('/notes/new-note', async (req, res) => {
    const {producto, cantidad} = req.body;
    const errors = [];
    if(!producto){
        errors.push({text: 'ingresa el nombre del producto'})
    }
    if(!cantidad){
        errors.push({text: 'ingresa el cantidad del producto'})

    }
    if(errors.length > 0){
        res.render('notes/new-notes', {
            errors, producto, cantidad
        })
    }else{
       const newNote = new Note({producto, cantidad});
       await newNote.save();
        res.redirect('/notes');
    }
})

router.get('/notes', async (req, res) => {
   const notes = await Note.find().sort({date: 'desc'});
   res.render('notes/all-notes', {notes});
   
})
module.exports = router;