// AJAX XHR Request
const xhr = new XMLHttpRequest();
const results = document.querySelector('#results');


xhr.open('GET', './movies.json');

// readyState has 5 possible values
// - 0: request is not initialized
// - 1: server connection established
// - 2: request received
// - 3: processing request
// - 4: request finished and response is ready
xhr.onreadystatechange = function () {
  // console.log(this.readyState);
  if (this.readyState === 4 && this.status === 200) {
    // console.log(JSON.parse(this.responseText));
    const data = JSON.parse(this.responseText);
    data.forEach( movie => {
      const li = document.createElement('li');
      li.innerHTML = `<strong> ${movie.title}</strong> -  ${movie.year}`;
      results.appendChild(li);
    });
  }
};

xhr.send();

