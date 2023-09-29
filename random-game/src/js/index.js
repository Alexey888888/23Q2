const board = document.createElement('div');
board.className = 'board';

document.querySelector('body').prepend(board);

function createMatrix(width = 10, height = 10, bombs = 10) {
  const matrix = [];
  matrix.length = height;
  matrix.fill([]);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].length = width;
    matrix[i].fill(0);
  }

  return matrix;
}

const getRandom = (min = 0, max = 9) => {
  let num = Math.floor(min + Math.random() * (max - min + 1));
  return num;
};

function createMatrixBombs() {
  const matrixBombs = [];
  const bombArrTemp = [];
  const create2 = () => {
    const bomb = [getRandom(), getRandom()];
    if (!bombArrTemp.includes(bomb.join(''))) matrixBombs.push(bomb);
    bombArrTemp.push(bomb.join(''));
    if (matrixBombs.length < 10) create2();
  };
  create2();
  return matrixBombs;
}

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

      cell.dataset.id = `[${i}, ${j}]`;
    }
  }
  function addBombs() {
    const matrixBombs = createMatrixBombs();
    for (let i = 0; i < matrixBombs.length; i++) {
      document.querySelector(
        `[data-id="[${matrixBombs[i][0]}, ${matrixBombs[i][1]}]"]`
      ).innerHTML = '<span class="bomb">💩</span>';
    }
  }
  addBombs();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (
        document.querySelector(`[data-id="[${i}, ${j}]"]`).innerHTML !==
        '<span class="bomb">💩</span>'
      ) {
      }
    }
  }
  function fillNeighbor() {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        let count = 0;
        if (
          document.querySelector(`[data-id="[${i}, ${j}]"]`).innerHTML !==
          '<span class="bomb">💩</span>'
        ) {
          if (document.querySelector(`[data-id="[${i - 1}, ${j - 1}]"]`)) {
            if (
              document.querySelector(`[data-id="[${i - 1}, ${j - 1}]"]`)
                .innerHTML === '<span class="bomb">💩</span>'
            )
              count++;
          }
          if (document.querySelector(`[data-id="[${i - 1}, ${j}]"]`)) {
            if (
              document.querySelector(`[data-id="[${i - 1}, ${j}]"]`)
                .innerHTML === '<span class="bomb">💩</span>'
            )
              count++;
          }
          if (document.querySelector(`[data-id="[${i - 1}, ${j + 1}]"]`)) {
            if (
              document.querySelector(`[data-id="[${i - 1}, ${j + 1}]"]`)
                .innerHTML === '<span class="bomb">💩</span>'
            )
              count++;
          }
          if (document.querySelector(`[data-id="[${i}, ${j - 1}]"]`)) {
            if (
              document.querySelector(`[data-id="[${i}, ${j - 1}]"]`)
                .innerHTML === '<span class="bomb">💩</span>'
            )
              count++;
          }
          if (document.querySelector(`[data-id="[${i}, ${j + 1}]"]`)) {
            if (
              document.querySelector(`[data-id="[${i}, ${j + 1}]"]`)
                .innerHTML === '<span class="bomb">💩</span>'
            )
              count++;
          }
          if (document.querySelector(`[data-id="[${i + 1}, ${j - 1}]"]`)) {
            if (
              document.querySelector(`[data-id="[${i + 1}, ${j - 1}]"]`)
                .innerHTML === '<span class="bomb">💩</span>'
            )
              count++;
          }
          if (document.querySelector(`[data-id="[${i + 1}, ${j}]"]`)) {
            if (
              document.querySelector(`[data-id="[${i + 1}, ${j}]"]`)
                .innerHTML === '<span class="bomb">💩</span>'
            )
              count++;
          }
          if (document.querySelector(`[data-id="[${i + 1}, ${j + 1}]"]`)) {
            if (
              document.querySelector(`[data-id="[${i + 1}, ${j + 1}]"]`)
                .innerHTML === '<span class="bomb">💩</span>'
            )
              count++;
          }
          document.querySelector(`[data-id="[${i}, ${j}]"]`).innerHTML = count;
          if (
            document.querySelector(`[data-id="[${i}, ${j}]"]`).innerHTML === '0'
          )
            document.querySelector(`[data-id="[${i}, ${j}]"]`).innerHTML = '';
        }
      }
    }
  }
  fillNeighbor();
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
          .querySelector(`[data-id="[${i}, ${j}]"]`)
          .classList.contains('visible')
      ) {
        if (
          document.querySelector(`[data-id="[${i}, ${j + 1}]"]`) &&
          document.querySelector(`[data-id="[${i}, ${j + 1}]"]`).innerHTML ===
            ''
        )
          document
            .querySelector(`[data-id="[${i}, ${j + 1}]"]`)
            .classList.add('visible');

        if (
          document.querySelector(`[data-id="[${i + 1}, ${j}]"]`) &&
          document.querySelector(`[data-id="[${i + 1}, ${j}]"]`).innerHTML ===
            ''
        )
          document
            .querySelector(`[data-id="[${i + 1}, ${j}]"]`)
            .classList.add('visible');

        if (
          document.querySelector(`[data-id="[${i + 1}, ${j + 1}]"]`) &&
          document.querySelector(`[data-id="[${i + 1}, ${j + 1}]"]`)
            .innerHTML === ''
        )
          document
            .querySelector(`[data-id="[${i + 1}, ${j + 1}]"]`)
            .classList.add('visible');

        if (
          document.querySelector(`[data-id="[${i - 1}, ${j + 1}]"]`) &&
          document.querySelector(`[data-id="[${i - 1}, ${j + 1}]"]`)
            .innerHTML === ''
        )
          document
            .querySelector(`[data-id="[${i - 1}, ${j + 1}]"]`)
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
          .querySelector(`[data-id="[${i}, ${j}]"]`)
          .classList.contains('visible')
      ) {
        if (
          document.querySelector(`[data-id="[${i}, ${j - 1}]"]`) &&
          document.querySelector(`[data-id="[${i}, ${j - 1}]"]`).innerHTML ===
            ''
        )
          document
            .querySelector(`[data-id="[${i}, ${j - 1}]"]`)
            .classList.add('visible');

        if (
          document.querySelector(`[data-id="[${i - 1}, ${j}]"]`) &&
          document.querySelector(`[data-id="[${i - 1}, ${j}]"]`).innerHTML ===
            ''
        )
          document
            .querySelector(`[data-id="[${i - 1}, ${j}]"]`)
            .classList.add('visible');

        if (
          document.querySelector(`[data-id="[${i - 1}, ${j - 1}]"]`) &&
          document.querySelector(`[data-id="[${i - 1}, ${j - 1}]"]`)
            .innerHTML === ''
        )
          document
            .querySelector(`[data-id="[${i - 1}, ${j - 1}]"]`)
            .classList.add('visible');

        if (
          document.querySelector(`[data-id="[${i + 1}, ${j - 1}]"]`) &&
          document.querySelector(`[data-id="[${i + 1}, ${j - 1}]"]`)
            .innerHTML === ''
        )
          document
            .querySelector(`[data-id="[${i + 1}, ${j - 1}]"]`)
            .classList.add('visible');
      }
    }
  }
}

function startOpenNeighbor() {
  for (let i = 0; i < 5; i++) {
    openNeighbor();
  }
  // openNeighborNumber();
  // openNeighborNumberReverse();
}

function openNeighborNumber() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (
        document
          .querySelector(`[data-id="[${i}, ${j}]"]`)
          .classList.contains('visible') &&
        document.querySelector(`[data-id="[${i}, ${j}]"]`).innerHTML === ''
      ) {
        if (document.querySelector(`[data-id="[${i}, ${j + 1}]"]`)) {
          document
            .querySelector(`[data-id="[${i}, ${j + 1}]"]`)
            .classList.add('visible');
        }

        if (document.querySelector(`[data-id="[${i + 1}, ${j}]"]`)) {
          document
            .querySelector(`[data-id="[${i + 1}, ${j}]"]`)
            .classList.add('visible');
        }

        if (document.querySelector(`[data-id="[${i + 1}, ${j + 1}]"]`)) {
          document
            .querySelector(`[data-id="[${i + 1}, ${j + 1}]"]`)
            .classList.add('visible');
        }

        if (document.querySelector(`[data-id="[${i - 1}, ${j + 1}]"]`)) {
          document
            .querySelector(`[data-id="[${i - 1}, ${j + 1}]"]`)
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
          .querySelector(`[data-id="[${i}, ${j}]"]`)
          .classList.contains('visible') &&
        document.querySelector(`[data-id="[${i}, ${j}]"]`).innerHTML === ''
      ) {
        if (document.querySelector(`[data-id="[${i}, ${j - 1}]"]`)) {
          document
            .querySelector(`[data-id="[${i}, ${j - 1}]"]`)
            .classList.add('visible');
        }

        if (document.querySelector(`[data-id="[${i - 1}, ${j}]"]`)) {
          document
            .querySelector(`[data-id="[${i - 1}, ${j}]"]`)
            .classList.add('visible');
        }

        if (document.querySelector(`[data-id="[${i - 1}, ${j - 1}]"]`)) {
          document
            .querySelector(`[data-id="[${i - 1}, ${j - 1}]"]`)
            .classList.add('visible');
        }

        if (document.querySelector(`[data-id="[${i + 1}, ${j - 1}]"]`)) {
          document
            .querySelector(`[data-id="[${i + 1}, ${j - 1}]"]`)
            .classList.add('visible');
        }
      }
    }
  }
}
