// setTimeOut & clearTimeOut examples

// logs after 0 sec
// this console.log will still run on the second loop
// setTimeout(() => console.log('Hello from callback'), 0 ); 

// setTimeout(changeText, 2000 ); // calls changeText after 2 seconds

// This runs on the first loop
console.log('Hello from global scope');


function changeText() {
  document.querySelector('h1').textContent = 'Hello from callback';
}

// clear a timeOut
const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', () => {
  console.log(timerId);
  clearTimeout(timerId);
  document.querySelector('h1').textContent = 'Callback Cancelled';
  console.log('Timer cancelled');
})



