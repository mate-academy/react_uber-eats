import PropTypes from 'prop-types';

export const RestaurantsListPageProps = {
  restaurantsListData: PropTypes.arrayOf(PropTypes.shape({})),
  loadRestaurants: PropTypes.func.isRequired,
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

export const RestaurantsListPageDefault = {
  restaurantsListData: [],
  error: null,
  isLoading: false,
};

export const RestaurantCardProps = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string),
  uuid: PropTypes.string.isRequired,
  etaRange: PropTypes.string,
};

export const RestaurantCardDefault = {
  categories: [],
  etaRange: '',
};

export const InputProps = {
  iconUrl: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  isSmall: PropTypes.bool,
};

export const InputDefault = {
  iconUrl: '',
  type: 'text',
  placeholder: '',
  className: '',
  isSmall: true,
};

export const SelectProps = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSelect: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string,
  })),
  iconUrl: PropTypes.string,
};

export const SelectDefault = {
  onSelect: () => {},
  options: [],
  iconUrl: '',
};

export const ErrorProps = {
  message: PropTypes.string,
};

export const ErrorDefault = {
  message: 'Sorry, something went wrong(',
};

export const ItemCardPropTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};
