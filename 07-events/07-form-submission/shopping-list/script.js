// Form Submission & Form Data
const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();

  console.log('submit');
  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  console.log(item, priority);

  // validation 
  // - notify user that item needs to be filled in and a priority needs to be selected
  if (item === '' || priority === '0') {
    alert('Please fill in all fields');
    return;
  }
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  // name field on HTML element
  const item = formData.get('item'); 
  // name field on HTML element
  const priority = formData.get('priority'); 

  console.log(item, priority);

  // get all of the entries in an iterator
  const entries = formData.entries();

  for (let entry of entries) {
    console.log(entry[1]);
  }

  // console.log(entries);
}

// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);
console.log(form);
