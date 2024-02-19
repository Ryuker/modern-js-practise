const express = require('express');
const port = 5000;

// Initialize a new Express app
const app = express();

// Get request for '/' route
app.get('/', (req, res) => { 
  res.send('Hello World');
});

// start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));