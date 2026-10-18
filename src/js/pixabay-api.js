import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '38685778-b39595dc2d3e03e48621cd56d';

export const PER_PAGE = 15;

export async function getImagesByQuery(query, page) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: PER_PAGE,
    },
  });

  return response.data;
}
