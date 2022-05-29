import { combineReducers } from 'redux';
import characterReducer from '../redux/characters/reducer';

export default combineReducers({
  characters: characterReducer
});
