const router = require('express').Router();
const path = require('path');

  //create route to display index.HTML page in the browser
  router.get('/', (req, res) => {
    //locate file we want to send to the server to display
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

  //create route to display animals.HTML page in the browser
  router.get('/notes', (req, res) => {
    //locate file we want to send to the server to display
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
  });

  //create wikdcard route to catch requests for non-existant pages
  router.get('*', (req, res) => {
    //locate file we want to send to the server to display
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

  module.exports = router;