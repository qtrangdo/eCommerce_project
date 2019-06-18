import {
  FETCH_PHONES_START,
  FETCH_PHONES_SUCCESS,
  FETCH_PHONES_FAILED,
  LOAD_MORE_PHONE_START,
  LOAD_MORE_PHONE_SUCCESS,
  LOAD_MORE_PHONES_FAILED,
  FETCH_PHONE_BY_ID_START,
  FETCH_PHONE_BY_ID_SUCCESS,
  FETCH_PHONE_BY_ID_FAILED,
  ADD_PHONE_TO_BASKET
} from './actionTypes';

import {fetchPhonesApi, loadMorePhonesApi, fetchPhoneByIdApi} from '../api/index';
import {getRenderedPhonesLength} from '../components/helpers/selectors';

export const fetchPhones = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PHONES_START });
    const phones = await fetchPhonesApi();
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

export const fetchPhoneById = id => async (dispatch) => {
  try {
    dispatch({ type: FETCH_PHONE_BY_ID_START });
    const phone = await fetchPhoneByIdApi(id);
    dispatch({
      type: FETCH_PHONE_BY_ID_SUCCESS,
      payload: phone
    })
  } catch (err) {
    dispatch({
      type: FETCH_PHONE_BY_ID_FAILED,
      payload: err,
      error: true
    })
  }
}

export const addPhoneToBasket = id => async (dispatch) => {
  dispatch({
    type: ADD_PHONE_TO_BASKET,
    payload: id
  })
}