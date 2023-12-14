// alert('Hello');
console.log(window.innerWidth);

const x = 100;
console.log(x, 'in global');

function run() {
  console.log(window.innerHeight);
  console.log(x, 'in function');
}

run();

if (true) {
  console.log(x, 'in block');
}

function add() {
  const x = 1; // variable shadowing, overwrites the global scoped x
  const y = 50;
  console.log(y, 'function scoped');
  console.log(x + y, 'local scoped');
}

add();


