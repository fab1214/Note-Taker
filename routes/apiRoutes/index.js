const router = require("express").Router();
const fs = require("fs");

//save note route
router.post("/api/notes", (req, res) =>{
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    //capture text in body as new note
    let newNote = req.body;
    //assign id to notes saved
    let uniqueID = (savedNotes.length).toString();
    newNote.id = uniqueID;
    savedNotes.push(newNote);
    //write new saved notes into db.json file
    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    console.log(`Note saved!`);
    res.json(savedNotes);
});

//delete note route
router.delete("/api/notes/:id", (req, res) =>{
    let savedNotes = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    let newId = 0;
    console.log(`Note deleted!`);
    savedNotes = savedNotes.filter(currNote => {
        return currNote.id != req.params.id;
    })
    
    for (currNote of savedNotes) {
        currNote.id = newId.toString();
        newId++;
    }

    fs.writeFileSync("./db/db.json", JSON.stringify(savedNotes));
    res.json(savedNotes);
})

module.exports = router;
