// Http server
const http = require('http');

// Create the server
const server = http.createServer((request, response) => {
  response.end('Hello World');
});

// Run the server
server.listen(5000, () => {
  console.log('Server is listening on port 5000');
});


