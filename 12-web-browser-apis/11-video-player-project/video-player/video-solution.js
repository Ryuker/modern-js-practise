// Video Solution
const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const timestamp = document.getElementById('timestamp');
const progress = document.getElementById('progress');

function playPause() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function updateIcon() {
  if (video.paused) {
    playBtn.querySelector('i').classList.remove('fa-pause');
    playBtn.querySelector('i').classList.add('fa-play');
  } else {
    playBtn.querySelector('i').classList.remove('fa-play');
    playBtn.querySelector('i').classList.add('fa-pause');
  }
}

function stopVideo() {
  video.currentTime = 0;
  progress.value = 0;
  video.pause();
}

function updateProgress(e) {
  progress.value = (video.currentTime / video.duration) * 100;
  
  // Format the timestamp
  let minutes = Math.floor(video.currentTime / 60);
  if (minutes < 10) {
    minutes = '0' + String(minutes);
  }
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }

  timestamp.textContent = `${minutes}:${seconds}`;
}

function setProgress(e) {
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Event listeners
video.addEventListener('click', playPause);
playBtn.addEventListener('click', playPause);
video.addEventListener('pause', updateIcon);

video.addEventListener('play', updateIcon);
stopBtn.addEventListener('click', stopVideo);

// Display the current time of the video in the timestamp element
video.addEventListener('timeupdate', updateProgress);
progress.addEventListener('click', setProgress);
