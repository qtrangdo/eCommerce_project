import R from 'ramda';
import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  LOAD_MORE_PHONE_SUCCESS,
  FETCH_PHONE_BY_ID_SUCCESS
} from '../actions/actionTypes';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES_START:
      return state;
    case FETCH_PHONES_SUCCESS:
      const newValue = R.indexBy(R.prop('id'), action.payload);
      return R.merge(state, newValue);
    case LOAD_MORE_PHONE_SUCCESS:
      const moreValues = R.indexBy(R.prop('id'), action.payload);
      return R.merge(state, moreValues);
    case FETCH_PHONE_BY_ID_SUCCESS:
      return R.assoc(action.payload.id, action.payload, state)
    default:
      return state;
  }
}