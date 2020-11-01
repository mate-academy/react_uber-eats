import { HEADER_TYPES } from './actionTypes';

export const setAddress = data => ({
  type: HEADER_TYPES.SET_ADDRESS,
  payload: data,
});

export const setTime = data => ({
  type: HEADER_TYPES.SET_TIME,
  payload: data,
});

export const setSearch = data => ({
  type: HEADER_TYPES.SET_SEARCH,
  payload: data,
});

export const toggleSearch = data => ({
  type: HEADER_TYPES.SET_IS_SEARCH_VISIBLE,
  payload: data,
});

export const toggleDelivery = data => ({
  type: HEADER_TYPES.SET_IS_DELIVERY_INFO_VISIBLE,
  payload: data,
});
