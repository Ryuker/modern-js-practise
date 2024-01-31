// CommonJS Modules
// const message = require('./utils.js');
const { capitalizeWords, makeMoney } = require('./utils');
const Person  = require('./Person.js');

// console.log(message);
console.log(capitalizeWords('hello everyone'));
console.log(makeMoney(500));

const tim = new Person('Tim', 30);

tim.greet();