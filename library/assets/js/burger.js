const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__link');
const burgerOverflow = document.querySelector('.burger-overflow');

const clickHandler = () => {
  menu.classList.toggle('menu-active');
  document.querySelector('.burger').classList.toggle('burger-active');
  document.querySelector('html').classList.toggle('scroll-lock');
  if (dropMenu.classList.contains('dropVisible')) closeDropMenu();
};

function closeBurger() {
  menu.classList.remove('menu-active');
  document.querySelector('.burger').classList.remove('burger-active');
  document.querySelector('html').classList.remove('scroll-lock');
}

burger.addEventListener('click', clickHandler);

menuLink.forEach((item) =>
  item.addEventListener('click', () => {
    if (burger.classList.contains('burger-active')) {
      clickHandler();
    }
  })
);

burgerOverflow.addEventListener('click', () => {
  menu.classList.remove('menu-active');
  document.querySelector('.burger').classList.remove('burger-active');
  document.querySelector('html').classList.remove('scroll-lock');
  if (dropMenu.classList.contains('dropVisible')) closeDropMenu();
});

//-----USER-ICON-----//

const userIcon = document.querySelector('.header__icon');
const dropMenu = document.querySelector('.header__dropMenu');

userIcon.addEventListener('click', handlerDropMenu);

function handlerDropMenu() {
  if (!dropMenu.classList.contains('dropVisible')) {
    openDropMenu();
  } else if (dropMenu.classList.contains('dropVisible')) {
    closeDropMenu();
  }
}

function openDropMenu() {
  dropMenu.classList.add('dropVisible');
  closeBurger();
  event.stopPropagation();
}

function closeDropMenu() {
  dropMenu.classList.add('dropHidden');
  dropMenu.addEventListener('animationend', cleanClassList);
  function cleanClassList() {
    dropMenu.classList.remove('dropVisible');
    dropMenu.classList.remove('dropHidden');
    dropMenu.removeEventListener('animationend', cleanClassList);
  }
}

document.querySelector('body').addEventListener('click', () => {
  if (dropMenu.classList.contains('dropVisible')) closeDropMenu();
});

dropMenu.addEventListener('click', () => {
  event.stopPropagation();
});

//-----USER-ICON END-----//
//--REGISTER WINDOW-----//

const reg = document.querySelector('.dropMenu__textDown');
const blackout = document.querySelector('.blackout');
const regWindow = document.querySelector('.regWindow');
const regForm = document.querySelector('.reg__form');

reg.addEventListener('click', () => {
  openRegWindow();
  closeDropMenu();
});

document
  .querySelector('.dropMenu__textUp')
  .addEventListener('click', openLoginWindow);

blackout.addEventListener('click', () => {
  closeRegWindow();
  closeProfileWindow();
  closeLoginWindow();
  closeModalBuyCard();
});
document
  .querySelector('.reg__closeIcon')
  .addEventListener('click', closeRegWindow);

function openRegWindow() {
  regWindow.classList.add('regWindow-active');
  blackout.classList.add('blackout_active');
}

function closeRegWindow() {
  regWindow.classList.remove('regWindow-active');
  blackout.classList.remove('blackout_active');
  regForm.reset();
  //location.reload(); //+++++++++++++++++++++++++++++++++++++++++++++++++++++++
}

document
  .querySelector('.library__btn:first-child')
  .addEventListener('click', openRegWindow);

document
  .querySelector('.library__btn:nth-child(2)')
  .addEventListener('click', openLoginWindow);
///
if (!localStorage.getItem('isUserAuth888')) {
  localStorage.setItem('isUserAuth888', false);
}

class User {
  constructor(
    fname,
    lname,
    email,
    pass,
    visits = 1,
    subscription = 'false',
    ownArr = [],
    authorArr = [],
    cardNumber = Math.random().toString(16).slice(-9).toUpperCase()
  ) {
    this.firstName = fname;
    this.lastName = lname;
    this.email = email;
    this.pass = pass;
    this.cardNumber = cardNumber;
    this.visits = visits;
    this.subscription = subscription;
    this.ownArr = ownArr;
    this.authorArr = authorArr;
  }
}

document.querySelector('.reg__form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (!localStorage.getItem('usersArr888')) {
    const arr = [];
    localStorage.setItem('usersArr888', JSON.stringify(arr));
  }

  const formData = new FormData(regForm);
  const currentUser = new User(
    formData.get('fname'),
    formData.get('lname'),
    formData.get('email'),
    formData.get('pass')
  );

  const tempArr = JSON.parse(localStorage.getItem('usersArr888'));
  tempArr.push(currentUser);
  localStorage.setItem('usersArr888', JSON.stringify(tempArr));

  closeRegWindow();
  regForm.reset();

  afterAuth();
});

//
document.querySelector('.reg__footer span').addEventListener('click', () => {
  closeRegWindow();
  openLoginWindow();
});

//--REGISTER WINDOW END-----//
//-----USER-ICON AFTER AUTH-----//

let initials = '';
let fullName = '';
function afterAuth() {
  localStorage.setItem('isUserAuth888', true);
  const tempArr = JSON.parse(localStorage.getItem('usersArr888'));
  if (localStorage.getItem('isUserAuth888') === 'true') {
    initials =
      tempArr[tempArr.length - 1].firstName.toString()[0] +
      tempArr[tempArr.length - 1].lastName.toString()[0];
    fullName =
      tempArr[tempArr.length - 1].firstName.toString() +
      ' ' +
      tempArr[tempArr.length - 1].lastName.toString();
  }

  document.querySelector(
    '.header__img'
  ).innerHTML = `<div title="${fullName}" class="icon_profile-afterAuth">${initials}<span  ></span></div>`;
  const iconAuth = document.querySelector('.icon_profile-afterAuth');
  iconAuth.addEventListener('click', handlerDropMenuAuth);

  document.querySelector('body').addEventListener('click', () => {
    if (
      document
        .querySelector('.header__dropMenuAuth')
        .classList.contains('dropVisible')
    ) {
      closeDropMenuAuth();
    }
  });
  document
    .querySelector('.header__dropMenuAuth')
    .addEventListener('click', () => {
      event.stopPropagation();
    });

  // changeLibraryCardBlockInner

  showInfoPanel();
  document.querySelector('.infoPanel__visits__count').innerHTML =
    tempArr[tempArr.length - 1].visits;
  document.querySelector('.infoPanel__bonuses__count').innerHTML = 1240;
  document.querySelector('.infoPanel__books__count').innerHTML =
    tempArr[tempArr.length - 1].ownArr.length;
  document.querySelector('.input__row').value =
    tempArr[tempArr.length - 1].firstName +
    ' ' +
    tempArr[tempArr.length - 1].lastName;
  document.querySelector('.input__row-bottom').value =
    tempArr[tempArr.length - 1].cardNumber;

  document.querySelector('.libraryCard__text').innerHTML =
    'With a digital library card you get free access to the Library’s wide array of digital resources including e-books, databases, educational resources, and more.';
  document.querySelector('.library__btn:first-child').classList.add('none');
  document.querySelector('.library__btn:nth-child(2)').classList.add('none');
  const profileBtn = document.createElement('button');
  profileBtn.className = 'library__btnProfile';
  profileBtn.innerHTML = 'Profile';
  document.querySelector('.libraryCard__btnWrapper').append(profileBtn);
  document
    .querySelector('.library__btnProfile')
    .addEventListener('click', openProfileWindow);
  remadeBtn_2();
}

if (localStorage.getItem('isUserAuth888') === 'true') {
  afterAuth();
}

function openDropMenuAuth() {
  document.querySelector('.header__dropMenuAuth').classList.add('dropVisible');
  closeBurger();
  event.stopPropagation();
  document.querySelector('.dropMenuAuth__title').innerHTML = '';
  const tempArr = JSON.parse(localStorage.getItem('usersArr888'));
  document.querySelector('.dropMenuAuth__title').innerHTML =
    tempArr[tempArr.length - 1].cardNumber;
}

function closeDropMenuAuth() {
  if (
    document
      .querySelector('.header__dropMenuAuth')
      .classList.contains('dropVisible')
  ) {
    document.querySelector('.header__dropMenuAuth').classList.add('dropHidden');
    document
      .querySelector('.header__dropMenuAuth')
      .addEventListener('animationend', cleanClassListAuth);
    function cleanClassListAuth() {
      document
        .querySelector('.header__dropMenuAuth')
        .classList.remove('dropVisible');
      document
        .querySelector('.header__dropMenuAuth')
        .classList.remove('dropHidden');
      document
        .querySelector('.header__dropMenuAuth')
        .removeEventListener('animationend', cleanClassListAuth);
    }
  }
}

document
  .querySelector('.dropMenuAuth__textDown')
  .addEventListener('click', logout);
/////////////////////////////
function logout() {
  localStorage.setItem('isUserAuth888', false);
  document.querySelector('.header__img').innerHTML = `<img
  class="header__icon"
  src="../library/assets/icons/icon_profile.svg"
  alt="icon-profile"
/>`;
  closeDropMenuAuth();
  const userIcon = document.querySelector('.header__icon');

  userIcon.addEventListener('click', handlerDropMenu);
  delInfoPanel();
  document.querySelector('.libraryCard__text').innerHTML =
    'You will be able to see a reader card after logging into account or you can register a new account';

  document.querySelector('.library__btn:first-child').classList.remove('none');
  document.querySelector('.library__btn:nth-child(2)').classList.remove('none');
  document.querySelector('.library__btnProfile').remove();
  remadeBtn_2();
}

function handlerDropMenuAuth() {
  if (
    !document
      .querySelector('.header__dropMenuAuth')
      .classList.contains('dropVisible')
  ) {
    openDropMenuAuth();
  } else if (
    document
      .querySelector('.header__dropMenuAuth')
      .classList.contains('dropVisible')
  ) {
    closeDropMenuAuth();
  }
}

document
  .querySelector('.dropMenuAuth__textUp')
  .addEventListener('click', openProfileWindow);

//-----USER-ICON AFTER AUTH END-----//

//-----PROFILE-----//
function openProfileWindow() {
  closeDropMenuAuth();
  document
    .querySelector('.profile-window')
    .classList.add('profile-window-active');
  blackout.classList.add('blackout_active');
  //
  fillFields();
  //

  document
    .querySelector('.profile-window__closeIcon__img')
    .addEventListener('click', closeProfileWindow);
}

function closeProfileWindow() {
  document
    .querySelector('.profile-window')
    .classList.remove('profile-window-active');
  blackout.classList.remove('blackout_active');
}

document.getElementById('copy-icon').addEventListener('click', copyNumber);

function copyNumber() {
  let copyTemp = document.createElement('input');
  copyTemp.className = 'copyTemp';
  document.body.append(copyTemp);
  copyTemp.value = document.querySelector(
    '.profile-window__card-number__number'
  ).textContent;
  copyTemp.select();
  document.execCommand('copy');
  document.body.removeChild(copyTemp);
}

//

function fillFields() {
  const tempArr = JSON.parse(localStorage.getItem('usersArr888'));
  initials =
    tempArr[tempArr.length - 1].firstName.toString()[0] +
    tempArr[tempArr.length - 1].lastName.toString()[0];
  fullName =
    tempArr[tempArr.length - 1].firstName.toString() +
    ' ' +
    tempArr[tempArr.length - 1].lastName.toString();
  cardNumber = tempArr[tempArr.length - 1].cardNumber;
  document.querySelector('.rectangle-initials__text').innerHTML = '';
  document.querySelector('.rectangle-initials__text').innerHTML = initials;
  document.querySelector('.rectangle-name__text').innerHTML = '';
  document.querySelector('.rectangle-name__text').innerHTML = fullName;
  document.querySelector('.profile-window__card-number__number').innerHTML = '';
  document.querySelector('.profile-window__card-number__number').innerHTML =
    cardNumber;
  document.querySelector('.icon-box__visits__count').innerHTML = '';
  document.querySelector('.icon-box__visits__count').innerHTML =
    tempArr[tempArr.length - 1].visits;
  //document.querySelector('.icon-box__books__count').innerHTML = '';
  document.querySelector('.icon-box__books__count').innerHTML =
    tempArr[tempArr.length - 1].ownArr.length;
  //
  document.querySelector('.rented-books__list').innerHTML = '';
  if (tempArr[tempArr.length - 1].ownArr.length > 0) {
    for (let i = 0; i < tempArr[tempArr.length - 1].ownArr.length; i++) {
      document.querySelector(
        '.rented-books__list'
      ).innerHTML += `<li class="rented-books__item">${
        tempArr[tempArr.length - 1].ownArr[i]
      }, ${tempArr[tempArr.length - 1].authorArr[i]}</li>`;
    }
  }
}

//-----PROFILE END-----//

//-----LOG IN WINDOW-----//
const loginWindow = document.querySelector('.LogInWindow');
const logWindowForm = document.querySelector('.login__form');

document
  .querySelector('.login__closeIcon')
  .addEventListener('click', closeLoginWindow);

function openLoginWindow() {
  loginWindow.classList.add('logIn-active');
  blackout.classList.add('blackout_active');
  if (dropMenu.classList.contains('dropVisible')) closeDropMenu();
}

function closeLoginWindow() {
  loginWindow.classList.remove('logIn-active');
  blackout.classList.remove('blackout_active');
  document.querySelector('.login__form').reset(); ///777777777777777777
}

logWindowForm.addEventListener('submit', (event) => {
  event.preventDefault();
  afterReg();
  closeLoginWindow();
});

function afterReg() {
  const tempArr = JSON.parse(localStorage.getItem('usersArr888'));

  const formDataReg = new FormData(logWindowForm);
  const userMailCard = formDataReg.get('email-or-card');
  const userPassword = formDataReg.get('logPass');

  if (
    tempArr[tempArr.length - 1].pass === userPassword &&
    (tempArr[tempArr.length - 1].email === userMailCard ||
      tempArr[tempArr.length - 1].cardNumber === userMailCard)
  ) {
    incrementVisits();
    afterAuth();
  } else {
    // const tempArr = JSON.parse(localStorage.getItem('usersArr888'));
    for (let i = 0; i < tempArr.length - 1; i++) {
      if (
        tempArr[i].pass === userPassword &&
        (tempArr[i].email === userMailCard ||
          tempArr[i].cardNumber === userMailCard)
      ) {
        const currentUser = new User(
          tempArr[i].firstName,
          tempArr[i].lastName,
          tempArr[i].email,
          tempArr[i].pass,
          tempArr[i].visits,
          tempArr[i].subscription,
          tempArr[i].ownArr,
          tempArr[i].author,
          tempArr[i].cardNumber
        );

        tempArr.push(currentUser);
        tempArr.splice(i, 1);
        localStorage.setItem('usersArr888', JSON.stringify(tempArr));
        incrementVisits();
        afterAuth();
        // break;
      }
    }
  }
}

function incrementVisits() {
  const tempArr = JSON.parse(localStorage.getItem('usersArr888'));

  tempArr[tempArr.length - 1].visits++;
  localStorage.setItem('usersArr888', JSON.stringify(tempArr));
}

//
document.querySelector('.login__footer span').addEventListener('click', () => {
  closeLoginWindow();
  openRegWindow();
});

//-----LOG IN WINDOW END-----//

//-----FIND LIBRARY CARD-----//
const libraryCardForm = document.querySelector('.libraryCard__form');

libraryCardForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formLibraryCardData = new FormData(libraryCardForm);
  //const firstName = formLibraryCardData.get('form__library-card-name');
  const fullName = formLibraryCardData.get('form__library-card-name');
  const cardNumber = formLibraryCardData.get('form__library-card-number');
  const tempArr = JSON.parse(localStorage.getItem('usersArr888'));

  for (let i = 0; i < tempArr.length; i++) {
    if (
      localStorage.getItem('isUserAuth888') === 'false' &&
      tempArr[i].cardNumber === cardNumber &&
      tempArr[i].firstName.toString() + ' ' + tempArr[i].lastName.toString() ===
        fullName
    ) {
      document.querySelector('.infoPanel__visits__count').innerHTML =
        tempArr[i].visits;
      document.querySelector('.infoPanel__bonuses__count').innerHTML = 1240;
      document.querySelector('.infoPanel__books__count').innerHTML =
        tempArr[i].ownArr.length;

      showInfoPanel();
      setTimeout(delInfoPanel, 10000);
    }
  }
});

function showInfoPanel() {
  document.querySelector('.infoPanel').classList.remove('none');
  document.querySelector('.form__btn').classList.add('none');
}

function delInfoPanel() {
  document.querySelector('.form__btn').classList.remove('none');
  document.querySelector('.infoPanel').classList.add('none');
  libraryCardForm.reset();
}
//-----FIND LIBRARY CARD-----//

//-----BY CARD-----//

document.querySelectorAll('.season-label').forEach((el) => {
  el.addEventListener('click', () => {
    createBuyButtons();
  });
});

function createBuyButtons() {
  setTimeout(() => {
    const buyButtons = document.querySelectorAll('.favorites__btn');

    buyButtons.forEach((btn) => {
      btn.addEventListener('click', buyButtonsHandler);
    });
  }, 801);
}

createBuyButtons();

function buyButtonsHandler() {
  if (localStorage.getItem('isUserAuth888') === 'false') {
    openLoginWindow();
  }
  const tempArr = JSON.parse(localStorage.getItem('usersArr888'));
  if (
    localStorage.getItem('isUserAuth888') === 'true' &&
    tempArr[tempArr.length - 1].subscription === 'false'
  ) {
    openModalBuyCard();
  }
  if (
    localStorage.getItem('isUserAuth888') === 'true' &&
    tempArr[tempArr.length - 1].subscription === 'true'
  ) {
    afterBuyBook();
  }
}

let timerID = null;

function doBtnActive() {
  timerID = setInterval(() => {
    const resArr = [];
    let res = '';
    document.querySelectorAll('.buy-form__input').forEach((item) => {
      if (item.value) {
        res = true;
      } else res = false;
      resArr.push(res);
    });

    if (!resArr.includes(false)) {
      document
        .querySelector('.buy-form__btn')
        .classList.add('buy-form__btn-active');
      document.querySelector('.buy-form__btn').disabled = false;
    }
    if (resArr.includes(false)) {
      document
        .querySelector('.buy-form__btn')
        .classList.remove('buy-form__btn-active');
      document.querySelector('.buy-form__btn').disabled = true;
    }
  }, 100);
}

const modalBuyCard = document.querySelector('.buy-card');

function openModalBuyCard() {
  modalBuyCard.classList.add('buy-card-active');
  blackout.classList.add('blackout_active');
  //closeDropMenu();
  doBtnActive();
}

function closeModalBuyCard() {
  modalBuyCard.classList.remove('buy-card-active');
  blackout.classList.remove('blackout_active');
  clearTimeout(timerID);
}

document
  .querySelector('.buy-card__closeIcon__img')
  .addEventListener('click', () => {
    closeModalBuyCard();
  });

const buyForm = new FormData(document.querySelector('.buy-card__form'));
document
  .querySelector('.buy-card__form')
  .addEventListener('submit', (event) => {
    event.preventDefault();
    const tempArr = JSON.parse(localStorage.getItem('usersArr888'));
    tempArr[tempArr.length - 1].subscription = 'true';
    localStorage.setItem('usersArr888', JSON.stringify(tempArr));
    closeModalBuyCard();
    document.querySelector('.buy-card__form').reset();
  });

//---------------------

//
//--------------------------------
//==============================
//================================

//localStorage.setItem('ownArr888', JSON.stringify([]));

function afterBuyBook() {
  // const buttons = document.querySelectorAll('.favorites__btn');
  document.body.addEventListener('click', (event) => {
    const tempArr = JSON.parse(localStorage.getItem('usersArr888'));
    if (
      event.target.classList[0] === 'favorites__btn' &&
      tempArr[tempArr.length - 1].subscription === 'true'
    ) {
      event.target.classList.add('own');
      event.target.innerHTML = 'Own';
      const titleBook =
        event.target.previousSibling.previousSibling.previousSibling
          .previousSibling.previousSibling.previousSibling.innerHTML;
      const author =
        event.target.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML.substring(
          3
        );
      if (!tempArr[tempArr.length - 1].ownArr.includes(titleBook)) {
        tempArr[tempArr.length - 1].ownArr.push(titleBook);
        tempArr[tempArr.length - 1].authorArr.push(author);
      }
      localStorage.setItem('usersArr888', JSON.stringify(tempArr));
      document.querySelector('.infoPanel__books__count').innerHTML =
        tempArr[tempArr.length - 1].ownArr.length;
    }
  });
}

//-----------------------------

//-----BY CARD END-----//
// document.body.addEventListener('click', (event) => {
//   console.log(event);
// });
function remadeBtn_2() {
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
