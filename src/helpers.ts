import { debounce, Handler, HistoryReplacer } from './types';
import { setAddress, setTime, setSearch } from './store/actions';
import { History } from 'history';

export const locationLondon = "d2c8cd41-8970-416c-b05b-a4418db2b2d3";

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

export const historyReplacer: HistoryReplacer = (history: History) => {

  return history.location.pathname
    .split('/')
    .filter((elem, i, pathname) => i !== pathname.length - 1)
    .join('/')
}
