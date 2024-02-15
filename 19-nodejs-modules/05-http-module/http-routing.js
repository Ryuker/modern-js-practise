// Http Routing server
const http = require('http');

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

server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});


