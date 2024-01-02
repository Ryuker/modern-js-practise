// Page Loading & Window Events

// Page Loading
// - old method
// window.onload = function () {
//   document.querySelector('h1').textContent = 'Hello World';  
// }
// - old method using event listener
window.addEventListener('load', () => {
  console.log('Page Loaded');  
});

// - old method - DOM Content Loaded
window.addEventListener(
  'DOMContentLoaded', 
  () => console.log('DOM Content Loaded')
);

console.log(('Run me'));

// using a defer attribute in html to use scripts in the head
document.querySelector('h1').textContent = 'Hello World';

// resize
window.addEventListener('resize', () => {
  document.querySelector('h1').textContent = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

// scroll
window.addEventListener('scroll', () => {
  console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}}`);

  // change color on scroll
  if(window.scrollY > 70) {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

// focus - select inside
window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach(p => {
    p.style.color = 'blue';
  })
});

// blur - select outside
window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach(p => {
    p.style.color = 'black';
  })
});

