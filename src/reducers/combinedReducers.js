import { CombineReducers } from 'redux';
import ImagesReducer from './reducers/ImagesReducer';
import FavoritesReducer from './reducers/FavoritesReducer';

const rootReducer = CombineReducers({
  images: ImagesReducer,
  favorites: FavoritesReducer
});

export default rootReducer;
