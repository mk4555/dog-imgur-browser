const initialState = {
  loading: false,
  images: []
}

export default function ImagesReducer (state = initialState, action) {
  switch (action.type) {
    case 'FETCH_IMAGES':
      return {loading: false, images: action.payload}
    case 'LOAD_IMAGES':
      return Object.assign({}, state, {
        loading: true
      });
    default:
      return state;
  }
};
