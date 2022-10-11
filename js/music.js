const musicContainer = document.querySelector('.music-container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-container');
const title = document.querySelector('#music-title');
const cover = document.querySelector('#cover');


// Song titles
const songs = ['mcklemore', 'memories', 'one-republic'];

// Keep track of songs
const songIndex = 1;

// Initially load song
loadSong(songs(songIndex));

// Update song details
function loadSong(song){
  title.innerText = song;
  audio.src = `music/${song}.m4a`;
  cover.src = `img/${song}.jpg`;

}