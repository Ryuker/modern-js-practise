//Multiple Promises with Async / Await

// origincal xhr example to get the data
// function getData(endpoint) {
//   return new Promise((resolve, reject) => {

//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', endpoint);

//     xhr.onreadystatechange = function () {
//       if (this.readyState === 4) {
//         if (this.status === 200) {
//           resolve(JSON.parse(this.responseText));
//         } else {
//           reject('Error: something went wrong');
//         }
//       }
//     }

//     setTimeout(() => {
//       xhr.send();
//     }, Math.floor(Math.random() * 3000 + 1000));

//   });
// }

// original promise chain to get the data
// getData('./movies.json')
//   .then((movies) => {
//     console.log(movies);
//     return getData('./actors.json');
//   })
//   .then((actors) =>  {
//     console.log(actors);
//     return getData('./directors.json');
//   })
//   .then((directors) => {
//     console.log(directors);
//   })
//   .catch((error) => console.log(error));

// Async approach to get the data
async function getAllData() {
  const movies = await getData('./movies.json');
  const actors = await getData('./actors.json');
  const directors = await getData('./directors.json');
  console.log(movies, actors, directors);
  
} 

getAllData();
