import fetch from 'isomorphic-fetch';
import { FETCH_IMAGES, LOAD_IMAGES } from './types'

export const fetchImages = () => dispatch => {
  console.log("fetching")
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => dispatch({
        type: FETCH_IMAGES,
        payload: data
      }))
  }

export const loadImages = () => {
  return {
    type: LOAD_IMAGES
  }
}
