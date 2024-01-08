// Joke Generator Challenge - my solution
const jokeEl = document.querySelector('#joke');
const getJokeBtn = document.querySelector('#joke-btn');

const xhr = new XMLHttpRequest();

// process the response
xhr.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    data = JSON.parse(this.responseText);
    jokeEl.innerHTML = data.value;
  }
};

// send new request to get the joke
function getJoke() {
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.send();
}

document.addEventListener('DOMContentLoaded', getJoke);
getJokeBtn.addEventListener('click', getJoke);

