export const setOriginalData = originalData => ({
  type: 'ORIGINAL_DATA',
  originalData,
});

const getOriginalData = (originalData = [], action) => {
  switch (action.type) {
    case 'ORIGINAL_DATA':
      return action.originalData;
    default:
      return originalData;
  }
};

export default getOriginalData;
