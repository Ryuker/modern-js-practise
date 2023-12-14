// Block level scope
const x = 100;
if (true) {
  const y = 200;
  console.log(x, 'Block scope');
  console.log(x + y, 'Local + Global scope');
}

// local scoped i in for loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

if (true) {
  const a = 500;  // block scoped
  let b = 600;    // block scoped
  var c = 700; // not block scoped
}

// logging a var is not block scoped, var is accessible from outside
console.log(c);


// var is function scoped, can't be accessed ouside of function
function run() {
  var d = 100; 
  console.log(d);
}

run();

const foo = 1;
var bar = 2; // global var gets added to the window object


