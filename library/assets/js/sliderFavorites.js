import { books, Card } from './booksList.js';

const label = document.querySelectorAll('.season-label');

label.forEach((el) => {
  el.addEventListener('click', () => {
    label.forEach((item) => item.classList.remove('selected'));
    el.classList.add('selected');
    changeCards();
  });
});

for (let i = 0; i < 4; i++) {
  const book = new Card(
    books[i].title,
    books[i].author,
    books[i].description,
    books[i].img
  );
  document
    .querySelector('.favorites__list')
    .insertAdjacentHTML('beforeend', book.template);
}

function changeCards() {
  document.querySelector('.favorites__list').innerHTML = '';
  if (label[0].classList.contains('selected')) {
    for (let i = 0; i < 4; i++) {
      const book = new Card(
        books[i].title,
        books[i].author,
        books[i].description,
        books[i].img
      );
      document
        .querySelector('.favorites__list')
        .insertAdjacentHTML('beforeend', book.template);
    }
  }
  //
  if (label[1].classList.contains('selected')) {
    for (let i = 0; i < 4; i++) {
      const book = new Card(
        books[i + 4].title,
        books[i + 4].author,
        books[i + 4].description,
        books[i + 4].img
      );
      document
        .querySelector('.favorites__list')
        .insertAdjacentHTML('beforeend', book.template);
    }
  }
  //
  //
  if (label[2].classList.contains('selected')) {
    for (let i = 0; i < 4; i++) {
      const book = new Card(
        books[i + 8].title,
        books[i + 8].author,
        books[i + 8].description,
        books[i + 8].img
      );
      document
        .querySelector('.favorites__list')
        .insertAdjacentHTML('beforeend', book.template);
    }
  }
  //
  if (label[3].classList.contains('selected')) {
    for (let i = 0; i < 4; i++) {
      const book = new Card(
        books[i + 12].title,
        books[i + 12].author,
        books[i + 12].description,
        books[i + 12].img
      );
      document
        .querySelector('.favorites__list')
        .insertAdjacentHTML('beforeend', book.template);
    }
  }
  //
}
