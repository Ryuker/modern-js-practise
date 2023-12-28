// Keyboard Events
// keycodes:
// https://www.toptotal.com/developers/keycode/table-of-all-keycodes
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

  // Key - is a letter
  console.log(e.key);
  if (e.key === 'enter')
    console.log('You pressed enter');
  
  // KeyCode - is a number
  if (e.keyCode === 13)
    console.log('You pressed enter');
  
  // code - digit code
  if (e.code === 'Digit1')
    console.log('You pressed 1');

  // register if specific key is being held down
  if (e.repeat) {
    console.log('You are holding down ' + e.key);
  }

  // check for key combinations held down
  console.log('Shift: ' + e.shiftKey);
  console.log('Control: ' + e.ctrlKey);
  console.log('Alt: ' + e.altKey);

  // conditional if key combination is held down
  if (e.shiftKey && e.key === 'K')
    console.log('You hit Shift + K');
};








// itemInput.addEventListener('keypress', onKeyPress); // keypress event
// itemInput.addEventListener('keyup', onKeyUp); // keyup event
itemInput.addEventListener('keydown', onKeyDown); // keydown event