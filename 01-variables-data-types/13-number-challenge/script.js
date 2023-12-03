let x = Math.random();
let y = Math.random();
let sumOutput;
let diffOutput;
let productOutput;
let quotientOutput;
let remainderOutput;

x = Math.floor(x * 100 + 1); // add + 1 since we start from 0
y = Math.floor(y * 50 + 1); // add + 1 since we start from 0

sum = `${x} + ${y} = ${x + y}`;
diffOutput = `${x} - ${y.toString()} = ${x - y}`;
productOutput = `${x} * ${y} = ${x * y}`;
quotientOutput = `${x} / ${y} = ${x / y}`;
remainderOutput = `${x} % ${y} = ${x % y}`;


console.log(`x: ${x}`);
console.log(`y: ${y}`);

console.log("sum: " + sum);
console.log("diff: " + diffOutput);
console.log("product: " + productOutput);
console.log("quotient: " + quotientOutput);
console.log("remainder: " + remainderOutput);

// Challenge solution from video

