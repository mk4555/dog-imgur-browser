import { FETCH_IMAGES, LOAD_IMAGES, FETCH_RANDOM } from './types'
import { searchGallery } from '../services/imgur'

let current = 0;

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
    let random = Math.floor(Math.random() * 20)
    return searchGallery(undefined,undefined, random).then(data => dispatch({
      type: FETCH_RANDOM,
      payload: data
    }))
  }
}

export function fetchNextPage() {
  return function(dispatch) {
    dispatch({
      type: LOAD_IMAGES
    })
    return searchGallery(undefined, undefined, current+=1).then(data => dispatch({
      type: FETCH_IMAGES,
      payload:data
    }))
  }
}

export function fetchPreviousPage() {
  return function(dispatch) {
    dispatch({
      type: LOAD_IMAGES
    })
    if (current < 1) {
      alert("You're on Page 0!")
    } else {
      return searchGallery(undefined, undefined, current-=1).then(data => dispatch({
        type: FETCH_IMAGES,
        payload: data
      }))
    }
  }
}

export const loadImages = () => {
  return {
    type: LOAD_IMAGES
  }
}
