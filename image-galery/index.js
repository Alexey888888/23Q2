let url =
  'https://api.unsplash.com/search/photos?query=spring&client_id=6WHzh-lGs38jTkWYiVZx0FN1OQit1kHmA4siPx-3dxo&per_page=30&extras=url_m&orientation=landscape';

async function getData() {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);

  showData(data);
}

function showData(data) {
  const galleryList = document.createElement('div');
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

getData();
