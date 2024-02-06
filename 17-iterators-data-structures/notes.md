# Iterators, Generators & Data Structures Notes


## Symbols
- Are used to create Unique Identifiers, they are unique values
``` JS
const sym1 = Symbol('foo');
const sym2 = Symbol('foo');

sym1 === sym2 // is false
```
- this makes them very useful to use as a key in an object
```JS
const id = Symbol('id');
user = {
  [id]: '123'
}

console.log(user.[id]); // Logs 123

```
- Are a primitive datatype
- Symbols are always unique. So in comparisons they will always be false
``` JS
console.log(Symbol('sym') === Symbol('sym')); // returns false
``` 
- Symbols are NOT enumarable
- Symbols are mainly used to use the same names while avoiding overriding the value, they avoid naming collisions
- They protect values from overwrite since they are a unique place in registry.
- But they are not private.

## Iterators
- are a Symbol
- are used to iterate through an object array
  - useful when you need to step through an array
  - useful when you need more control what is returned from an object to a for loop
- They are pretty advanced and likely won't be used much for simple stuff

## Generators
- Generators are functions that can be paused and resumed
- They use 'yield' to pause execution of a for loop for example and return a value
- They are iterable by for loops etc

to declare
```JS
function* {} // asterisk indicates the function is a generator
```

code example
```JS
function* createTeamIterator(teams) {
  for (let i = 0; i < teams.length; i++) {
    yield teams[i];
  }
}
```
usage
```JS
const teams = ['Red Sox', 'Yankees', 'Astros', 'Dodgers'];
const iterator = createTeamIterator(teams);
console.log(iterator.next());
console.log(iterator.next());
// etc
```

they are iterable
```JS
// Using For loop
for (const team of createTeamIterator(teams)){
  console.log(team);
}

// Using Spread Operator to populate array
console.log([...createTeamIterator(teams)]);

// We can use destructuring
const [ first, second, third ] = createTeamIterator(teams);
console.log(first, second, third);
```

## Sets
- A datastructure allow to store a collection of unique values
- They are unordered and they don't allow duplicates
- They are usefull when you want to store values that you want to check for membership but you don't care about the order of the values
- Values in a Set have to be unique, can't have [2, 2, 2] for example, this will just log '2';

## Maps
- A datastructure that was added in ES15
- Maps are similar to objects (they have key value pairs)
  -  but the key doesn't have to be a string
  -  it can an array, number, object etc



