const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
const menuLink = document.querySelectorAll('.menu__link');
const burgerOverflow = document.querySelector('.burger-overflow');




const clickHandler = (event) => {
    menu.classList.toggle('menu-active');
    document.querySelector('.burger').classList.toggle('burger-active');
    document.querySelector('body').classList.toggle('scroll-lock');
} 

burger.addEventListener('click', clickHandler);

menuLink.forEach((item) => item.addEventListener('click', clickHandler));



burgerOverflow.addEventListener('click', () => {
    menu.classList.remove('menu-active');
    document.querySelector('.burger').classList.remove('burger-active');
    document.querySelector('body').classList.remove('scroll-lock');    
});
