// Music Player
const musicContainer = document.getElementById('music-container');
const audio = document.getElementById('audio');
const play = document.getElementById('play');
const playIcon = play.querySelector('i');
const prev = document.getElementById('prev');
const next = document.getElementById('next');


// listeners

function togglePlayPause() {
  // play the music
  if (audio.paused) {
    audio.play();
    // change the icon to display the pause button
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');
  } else {
    audio.pause();

    // change the icon to display the pause button
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
  }
}

play.addEventListener('click', togglePlayPause);
