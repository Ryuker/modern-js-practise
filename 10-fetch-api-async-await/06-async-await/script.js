// Async and Await

// Promise Example with a time out
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({name: 'John', age: 20});
  }, 1000);
});

//promise.then(data => console.log(data));

// Async Approach - much smaller
async function getPromise() {
  const response = await promise;
  console.log(response);
};

getPromise();

// Using Async Await with Fetch API
async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
};

getUsers();

// Use Async / Await with arrow functions
const getPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  console.log(data);
};
getPosts();