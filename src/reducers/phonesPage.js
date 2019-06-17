import R from 'ramda';

import {FETCH_PHONES_SUCCESS} from '../actions/actionTypes';

const initialState = {
  ids: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES_SUCCESS:
      return {...state, ids: R.pluck('id', action.payload)}
    default:
      return state
  }
}