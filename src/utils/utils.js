import axios from 'axios';
import { BASE_URL } from '../constants/constants';

export const getRestaurantsListData = () => {
  return axios.get(`${BASE_URL}/restaurants?location=kyiv`);
};

export const getRestaurantsDataById = (id) => {
  return axios.get(`${BASE_URL}/restaurants/${id}`);
};

export const getRestaurantMenuItems = (id) => {
  return axios.get(`${BASE_URL}/menu-items/${id}`);
};
