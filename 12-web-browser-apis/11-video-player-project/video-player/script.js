// Video Player Project
const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const timestamp = document.getElementById('timestamp');
const progressBar = document.getElementById('progress');


function playVideo() {
  playBtn.querySelector('i').classList.remove('fa-play');
  playBtn.querySelector('i').classList.add('fa-pause');
  video.play();
}

function pauseVideo() {
  playBtn.querySelector('i').classList.remove('fa-pause');
  playBtn.querySelector('i').classList.add('fa-play');
  video.pause();
}

function stopVideo() {
  video.currentTime = 0;
  progressBar.value = 0;
  playBtn.querySelector('i').classList.remove('fa-pause');
  playBtn.querySelector('i').classList.add('fa-play');
  video.pause();
}

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progressBar.value = progressPercent;

  // console.log(progressPercent);
  // console.log(duration, currentTime);

  // TODO - make this display in proper format
  // timestamp.textContent = video.currentTime;
}

function setProgress(e) {
  video.pause();
  const newTime = (e.target.value / 100) * video.duration;
  video.currentTime = newTime; // set the time
}


// Event listeners
playBtn.addEventListener('click', () => 
  video.paused ? playVideo() : pauseVideo()
);

stopBtn.addEventListener('click', stopVideo);

// Display the current time of the video in the timestamp element
video.addEventListener('timeupdate', updateProgress);

progressBar.addEventListener('change', setProgress);