import { FETCH_IMAGES, LOAD_IMAGES, FETCH_RANDOM } from '../actions/types'

const initialState = {
  images: [],
  image: {},
  loading: false
}

function randomImage(images) {
  return images.data.items[Math.floor(Math.random() * images.data.items.length)]
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
    case FETCH_RANDOM:
      return Object.assign({}, state, {
        image: randomImage(action.payload),
        loading: false
      })
    default:
      return state;
  }
};
