// passing a parameter
function registerUser(user) {
  return user + ' is registered';
}
console.log(registerUser('John'));

// default parameters - old way
function registerUser2(user) {
  if (!user) {
    user = 'Bot';
  }
  return user + ' is registered';
}
console.log(registerUser2('John'));

// default parameters - new way
function registerUser3(user = 'Bot') {
  return user + ' is registered';
}
console.log(registerUser3());

// Rest Params 
function sum(...numbers) { // returns an array
  return numbers;
}
console.log(sum(1, 2, 3)); 

// loop through the array of numbers to increment a total
function sumTotal(...numbers) { 
  let total = 0;
  for (const num of numbers) {
    total += num;
  }

  return total;
}
console.log(sumTotal(1, 2, 3)); 

// Objects as params
function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: 'John'
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: 'Sara'
  })
);

// Arrays as params
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// Rest param version
function getRandomRest(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];

  console.log(item);
}

getRandomRest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);




