import { debounce, Handler } from './types';
import { setAddress, setTime, setSearch } from './store/actions';

export const debounceWrapper: debounce = (f, delay) => {
  let timer: any;

  return (...args: any) => {
    clearTimeout(timer);
    timer = setTimeout(() => f(...args), delay);
  };
};

export const handleChange: Handler = (value, name) => {
  switch (name) {
    case 'address': return setAddress(value);
    case 'time': return setTime(value);
    case 'search': return setSearch(value);
    default: return undefined;
  }
};

