// Ternary operator is a shorter way to writing a conditional
const age = 19;

// using an if statement
if (age >= 18) {
  console.log('You can vote');
} else {
  console.log('You can not vote');
}

// using a ternary operator
age >= 18 ? console.log('You can vote') : console.log('You can not vote');

// assigning a conditional value to a variable
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote' : 'You can not vote';

console.log(canVote);
console.log(canVote2);

// Multiple statements
const auth = true;
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }


// ternary version
// const redirect = auth 
//   ? (alert('Welcome to the dashboards'), '/dashboard') 
//   : (alert('Access Denied'), '/login');


// console.log(redirect);


// && operator as a shorthand
// auth ? console.log('Welcome to the dashboard') : null;
auth && console.log('Welcome to the dashboard');


