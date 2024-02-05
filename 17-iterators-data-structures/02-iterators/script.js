// Iterators

// First method using iterable
// const app = {
//   nextIndex: 0,
//   teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
//   next() {
//     if (this.nextIndex >= this.teams.length) {
//       return { done: true }
//     }
      
//     const returnValue = { value: this.teams[this.nextIndex], done: false };
//     this.nextIndex++;
//     return returnValue;
//   }
// }

// console.log(app.next());  // Logs 'Red Soxx'
// console.log(app.next());  // Logs 'Yankees'
// console.log(app.next());  // Logs 'Astros'
// console.log(app.next());  // Logs 'Dodgers'
// console.log(app.next());  // logs done: true as we've logged the full array

// logs error that app is not iterable
// for (const team of app) {
//   console.log(team);
// }


// Other method Using Symbol.iterator
const app = {
  teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
  [Symbol.iterator]: function() {
    let nextIndex = 0;
    return { 
      next: () => {
        return nextIndex < this.teams.length 
          ? { value: this.teams[nextIndex++], done: false } 
          : { done: true }
      }
    }
  }
};

const iterator = app[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// Does not log an error as app is now iterable
for (const team of app) {
  console.log(team);
}


