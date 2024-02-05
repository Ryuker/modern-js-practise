// Symbols
const sym = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');

console.log(sym, sym1, sym2);
console.log(typeof sym, 'type')

console.log(sym1.description, ' - description');
console.log(sym.description, ' - description');

// Symbols are unique
console.log(Symbol('sym') === Symbol('sym'));

const user = {
  [Symbol('id')]: 1,
  name: 'John Doe',
  email: 'john@gmail.com'
}

console.log(user);

// Symbols are NOT enumarable
console.log(Object.keys(user));   // won't show the Symbol
console.log(Object.values(user));   // won't show the Symbol value

for (let key in user){
  console.log(key);
}

// getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user)[0]);

// Logging a symbol value 
const symbol = Object.getOwnPropertySymbols(user)[0];
console.log(user[symbol]);

// Symbol.for() - Registers a symbol within a global registry
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');

console.log(sym3 === sym4);

console.log(Symbol.keyFor(sym3));
console.log(Symbol.keyFor(sym4));

console.log(sym1.toString());
console.log(sym3.toString());
console.log(sym.toString());

// Log symbol values
console.log(sym1.valueOf());
console.log(sym3.valueOf());
console.log(sym.valueOf());

// Log symbol properties
console.log(Object.getOwnPropertyNames(Symbol));






