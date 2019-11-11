import { connect } from 'react-redux';
import { RestaurantPageSection } from './RestaurantPageSection';
import { selectRestaurantSectionsEntities } from '../../store/selectors';

const ImprovedRestaurantPageSection = connect(
  state => ({
    sectionItems: selectRestaurantSectionsEntities(state),
  })
)(RestaurantPageSection);

export {
  ImprovedRestaurantPageSection as RestaurantPageSection,
};
