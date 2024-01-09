// Fetch API Basics
// - fetch is accessible on the window object but we can use 'fetch'

// All of the below are making 'GET' requests per default
// - to make a different request you have to specify it

// Fetching a JSON file
fetch('./movies.json')
  .then(response => {
    // console.log(response);
    return response.json();
  })
  .then(data => { 
    console.log(data)
  });

// shorter version
fetch('./movies.json')
  .then(res => res.json())
  .then(data => console.log(data));

// the above is tedious. You can use axios (library) to do this
// axios.get().then(data);

// Fetching a text file
fetch('./test.txt')
  .then(res => res.text())
  .then(data => console.log(data));

// Fetching from an API - github
fetch('https://api.github.com/users/bradtraversy')
  .then(res => res.json())
  .then(data => document.querySelector('h1').textContent = data.login);