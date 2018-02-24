import { combineReducers } from 'redux';
import cardsReducer from './cardsReducer';

export default cardsReducers({
  cards: cardsReducer
});