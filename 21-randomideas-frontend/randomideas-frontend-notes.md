# Randomideas Frontend Notes
- Hooks to the randomideas api

## Fullstack Workflow

## Client (Public) Folder Setup
1. Add a public folder to the project
2. In server.js add a line of middleware
``` JS server.js
const path = require('path');

// Make public folder static
app.use(express.static(path.join(__dirname, 'public')));
```


