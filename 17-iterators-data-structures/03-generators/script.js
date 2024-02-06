// Generators

// function* < asterisk specifies the function is a generator
function* createTeamIterator(teams) {
  for (let i = 0; i < teams.length; i++) {
    yield teams[i];
  }
}

const teams = ['Red Sox', 'Yankees', 'Astros', 'Dodgers'];

const iterator = createTeamIterator(teams);

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());

// Generators are iterable
// for (const team of createTeamIterator(teams)){
//   console.log(team);
// }

// We can use the '...' spread operator
console.log([...createTeamIterator(teams)]);

// We can use destructuring
const [ first, second, third ] = createTeamIterator(teams);
console.log(first, second, third);

