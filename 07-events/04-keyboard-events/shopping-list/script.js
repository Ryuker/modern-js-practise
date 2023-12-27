// Keyboard Events
const itemInput = document.getElementById('item-input');



// key press - fires on single press
const onKeyPress = e => {
  console.log('key: ' + e.key); // logs the key pressed
};

// key up - fires when released
const onKeyUp = e => {
  console.log('key: ' + e.key); // logs the key pressed
};

// key down - fires when key is held down
const onKeyDown = e => {
  console.log('key: ' + e.key); // logs the key pressed
};






// itemInput.addEventListener('keypress', onKeyPress); // keypress event
// itemInput.addEventListener('keyup', onKeyUp); // keyup event
itemInput.addEventListener('keydown', onKeyDown); // keydown event