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
1. Copy a basic wepback setup into a client folder
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

