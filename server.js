const fs = require('fs');
const path = require('path');
const express = require('express');

// Instantiate the server
const PORT = process.env.PORT || 3001;
const app = express();

// path to public directory
app.use(express.static('public'))
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());





// returns notes.html file
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

// returns index.html file
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

// Tell server to begin listening 
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});



