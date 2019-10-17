import React from 'react';
import PropTypes from 'prop-types';
import { ItemCard } from '../ItemCard';
import './RestaurantPageSection.scss';

export class RestaurantPageSection extends React.Component {
  sectionRef = React.createRef();

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { activeSection, section } = this.props;

    if (prevProps.activeSection !== activeSection) {
      const coordinates = this.sectionRef.current.getBoundingClientRect();

      section.title === activeSection && window.scrollBy(
        {
          behavior: 'smooth',
          top: coordinates.top - 100,
          left: coordinates.left,
        }
      );
    }
  }

  render() {
    const {
      section,
      sectionItems,
    } = this.props;

    return (
      <div
        className="restaurant-page__menu-item"
        key={section.title}
        ref={this.sectionRef}
      >
        <h2
          className="restaurant-page__menu-item-title"
        >
          {section
            .title.toLowerCase()}
        </h2>
        <div className="restaurant-page__menu-container">
          {section.itemUuids.map((item) => {
            const {
              title,
              description,
              price,
              imageUrl,
              uuid,
            } = sectionItems[item];

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
    );
  }
}

RestaurantPageSection.propTypes = {
  sectionItems: PropTypes.shape({}).isRequired,
  section: PropTypes.shape({
    itemUuids: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string,
    uuid: PropTypes.string,
  }).isRequired,
  activeSection: PropTypes.string,
};

RestaurantPageSection.defaultProps = {
  activeSection: '',
};
