import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38685778-b39595dc2d3e03e48621cd56d';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
