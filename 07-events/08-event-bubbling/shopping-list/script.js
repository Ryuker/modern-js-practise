// Event Bubbling
// - With bubbling, the event is first captured and handled by the innermost element and then propegated to outer elements
// - the event bubbles up the DOM tree all the way up to the document.

const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');

button.addEventListener('click', (e) => {
  alert('Button was clicked');
  e.stopPropagation(); // to prevent bubbling up
});


div.addEventListener('click', () => {
  alert('Div was clicked');
});

form.addEventListener('click', () => {
  alert('Form was clicked');
});

document.body.addEventListener('click', () => {
  alert('Body was clicked');
});



