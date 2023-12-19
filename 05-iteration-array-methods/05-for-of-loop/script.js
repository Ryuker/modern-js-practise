// For Of Loop
const items = ['book', 'table', 'chair', 'kite'];

// old way
console.log('Old Way');
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// cleaner way - For Of
console.log('Cleaner Way');
for (const item of items) {
  console.log(item);
}

// Object Array
console.log('Object Array')
const users = [
  {
    name: 'Brad'
  },
  {
    name: 'Tim'
  },
  {
    name: 'Sofia'
  }
];

for (const user of users) {
  console.log(user.name);
}

// Loop over strings
const str = 'Hello World';

for (const letter of str) {
  console.log(letter);
}

// Loop over Maps
const map = new Map();
map.set('name', 'John');
map.set('age', 30);

for (const [key, value]of map) {
  console.log(key, value);
}




