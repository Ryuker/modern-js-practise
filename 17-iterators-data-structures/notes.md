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