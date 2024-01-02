// Input Events
const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');


// e.target.value on an input event
function onInput(e) {
  console.log(e.target.value);  
  heading.textContent = e.target.value; // print to the heading
}


itemInput.addEventListener('keydown', onInput);

// ! using input is wiser but change works as well
// priorityInput.addEventListener('input', onInput); 
priorityInput.addEventListener('change', onInput); 


// checkboxes
function onChecked(e) {
  console.log(e.target.checked); // logs a boolean value
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked' : 'Not Checked';
}

checkbox.addEventListener('input', onChecked);

// focus - cursor is in input
function onFocus(e) {
  console.log('Input is Focus'); //
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'red';
}

itemInput.addEventListener('focus', onFocus);
// blur - cursor is not in input
function onBlur(e) {
  console.log('Input is Blur');
  itemInput.style.outlineStyle = 'none';
}
itemInput.addEventListener('blur', onBlur);
