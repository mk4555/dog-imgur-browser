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

export function uploadImage() {
  return request('/image').post({
    image: "https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/13000934/Beagle-On-White-08.jpg"
  });
}
