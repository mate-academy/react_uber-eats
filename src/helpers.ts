import { debounce } from './types';

export const debounceWrapper: debounce = (f, delay) => {
  let timer: any;

  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => f(...args), delay);
  };
};
