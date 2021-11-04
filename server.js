const fs = require('fs');
const path = require('path');
const express = require('express');
//default index.js will be used
// const apiRoutes = require('./routes/apiRoutes');
//default index.js will be used
const htmlRoutes = require('./routes/htmlRoutes');
const PORT = process.env.PORT || 3001;
const app = express();
//provide file path to 'public' folder to allow access to css and js files
app.use(express.static('public'));
//middleware => parse incoming POST data and convert to key/value pair; 
//extended:true says to look as deep as possible for nested sub-arrays
app.use(express.urlencoded({ extended: true}));
//parse incoming JSON data
app.use(express.json());
//whenever client navigates to a /api page, use router setup in apiRoutes
// app.use('/api', apiRoutes);
// //whenever / is the endpoint, display HTML routes
app.use('/', htmlRoutes);
//require the data for route creation for front-end data request
const  { notes } = require('./db/db.json');


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
