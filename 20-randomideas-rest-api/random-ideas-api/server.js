const express = require('express');
const port = 5000;

// Initialize a new Express app
const app = express();

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