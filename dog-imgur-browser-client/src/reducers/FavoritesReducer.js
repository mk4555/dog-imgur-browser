const initialState = {
  favorites: []
}
export default function FavoritesReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_FAVORITES':
      return Object.assign({}, state, {
        favorites: action.payload,
        loading: false
      })
    case 'LOAD_FAVORITES':
      return Object.assign({}, state, {
        favorites:action.payload,
        loading: true
      })
    case 'ADD_IMAGE':
      return Object.assign({}, state, {
        favorites: state.favorites.favorites.concat(action.payload)
      })
    default:
      return state;
  }
};
