let x = Math.random(1, 100);
let y = Math.random(1, 50);
let sumOutput;
let diffOutput;
let productOutput;
let quotientOutput;
let remainderOutput;

x = Math.floor(x * 100);
y = Math.floor(y * 100);

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