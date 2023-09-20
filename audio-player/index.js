const btnPlay = document.querySelector('.play');
const btnPause = document.querySelector('.pause');
const currentTime = document.querySelector('.current-time');
const durationTime = document.querySelector('.duration-time');

let currentTimeTemp = null;

const audio = new Audio();

function playAudio() {
  audio.src = './assets/audio/Kavinsky_Nightcall.mp3';
  if (currentTimeTemp) {
    audio.currentTime = currentTimeTemp;
  } else audio.currentTime = 0;
  audio.play();
  setCurrentTime();
}

function pauseAudio() {
  audio.pause();
  currentTimeTemp = audio.currentTime;
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

// PROGRESS-BAR START

function setCurrentTime() {
  setInterval(() => {
    currentTime.textContent = getTime(audio.currentTime);
  }, 100);
}

function moveProgressLine() {
  setInterval(() => {
    document.querySelector('.progress-line').style.width =
      (audio.currentTime / audio.duration) * 100 + '%';
    document.querySelector('.progress-point').style.marginLeft =
      (audio.currentTime / audio.duration) * 100 + '%';
  }, 100);
}

moveProgressLine();

audio.addEventListener('loadeddata', () => {
  durationTime.textContent = getTime(audio.duration);
});

function getTime(time) {
  const minutes = parseInt(parseInt(time) / 60);
  const seconds = (parseInt(time) - minutes * 60) % 60;
  return `${minutes}:${String(seconds).padStart(2, 0)}`;
}

// PROGRESS-BAR END
