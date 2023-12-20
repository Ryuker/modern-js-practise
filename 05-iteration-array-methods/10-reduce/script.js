// Reduce - reduced array down to a single value
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// long version
console.log('Long version');
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum);

// shorter version
console.log('Short version');
const sum2 = numbers.reduce((acc, cur) => acc + cur, 10);
console.log(sum2);

// Using a for loop
console.log('Using a for loop');
const sum3 = () => {
  let acc = 0;
  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

console.log(sum3());

// Shopping cart example
const cart = [
  { id: 1, name: 'Product 1', price: 130 },
  { id: 2, name: 'Product 2', price: 150 },
  { id: 3, name: 'Product 3', price: 175 },
];

// Get the total of the cart prizes
console.log('Shopping cart - total of prizes');

const total = cart.reduce((acc, product) => acc + product.price, 0);
console.log('total: $' + total);


