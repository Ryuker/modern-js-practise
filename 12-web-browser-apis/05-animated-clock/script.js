// Animated Clock using Canvas
function clock() {
  const now = new Date();
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // Setup canvas
  ctx.save();                     // Save the default state 
  ctx.clearRect(0, 0, 500, 500); 
  ctx.translate(250, 250);
  ctx.rotate(-Math.PI / 2);       // rotate the clock -90deg 
  
  // Set default styles
  ctx.strokeStyle = '#000000';
  ctx.fillStyle = '#f4f4f4';
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';

  // Draw the clock on the page
  // Clock face / border
  ctx.save();
  ctx.beginPath();
  ctx.lineWidth = 14;
  ctx.strokeStyle = '#800000';
  ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
  ctx.stroke();
  ctx.fill();
  ctx.restore();

  ctx.restore(); // restore the default state
}

clock();