// Adding and Removing Classes and Styles

// Setup
const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');


function run() {
  // console.log(itemList.className);
  // text.className = 'card dark';  // overwrites the class to dark

  // better way of adding a class
  // classList - DOM Token List - has high level array methods
  itemList.classList.forEach(c => console.log(c));
  // text.classList.add('dark'); // Adds a class to the classList 

  // remove class
  // text.classList.remove('card'); // removes a class from the classList 

  // toggle a class
  // text.classList.toggle('dark');      // switch between dark mode
  // text.classList.toggle('hidden');    // switch between visible and unvisible

  // replace a class
  // text.classList.replace('card', 'dark');

  // Change style directly
  // itemList.style.lineHeight = '3';  //

  // coloring items in a list
  items.forEach((item, index) => {
    item.style.color = 'red'; // color all items
    index === 2 ? item.style.color = 'blue': ''; // color at index
  });
}

// onclick event - runs a function
document.querySelector('button').onclick = run;




