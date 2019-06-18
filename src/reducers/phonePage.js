import R from 'ramda';

import {
  FETCH_PHONE_BY_ID_SUCCESS
} from '../actions/actionTypes';

const initialState = {
  id: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONE_BY_ID_SUCCESS:
      return R.merge(state, {
        id: R.prop("id", action.payload)
      })
    default:
      return state;
  }
}