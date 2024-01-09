// Try / Catch Error handling of Async / Await functions

// Catching a 'not defined' error
try  {
  console.log(x);
} catch(error) {
  console.log('Error: ' + error);
}


// Throwing your own error and catching it
function double(number) {
  if (isNaN(number)) {
    throw new Error(number + ' is not a number');
  }

  return number * 2;
}

try {
  const y = double('bla');
  console.log(y);
} catch(error) {
  console.log(error);
}