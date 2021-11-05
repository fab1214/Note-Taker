const router = require("express").Router();
const path = require("path");

//create route to display index.HTML page in the browser
router.get("/", (req, res) =>{
  //locate file we want to send to the server to display
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

//create route to display notes.HTML page in the browser
router.get("/notes", (req, res) =>{
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

//create route to display stored notes => reference db.json file for notes array
router.get("/api/notes", (req, res) =>{
  res.sendFile(path.join(__dirname, "../../db/db.json"));
});

//wild card 
router.get("*", (req, res) =>{
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});
module.exports = router;
