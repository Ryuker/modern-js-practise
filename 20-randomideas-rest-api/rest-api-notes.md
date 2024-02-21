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


## Handle POST Requests - Adding an Idea
basic version:
``` JS routes.js
router.post('/', (req, res) => {
  res.send('Post success');
});
```

### Body parser middleware
``` JS server.js
// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
```

## parsing a request 
- With body parser middle ware setup we can parse the body of a request.
example:
``` JS routes.js
~~~ in the router.post ~~~ block
res.send(req.body.text); // sends back the text in the body
```

## Parsing a POST request to push an object to an array
``` JS routes.js
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
```
- This can push to a database as well of course.





