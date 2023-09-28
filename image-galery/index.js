let query = 'meme';
let galleryList;

let url = `https://api.unsplash.com/search/photos?query=${query}&client_id=6WHzh-lGs38jTkWYiVZx0FN1OQit1kHmA4siPx-3dxo&per_page=30&extras=url_m&orientation=landscape`;

window.onload = getData();

resetSearch();
search();
enterHandler();
popUp();
closePopUp();
dayNight();

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  showData(data);
}

function showData(data) {
  galleryList = document.createElement('div');
  galleryList.className = 'gallery__list';
  document.querySelector('.main__wrapper').append(galleryList);

  data.results.forEach((item) => {
    const img = document.createElement('img');
    img.className = 'gallery__item';
    img.src = item.urls.regular;
    img.alt = 'image';
    galleryList.append(img);
  });

  popUp();

  document.addEventListener('click', (event) => {
    if (event.target.className === 'gallery__item') {
      popUp();
    }
  });
}

function resetSearch() {
  document.querySelector('.cross').addEventListener('click', () => {
    document.querySelector('.cross').previousElementSibling.value = '';
    document.querySelector('.search__input').focus();
  });
}

function search() {
  document.querySelector('.loupe').addEventListener('click', () => {
    if (document.querySelector('.search__input').value.trimStart()) {
      query = document.querySelector('.search__input').value;
      url = `https://api.unsplash.com/search/photos?query=${query}&client_id=6WHzh-lGs38jTkWYiVZx0FN1OQit1kHmA4siPx-3dxo&per_page=30&extras=url_m&orientation=landscape`;
      clearPage();
      getData();
    }
    document.querySelector('.search__input').focus();
  });
}

function clearPage() {
  document.querySelector('.main__wrapper').innerHTML = '';
}

function enterHandler() {
  document.querySelector('.search').addEventListener('submit', (event) => {
    event.preventDefault();
  });
  document.addEventListener('keydown', (event) => {
    if (
      document.querySelector('.search__input') === document.activeElement &&
      event.code === 'Enter' &&
      document.querySelector('.search__input').value.trimStart()
    ) {
      query = document.querySelector('.search__input').value;
      url = `https://api.unsplash.com/search/photos?query=${query}&client_id=6WHzh-lGs38jTkWYiVZx0FN1OQit1kHmA4siPx-3dxo&per_page=30&extras=url_m&orientation=landscape`;
      clearPage();
      getData();
    }
  });
}

function popUp() {
  const imgs = document.querySelectorAll('.gallery__item');
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', () => {
      const popUpImg = document.createElement('img');
      popUpImg.className = 'pop-up__image';
      popUpImg.src = imgs[i].src;
      activeBtnRight();
      activeBtnLeft();
      if (i === 0) inactiveBtnLeft();
      if (i === imgs.length - 1) inactiveBtnRight();
      document.querySelector('.pop-up__img').innerHTML = '';
      document.querySelector('.pop-up__img').append(popUpImg);
      document.querySelector('.pop-up').classList.remove('none');
      document.querySelector('.blackout').classList.remove('none');
      document.querySelector('body').classList.add('scroll-lock');
      document.querySelector('.btn-left').addEventListener('click', () => {
        if (i > 0 && i < imgs.length) {
          popUpImg.src = imgs[--i].src;
          if (i === 0) inactiveBtnLeft();
          activeBtnRight();
        }
      });
      document.querySelector('.btn-right').addEventListener('click', () => {
        if (i >= 0 && i < imgs.length - 1) {
          popUpImg.src = imgs[++i].src;
          if (i === imgs.length - 1) inactiveBtnRight();
          activeBtnLeft();
        }
      });
    });
  }
}

function closePopUp() {
  document.querySelector('.blackout').addEventListener('click', popUpClose);
  document
    .querySelector('.popUp__close-icon')
    .addEventListener('click', popUpClose);
  function popUpClose() {
    document.querySelector('.pop-up__img').innerHTML = '';
    document.querySelector('.pop-up').classList.add('none');
    document.querySelector('.blackout').classList.add('none');
    document.querySelector('body').classList.remove('scroll-lock');
  }
}

function inactiveBtnLeft() {
  document.querySelector('.btn-left').classList.remove('active');
  document.querySelector('.btn-left').classList.add('opacity');
}

function activeBtnLeft() {
  document.querySelector('.btn-left').classList.add('active');
  document.querySelector('.btn-left').classList.remove('opacity');
}

function inactiveBtnRight() {
  document.querySelector('.btn-right').classList.remove('active');
  document.querySelector('.btn-right').classList.add('opacity');
}

function activeBtnRight() {
  document.querySelector('.btn-right').classList.add('active');
  document.querySelector('.btn-right').classList.remove('opacity');
}

function dayNight() {
  document.querySelector('.day-night').addEventListener('click', () => {
    document.querySelector('.wrapper').classList.toggle('night');
    document.querySelector('.day-night').classList.toggle('filter');
    document.querySelector('.header__logo').classList.toggle('filter');
    document.querySelector('.github').classList.toggle('filter');
    document.querySelector('.rss').classList.toggle('filter');
    document.querySelector('.year').classList.toggle('filter');
    document.querySelector('.pop-up__wrapper').classList.toggle('evening');
    document.querySelector('.popUp__close-icon').classList.toggle('filter');
    document.querySelector('.btn-left').classList.toggle('filter');
    document.querySelector('.btn-right').classList.toggle('filter');
    document.querySelector('.search__input').focus();
  });
}
