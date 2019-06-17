import R from 'ramda';
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
      const newValue = R.indexBy(R.prop('id'), action.payload);
      return R.merge(state, newValue);
    default:
      return state;
  }
}