// Flix App Project
// api: themoviedb.org
// docs: https://developer.themoviedb.org/docs/getting-started

// Page Router
const global = { currentPage: window.location.pathname } ;
const root = '/11-flix-app-project';

// Init App
function init() {
  switch (global.currentPage) {
    case `${root}/`:
    case `${root}/index.html`:
      console.log('Home');
      break;
    case `${root}/shows.html`:
      console.log('Shows');
      break;
    case `${root}/movie-details.html`:
      console.log('Movie Details');
      break;
    case `${root}/tv-details.html`:
      console.log('TV Details');
      break;
    case `${root}/search.html`:
      console.log('Search');
      break;
  }
}

document.addEventListener('DOMContentLoaded', init);



