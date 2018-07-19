import { ADD_IMAGE, LOAD_FAVORITES, FETCH_FAVORITES, DELETE_IMAGE } from './types'
import fetch from 'isomorphic-fetch';

export const addToFavorites = image => {
  return dispatch => {
    return fetch('/api/dogs', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({dog: image})
    })
      .then(response => response.json())
      .then(dog => dispatch({
        type: ADD_IMAGE,
        payload: dog
      }))
  }
}

export const deleteFromFavorites = image => {
  return dispatch => {
    return fetch(`/api/dogs/${image.id}`, {
      method: "DELETE"
    })
        .then(response => dispatch({
          type: DELETE_IMAGE,
          payload: response
        }))
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
