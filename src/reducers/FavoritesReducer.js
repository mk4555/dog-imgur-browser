const initialState = {
  favorites: []
}
export default function FavoritesReducer (state = initialState, action) {
  switch (action.type) {
    case 'ADD_IMAGE':
      return Object.assign({}, state, {
        favorites: state.favorites.concat(action.image)
      });
    default:
      return state;
  }
};
