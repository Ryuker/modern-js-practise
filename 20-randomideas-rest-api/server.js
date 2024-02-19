const express = require('express');
const port = 5000;

// Initialize a new Express app
const app = express();

const ideas = [
  {
    id: 1,
    text: 'Positive NewsLetter, a newsletter that only shares positive, uplifting news',
    tag: 'Technology',
    username: 'TonyStark',
    date: '2022-01-02',
  },
  {
    id: 2,
    text: 'Milk cartons that turn a different color the older that your milk is getting',
    tag: 'Inventions',
    username: 'SteveRogers',
    date: '2022-01-02',
  },
  {
    id: 3,
    text: 'ATM location app which lets you know where the closest ATM is and if it is in service',
    tag: 'Software',
    username: 'BruceBanner',
    date: '2022-01-02',
  },
];

// Get request for '/' route
app.get('/', (req, res) => { 
  res.send({message: 'Welcome to the RandomIdeas API'});
});

// Get all ideas
app.get('/api/ideas', (req, res) => { 
  res.send({ success: true, data: ideas });
});

// Get a single idea
app.get('/api/ideas/:id', (req, res) => { 
  const idea = ideas.find(ideas => ideas.id === +req.params.id);
  if (!idea){
    return res.status(404).json({ success: false , error: 'Resource not found' });
  }

  return res.json({ success: true, data: idea });
});

// start the server
app.listen(port, () => console.log(`Server listening on port ${port}`));