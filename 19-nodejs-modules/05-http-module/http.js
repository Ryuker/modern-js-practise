// Http server
const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  const url = request.url;

  // Basic Routing
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
  } else if (url === '/about') {
    response.writeHead(200, { 'content-type': 'text/html' });
    response.end('<h1>About Page</h1>');
  } else {
    response.writeHead(404, { 'content-type': 'text/html' });
    response.end('<h1>Page Not Found</h1>');
  }

});

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});


