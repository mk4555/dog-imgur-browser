export default function ImagesReducer (state = {
  images: []
}, action) {
  switch (action.type) {
    case 'LOAD_IMAGES':
      return Object.assign({}, state, {
        images: state.images.concat(action.image)
      });
    default:
      return state;
  }
};
