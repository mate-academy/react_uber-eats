/*eslint-disable*/
export const getData = (url) => (
  fetch(url)
    .then(responce => responce)
    .then(data => data.json())
);
