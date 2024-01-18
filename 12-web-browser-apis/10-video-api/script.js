// Video API Exploration
// - attributes in html: controls, autoplay, muted, loop
// - Autoplay only works in chrome if the video is muted

const video = document.getElementById('video');
const play = document.getElementById('play');
const pause = document.getElementById('pause');
const stop = document.getElementById('stop');
const currentTime = document.getElementById('current-time');

console.log(video, play, pause, stop, currentTime);
console.dir(video);

play.addEventListener('click', () => video.play());
pause.addEventListener('click', () => video.pause());
stop.addEventListener('click', () => {
  video.pause();
  video.currentTime = 0;
});

video.addEventListener('timeupdate', () => currentTime.innerText = video.currentTime);


