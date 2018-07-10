import { FETCH_IMAGES, LOAD_IMAGES, FETCH_RANDOM } from './types'
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

export function fetchRandomImage() {
  return function(dispatch){
    dispatch({
      type: LOAD_IMAGES
    })
    return searchGallery(undefined,undefined,0).then(data => dispatch({
      type: FETCH_RANDOM,
      payload: data
    }))
  }
}

export const loadImages = () => {
  return {
    type: LOAD_IMAGES
  }
}
