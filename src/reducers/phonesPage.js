import R from 'ramda';

import { FETCH_PHONES_SUCCESS, LOAD_MORE_PHONE_SUCCESS, SEARCH_PHONE } from '../actions/actionTypes';

const initialState = {
  ids: [],
  search: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES_SUCCESS:
      return { ...state, ids: R.pluck('id', action.payload) }
    case LOAD_MORE_PHONE_SUCCESS:
      const ids = R.pluck('id', action.payload);
      return { ...state, ids: R.concat(ids, state.ids) }
    case SEARCH_PHONE:
      return R.merge(state, {
        search: action.payload
      })
    default:
      return state
  }
}