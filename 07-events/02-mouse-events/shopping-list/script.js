// Mouse Events
const logo = document.querySelector('img');


console.log(logo);

// single click event
const onClick = () => console.log('click event');

// double click event
const onDoubleClick = () => { 
  console.log('double click event');
  
  // toggles the body background and text color
  if(document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  }
  else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
}

// right click event
const onRightClick = () => console.log('right click event');

// mousedown event 
const onMouseDown = () => console.log('mouse down event');

// mousedown event 
const onMouseUp = () => console.log('mouse up event');

// mouse wheel event 
const onWheel = () => console.log('mouse wheel event');

// mouse over event 
const onMouseOver = () => console.log('mouse over event');

// mouse out event 
const onMouseOut = () => console.log('mouse out event');

// drag start event 
const onDragStart = () => console.log('drag start event');

// drag event 
const onDrag = () => console.log('drag event');

// drag event 
const onDragEnd = () => console.log('drag end event');




// Event Listeners
// mouse click
logo.addEventListener('click', onClick);

// Clicks
// double click
logo.addEventListener('dblclick', onDoubleClick); // dblclick event

// right mouse click
logo.addEventListener('contextmenu', onRightClick); // contextmenu event

// click and hold (registers for both mouse buttons)
logo.addEventListener('mousedown', onMouseDown); // mousedown event

// let go of mouse down (registers for both mouse buttons)
logo.addEventListener('mouseup', onMouseUp); // mouseup event

// Wheel events
// mouse wheel
logo.addEventListener('wheel', onWheel); // wheel event

// Mouse Hover
// mouse over
logo.addEventListener('mouseover', onMouseOver); // mouseover event

// mouse out
logo.addEventListener('mouseout', onMouseOut); // mouseout event

// Dragging
// drag start
logo.addEventListener('dragstart', onDragStart); // dragstart event

// drag 
logo.addEventListener('drag', onDrag); // drag event

// drag end
logo.addEventListener('dragend', onDragEnd); // drag event



