// Flix App Project
// api: themoviedb.org
// docs: https://developer.themoviedb.org/docs/getting-started

// ENV imports 
import API_KEY from '../../keys/keys.js';

// Page Router
const root = '/11-flix-app-project';
const global = { currentPage: window.location.pathname.replace(root, '') } ;

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  const API_URL = 'https://api.themoviedb.org/3';

  console.log('Fetching data from API');
  const response = await fetch(`${API_URL}/${endpoint}?api_key=${API_KEY}&language=en-US`);
  const data = await response.json();

  console.log(data);
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
  fetchAPIData('/movie/popular');
}

document.addEventListener('DOMContentLoaded', init);



