// Create a function called 'calculator()' that takes three parameters
// - num1, num2 and operator
// The operator can be +,-, * or /
// The function should return the result of the calculation. 
// - If anything other than the four operators is passed in, 
// - - the function should return an error message

function calculator(num1, num2, operator){
  let result; 

  switch(operator){
    case '+':
      console.log('Addition');
      result = num1 + num2;
      break;
    case '-':
      console.log('Subtraction');
      result = num1 - num2;
      break;
    case '*':
      console.log('Multiplication');
      result = num1 * num2;
      break;
    case '/':
      console.log('Division');
      result = num1 / num2;
      break;
    default:
      result = 'Error: Operator not supported';
  }

  return result;

}

console.log(calculator(5, 2, '+'));
console.log(calculator(5, 2, '-'));
console.log(calculator(5, 2, '*'));
console.log(calculator(5, 2, '/'));
console.log(calculator(5, 2, '&'));