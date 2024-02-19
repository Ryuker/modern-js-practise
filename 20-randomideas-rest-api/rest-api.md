# Rest API using Express

## Intro to Express
install:
``` JS Terminal
$npm i express
```

basic server setup:
``` JS server.js
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
```

returning a single item from a dynamic route:
- use the ':' in the url
- use req.params.id to get the param
``` JS
// Get a single idea
app.get('/api/ideas/:id', (req, res) => { 
  const idea = ideas.find(ideas => ideas.id === +req.params.id);
  if (!idea){
    return res.status(404).json({ success: false , error: 'Resource not found' });
  }

  return res.json({ success: true, data: idea });
});
```