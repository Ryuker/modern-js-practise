// Flix App Project
// api: themoviedb.org
// docs: https://developer.themoviedb.org/docs/getting-started

// API imports 
import API_KEY from '../../keys/keys.js';
const API_URL = 'https://api.themoviedb.org/3';

// Page Router
const root = '/11-flix-app-project';
const global = { currentPage: window.location.pathname.replace(root, '') } ;

// Display popular movies
async function displayPopularMovies() {
  const { results } = await fetchAPIData('/movie/popular');
  console.log(results);
  console.log(results[0]);

  const movie = results[0];

  const popularMoviesEL = document.getElementById('popular-movies');

  results.forEach(movie => {
    // create div
    // const div = createCard(movie);
    const div = createCardInnerHTML(movie);

    popularMoviesEL.appendChild(div);

  });
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  console.log('Fetching data from API');
  const response = await fetch(`${API_URL}/${endpoint}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  // console.log(data);
  return data;
}

// Highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll('.nav-link');

  links.forEach(link => {
    const href = link.getAttribute('href');

    if (href === global.currentPage ) {
      link.classList.add('active');
    } else if(global.currentPage === '/index.html' && href === '/') {
      link.classList.add('active');
    }
  });
} 

// Init App
function init() {
  switch (global.currentPage) {
    case `/`:
    case `/index.html`:
      console.log('Home');
      displayPopularMovies();
      break;
    case `/shows.html`:
      console.log('Shows');
      break;
    case `/movie-details.html`:
      console.log('Movie Details');
      break;
    case `/tv-details.html`:
      console.log('TV Details');
      break;
    case `/search.html`:
      console.log('Search');
      break;
  }

  highlightActiveLink();
  // fetchAPIData('/movie/popular');
}

document.addEventListener('DOMContentLoaded', init);


// create a card with inner HTML instead
function createCardInnerHTML(movie) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <a href="movie-details.html?id=${movie.id}">
      ${
        movie.poster_path ? `
          <img
            src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
            class="card-img-top"
            alt="${movie.title}"
          />` : `
            <img
            src="images/no-image.jpg"
            class="card-img-top"
            alt="${movie.title}"
          />`
      }
    </a>
    <div class="card-body">
      <h5 class="card-title">${movie.title}</h5>
      <p class="card-text">
        <small class="text-muted">Release: ${movie.release_date}</small>
      </p>
    </div>
  `;

  return card;
  
}

// For a function to compose the movie card line by line
// Long version with creating seperate elements instead
function createCard(movie) {
  const div = document.createElement('div');
  div.classList.add('card');
  // create link
  const a = document.createElement('a');
  a.href = `/movie-details.html?id=${movie.id}`;

  // create img
  const img = document.createElement('img');
  img.src = movie.poster_path 
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` 
      : 'images/no-image.jpg';
  img.classList.add('card-img-top');
  img.alt = movie.title;

  console.log(img);

  // create card body div
  const cardBody = document.createElement('div');
  cardBody.classList.add('card-body');

  // create title
  const cardTitle = document.createElement('h5');
  cardTitle.classList.add('card-title');

  // create card text
  const cardText = document.createElement('p')
  cardText.classList.add('card-text');
  
  // create small element for release date
  const cardRelease = document.createElement('small');
  cardRelease.classList.add('text-muted');
  cardRelease.textContent = `Release: ${movie.release_date}`;
  
  // Appends of the elements
  cardText.appendChild(cardRelease);
  cardBody.appendChild(cardText);

  a.appendChild(img);

  div.appendChild(a);
  div.appendChild(cardBody);
  
  // return the new card;
  return div;
}
    



