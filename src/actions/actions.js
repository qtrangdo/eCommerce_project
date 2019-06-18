import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILED,
  LOAD_MORE_PHONE_START,
  LOAD_MORE_PHONE_SUCCESS,
  LOAD_MORE_PHONES_FAILED
} from './actionTypes';

import {fetchPhoneApi, loadMorePhonesApi} from '../api/index';
import {getRenderedPhonesLength} from '../components/helpers/selectors';

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

export const loadMorePhones = () => async (dispatch, getState) => {
  const offset = getRenderedPhonesLength(getState)
  try {
    dispatch({ type: LOAD_MORE_PHONE_START });
    const phones = await loadMorePhonesApi(offset);
    dispatch({
      type: LOAD_MORE_PHONE_SUCCESS,
      payload: phones
    })
  } catch (err) {
    dispatch({
      type: LOAD_MORE_PHONES_FAILED,
      payload: err,
      error: true
    })
  }
}