# Randomideas Frontend Notes - Fullstack Setup
- Fullstack setup with a client folder for the frontend and the rest to serve the api.

## Fullstack Workflow

## Client Folder Setup
1. Add a public and client folder to the project
2. In server.js add a line of middleware
``` JS server.js
const path = require('path');

// Static Public Folder
app.use(express.static(path.join(__dirname, 'public')));
```

## Webpack setup
1. Copy a basic wepback setup into a client folder ()
  - this tut uses 'webpack-starter' from 10-css-extract-plugin.
2. Open up a second terminal, `cd client` to go into the client folder.
3. install npm
``` JS client terminal
$npm i
```
4. add Webpack config file to the client folder
5. Change the path to resolve to the `public` folder
``` JS webpack-config.js
path: path.resolve(__dirname, '../public'), 
```
6. build the client
``` JS client terminal
$npm run build
```
- This builds the files to the 'public' folder
  - Files should be 'bundle.js, index.html, main.css'

7. For development we're using `npm run dev` in the client terminal.
  - this prevents us from having to ruin build after each change


## Adding the theme
- These are prewritten HTML and CSS files, copied over from the github repo.
- Just copy them into a index.html and a css file.

## Icons
- Install fontawesome using npm
``` JS client terminal
$npm i @fortawesome/fontawesome-free
```

## Modal Component
- Basic custom modal class in vanilla JS that changes the `style.display` property to hide and show the modal.
- The class is imported and instantiated in `index.js`

## Form Component
- Basic custom IdeaForm class in vanilla JS that:
  - renders form elements
  - gets a reference to the `idea-form` element 
  - assigns a `submit` event listener to it
  - on submit populates an idea object with the form element values.
  - clears the form fields for reuse
  - dispatches an event to close the modal (since this is a seperate component, the modal needs to handle the closing)
- The class is imported and instantiated in `index.js`

## IdeaList Component
- Basic custom IdeaList class in vanilla JS that:
  - Gets reference to `idea-list` element
  - has a `this._ideas` array
  - Uses `ideaApi.` method `getIdeas()` to get the ideas from the API and populate the array. 
  - Has a validTags Set
  - renders the ideas using a map function
  - colors the idea tag elements appropriately if they are in the `Set`, grey if they arent.
- The class is imported and instantiated in `index.js`

## API Service - Fetch Ideas
- Basic custom IdeaList class in vanilla JS that:
  - Sends requests to the CRUD API we wrote earlier
    - getIdeas() - gets the data using axios get request
    - postIdeas() - posts the data passed using axios post request
- is initialized on export so it can be used right away when it's imported
- The class is imported in `IdeaList.js`

uses axios for fetching, to install
``` JS client terminal
$npm i axios
```

## Getting around CORS black to access the local API
- Install a package to get around it
``` JS terminal
$npm i cors
```
- import it into `server.js`
``` JS server.js
const cors = require('cors');

~~~~~ middleware below the body parser ~~~~
// cors middleware - to allow requests from certain local ports
app.use(cors({
  origin: ['http://localhost:5000', 'http://localhost:3000'], 
  credentials: true
}));
```

## Create Idea via Form
- Add postData() method to apiIdeas that let's axios send a post request to the API URL with the data specified.
- Import ideasApi into `IdeaForm.js`
- make `handleSubmit()` async and call the createIdea method
``` JS IdeaForm.js
const newIdea = await IdeasApi.createIdea(idea);
```

## Update IdeaList when Idea is submitted to API
- in `IdeaList.js` add a method to add an idea to the list
``` JS IdeaList.js
addIdeaToList(idea) {
  this._ideas.push(idea);
  this.render();
}
```
- Import the `IdeaList` component in `IdeaForm` and instantiate in the constructor
``` JS IdeaForm.js
this._ideaList = new IdeaList();
```

- modify handle submit to push the idea to the list.
``` JS IdeaForm.js
// Add idea to list
this._ideaList.addIdeaToList(newIdea.data.data);
```





