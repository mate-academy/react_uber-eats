import React from 'react';
import { connect } from 'react-redux';
import { loadRestaurants } from '../../Store/actions';
import { selectRestaurantsList } from '../../Store/selectors';

class RestaurantsListPage extends React.Component {
  componentDidMount() {
    const { loadRestaurantsData } = this.props;

    loadRestaurantsData();
  }

  render() {
    const { restaurantListData } = this.props;

    return (
      <div>{JSON.stringify(restaurantListData)}</div>
    );
  }
}

const putStateToProps = state => ({
  restaurantListData: selectRestaurantsList(state),
});

const putActionsToProps = {
  loadRestaurantsData: loadRestaurants,
};

export default connect(
  putStateToProps,
  putActionsToProps
)(RestaurantsListPage);
