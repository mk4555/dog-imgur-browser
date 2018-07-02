import fetch from 'isomorphic-fetch';

export const fetchImages = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => dispatch({
        type: "FETCH_IMAGES",
        payload: data
      }))
  }

export const loadImages = () => {
  return {
    type: "LOAD_IMAGES"
  }
}
