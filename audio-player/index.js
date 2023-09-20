const btnPlay = document.querySelector('.play');
const btnPause = document.querySelector('.pause');
const audio = new Audio();

function playAudio() {
  audio.src = './assets/audio/Kavinsky_Nightcall.mp3';
  audio.currentTime = 0;
  audio.play();
}

function pauseAudio() {
  audio.pause();
}

function togglePlayBtn() {
  btnPlay.classList.toggle('none');
  btnPause.classList.toggle('none');
}

btnPlay.addEventListener('click', () => {
  playAudio();
  togglePlayBtn();
});

btnPause.addEventListener('click', () => {
  pauseAudio();
  togglePlayBtn();
});
