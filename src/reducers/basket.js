import R from 'ramda';
import { ADD_PHONE_TO_BASKET } from '../actions/actionTypes';

const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PHONE_TO_BASKET:
      return R.append(action.payload, state)
    default:
      return state;
  }
}