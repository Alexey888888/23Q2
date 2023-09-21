const playList = [
  {
    artistTitle: 'Kavinsky',
    songTitle: 'Nightcall',
    src: './assets/audio/Kavinsky_Nightcall.mp3',
    img: './assets/img/Kavinsky_Nightcall_2010.png',
  },
  {
    artistTitle: 'The Chemical Brothers',
    songTitle: 'Galvanize',
    src: './assets/audio/the-chemical-brothers-galvanize.mp3',
    img: './assets/img/The_Chemical_Brothers-Galvanize.png',
  },
  {
    artistTitle: 'Fatboy Slim',
    songTitle: 'Ya Mama',
    src: './assets/audio/the-chemical-brothers-galvanize.mp3',
    img: './assets/img/fbs.png',
  },
];

const btnPlay = document.querySelector('.play');
const btnPause = document.querySelector('.pause');
const currentTime = document.querySelector('.current-time');
const durationTime = document.querySelector('.duration-time');

let currentTimeTemp = null;
let pos = null;
let intervalId = null;
let isPlay = false;
let afterRewind = false;

const audio = new Audio();

function preloadAudio() {
  audio.src = './assets/audio/Kavinsky_Nightcall.mp3';
}
preloadAudio();

function playAudio() {
  if (currentTimeTemp) {
    audio.currentTime = currentTimeTemp;
  } else audio.currentTime = 0;
  audio.play();
  setCurrentTime();
  moveProgressLine();
  isPlay = true;
}

function pauseAudio() {
  audio.pause();
  if (currentTimeTemp && afterRewind === true)
    audio.currentTime = currentTimeTemp;
  afterRewind = false;
  currentTimeTemp = audio.currentTime;
  isPlay = false;
}

function togglePlayBtn() {
  btnPlay.classList.toggle('none');
  btnPause.classList.toggle('none');
  if (isPlay) {
    btnPlay.classList.add('none');
    btnPause.classList.remove('none');
  } else {
    btnPlay.classList.remove('none');
    btnPause.classList.add('none');
  }
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

function moveProgressLine(pos) {
  intervalId = setInterval(() => {
    // document.querySelector('.progress-line').style.width =
    //   (audio.currentTime / audio.duration) * 100 + '%';

    document.querySelector('.time-line').value =
      (audio.currentTime / audio.duration) * 10000;
  }, 100);
}

audio.addEventListener('loadeddata', () => {
  durationTime.textContent = getTime(audio.duration);
});

function getTime(time) {
  const minutes = parseInt(parseInt(time) / 60);
  const seconds = (parseInt(time) - minutes * 60) % 60;
  return `${minutes}:${String(seconds).padStart(2, 0)}`;
}

document.querySelector('.time-line').oninput = function () {
  pos = this.value;
  currentTimeTemp = (pos * audio.duration) / 10000;
  console.log(currentTimeTemp);
  if (isPlay) playAudio();
  afterRewind = true;
  if (!isPlay) {
    pauseAudio();
    setCurrentTime();
  }
};

// PROGRESS-BAR END
