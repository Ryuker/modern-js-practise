// Fetch Options
// api: https://jsonplaceholder.typicode.com/
// this is a rest api
// - follows certain standards (CRUD + Authentication functionality)
// GET, POST, PUT, PATCH, DELETE

// usually the server adds an ID for you when you make a post request
function createPost({title, body}) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title,
      body
    }),
    headers: {
      'Content-Type': 'application/json',
      token: 'abc123'
    }
  })
    .then(res => res.json)
    .then(data => console.log(data));
};

createPost({title: 'My Post', body: 'This is my post'});



