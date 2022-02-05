const router = require('express').Router();
const fs = require('fs');
// const { notes } = require("../db/db.json");
// const { createNewNote, deleteNote } = require("../lib/notes");
const path = require('path');
const uniqueID = require('uniqid');

// get
router.get('/notes', (req, res) => {
    const db = JSON.parse(fs.readFileSync("./db/db.json"));
    res.send(db)
}); 

// post
router.post('/notes', (req, res) => {

    let noteId = uniqueID();
    const db = JSON.parse(fs.readFileSync("./db/db.json"));
    res.json(db)
   console.log(noteId);

    const newNote = {
        title: req.body.title, text: req.body.text, id: noteId,
    };
    db.push(newNote);
    fs.writeFileSync("./db/db.json", JSON.stringify(db));
});

//delete
router.delete('/notes/:id', (req, res) => {
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8")); // reads db.json
    let noteID = savedNotes.filter(x=>x.id!=req.params.id) // returns route with all notes EXCEPT the ID we are deleting
    console.log("NOTE ID", noteID)
    console.log("REQ.PARAMS.ID", req.params.id)
    
    fs.writeFileSync("./db/db.json", JSON.stringify(noteID), (err) => {
        if (err) throw err;
        console.log("error");
    });
    console.log("Your note has been deleted");
    return res.json(savedNotes);
});

module.exports = router;