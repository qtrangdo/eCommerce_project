import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILED
} from './actionTypes';

import fetchPhoneApi from '../api/index';

export const fetchPhones = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PHONES_START });
    const phones = await fetchPhoneApi();
    dispatch({
      type: FETCH_PHONES_SUCCESS,
      payload: phones
    })
  } catch (err) {
    dispatch({
      type: FETCH_PHONES_FAILED,
      payload: err,
      error: true
    })
  }
}