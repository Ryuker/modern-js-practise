const d = new Date(10, 30, 2022, 6, 0, 0);
const hour = d.getHours();

console.log(hour);

// if else
console.log('If else:');
if (hour < 12) {
  console.log('Good Morning!');
} else if(hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
} 

// Nested If 
console.log('Nested if:')
if (hour < 12) {
  console.log('Good Morning!');
  if (hour === 6) {
    console.log('Wake Up!');
  }
} else if(hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');

  if (hour >= 20){
    console.log('Zzzzzz');
  }
} 

// AND operator
console.log('AND operator')
if (hour >= 7 && hour < 15){
  console.log('It is work time!');
}

// OR operator
console.log('OR operator')
if (hour === 6 || hour === 20) {
  console.log('Brush your teeth!');
}
