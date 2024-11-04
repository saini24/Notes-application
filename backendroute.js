const express = require('express');
const Note = require('../models/Note');
const router = express.Router();

// GET all notes
router.get('/', async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
});

// POST a new note
router.post('/', async (req, res) => {
  const newNote = new Note(req.body);
  await newNote.save();
  res.json(newNote);
});

// DELETE a note by id
router.delete('/:id', async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
