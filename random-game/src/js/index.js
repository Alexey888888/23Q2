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
      //cell.innerHTML = `[${i}, ${j}]`;
      cell.dataset.id = `[${i}, ${j}]`;
    }
  }
}

fillBoard();
