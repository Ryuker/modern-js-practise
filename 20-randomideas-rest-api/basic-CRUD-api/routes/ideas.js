const express = require('express');
const router = express.Router();

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

// Get all ideas
router.get('/', (req, res) => { 
  res.send({ success: true, data: ideas });
});

// Get a single idea
router.get('/:id', (req, res) => { 
  const idea = ideas.find(ideas => ideas.id === +req.params.id);
  if (!idea){
    return res.status(404).json({ success: false , error: 'Resource not found' });
  }

  res.json({ success: true, data: idea });
});

//Post - Add an idea
router.post('/', (req, res) => {
  const idea = {
    id: ideas.length + 1,
    text: req.body.text,
    tag: req.body.tag,
    username: req.body.username,
    date: new Date().toISOString().slice(0, 10),
  };

  ideas.push(idea);

  res.json({ succes: true, data: idea});
});

// Put - Update an idea using the specified id in the url
router.put('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);  // Reference to the object inside the array

  if (!idea){
    return res.status(404).json({ success: false , error: 'Resource not found' });
  }

  // update the keys in the idea - this is done on the same object in the array, so we don't need to override it afterwards
  idea.text = req.body.text  || idea.text;
  idea.tag = req.body.tag  || idea.tag;

  console.log(idea);

  res.json({ succes: true, data: idea});
});

// Delete - Remove an idea from the array
router.delete('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id);  // Reference to the object inside the array

  if (!idea){
    return res.status(404).json({ success: false , error: 'Resource not found' });
  }

  const ideaIndex = ideas.indexOf(idea);
  ideas.splice(ideaIndex, 1);

  res.json({ success: true, data: {} })
});


module.exports = router;
