import React from 'react';
import './RestaurantPage.scss';
import { HashLink as Link } from 'react-router-hash-link';
import { PropTypes } from 'prop-types';
import { ItemCard } from '../ItemCard';
import { Loader } from '../Loader';

export class RestaurantPage extends React.Component {
  componentDidMount() {
    const { loadRestaurantInfo, match } = this.props;

    loadRestaurantInfo(match.params.id);

    window.scrollTo(0, 0);
  }

  render() {
    const {
      match,
      isLoading,
      pageMainImgUrl,
      pageFoodSections,
      objOfSectionItems,
      restaurantTitle,
      restaurantAddress,
      restaurantEtaRange,
      restaurantCuisineList,
    } = this.props;

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
                  <Link
                    to={`/${match.params.id}#${section.title}`}
                    className="restaurant-page__navigation-link"
                  >
                    {section
                      .title.toLowerCase().replace(/^\w/, c => c.toUpperCase())}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="restaurant-page__menu">
            {pageFoodSections.map(section => (
              <div
                className="restaurant-page__menu-item"
                key={section.title}
                id={section.title}
              >
                <h2
                  className="restaurant-page__menu-item-title"
                >
                  {section
                    .title.toLowerCase().replace(/^\w/, c => c.toUpperCase())}
                </h2>
                <div className="restaurant-page__menu-container">
                  {section.itemUuids.map((item) => {
                    const {
                      title,
                      description,
                      price,
                      imageUrl,
                      uuid,
                    } = objOfSectionItems[item];

                    return (
                      <ItemCard
                        title={title}
                        description={description}
                        price={price}
                        imgUrl={imageUrl}
                        key={uuid}
                        uuid={uuid}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
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
  objOfSectionItems: PropTypes.shape({}).isRequired,
  restaurantTitle: PropTypes.string.isRequired,
  restaurantAddress: PropTypes.string.isRequired,
  restaurantEtaRange: PropTypes.string.isRequired,
  restaurantCuisineList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
