import React from 'react';
import { connect } from 'react-redux';
import { loadRestaurants } from '../../Store/actions';
import { selectRestaurantsList } from '../../Store/selectors';
import PropTypes from 'prop-types';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import './RestaurantListPage.scss';

const ETA_RANGE = '15 - 20 min';

class RestaurantsListPage extends React.Component {
  componentDidMount() {
    const { loadRestaurantsData } = this.props;

    loadRestaurantsData();
  }

  render() {
    const { restaurantListData } = this.props;

    return (
      <div className="restaurants-list">
        {restaurantListData.map(({
          heroImageUrl,
          title,
          uuid,
          categories,
          etaRange,
        }) => (
          <RestaurantCard
            imageUrl={heroImageUrl}
            title={title}
            uuid={uuid}
            categories={categories}
            etaRange={etaRange
              ? etaRange.text.replace('–', ' - ')
              : ETA_RANGE}
          />
        ))}
      </div>
    );
  }
}

const putStateToProps = state => ({
  restaurantListData: selectRestaurantsList(state),
});

const putActionsToProps = {
  loadRestaurantsData: loadRestaurants,
};

RestaurantsListPage.propTypes = {
  loadRestaurantsData: PropTypes.func.isRequired,
  restaurantListData: PropTypes.arrayOf({}),
};

RestaurantsListPage.defaultProps = {
  restaurantListData: [],
};

export default connect(
  putStateToProps,
  putActionsToProps
)(RestaurantsListPage);
