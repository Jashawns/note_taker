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
