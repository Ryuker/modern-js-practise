// Function nested scope
function first() {
  const x = 100;

  // child functions can access variables from the parent scope
  function second() {
    const y = 200;
    console.log(x + y);
  }

  second();
}

first();

// Block nested scope, parents can't access child variables
if (true) {
  const x = 100;

  if (x === 100 ) {
    const y = 200;
    console.log(x + y);
  }  
}


