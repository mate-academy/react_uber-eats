export const truncate = input => (
  input.length > 5 ? `${input.substring(0, 35)}...` : input
);
