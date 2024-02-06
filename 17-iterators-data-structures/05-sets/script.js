// Sets
const set = new Set([1, 2, 3, 4]);

console.log(set);


// to add to a set
set.add(5); 
console.log(set);

// To check for membership
console.log(set.has(3), 'has 3');
console.log(set.has(6), 'has 6');

// to remove from a set
set.delete(5);
console.log(set.has(5), 'has 5 after deletion');

// Create Array from set
const setArray = Array.from(set);
console.log(setArray, 'Array.from(set)');

// Loop over a set
for (let item of set) {
  console.log(item);
}

// iterator from set.values()
const iterator = set.values(); // returns an iterator
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// clear a set
set.clear();
console.log(set);








