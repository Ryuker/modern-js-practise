// Maps
const myMap = new Map();

myMap.set('name', 'John');
myMap.set(1, 'blue');
myMap.set(2, 'red');

console.log(myMap.get('name'), 'name');
console.log(myMap.get(1), '1');
console.log(myMap.get(2), '2');

console.log(myMap.size, 'size');

console.log(myMap.has(1), 'has 1');
console.log(myMap.has(3), 'has 3');

myMap.delete(2);
console.log(myMap);

const peopleMap = new Map();
peopleMap.set('brad', { phone: '555-555-555', email: 'brad@gmail.com'});
peopleMap.set('jack', { phone: '555-555-555', email: 'jack@gmail.com'});
peopleMap.set('jill', { phone: '555-555-555', email: 'jill@gmail.com'});

peopleMap.forEach(person => console.log(person.email));

console.log(peopleMap.keys());      // returns an iterator
console.log(peopleMap.values());    // returns an iterator
console.log(peopleMap.entries());   // returns an iterator

const iterator = peopleMap.values();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const peopleArray = Array.from(peopleMap);
console.log(peopleArray);


