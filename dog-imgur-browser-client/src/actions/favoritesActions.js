import { ADD_IMAGE, LOAD_FAVORITES, FETCH_FAVORITES } from './types'
import fetch from 'isomorphic-fetch';

export const addToFavorites = image => {
  return dispatch => {
    return fetch('/api/dogs', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({image: image})
    })
      .then(response => response.json())
      .then(image => dispatch())
  }
}

export function fetchFavorites() {
  return function(dispatch) {
    dispatch({
      type: LOAD_FAVORITES
    })
    return fetch('/api/dogs')
      .then(res => res.json())
      .then(resJson => {
        dispatch({
          type: FETCH_FAVORITES,
          payload: resJson
        })
      })
  }
}
