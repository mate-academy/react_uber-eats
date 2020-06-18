export const debounce = (f: Function, delay: number) => {
  let timerId: number;

  return (...args: any) => {
    clearTimeout(timerId);
    timerId = window.setTimeout(f, delay, ...args);
  };
};
