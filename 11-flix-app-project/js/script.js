// Flix App Project
// api: themoviedb.org
// docs: https://developer.themoviedb.org/docs/getting-started

// API imports 
import API_KEY from '../../keys/keys.js';
const API_URL = 'https://api.themoviedb.org/3';

// Page Router
const root = '/11-flix-app-project';
const global = { currentPage: window.location.pathname.replace(root, '') } ;

// Display 20 most popular movies
async function displayPopularMovies() {
  const { results } = await fetchAPIData('/movie/popular');

  const popularMoviesEL = document.getElementById('popular-movies');

  results.forEach(movie => {
    // create div
    // const div = createCard(movie);
    const div = createCardInnerHTML(movie);
    popularMoviesEL.appendChild(div);
  });
}

// Display 20 most popular TV shows
async function displayPopularShows() {
  const { results } = await fetchAPIData('/tv/popular');

  const popularShowsEL = document.getElementById('popular-shows');

  results.forEach(show => {
    // create div
    const div = createShowCardInnerHTML(show);
    popularShowsEL.appendChild(div);
  });
}

// Display movie details
async function displayMovieDetails () {
  // gets the movie id 
  const movieId = window.location.search.split('=')[1];
  const movie = await fetchAPIData(`movie/${movieId}`);

  const div = document.createElement('div');
  div.innerHTML = `
    <div class="details-top">
      <div>
        ${
          movie.poster_path 
            ? `
              <img
                src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
                class="card-img-top"
                alt="${movie.title}"
              />` 
            : `
              <img
              src="images/no-image.jpg"
              class="card-img-top"
              alt="${movie.title}"
            />`
        }
      </div>
      <div>
        <h2>${movie.title}</h2>
        <p>
          <i class="fas fa-star text-primary"></i>
          ${movie.vote_average.toFixed(1)} / 10
        </p>
        <p class="text-muted">Release Date: ${movie.release_date}</p>
        <p>
        ${movie.overview}
        </p>
        <h5>Genres</h5>
        <ul class="list-group">
          ${movie.genres.map(genre => `<li>${genre.name}</li>`).join('')}
        </ul>
        <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
      </div>
    </div>
    <div class="details-bottom">
      <h2>Movie Info</h2>
      <ul>
        <li><span class="text-secondary">Budget:</span> $${addCommasToNumber(movie.budget)}</li>
        <li><span class="text-secondary">Revenue:</span> $${addCommasToNumber(movie.revenue)}</li>
        <li><span class="text-secondary">Runtime:</span> ${movie.runtime} minutes</li>
        <li><span class="text-secondary">Status:</span> ${movie.status}</li>
      </ul>
      <h4>Production Companies</h4>
      <div class="list-group">
        ${movie.production_companies.map(company => `<span>${company.name}</span>`).join(', ')}</div>
    </div>
  `
  // add the div to the movie details element
  document.querySelector('#movie-details').appendChild(div);
}

// Show Spinner when data is being retrieved
function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}

function hideSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  console.log('Fetching data from API');
  showSpinner();
  const response = await fetch(`${API_URL}/${endpoint}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();
  // console.log(data);
  hideSpinner();
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
      displayPopularShows();
      console.log('Shows');
      break;
    case `/movie-details.html`:
      displayMovieDetails();
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


// create a movie card with inner HTML instead
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

// create a show card with inner HTML instead
function createShowCardInnerHTML(show) {
  const card = document.createElement('div');
  card.classList.add('card');

  card.innerHTML = `
    <a href="tv-details.html?id=${show.id}">
      ${
        show.poster_path ? `
          <img
            src="https://image.tmdb.org/t/p/w500${show.poster_path}"
            class="card-img-top"
            alt="${show.name}"
          />` : `
            <img
            src="images/no-image.jpg"
            class="card-img-top"
            alt="${show.name}"
          />`
      }
    </a>
    <div class="card-body">
      <h5 class="card-title">${show.name}</h5>
      <p class="card-text">
        <small class="text-muted">Air Date: ${show.first_air_date}</small>
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

////////////
// Utils
function addCommasToNumber(number){
  // uses a regular expression to add a ',' in the right places after 000 zero's (counting from the right) 
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
    



