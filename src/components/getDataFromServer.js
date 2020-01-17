const getDataFromServer = url => fetch(url).then(data => data.json());

export default getDataFromServer;
