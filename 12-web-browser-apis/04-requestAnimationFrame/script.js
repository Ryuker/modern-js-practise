// requestAnimationFrame() exploration
// ref: https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame

const image = document.querySelector('img');
let start;
let done = false;


// We can do animations in here
// Example of translating the image and rotating it based on the elapsed timestamp
function step(timestamp) {
  if (start === undefined) {
    start = timestamp;
  }

  const elapsed = timestamp - start;
  if (elapsed > 5000) {
    done = true;
  }

  if (done) {
    return;
  }

  image.style.transform = `
    translateX(${elapsed / 20}px) 
    rotate(${elapsed / 10}deg)
  `;

  // call step recursively
  requestAnimationFrame(step);
}

// call before the next repaint
requestAnimationFrame(step);



