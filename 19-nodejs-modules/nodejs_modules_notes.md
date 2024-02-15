# NodeJS Modules notes
Modules  we'll cover:  
|  |  |
|:--|--:|
| **fs** | Work with the file system. Manage files and folders. |
| **path** | Helpers for working with the file paths |
| **os** | Operating system information |
| **url** | Parse and format URLs |
| **querystring** | Helper for working with query strings from URLs |
| **http** | Create server and listen for HTTP requests |


## fs (filesystem) Module
read: [Documentation](https://nodejs.org/api/fs.html)

## path Module
- Is a core module that allows us to work with files and directory paths

## os Module

## url and querystring Module

# http Module
- Allows you to run a basic server
  - not recommended to use this for a server since it requires a lot of code, but Express is built on this.

The most basic server setup:
```JS 
const http = require('http');

// Create the server
const server = http.createServer((request, response) => {
  response.end('Hello World');
});

// Run the server
server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
```

Very Basic Page Routing
```JS
const server = http.createServer((request, response) => {
  const url = request.url;

  // Basic Routing
  if (url === '/') {
    // Ensures it gets parsed by the browser
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end('<h1>Welcome</h1>');
  } else if (url === '/about') {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end('<h1>About Page</h1>');
  } else {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.end('<h1>Page Not Found</h1>');
  }
});
```

Very basic returning of a file upon a request
```JS
~~ inside the create server callback ~~
  if (url === '/') {  
    // return the contents of a file
    fs.readFile('index.html', (error, file) => {
      if (error) {
        response.writeHead(500, { 'content-type': 'text/html' });
        response.end('<h1>Sorry, we have a problem</h1>');
      } else {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.end(file);
      }
    });
  }
```

