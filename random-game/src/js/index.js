const clickSound = new Audio('./src/audio/click.mp3');
const clickMineSound = new Audio('./src/audio/mine.mp3');
const setFlagSound = new Audio('./src/audio/set-flag.mp3');
const unSetFlagSound = new Audio('./src/audio/unset-flag.mp3');
const loseSound = new Audio('./src/audio/lose.mp3');
const winSound = new Audio('./src/audio/win.mp3');
const clickMineSoundNorm = new Audio('./src/audio/mine-norm.mp3');
let bang = clickMineSoundNorm;

let resultGame;
let timerIDforCloseBtn;
let bombNum = 10;

const header = document.createElement('header');
header.className = 'header';
const background = document.createElement('img');
background.className = 'background';
background.src = './src/icons/favicon.png';
document.body.prepend(header);
header.prepend(background);

const blackout2 = document.createElement('div');
blackout2.className = 'blackout2 none';

const main = document.createElement('main');
main.className = 'main';
const gameBox = document.createElement('div');
gameBox.className = 'game-box';
const tools = document.createElement('div');
const toolsPro = document.createElement('div');
tools.className = 'tools';
toolsPro.className = 'tools tools-pro';
const boardWrapper = document.createElement('div');
boardWrapper.className = 'board__wrapper';
const board = document.createElement('div');
board.className = 'board';
header.after(main);
main.prepend(gameBox);
gameBox.append(tools);
gameBox.append(boardWrapper);
boardWrapper.append(board);
boardWrapper.append(blackout2);
gameBox.append(toolsPro);

//
const toolsUp = document.createElement('div');
toolsUp.className = 'tools__up';
const settingIcon = document.createElement('div');
settingIcon.className = 'setting';

const helpIcon = document.createElement('a');
helpIcon.href =
  'https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BF%D1%91%D1%80_(%D0%B8%D0%B3%D1%80%D0%B0)';
helpIcon.className = 'help';
helpIcon.setAttribute('target', '_blank');

const toggleSound = document.createElement('div');
toggleSound.className = 'toggleSound';
const resultsIcon = document.createElement('div');
resultsIcon.className = 'results';
toolsUp.append(settingIcon, helpIcon, toggleSound, resultsIcon);
toolsPro.append(toolsUp);

helpIcon.innerHTML =
  "<img class='help-icon' src='./src/icons/help.png' alt='help'>";
settingIcon.innerHTML =
  "<img class='setting-icon' src='./src/icons/settings.png' alt='settings'>";
toggleSound.innerHTML =
  "<img class='sound-icon' src='./src/icons/sound-on.png' alt='sound'>";
resultsIcon.innerHTML =
  "<img class='results-icon' src='./src/icons/result__list.png' alt='results'>";
//
const toolsDown = document.createElement('div');
toolsDown.className = 'tools__down';
const flagCount = document.createElement('div');
flagCount.className = 'flag-count';
const replay = document.createElement('div');
replay.className = 'replay';
const time = document.createElement('div');
time.className = 'time';
toolsDown.append(flagCount, replay, time);
tools.append(toolsDown);

const countFlag = document.createElement('div');
countFlag.className = 'count-flag';
flagCount.append(countFlag);
countFlag.textContent = bombNum;
replay.innerHTML =
  "<img class='replay' src='./src/icons/replay.svg' alt='replay'>";
time.innerHTML = '<span class="time__count">000</span>';

//POP-UP START
// const popUpFinish = document.createElement('div');
// popUpFinish.className = 'pop-up-finish';
// popUpFinish.classList.add('none');
// gameBox.append(popUpFinish);
// const popUpInner = document.createElement('div');
// popUpInner.className = 'pop-up-finish__inner';
// popUpFinish.append(popUpInner);
const blackout = document.createElement('div');
blackout.className = 'blackout none';
gameBox.prepend(blackout);

const popUpCommon = document.createElement('div');
popUpCommon.className = 'pop-up-common';
boardWrapper.prepend(popUpCommon);
const popUpCommonInner = document.createElement('div');
popUpCommonInner.className = 'pop-up-common__inner';
popUpCommon.append(popUpCommonInner);
const closeBtn = document.createElement('div');
closeBtn.className = 'close-btn';
closeBtn.innerHTML = '<p class="pop-up-finish__close">CLOSE<p>';
popUpCommon.append(closeBtn);

//POP-UP END

const footer = document.createElement('footer');
footer.className = 'footer';
const footerList = document.createElement('div');
footerList.className = 'footer__list';
footerList.insertAdjacentHTML(
  'afterbegin',
  '<div class="git__wrapper"><a class="github" href="https://github.com/Alexey888888" target="_blank"><img src="./src/icons/GitHub-logo.jpg" alt="GitHub"/></a></div><p class="year">2023</p><a class="rsschool" href="https://rs.school/js-stage0/" target="_blank"><img src="./src/icons/rs_school_js.svg" alt="rs_school_js"/></a>'
);
main.after(footer);
footer.append(footerList);

function createMatrix(width = 10, height = 10) {
  const matrix = [];
  matrix.length = height;
  matrix.fill([]);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].length = width;
    matrix[i].fill(0);
  }

  return matrix;
}

function getRandom(min = 0, max = 9) {
  let num = Math.floor(min + Math.random() * (max - min + 1));
  return num;
}

function createMatrixBombs(firstClickCell) {
  const matrixBombs = [];
  const bombArrTemp = [];
  const create2 = () => {
    const bomb = [getRandom(), getRandom()];
    if (!bombArrTemp.includes(bomb.join('')) && bomb.join() !== firstClickCell)
      matrixBombs.push(bomb);

    bombArrTemp.push(bomb.join(''));
    if (matrixBombs.length < bombNum) create2();
  };
  create2();

  return matrixBombs;
}

//

//

function fillBoard() {
  const matrix = createMatrix();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const border = document.createElement('div');
      border.className = 'border';
      const cell = document.createElement('div');
      cell.className = 'cell';
      border.append(cell);
      board.append(border);
      cell.dataset.id = [i, j];
    }
  }
  function addBombs() {
    timeCount();
    const firstClickCell = event.srcElement.dataset.id;
    const matrixBombs = createMatrixBombs(firstClickCell);
    for (let i = 0; i < matrixBombs.length; i++) {
      document.querySelector(
        `[data-id="${matrixBombs[i]}"]`
      ).innerHTML = `<span class="bomb">${bombsIcon}</span>`;
    }

    fillNeighbor();
    document.querySelectorAll('.cell').forEach((item) => {
      item.removeEventListener('click', addBombs);
    });
  }

  function fillNeighbor() {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let count = 0;
        if (
          document.querySelector(`[data-id="${[i, j]}"]`).innerHTML !==
          `<span class="bomb">${bombsIcon}</span>`
        ) {
          if (document.querySelector(`[data-id="${[i - 1, j - 1]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i - 1, j - 1]}"]`)
                .innerHTML === `<span class="bomb">${bombsIcon}</span>`
            )
              count++;
          }
          if (document.querySelector(`[data-id="${[i - 1, j]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i - 1, j]}"]`).innerHTML ===
              `<span class="bomb">${bombsIcon}</span>`
            )
              count++;
          }
          if (document.querySelector(`[data-id="${[i - 1, j + 1]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i - 1, j + 1]}"]`)
                .innerHTML === `<span class="bomb">${bombsIcon}</span>`
            )
              count++;
          }
          if (document.querySelector(`[data-id="${[i, j - 1]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i, j - 1]}"]`).innerHTML ===
              `<span class="bomb">${bombsIcon}</span>`
            )
              count++;
          }
          if (document.querySelector(`[data-id="${[i, j + 1]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i, j + 1]}"]`).innerHTML ===
              `<span class="bomb">${bombsIcon}</span>`
            )
              count++;
          }
          if (document.querySelector(`[data-id="${[i + 1, j - 1]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i + 1, j - 1]}"]`)
                .innerHTML === `<span class="bomb">${bombsIcon}</span>`
            )
              count++;
          }
          if (document.querySelector(`[data-id="${[i + 1, j]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i + 1, j]}"]`).innerHTML ===
              `<span class="bomb">${bombsIcon}</span>`
            )
              count++;
          }
          if (document.querySelector(`[data-id="${[i + 1, j + 1]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i + 1, j + 1]}"]`)
                .innerHTML === `<span class="bomb">${bombsIcon}</span>`
            )
              count++;
          }
          document.querySelector(`[data-id="${[i, j]}"]`).innerHTML = count;
          if (document.querySelector(`[data-id="${[i, j]}"]`).innerHTML === '0')
            document.querySelector(`[data-id="${[i, j]}"]`).innerHTML = '';
        }
      }
    }
    addColorNumber();
  }

  // addBombs();

  // fillNeighbor();

  function addBombsAfterClick() {
    document.querySelectorAll('.cell').forEach((item) => {
      item.addEventListener('click', addBombs);
    });
  }
  addBombsAfterClick();
}

fillBoard();

let cell = document.querySelectorAll('.cell');
let clickCount = 0;

function visible() {
  cell.forEach((item) => {
    item.addEventListener('click', () => {
      if (
        item.innerHTML !== `<span class="bomb">${bombsIcon}</span>` &&
        !item.classList.contains('visible') &&
        isSound
      ) {
        clickSound.play();
      }
      clickCount++;

      item.classList.add('visible');

      if (
        item.innerHTML === `<span class="bomb">${bombsIcon}</span>` &&
        isSound
      ) {
        bang.play();
      }

      if (item.innerHTML === `<span class="bomb">${bombsIcon}</span>`) {
        item.classList.add('red');
        openAllBombs();
        blackout.classList.remove('none');
        resultGame = 'LOSE';
        openModalFinish(resultGame);
        document.body.classList.add('red');
      }
      checkGameStatus();
      if (item.innerHTML === '') {
        startOpenNeighbor();
      }
    });
  });
}

visible();

function openNeighbor() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (
        document
          .querySelector(`[data-id="${[i, j]}"]`)
          .classList.contains('visible') &&
        document.querySelector(`[data-id="${[i, j]}"]`).innerHTML === ''
      ) {
        if (
          document.querySelector(`[data-id="${[i, j + 1]}"]`) &&
          document.querySelector(`[data-id="${[i, j + 1]}"]`).innerHTML ===
            '' &&
          !document.querySelector(`[data-id="${[i, j + 1]}"]`).previousSibling
        )
          document
            .querySelector(`[data-id="${[i, j + 1]}"]`)
            .classList.add('visible');

        if (
          document.querySelector(`[data-id="${[i + 1, j]}"]`) &&
          document.querySelector(`[data-id="${[i + 1, j]}`).innerHTML === '' &&
          !document.querySelector(`[data-id="${[i + 1, j]}"]`).previousSibling
        )
          document
            .querySelector(`[data-id="${[i + 1, j]}"]`)
            .classList.add('visible');

        if (
          document.querySelector(`[data-id="${[i + 1, j + 1]}"]`) &&
          document.querySelector(`[data-id="${[i + 1, j + 1]}"]`).innerHTML ===
            '' &&
          !document.querySelector(`[data-id="${[i + 1, j + 1]}"]`)
            .previousSibling
        )
          document
            .querySelector(`[data-id="${[i + 1, j + 1]}"]`)
            .classList.add('visible');

        if (
          document.querySelector(`[data-id="${[i - 1, j + 1]}"]`) &&
          document.querySelector(`[data-id="${[i - 1, j + 1]}"]`).innerHTML ===
            '' &&
          !document.querySelector(`[data-id="${[i - 1, j + 1]}"]`)
            .previousSibling
        )
          document
            .querySelector(`[data-id="${[i - 1, j + 1]}"]`)
            .classList.add('visible');
      }
    }
  }
  openNeighborReverse();
}

function openNeighborReverse() {
  for (let i = 9; i >= 0; i--) {
    for (let j = 9; j >= 0; j--) {
      if (
        document
          .querySelector(`[data-id="${[i, j]}"]`)
          .classList.contains('visible') &&
        document.querySelector(`[data-id="${[i, j]}"]`).innerHTML === ''
      ) {
        if (
          document.querySelector(`[data-id="${[i, j - 1]}"]`) &&
          document.querySelector(`[data-id="${[i, j - 1]}"]`).innerHTML ===
            '' &&
          !document.querySelector(`[data-id="${[i, j - 1]}"]`).previousSibling
        )
          document
            .querySelector(`[data-id="${[i, j - 1]}"]`)
            .classList.add('visible');

        if (
          document.querySelector(`[data-id="${[i - 1, j]}"]`) &&
          document.querySelector(`[data-id="${[i - 1, j]}`).innerHTML === '' &&
          !document.querySelector(`[data-id="${[i - 1, j]}"]`).previousSibling
        )
          document
            .querySelector(`[data-id="${[i - 1, j]}"]`)
            .classList.add('visible');

        if (
          document.querySelector(`[data-id="${[i - 1, j - 1]}"]`) &&
          document.querySelector(`[data-id="${[i - 1, j - 1]}"]`).innerHTML ===
            '' &&
          !document.querySelector(`[data-id="${[i - 1, j - 1]}"]`)
            .previousSibling
        )
          document
            .querySelector(`[data-id="${[i - 1, j - 1]}"]`)
            .classList.add('visible');

        if (
          document.querySelector(`[data-id="${[i + 1, j - 1]}"]`) &&
          document.querySelector(`[data-id="${[i + 1, j - 1]}"]`).innerHTML ===
            '' &&
          !document.querySelector(`[data-id="${[i + 1, j - 1]}"]`)
            .previousSibling
        )
          document
            .querySelector(`[data-id="${[i + 1, j - 1]}"]`)
            .classList.add('visible');
      }
    }
  }
}

function startOpenNeighbor() {
  for (let i = 0; i < 4; i++) {
    openNeighbor();
  }
  openNeighborNumber();
  openNeighborNumberReverse();
  checkGameStatus();
}

function openNeighborNumber() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (
        document
          .querySelector(`[data-id="${[i, j]}"]`)
          .classList.contains('visible') &&
        document.querySelector(`[data-id="${[i, j]}"]`).innerHTML === ''
      ) {
        if (
          document.querySelector(`[data-id="${[i, j + 1]}"]`) &&
          !document.querySelector(`[data-id="${[i, j + 1]}"]`).previousSibling
        ) {
          document
            .querySelector(`[data-id="${[i, j + 1]}"]`)
            .classList.add('visible');
        }

        if (
          document.querySelector(`[data-id="${[i + 1, j]}"]`) &&
          !document.querySelector(`[data-id="${[i + 1, j]}"]`).previousSibling
        ) {
          document
            .querySelector(`[data-id="${[i + 1, j]}"]`)
            .classList.add('visible');
        }

        if (
          document.querySelector(`[data-id="${[i + 1, j + 1]}"]`) &&
          !document.querySelector(`[data-id="${[i + 1, j + 1]}"]`)
            .previousSibling
        ) {
          document
            .querySelector(`[data-id="${[i + 1, j + 1]}"]`)
            .classList.add('visible');
        }

        if (
          document.querySelector(`[data-id="${[i - 1, j + 1]}"]`) &&
          !document.querySelector(`[data-id="${[i - 1, j + 1]}"]`)
            .previousSibling
        ) {
          document
            .querySelector(`[data-id="${[i - 1, j + 1]}"]`)
            .classList.add('visible');
        }
      }
    }
  }
}

function openNeighborNumberReverse() {
  for (let i = 9; i >= 0; i--) {
    for (let j = 9; j >= 0; j--) {
      if (
        document
          .querySelector(`[data-id="${[i, j]}"]`)
          .classList.contains('visible') &&
        document.querySelector(`[data-id="${[i, j]}"]`).innerHTML === ''
      ) {
        if (
          document.querySelector(`[data-id="${[i, j - 1]}"]`) &&
          !document.querySelector(`[data-id="${[i, j - 1]}"]`).previousSibling
        ) {
          document
            .querySelector(`[data-id="${[i, j - 1]}"]`)
            .classList.add('visible');
        }

        if (
          document.querySelector(`[data-id="${[i - 1, j]}"]`) &&
          !document.querySelector(`[data-id="${[i - 1, j]}"]`).previousSibling
        ) {
          document
            .querySelector(`[data-id="${[i - 1, j]}"]`)
            .classList.add('visible');
        }

        if (
          document.querySelector(`[data-id="${[i - 1, j - 1]}"]`) &&
          !document.querySelector(`[data-id="${[i - 1, j - 1]}"]`)
            .previousSibling
        ) {
          document
            .querySelector(`[data-id="${[i - 1, j - 1]}"]`)
            .classList.add('visible');
        }

        if (
          document.querySelector(`[data-id="${[i + 1, j - 1]}"]`) &&
          !document.querySelector(`[data-id="${[i + 1, j - 1]}"]`)
            .previousSibling
        ) {
          document
            .querySelector(`[data-id="${[i + 1, j - 1]}"]`)
            .classList.add('visible');
        }
      }
    }
  }
}

function addFlag() {
  cell.forEach((item) => {
    item.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      if (isSound) setFlagSound.play();
      clickCount++;

      if (!item.classList.contains('visible')) {
        const flag = document.createElement('span');
        flag.className = 'flag';
        flag.innerHTML = '🚩';
        item.parentElement.prepend(flag);
      }
      checkGameStatus();
      removeFlag();
    });
  });
}

addFlag();
document
  .querySelector('.board')
  .addEventListener('contextmenu', startCounterFlag);

function startCounterFlag() {
  let countFlagInner = 0;
  document.querySelectorAll('.flag').forEach((item) => {
    if (item) {
      countFlagInner++;
    }
  });
  countFlag.textContent = bombNum - countFlagInner;
}

function removeFlag() {
  document.querySelectorAll('.flag').forEach((item) => {
    item.addEventListener('contextmenu', (event) => {
      if (isSound) unSetFlagSound.play();
      event.preventDefault();
      clickCount++;

      item.remove();
    });
  });
}

let sec = 0;
let timerID;

function timeCount() {
  timerID = setInterval(() => {
    sec++;
    document.querySelector('.time__count').textContent = String(sec).padStart(
      3,
      0
    );
  }, 1000);
}

replay.addEventListener('click', restartGame);

function restartGame() {
  blackout2.classList.add('none');
  document.body.classList.remove('red');
  document.body.classList.remove('green');
  // popUpFinish.classList.add('none');

  document.querySelector('.board').innerHTML = '';
  fillBoard();
  cell = document.querySelectorAll('.cell');
  visible();
  addFlag();
  countFlag.textContent = bombNum;
  sec = 0;
  clickCount = 0;
  document.querySelector('.time__count').textContent = String(sec).padStart(
    3,
    0
  );
  clearInterval(timerID);
}

function checkGameStatus() {
  let countVisible = 0;
  let countFlag = 0;
  cell.forEach((item) => {
    if (item.classList.contains('visible')) {
      countVisible++;
    }
    if (item.previousSibling) {
      countFlag++;
    }
  });

  if (
    countVisible + countFlag === 100 &&
    !document.body.classList.contains('red') &&
    countFlag === +bombNum
  ) {
    resultGame = 'WIN';
    openModalFinish(resultGame);
    blackout.classList.remove('none');
    document.body.classList.add('green');
  }
}

function openModalFinish(resultGame) {
  blackout2.classList.remove('none');
  clearInterval(timerID);
  setTimeout(() => {
    if (resultGame === 'WIN') {
      if (isSound) winSound.play();
    } else if (isSound) loseSound.play();
    popUpCommon.classList.add('pop-up-common-open');
  }, 500);

  popUpCommonInner.innerHTML = `<p>YOU ${resultGame}!</p><br><p>Time: ${sec} sec</p><p>Clicks: ${clickCount}</p>`;

  if (!localStorage.getItem('minesweeper888_results')) {
    const arr = [];
    localStorage.setItem('minesweeper888_results', JSON.stringify(arr));
  }
  const currentResultGameItem = new ResultGame(resultGame, sec, clickCount);
  const tempArr = JSON.parse(localStorage.getItem('minesweeper888_results'));
  tempArr.unshift(currentResultGameItem);
  localStorage.setItem('minesweeper888_results', JSON.stringify(tempArr));
  const checkArr = JSON.parse(localStorage.getItem('minesweeper888_results'));
  if (checkArr.length > 10) {
    checkArr.pop();
    localStorage.setItem('minesweeper888_results', JSON.stringify(checkArr));
  }
}

function closeCommonPopUp() {
  popUpCommon.classList.remove('pop-up-common-open');
  blackout.classList.add('none');
}

function toggleClose() {
  timerIDforCloseBtn = setInterval(() => {
    document.querySelector('.pop-up-finish__close').classList.toggle('scale');
  }, 500);
}

toggleClose();

function openAllBombs() {
  cell.forEach((el) => {
    if (el.innerHTML === `<span class="bomb">${bombsIcon}</span>`) {
      el.classList.add('visible');
    }
  });
}

class ResultGame {
  constructor(result, time, clicks) {
    this.result = result;
    this.time = time;
    this.clicks = clicks;
    //this.openBombs = openBombs;
  }
}

function startBtnHandler() {
  resultsIcon.addEventListener('click', showLastResults);
  document
    .querySelector('.pop-up-finish__close')
    .addEventListener('click', closeCommonPopUp);
}

startBtnHandler();

function showLastResults() {
  blackout.classList.remove('none');
  popUpCommonInner.innerHTML = '<p>LAST RESULTS:</p><br>';
  if (localStorage.getItem('minesweeper888_results')) {
    const tempArr = JSON.parse(localStorage.getItem('minesweeper888_results'));
    let i = 0;
    tempArr.forEach((el) => {
      i++;
      const item = document.createElement('p');
      item.className = 'results__item';
      item.innerHTML = `${i}. ${el.result}, time: ${el.time} sec, clicks: ${el.clicks}`;
      popUpCommonInner.append(item);
    });
  }
  popUpCommon.classList.toggle('pop-up-common-open');
}

let isSound = 1;

function soundBtnHandler() {
  toggleSound.addEventListener('click', () => {
    if (isSound === 1) {
      toggleSound.innerHTML =
        '<img class="sound-icon" src="./src/icons/sound-off.png" alt="sound"></img>';
      isSound = 0;
    } else {
      toggleSound.innerHTML =
        '<img class="sound-icon" src="./src/icons/sound-on.png" alt="sound"></img>';
      isSound = 1;
    }
  });
}

soundBtnHandler();

function addColorNumber() {
  cell.forEach((item) => {
    if (item.innerHTML === '1') item.classList.add('number-1');
    if (item.innerHTML === '2') item.classList.add('number-2');
    if (item.innerHTML === '3') item.classList.add('number-3');
    if (item.innerHTML === '4') item.classList.add('number-5');
    if (item.innerHTML === '6') item.classList.add('number-6');
    if (item.innerHTML === '7') item.classList.add('number-7');
    if (item.innerHTML === '8') item.classList.add('number-8');
  });
}

//---------------------------------------------------------------

const bombRange = document.createElement('input');
bombRange.className = 'bomb-range';
bombRange.type = 'range';
bombRange.min = '1';
bombRange.max = '99';
bombRange.value = '10';

const bombsScreenFieldset = document.createElement('fieldset');
bombsScreenFieldset.className = 'bombs-screen__fieldset';
const bombScreen = document.createElement('legend');
bombScreen.className = 'bomb-screen';
bombScreen.innerHTML = `<span>Bombs: </span>${bombRange.value}`;

//
const bombsSelectList = document.createElement('fieldset');
const bombsSelectLegend = document.createElement('legend');

const bombsSelectItemBomb = document.createElement('div');
const bombsSelectItemHankey = document.createElement('div');
bombsSelectLegend.textContent = 'Select bomb icon';

const bombsSelectInputBomb = document.createElement('input');
bombsSelectInputBomb.name = 'mines';
bombsSelectInputBomb.type = 'radio';
bombsSelectInputBomb.setAttribute('checked', bombsSelectInputBomb.id);
bombsSelectInputBomb.value = '💣';
bombsSelectInputBomb.id = 'bomb';
const bombsSelectLabelBomb = document.createElement('label');
bombsSelectLabelBomb.className = 'bombs__label';
bombsSelectLabelBomb.classList.add('selected');
bombsSelectLabelBomb.setAttribute('for', bombsSelectInputBomb.id);
bombsSelectLabelBomb.innerHTML = '💣';

const bombsSelectInputHankey = document.createElement('input');
bombsSelectInputHankey.name = 'mines';
bombsSelectInputHankey.type = 'radio';
bombsSelectInputHankey.value = '💩';
bombsSelectInputHankey.id = 'hankey';
const bombsSelectLabelHankey = document.createElement('label');
bombsSelectLabelHankey.className = 'bombs__label';
bombsSelectLabelHankey.setAttribute('for', bombsSelectInputHankey.id);
bombsSelectLabelHankey.innerHTML = '💩';

bombsSelectList.prepend(bombsSelectLegend);
bombsSelectList.append(bombsSelectItemBomb);
bombsSelectItemBomb.append(bombsSelectLabelBomb);
bombsSelectLabelBomb.append(bombsSelectInputBomb);

bombsSelectList.append(bombsSelectItemHankey);
bombsSelectItemHankey.append(bombsSelectLabelHankey);
bombsSelectLabelHankey.append(bombsSelectInputHankey);

let bombsIcon = '💣';

//

function settingsBtnHandler() {
  settingIcon.addEventListener('click', () => {
    blackout.classList.remove('none');
    popUpCommonInner.innerHTML = '<p>SETTINGS:</p><br><br>';
    popUpCommon.classList.toggle('pop-up-common-open');
    popUpCommonInner.append(bombsScreenFieldset);
    bombsScreenFieldset.append(bombScreen);
    bombsScreenFieldset.append(bombRange);

    //
    popUpCommonInner.append(bombsSelectList);
    document.querySelectorAll('.bombs__label').forEach((item) => {
      item.addEventListener('click', () => {
        document.querySelectorAll('.bombs__label').forEach((el) => {
          el.classList.remove('selected');
          item.classList.add('selected');
        });
        changeBombIcon();
      });
    });
    //

    setInterval(() => {
      bombScreen.innerHTML = `Bombs: ${bombRange.value}`;
      bombNum = bombRange.value;
    }, 100);
  });

  bombRange.addEventListener('change', restartGame);
}

settingsBtnHandler();

function changeBombIcon() {
  if (bombsSelectLabelHankey.classList.contains('selected')) {
    bombsIcon = '💩';
    bang = clickMineSound;
  }
  if (bombsSelectLabelBomb.classList.contains('selected')) {
    bombsIcon = '💣';
    bang = clickMineSoundNorm;
  }
  restartGame();
}
