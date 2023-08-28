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

//--REGISTER WINDOW

const reg = document.querySelector('.dropMenu__textDown ');
const blackout = document.querySelector('.blackout');
const regWindow = document.querySelector('.regWindow');
const regForm = document.querySelector('.reg__form');

reg.addEventListener('click', () => {
  openRegWindow();
  closeDropMenu();
});
blackout.addEventListener('click', closeRegWindow);
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
}

document
  .querySelector('.library__btn:first-child')
  .addEventListener('click', openRegWindow);

///
if (!localStorage.getItem('isUserAuth888')) {
  localStorage.setItem('isUserAuth888', false);
}

class User {
  constructor(fname, lname, email, pass) {
    this.firstName = fname;
    this.lastName = lname;
    this.email = email;
    this.pass = pass;
    this.cardNumber = Math.random().toString(16).slice(-9);
  }
}

document.querySelector('.reg__form').addEventListener('submit', () => {
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
}

if (localStorage.getItem('isUserAuth888') === 'true') {
  afterAuth();
}

function openDropMenuAuth() {
  document.querySelector('.header__dropMenuAuth').classList.add('dropVisible');
  closeBurger();
  event.stopPropagation();
}

function closeDropMenuAuth() {
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
