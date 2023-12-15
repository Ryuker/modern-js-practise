// The Call Stack
// - Stack of functions to be executed
// - Manages execution contexts
// - Stacks are LIFO (last in first out)

// function calls get pushed on to the stack and then popped off the stack

// example 1: All global function calls
// function first() {
//   console.log('First...');
// }

// function second() {
//   console.log('Second...');
// }

// function third() {
//   console.log('Third...');
// }

// first();
// second();
// third();

// example 2: Nested function calls
first();

function first() {
  console.log('First...');
  second();
}

function second() {
  console.log('Second...');
  third();
}

function third() {
  console.log('Third...');
}


