import { combineReducers } from 'redux';
import ImagesReducer from './ImagesReducer.js';
import FavoritesReducer from './FavoritesReducer';

const rootReducer = combineReducers({
  images: ImagesReducer,
  favorites: FavoritesReducer
});

export default rootReducer;
