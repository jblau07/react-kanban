import { LOAD_CARDS } from '../actions';
import { ADD_CARD } from '../actions';

const initialState = {
  cards: []
}
 
export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CARDS:
      return {...state, cards: action.cards}
    case ADD_CARD:
      const updatedCards = state.cards.concat(action.card);
      return { ...state, cards: updatedCards };
    default:
      return state;
  }
}