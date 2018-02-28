import { LOAD_CARDS, SET_EDIT_ID } from '../actions';

const initialState = {
  cards: [],
  editId: false
}
 
export default (state = initialState, action) => {
  console.log('action', action)
  switch (action.type) {
    case LOAD_CARDS:
      return {...state, cards: action.cards}
    case SET_EDIT_ID:
      return {...state, editId: action.editId}
    default:
      return state;
  }
}