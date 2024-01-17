// Music Player
const musicContainer = document.getElementById('music-container');
const audio = document.getElementById('audio');
const play = document.getElementById('play');
const playIcon = play.querySelector('i');
const prev = document.getElementById('prev');
const next = document.getElementById('next');


// get the songs
let curTrackIndex = 0;

const track1 = fetch('./music/hey.mp3');
const track2 = fetch('./music/summer.mp3');
const track3 = fetch('./music/ukulele.mp3');

let tracks = [];

Promise.all([track1, track2, track3]).then((response) => {
  return response.map(track => track.url);
}).then((data) => {
  tracks = data.map(track => track);
  audio.src = tracks[curTrackIndex];
});


// listeners

function togglePlayPause() {
  // play the music
  if (audio.paused) {
    audio.play();
    // change the icon to display the pause button
    playIcon.classList.remove('fa-play');
    playIcon.classList.add('fa-pause');

    // trigger the image in the music container to start rotating
    musicContainer.classList.add('play');
    console.dir(audio);
    
    musicContainer.querySelector('#title').textContent = audio.src;
  } else {
    audio.pause();
    // change the icon to display the pause button
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');

    // trigger the image in the music container to stop rotating
    musicContainer.classList.remove('play');
  }
}


function loadPrevTrack() {
  console.log('loading prev track');
  if (curTrackIndex === 0)
    curTrackIndex = tracks.length-1;
  else {
    curTrackIndex--;
  }

  if (!audio.paused) {
    audio.src = tracks[curTrackIndex];
    audio.play();
  } else {
    audio.src = tracks[curTrackIndex];
  }
}

function loadNextTrack() {
  console.log('loading next track');
  if (curTrackIndex === tracks.length-1)
    curTrackIndex = 0;
  else {
    curTrackIndex++;
  }

  if (!audio.paused) {
    audio.src = tracks[curTrackIndex];
    audio.play();
  } else {
    audio.src = tracks[curTrackIndex];
  }
  
}


play.addEventListener('click', togglePlayPause);
prev.addEventListener('click', loadPrevTrack);
next.addEventListener('click', loadNextTrack);

