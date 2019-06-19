import R from 'ramda';
import { ADD_PHONE_TO_BASKET, REMOVE_PHONE_FROM_BASKET, ClEAN_BASKET } from '../actions/actionTypes';

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHONE_TO_BASKET:
      return R.append(action.payload, state)
    case REMOVE_PHONE_FROM_BASKET:
      return R.without(R.of(action.payload), state)
    case ClEAN_BASKET:
      return []
    default:
      return state;
  }
}