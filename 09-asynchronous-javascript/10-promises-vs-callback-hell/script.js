// Promises vs Callback Hell
// Callback Hell

function getData(endpoint, cb) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', endpoint);

  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      cb(JSON.parse(this.responseText));
      
    }
  }

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000 + 1000));
}

// This gets really messy and this is why there are promises
getData('./movies.json', (data) => {
  console.log(data);
  getData('./actors.json', (data) => {
    console.log(data)
    getData('./directors.json', (data) => {
      console.log(data);
    });
  });
});

// getData('./actors.json');
// getData('./directors.json');
