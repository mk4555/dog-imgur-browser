import fetchival from 'fetchival';

const CLIENT_ID = 'd6140682423d91b';
const apiBase = 'https://api.imgur.com/3';
const request = fetchival(apiBase, {
  mode: 'cors',
  headers: {
    Authorization: 'Client-ID ' + CLIENT_ID
  }
});

export function searchGallery(tag = 'dog', sort = 'viral', page = 0) {
  return request(`gallery/t/${tag}/${sort}/day/${page}`).get();
}
