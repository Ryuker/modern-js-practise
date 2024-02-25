const path = require('path');
const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 5000;
const connectDB = require('./config/db');

connectDB();

// Initialize a new Express app
const app = express();

// Static Public Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Get request for '/' route
app.get('/', (req, res) => { 
  res.send({message: 'Welcome to the RandomIdeas API'});
});

// import the router
const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);

// start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));