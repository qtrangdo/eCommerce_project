import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILED,
} from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES_START:
      return state;
    case FETCH_PHONES_SUCCESS:
      return {...state, ...action.payload}
    default:
      return state;
  }
}