// ||= - assigns the righ side value only if the left is a falsy value

let a = false;

if (!a) {
  a = 10;
}

// shorthand version
a = a || 10;

// shorter version
a ||= 10;

console.log(a);

// &&= - assigns the right side value only if the left is a truthy value
let b = 10;

if (b) {
  b = 20;
}

// shorthand
b = b && 20;

// shortest version
b &&= 20; 

console.log(b);

// ??= - assigns the right side value only if the left is null or undefined 
let c = null;

if (c === null || c === undefined) {
  c = 30;
}

// shorthand
c = c ?? 30;

// shortest version
c ??= 30;

console.log(c);

