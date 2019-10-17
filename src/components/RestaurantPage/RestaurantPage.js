import React from 'react';
import './RestaurantPage.scss';
import PropTypes from 'prop-types';
import { Loader } from '../Loader';
import { RestaurantPageSection } from '../RestaurantPageSection';

export class RestaurantPage extends React.Component {
  state = {
    activeSection: null,
  }

  componentDidMount() {
    const { loadRestaurantInfo, match } = this.props;

    loadRestaurantInfo(match.params.id);

    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this.setState({
      activeSection: null,
    });
  }

  handleNavLinkClick = (id) => {
    this.setState({
      activeSection: id,
    });
  }

  render() {
    const {
      isLoading,
      pageMainImgUrl,
      pageFoodSections,
      restaurantTitle,
      restaurantAddress,
      restaurantEtaRange,
      restaurantCuisineList,
    } = this.props;

    const { activeSection } = this.state;

    if (isLoading) {
      return <Loader />;
    }

    return (
      <section className="restaurant-page">
        <div className="restaurant-page__top-part">
          <div className="restaurant-page__img-wrapper">
            <img
              src={pageMainImgUrl}
              alt=""
              className="restaurant-page__main-img"
            />
          </div>
          <div className="restaurant-page__rest-details">
            <h1 className="restaurant-page__main-title">
              {restaurantTitle}
            </h1>
            <p className="restaurant-page__description">
              {`£ • ${restaurantCuisineList.join(' • ')}`}
            </p>
            <p className="restaurant-page__time">
              {restaurantEtaRange}
            </p>
            <p className="restaurant-page__location">
              {restaurantAddress}
            </p>
          </div>
        </div>

        <div className="restaurant-page__main-content content">
          <nav className="restaurant-page__navigation-wrapper">
            <ul className="restaurant-page__navigation">
              {pageFoodSections.map(section => (
                <li key={section.title}>
                  <button
                    type="button"
                    className="restaurant-page__navigation-link"
                    onClick={() => this.handleNavLinkClick(section.title)}
                  >
                    {section
                      .title.toLowerCase()}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <div className="restaurant-page__menu">
            {
              pageFoodSections.map(section => (
                <RestaurantPageSection
                  section={section}
                  activeSection={activeSection}
                  key={section.uuid}
                />
              ))
            }
          </div>
        </div>
      </section>
    );
  }
}

RestaurantPage.propTypes = {
  loadRestaurantInfo: PropTypes.func.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      tabId: PropTypes.string,
    }),
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  pageMainImgUrl: PropTypes.string.isRequired,
  pageFoodSections: PropTypes.arrayOf(PropTypes.shape({
    itemUuids: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    uuid: PropTypes.string,
  })).isRequired,
  restaurantTitle: PropTypes.string.isRequired,
  restaurantAddress: PropTypes.string.isRequired,
  restaurantEtaRange: PropTypes.string.isRequired,
  restaurantCuisineList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
