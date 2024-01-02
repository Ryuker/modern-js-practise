// Event Delegation
const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// inefficient approach
// listItems.forEach(item => {
//   item.addEventListener('click', (e) => {
//     console.dir(e.target.outerText);
    
//     e.target.remove(); // remove the list item
//   })
// });

// event delegation approach
list.addEventListener('click', e => {
  console.log(e.target);
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});

// mouse over
list.addEventListener('mouseover', e => {
  console.log(e.target);
  if (e.target.tagName === 'LI') {
    e.target.style.color = 'red';
  }
});
