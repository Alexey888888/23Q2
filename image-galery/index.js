let query = 'meme';
let galleryList;

let url = `https://api.unsplash.com/search/photos?query=${query}&client_id=6WHzh-lGs38jTkWYiVZx0FN1OQit1kHmA4siPx-3dxo&per_page=30&extras=url_m&orientation=landscape`;

getData();
resetSearch();
search();

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
}

function resetSearch() {
  document.querySelector('.cross').addEventListener('click', () => {
    document.querySelector('.cross').previousElementSibling.value = '';
    document.querySelector('.search__input').focus();
  });
}

function search() {
  document.querySelector('.loupe').addEventListener('click', () => {
    query = document.querySelector('.search__input').value;
    url = `https://api.unsplash.com/search/photos?query=${query}&client_id=6WHzh-lGs38jTkWYiVZx0FN1OQit1kHmA4siPx-3dxo&per_page=30&extras=url_m&orientation=landscape`;
    clearPage();
    getData();
  });
}

function clearPage() {
  document.querySelector('.main__wrapper').innerHTML = '';
}

enterHandler();

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
