const express = require("express");
const api = express.Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const { Note, Notes } = require("../models/note");
const NotesFile = path.join(__dirname, "../db/db.json");

// JSON database
const jsonNotes = (file) => {
  return JSON.parse(fs.readFileSync(file));
};

// save file
const jsonNotesSave = (file, data) => {
  fs.writeFileSync(file, JSON.stringify(data));
};
const saveNotestoDb = (data) => jsonNotesSave(NotesFile, data);

// new note
const notes = new Notes();
notes.data = jsonNotes(NotesFile);

// random ID
const id = () => uuidv4();

api.get("/", (req, res) => {
  res.json(notes.getAll());
});

api.post("/", (req, res) => {
  const { text, title } = req.body;
  const newSingleNote = new Note(id(), title, text);
  notes.save(newSingleNote.getNote());
  saveNotestoDb(notes.data);
  res.redirect("/notes");
});

api.delete("/:id", (req, res) => {
  const ID = req.params.id;
  notes.delete(ID);
  saveNotestoDb(notes.data);
  res.redirect("/notes");
});
module.exports = api;
