import { FETCH_FAVORITES, ADD_IMAGE, LOAD_FAVORITES, DELETE_IMAGE } from '../actions/types';

const initialState = {
  favorites: []
}
export default function FavoritesReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_FAVORITES:
      return Object.assign({}, state, {
        favorites: action.payload,
        loading: false
      })
    case LOAD_FAVORITES:
      return Object.assign({}, state, {
        favorites:action.payload,
        loading: true
      })
    case ADD_IMAGE:
      return Object.assign({}, state, {
        favorites: state.favorites.concat(action.payload)
      })
    case DELETE_IMAGE:
      // const favorites =
      return {favorites: state.favorites.filter(image => image.id !== action.payload.id)}
    default:
      return state;
  }
};
