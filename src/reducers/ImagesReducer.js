import { FETCH_IMAGES, LOAD_IMAGES } from '../actions/types'

const initialState = {
  images: [],
  image: {},
  loading: false
}

export default function ImagesReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES:
      return Object.assign({}, state, {
        images: action.payload,
        loading: false
      })
    case LOAD_IMAGES:
      return Object.assign({}, state, {
        loading: true
      });
    default:
      return state;
  }
};
