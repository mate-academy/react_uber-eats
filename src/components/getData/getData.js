const BASEURL = 'https://mate-academy.github.io/react_uber-eats/api';
const IMGURL = 'https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2';

export const getData = async() => {
  const response = await fetch(`${BASEURL}/location/ChIJdd4hrwug2EcRmSrV3Vo6llI.json`);
  const data = await response.json();

  return data.data.feedItems.map(item => {
    return data.data.storesMap[item.uuid];
  });
};

export const getPhones = async() => {
  const phones = getData(`${BASEURL}/phones.json`);

  return phones;
};

export const getDetails = async(phoneId) => {
  const phonesDetails = getData(`${BASEURL}/phones/${phoneId}.json`);

  return phonesDetails;
};
