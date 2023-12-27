// Event Object
/* - Some of the properties
- 'Target' - The element that triggered the event
- 'currentTarget' - The element that the event listener is attached to 
                    (These are the same in this case) 
- 'type' - The type of event that was triggered
- 'timeStamp' - The time that the event was triggered
- 'clientX' - The x position of the mouse click relative to the window
- 'clientY' - The y position of the mouse click relative to the window
- 'offsetX' - The x position of the mouse click relative to the element
- 'offsetY' - The y position of the mouse click relative to the element
- 'pageX' - The x position of the mouse click relative to the page
- 'pageY' - The y position of the mouse click relative to the page
- 'screenX' - The x position of the mouse click relative to the screen
- 'screenY' - The y position of the mouse click relative to the screen
*/

const logo = document.querySelector('img');

function onClick(e) {
  console.log(e);
  
  // event target
  console.log(e.target);        // logs the item clicked on
  console.log(e.currentTarget); // logs the parent (if there's nesting)
  e.target.style.backgroundColor = 'black';

  // type of event
  console.log('event type: ' + e.type);

  // timestamp of event
  console.log('event time stamp: ' + e.timeStamp);

  // mouse click position (from the left to right and top to bottom)
  // relative to the window
  console.log('event clientX position : ' + e.clientX);
  console.log('event clientY position : ' + e.clientY);

  // mouse offset position (relative to the element)
  console.log('event offsetX position : ' + e.offsetX);
  console.log('event offsetY position : ' + e.offsetY);

  // mouse position (relative to the page)
  console.log('event pageX position : ' + e.pageX);
  console.log('event pageY position : ' + e.pageY);

  // mouse position (relative to the monitor)
  console.log('event screenX position : ' + e.screenX);
  console.log('event screenY position : ' + e.screenY);
}

// onDrag function to demonstrate use of e properties during drag event
function onDrag(e) {
  // displays the x and  y position of the mouse in the h1 element
  document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}

// document.body.addEventListener('click', (e) => {
//   console.log(e.target);        // logs the item clicked on
//   console.log(e.currentTarget); // logs the parent
// });

logo.addEventListener('click', onClick);
logo.addEventListener('drag', onDrag);


// prevent default
// - to prevent the event default behavior
// - commonly used to prevent form submission
document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault();
  
  console.log('Link was clicked');
});


