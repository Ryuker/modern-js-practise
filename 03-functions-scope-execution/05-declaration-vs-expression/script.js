// Function Declaration
function addDollarSign(value) {
  return '$' + value;
}

console.log(addDollarSign(100));

// Function Expression
const addPlusSign = function (value) {
  return '+' + value;
};

console.log(addPlusSign(200));

// hoisting is the process of moving all the functions and variable declarations to the top of the scope before its ran.
// - this makes function calls available above the function declaration
// - but this does not work with function expressions


