import { FETCH_IMAGES, LOAD_IMAGES } from '../actions/types'

const initialState = {
  images: [],
  image: {}
}

export default function ImagesReducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_IMAGES:
      console.log("Hello")
      return {
        ...state,
        images: action.payload
      }
    case LOAD_IMAGES:
      return Object.assign({}, state, {
        loading: true
      });
    default:
      return state;
  }
};
