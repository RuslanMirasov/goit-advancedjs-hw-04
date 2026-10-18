import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreButton = document.querySelector('[data-load-more]');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `<li>
        <a href="${largeImageURL}" class="lightbox-target">
          <div class="thumb">
            <img src="${webformatURL}" alt="${tags}" loading="lazy" />
          </div>
          <div class="info">
            <p class="info-item"><b>Likes</b><span>${likes}</span></p>
            <p class="info-item"><b>Views</b><span>${views}</span></p>
            <p class="info-item"><b>Comments</b><span>${comments}</span></p>
            <p class="info-item"><b>Downloads</b><span>${downloads}</span></p>
          </div>
        </a>
      </li>`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreButton.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreButton.classList.add('hidden');
}
