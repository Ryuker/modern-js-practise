# Rest API using Express

## Intro to Express
install:
``` JS Terminal
$npm i express
```

## NODEMON 
- watches the server so we don't need to restart it all the time

install:
```JS Terminal
$NPM i -D nodemon
```
```JS package.json add
"dev": "nodemon server.js"
``` 

## Routes organization
- You can add routes in a different file.
- To do so you need to import the express router and export it.

Example:
``` JS routes.js
const express = require('express');
const router = express.Router();

~~~ Routes ~~~
router.get('/', (req, res) => { 
  res.send({ success: true, data: ideas });
});

etc
~~~~

module.exports = router;
```

importing the router into the server file
- The router is middleware, so we use 'app.use()' to use it.
``` JS server.js
// import the router
const ideasRouter = require('./routes/ideas');
app.use('/api/ideas', ideasRouter);  // middleware
```

