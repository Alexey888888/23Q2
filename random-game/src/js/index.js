const header = document.createElement('header');
header.className = 'header';
const background = document.createElement('img');
background.className = 'background';
background.src = './src/icons/favicon.png';
document.body.prepend(header);
header.prepend(background);

const main = document.createElement('main');
main.className = 'main';
const gameBox = document.createElement('div');
gameBox.className = 'game-box';
const tools = document.createElement('div');
tools.className = 'tools';
const board = document.createElement('div');
board.className = 'board';
header.after(main);
main.prepend(gameBox);
gameBox.append(tools);
gameBox.append(board);
tools.insertAdjacentHTML('afterbegin', '');
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

flagCount.innerHTML = '<span class="count-flag">10</span>';
replay.innerHTML =
  "<img class='replay' src='./src/icons/replay.svg' alt='replay'>";
time.innerHTML = '<span class="time__count">000</span>';

//

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
    if (matrixBombs.length < 10) create2();
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
      document.querySelector(`[data-id="${matrixBombs[i]}"]`).innerHTML =
        '<span class="bomb">💩</span>';
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
          '<span class="bomb">💩</span>'
        ) {
          if (document.querySelector(`[data-id="${[i - 1, j - 1]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i - 1, j - 1]}"]`)
                .innerHTML === '<span class="bomb">💩</span>'
            )
              count++;
          }
          if (document.querySelector(`[data-id="${[i - 1, j]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i - 1, j]}"]`).innerHTML ===
              '<span class="bomb">💩</span>'
            )
              count++;
          }
          if (document.querySelector(`[data-id="${[i - 1, j + 1]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i - 1, j + 1]}"]`)
                .innerHTML === '<span class="bomb">💩</span>'
            )
              count++;
          }
          if (document.querySelector(`[data-id="${[i, j - 1]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i, j - 1]}"]`).innerHTML ===
              '<span class="bomb">💩</span>'
            )
              count++;
          }
          if (document.querySelector(`[data-id="${[i, j + 1]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i, j + 1]}"]`).innerHTML ===
              '<span class="bomb">💩</span>'
            )
              count++;
          }
          if (document.querySelector(`[data-id="${[i + 1, j - 1]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i + 1, j - 1]}"]`)
                .innerHTML === '<span class="bomb">💩</span>'
            )
              count++;
          }
          if (document.querySelector(`[data-id="${[i + 1, j]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i + 1, j]}"]`).innerHTML ===
              '<span class="bomb">💩</span>'
            )
              count++;
          }
          if (document.querySelector(`[data-id="${[i + 1, j + 1]}"]`)) {
            if (
              document.querySelector(`[data-id="${[i + 1, j + 1]}"]`)
                .innerHTML === '<span class="bomb">💩</span>'
            )
              count++;
          }
          document.querySelector(`[data-id="${[i, j]}"]`).innerHTML = count;
          if (document.querySelector(`[data-id="${[i, j]}"]`).innerHTML === '0')
            document.querySelector(`[data-id="${[i, j]}"]`).innerHTML = '';
        }
      }
    }
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

const cell = document.querySelectorAll('.cell');

function visible() {
  cell.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.add('visible');

      if (item.innerHTML === '<span class="bomb">💩</span>')
        document.body.classList.add('red');
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
  for (let i = 0; i < 5; i++) {
    openNeighbor();
  }
  openNeighborNumber();
  openNeighborNumberReverse();
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
      if (!item.classList.contains('visible')) {
        const flag = document.createElement('span');
        flag.className = 'flag';
        flag.innerHTML = '🚩';
        item.parentElement.prepend(flag);
      }
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
  document.querySelector('.count-flag').textContent = 10 - countFlagInner;
}

function removeFlag() {
  document.querySelectorAll('.flag').forEach((item) => {
    item.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      item.remove();
    });
  });
}

let sec = 980;

function timeCount() {
  setInterval(() => {
    sec++;
    document.querySelector('.time__count').textContent = String(sec).padStart(
      3,
      0
    );
  }, 1000);
}
