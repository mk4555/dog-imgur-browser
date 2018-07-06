import fetch from 'isomorphic-fetch';
import { FETCH_IMAGES, LOAD_IMAGES } from './types'
import { searchGallery } from '../services/imgur'


export function fetchImages() {
  return function(dispatch) {
    dispatch({
      type: LOAD_IMAGES
    })
    return searchGallery(undefined,undefined,0).then(data => dispatch({
      type: FETCH_IMAGES,
      payload: data
    }));
  }
}

export const loadImages = () => {
  return {
    type: LOAD_IMAGES
  }
}
