let amount = 'hello';

// Convert string to number
amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// Convert number to string
// amount = amount.toString();
// amount = String(amount);

// Convert strint to decimal
amount = parseFloat(amount);

// Convert number to boolean
// amount = Boolean(amount);

// ways to get NaN 
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foot' / 3);


console.log(amount, typeof amount);

