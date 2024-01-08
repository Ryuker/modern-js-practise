// Chuck Norris Challenge -  Video Solution
const jokeEl = document.querySelector('#joke');
const getJokeBtn = document.querySelector('#joke-btn');


const generateJoke = () => {
  console.log('Getting new  Joke');

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
  xhr.onreadystatechange = function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerHTML = 'Something went wrong (Not Funny)';
      }
    }
  }
  xhr.send();
};

getJokeBtn.addEventListener('click', generateJoke);
document.addEventListener('DOMContentLoaded', generateJoke);