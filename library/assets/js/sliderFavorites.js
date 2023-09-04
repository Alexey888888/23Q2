import { books, Card } from './booksList.js';

const label = document.querySelectorAll('.season-label');
let cards = null;

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
  //---------------------------------------
  remadeBtn();
  //==
}

//--------------------------------------------
//-------------------------------------------
//---------------------------------------------
//--------------------------------------------
//---------------------------------------------

function changeCards() {
  cards = document.querySelectorAll('.card__wrapper');
  cards.forEach((el) => {
    el.classList.remove('fade-in');
    el.classList.add('fade-out');
    el.addEventListener('animationend', change);
  });

  function change() {
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
        remadeBtn();
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
        remadeBtn();
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
        remadeBtn();
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
        remadeBtn();
      }
    }

    cards = document.querySelectorAll('.card__wrapper');
    cards.forEach((el) => {
      el.classList.add('fade-in');
      el.addEventListener('animationend', () => el.classList.remove('fade-in'));
    });
  }
  //
}

//-----
function remadeBtn() {
  const tempArrBtn = JSON.parse(localStorage.getItem('usersArr888'));
  const buttons = document.querySelectorAll('.favorites__btn');
  if (
    localStorage.getItem('isUserAuth888') === 'true' &&
    tempArrBtn &&
    tempArrBtn[tempArrBtn.length - 1].ownArr.length > 0
  ) {
    tempArrBtn[tempArrBtn.length - 1].ownArr.forEach((item) => {
      buttons.forEach((btn) => {
        if (
          btn.previousSibling.previousSibling.previousSibling.previousSibling
            .previousSibling.previousSibling.innerHTML === item
        ) {
          btn.classList.add('own');
          btn.innerHTML = 'Own';
        }
      });
    });
  }
  if (localStorage.getItem('isUserAuth888') === 'false') {
    buttons.forEach((btn) => {
      btn.classList.remove('own');
      btn.innerHTML = 'Buy';
    });
  }
}
