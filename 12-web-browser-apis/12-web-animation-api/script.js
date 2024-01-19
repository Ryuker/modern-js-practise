// Web Animation API
const ball = document.getElementById('ball');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const reverse = document.getElementById('reverse');
const speedUp = document.getElementById('speed-up');
const slowDown = document.getElementById('slow-down');

// Animation settings
const rollAnimation = [
  {
    transform: 'rotate(0) translate3D(-50%, -50%, 0)',
    color: 'white'
  },
  {
    color: 'blue',
    offset: 0.3
  },
  {
    transform: 'rotate(360deg) translate3D(-50%, -50%, 0)',
    color: 'white'
  } 
];

// Animation options
const rollOptions = {
  duration: 3000,
  iterations: Infinity
};

// Animate the ball
const roll = ball.animate(rollAnimation, rollOptions);

// Button Listeners
play.addEventListener('click', () => {
  roll.playbackRate = 1;
  roll.play()
});

pause.addEventListener('click', () => roll.pause());
reverse.addEventListener('click', () => roll.reverse());
speedUp.addEventListener('click', () => roll.playbackRate *= 2);
slowDown.addEventListener('click', () => roll.playbackRate *= 0.5);

console.dir(roll);

