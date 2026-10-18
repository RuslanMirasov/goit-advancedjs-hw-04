import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery, PER_PAGE } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const loadMoreButton = document.querySelector('[data-load-more]');

let query = '';
let page = 1;

form.addEventListener('submit', onSearch);
loadMoreButton.addEventListener('click', onLoadMore);

async function onSearch(event) {
  event.preventDefault();

  const searchQuery = event.currentTarget.elements['search-text'].value.trim();

  if (searchQuery === '') {
    iziToast.warning({
      message: 'Please enter your search query!',
      position: 'topRight',
    });
    return;
  }

  query = searchQuery;
  page = 1;

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    createGallery(data.hits);
    updateLoadMoreButton(data.totalHits);
  } catch {
    showFetchError();
  } finally {
    hideLoader();
  }
}

async function onLoadMore() {
  page += 1;

  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);

    createGallery(data.hits);
    scrollGallery();
    updateLoadMoreButton(data.totalHits);
  } catch {
    showFetchError();
  } finally {
    hideLoader();
  }
}

function updateLoadMoreButton(totalHits) {
  if (page * PER_PAGE >= totalHits) {
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
    return;
  }

  showLoadMoreButton();
}

function scrollGallery() {
  const { height: cardHeight } = document
    .querySelector('.gallery li')
    .getBoundingClientRect();

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}

function showFetchError() {
  iziToast.error({
    message: 'Failed to fetch images. Please try again later.',
    position: 'topRight',
  });
}
