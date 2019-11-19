import React from 'react';
import { connect } from 'react-redux';
import { loadRestaurants } from '../../Store/actions';
import { selectRestaurantsList, selectRestaurantsListError, selectIsLoading } from '../../Store/selectors';
import PropTypes from 'prop-types';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { Loader } from '../Loader/Loader';
import { Error } from '../Error/Error';
import './RestaurantListPage.scss';

const ETA_RANGE = '15 - 20 min';

class RestaurantsListPage extends React.Component {
  componentDidMount() {
    const { loadRestaurantsData } = this.props;

    loadRestaurantsData();
  }

  render() {
    const { restaurantListData, isLoading, error } = this.props;

    if (isLoading) {
      return <Loader />;
    }

    if (error) {
      return <Error massage={error} />;
    }

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
  error: selectRestaurantsListError(state),
  isLoading: selectIsLoading(state),
});

const putActionsToProps = {
  loadRestaurantsData: loadRestaurants,
};

RestaurantsListPage.propTypes = {
  loadRestaurantsData: PropTypes.func.isRequired,
  restaurantListData: PropTypes.arrayOf({}),
  error: PropTypes.string,
  isLoading: PropTypes.bool,
};

RestaurantsListPage.defaultProps = {
  restaurantListData: [],
  error: null,
  isLoading: false,
};

export default connect(
  putStateToProps,
  putActionsToProps
)(RestaurantsListPage);
