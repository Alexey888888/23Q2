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
}

document
  .querySelector('.library__btn:first-child')
  .addEventListener('click', openRegWindow);
