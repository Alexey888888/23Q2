const label = document.querySelectorAll('.season-label');

label.forEach((el) => {
  el.addEventListener('click', () => {
    label.forEach((item) => item.classList.remove('selected'));
    el.classList.add('selected');
  });
});
