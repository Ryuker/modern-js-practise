// is true - && operator - all have to be true
console.log(10 < 20 && 30 > 15 && 40 > 30);

// || just one has to be true
console.log(10 > 20 || 30 > 15 );

// && - Will return the first falsy value or the last value
let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;

console.log(a);

const posts = ['Post One', 'Post Two'];
// const posts = [];

// only log if length is > 0
posts.length > 0 && console.log(posts[0]);


// || - Will return the first truthy value or the last value
let b;

b = 10 || 20; // returns the first truthy value
b = 0 || 20; // return the last truthy value 
b = 0 || null || '' || undefined; // return the last value 


console.log(b);

// ?? - Returns the right side operand when the left is null or undefined
let c; 
c = 10 ?? 20; // returns 10
c = null ?? 20; // returns 20
c = undefined ?? 30; // returns 30
c = 0 ?? 30; // returns 0

console.log(c);

