import axios from 'axios';
import { BASE_URL } from '../constants/constants';

export const getRestaurantsListData = () => {
  return axios.get(`${BASE_URL}/v1/restaurants`);
};

export const getRestaurantsDataById = (id) => {
  return axios.get(`${BASE_URL}/v1/restaurants/${id}`);
};
