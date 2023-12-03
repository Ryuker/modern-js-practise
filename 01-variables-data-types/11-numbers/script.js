let x;

const num = new Number(5);

x = num.toString();

x = num.toString().length;

x = num.toFixed(2);

x = num.toPrecision(5);

x = num.toExponential();

x = num.toLocaleString('ar-EG'); // local representation of number (Egypt)

x = num.valueOf();

x = Number.MAX_VALUE; // max value of a number
x = Number.MIN_VALUE; // min value of a number

console.log(x, typeof x);
console.log(num);



