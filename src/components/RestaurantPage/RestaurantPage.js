import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import './RestaurantPage.scss';
import { Section } from '../Section';

const DEFAULT_ETA_RANGE = '20 - 30 min';

export class RestaurantPage extends PureComponent {
  componentDidMount() {
    const { loadRestaurantPage } = this.props;
    const { match: { params } } = this.props;

    loadRestaurantPage(params.uuid);
    window.scrollTo(0, 0);
  }

  render() {
    const { restaurantPageData, restaurantSections } = this.props;
    const {
      uuid,
      title,
      heroImageUrls,
      categories,
      etaRange,
      location,
    } = restaurantPageData;

    if (restaurantPageData.length === 0) {
      return <Loader />;
    }

    const heroImageUrl = heroImageUrls[heroImageUrls.length - 1].url;

    const heroImageUrlSrcSet = heroImageUrls.reduce((acc, item, index) => {
      let str = `${item.url} ${item.width}w`;

      (index !== heroImageUrls.length - 1) && (str = `${str},`);

      return `${acc}${str}`;
    }, '');

    return (
      <>
        <div className="hero">
          <img
            className="hero__img"
            srcSet={heroImageUrlSrcSet}
            sizes="(max-width: 320px) 240px,
              (max-width: 768px) 550px,
              (max-width: 1280px) 750px,
              (max-width: 1980px) 1080px,
              750px"
            src={heroImageUrl}
            alt={title}
          />
          <div className="title">
            <h1 id={uuid} className="title__name">{title}</h1>
            <div className="title__categories">
              {categories.join(' • ')}
            </div>
            <div className="title__eta">
              {etaRange || DEFAULT_ETA_RANGE}
            </div>
            <div className="title__address">
              {`${location.address} • `}
              <a href="# " className="title__more">More info</a>
            </div>
          </div>
        </div>
        <div className="content">
          <nav className="restoraunt-menu">
            {restaurantSections
              .map(item => (
                <a
                  href={`#${item.uuid}`}
                  className="restoraunt-menu__item"
                >
                  {item.title}
                </a>
              ))
            }
          </nav>

          {restaurantSections.map(item => <Section category={item} />)}
        </div>
      </>
    );
  }
}

RestaurantPage.propTypes = {
  loadRestaurantPage: PropTypes.func.isRequired,
  restaurantPageData: PropTypes.shape(),
  restaurantSections: PropTypes.arrayOf(PropTypes.shape()),
  match: PropTypes.shape().isRequired,
};

RestaurantPage.defaultProps = {
  restaurantPageData: [],
  restaurantSections: [],
};
