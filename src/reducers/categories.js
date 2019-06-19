import R from 'ramda';
import {
  FETCH_CATEGORIES_START,
  FETCH_CATEGORIES_SUCCESS,
} from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_START:
      return state;
    case FETCH_CATEGORIES_SUCCESS:
      const newValue = R.indexBy(R.prop('id'), action.payload);
      return R.merge(state, newValue);
    default:
      return state;
  }
}