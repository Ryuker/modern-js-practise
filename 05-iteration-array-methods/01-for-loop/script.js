/*
for ([initialExpression]; [conditionExpression]; [incrementExpression])
  statement;
*/


// Initial Expression - Initializes a variable/counter
// Condition Expression - Condition that the loop will continue to run as long as it is met or until the condition is false
// Increment Expression - Expression that will be executed after each iteration of the loop. Usually increments the variable.
// Statement - Code that will be executed each time the loop is run. To execute a `block` of code use the `{}` syntax

for (let i = 0; i <= 10; i++) {
  console.log('Iteration: ' + i);
}

// with conditional
console.log('With Conditional')
for (let i = 0; i <= 10; i++) {

  if (i === 7) {
    console.log('7 is my lucky number');
  } else {
    console.log('Iteration: ' + i);
  }
}

// Nested loop
console.log('Nested Loops')
for (let i = 1; i <= 10; i++) {
  console.log('Iteration: ' + i);
  for (let j = 1; j <= 10; j++){
    console.log('- Nested Iteration: ' + j);
    console.log(`${i} * ${j} = ${i * j}`);
  }
}

// Loop through an array
console.log('Loop through an array');
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'Sara')
    console.log(names[i] +' is the best');
  else 
    console.log(names[i]);
}



