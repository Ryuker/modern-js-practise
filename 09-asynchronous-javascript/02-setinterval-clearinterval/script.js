// setInterval & clearInterval

// Intro 
// const intervalID = setInterval(myCallBack, 1000, 'Hello');


// function myCallBack(a) {
//   console.log(a, Date.now());
// }

// function stopChange() {
//   clearInterval(intervalID);
//   document.querySelector('h1').textContent = 'stopped';
// }

// Color Changing
let intervalID;

function startChange() {
  if (!intervalID) {
    intervalID = setInterval(changeRandomColor, 1000);
  }

  document.querySelector('h1').textContent = 'started';
}

function stopChange() {
  clearInterval(intervalID);
  document.querySelector('h1').textContent = 'stopped';
  document.body.style.backgroundColor = 'white';
}


function changeColor() {
  console.log('changing body background color');
  if (document.body.style.backgroundColor !== 'black') {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }   
}

function changeRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  document.body.style.backgroundColor = `#${randomColor}`;
}

document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);

