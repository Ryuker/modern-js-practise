// Promises
// - Are asynchronous and non blocking

// creating a promise
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Do some async task
    console.log('Async Task complete');
    resolve();
  }, 3000);
});

// handle the promise
promise.then(() => {
  console.log('Promise consumed');
});

const getUser = new Promise((resolve, reject) => {
  setTimeout(() => {
    // Do some async task
    console.log('-----')
    console.log('Async Task 2 complete');
    resolve( {name: 'John', age: 30});
  }, 3000);
});

// chaining
getUser.then((user) => {
  console.log(user);
});


// Error handling
const getUser2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    console.log('-----')
    console.log('Async Task 3 complete');
    if (!error) {
      resolve( {name: 'John', age: 30});
    } else {
      reject('Error: something went wrong');
    }
  }, 3000);
});

// catching the error (to avoid uncaught error)
getUser2
.then((user) => console.log(user))
.catch((error) => console.log(error))
.finally(() => console.log('The promise has been resolved or rejected'));


console.log('Hello from global scope');