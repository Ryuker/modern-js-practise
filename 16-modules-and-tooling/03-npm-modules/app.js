// NPM Packages and Modules
const axios = require('axios');

async function getPost() {
  const res = await axios('https://jsonplaceholder.typicode.com/posts/1');
  console.log(res.data);
}

getPost();