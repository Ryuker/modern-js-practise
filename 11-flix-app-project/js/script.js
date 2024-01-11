// Flix App Project
// api: themoviedb.org
// docs: https://developer.themoviedb.org/docs/getting-started

// Page Router
const root = '/11-flix-app-project';
const global = { currentPage: window.location.pathname.replace(root, '') } ;

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
}

document.addEventListener('DOMContentLoaded', init);



