export const AutoComplete
  = input => fetch(`api/locationAutocomplete/${input.toLowerCase()}.json`)
    .then(r => r.json())
    .then(data => data.data)
    .catch(err => err);

export const getRestaurants
  = cityId => fetch(`api/location/${cityId}.json`)
    .then(r => r.json())
    .then(data => data.data)
    .catch(err => err);
