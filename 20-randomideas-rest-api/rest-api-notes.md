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


## PUT - To update an idea
``` JS routes.js
router.put('/:id', (req, res) => {
  const idea = ideas.find((idea) => idea.id === +req.params.id); // this is a reference to the array element

  // error checking if idea is not in the array 
  if (!idea){
    return res.status(404).json({ success: false , error: 'Resource not found' });
  }

  // update the keys in the idea
  idea.text = req.body.text  || idea.text;
  idea.tag = req.body.tag  || idea.tag;

  // return the updated idea 
  res.json({ succes: true, data: idea});
});
```

## DELETE - To remove an idea
- Very similar implementation
```JS routes.js
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
```

We now have a CRUD Rest API 
- **C**reates, **R**eads, **U**pdates and **D**eletes
- but there's not data persistence yet

## Databases
### What is a Database
 - A database is an **organized collection of data**
 - A **database management system (DBMS)** is the computerized system that manages your databases
 - Database systems can run on a file system or across multiple nodes or clusters
 - There are different types of databases (Relational, NoSQL, etc)

### What is MongoDB
- A NoSQL/Document database, not a relational database
- Typically faster and more scalable than traditional databases
- Very popular in the JavaScript world (MERN, MEAN, MEVN)

- Data is stored in **Documents**, no different then a JSON object
  - but it's BSON, a subset of JSON with extra features and datatypes
example:
``` JS
{
  "_id": "1662t1216171827368",
  "name": "John Doe",
  "email": "johndoe@gmail.com",
  "password": "SOME_HASHED_PW"
}
```

### Tools We Will Use
- **MongoDB Atlas** - cloud implementation of MongoDB
- **MongoDB Compass** - Desktop tool to manage your databases
- **Mongoose** - Node.js package for working with MongoDB

## MongoDB Atlas Setup
1. Setup an account
2. Setup a database (free tier), assigns a user and password etc
3. Add data
4. Under database>services click connect > Connect your application
  - Copy the connection string 
5. Add a .env file in the application root, 
- add `MONGO_URI = "{your connection string}"` to it
- make sure the .env is in gitignore, the string is sensitive
- replace password and database name in the string.

## Mongoose Connect - NPM Package
[website](https://mongoosejs.com/) | [Docs](https://mongoosejs.com/docs/guide.html)
- Mongoose is an object data mapper (ODM)
- Easily installed with NPM

install:
``` JS Terminal
$npm i mongoose 
```


## dotEnv - NPM Package
[Package Page](https://www.npmjs.com/package/dotenv)
- Allows us to use a .env file in the node application. 
- **!!** if a variable in a .env file is changed you have to restart the server even when using nodemon.  

install:
``` JS Terminal
$npm i dotenv 
```

## Connecting to MongoDB
- Many approaches for this but the following is recommended
1. Create a config folder in the root
2. Add a `db.js` file with the following code
- This is the most basic way to connect
```JS db.js
const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};

module.exports = connectDB;
```
3. Import it to server.js and call the function.

## Mongoose Schema & Model
1. Add a folder to the root `models`
2. In it add a file named like so `Idea.js`
  - it's convention to name it singular (so not ideas)
  - it's convection to start it with an uppercase

example of a scheme:
``` JS Idea.js
const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, 'Please add a text field']
  },
  tag: {
    type: String,
  },
  username: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Idea', IdeaSchema);
```

## MongoDB Compass (optional)
[Tool Page](https://www.mongodb.com/products/tools/compass)
- This a desktop tool for interacting with MongoDB databases
  - Easy to use for querying the database
- You connect to it using a connection string you get from your MongoDB database

## MongoDB Database Queries
- require the Schema in the routes module
```JS routes.js
const Idea = require('../models/Idea');
```
- Getting all 'ideas' from the database
  - `Idea.find()` returns a promise so we need to use async await
```JS routes.js
router.get('/', async (req, res) => { 
  try {
    const ideas = await Idea.find();
    res.json({ success: true, data: ideas });
  } catch(error) {
    res.status(500).json({ success: false, error: 'Something went wrong'});
  }
});
```











