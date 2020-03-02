import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleModal, setUUIDModal } from '../../store/actions';

const DishCard = ({ uuid, title, dishes, toggle, setUuid }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const handleOpen = (id) => {
    toggle(true);
    setUuid(id);
  };

  return (
    <>
      <section
        key={`${uuid}`}
        className="menu__section"
      >
        <h2
          id={`${uuid}`}
          className="menu__subheading"
        >
          {title}
        </h2>
        <section className="menu__items">
          {dishes.map(dish => (
            <div
              onClick={() => handleOpen(dish.uuid)}
              onKeyPress={() => handleOpen(dish.uuid)}
              role="button"
              tabIndex="0"
              className="menu__dish card"
              key={dish.uuid}
            >
              <div className="card__info">
                {width > 400 ? (
                  <>
                    <h3 className="card__title">{dish.title}</h3>
                    <p className="card__description">
                      {
                        // eslint-disable-next-line no-nested-ternary
                        dish.description !== null
                          ? (dish.title.length < 30 || width > 900
                            ? dish.description.slice(0, 50)
                            : dish.description.slice(0, 20)
                          ) : ''
                      }
                    </p>
                  </>
                ) : (
                  <>

                    {dish.title.length <= 30
                      ? (
                        <h3 className="card__title">
                          {dish.title}
                        </h3>
                      ) : (
                        <h3 className="card__title">
                          {dish.title.slice(0, 25)}
                        ...
                        </h3>
                      )}

                    <p className="card__description">
                      {
                        // eslint-disable-next-line no-nested-ternary
                        dish.description !== null
                          ? (dish.title.length < 15
                            ? dish.description.slice(0, 50)
                            : dish.description.slice(0, 20)
                          ) : ''
                      }
                    ...
                    </p>
                  </>
                )
                }
                <p className="card__price">
                £
                  {dish.price / 100}
                </p>
              </div>
              <div className="card__img">
                <img
                  className="card__image"
                  src={dish.imageUrl !== null && dish.imageUrl !== ''
                    ? `${dish.imageUrl}`
                  // eslint-disable-next-line max-len
                    : `https://thecustompackagingboxes.com/wp-content/uploads/2014/09/Chinese_food_boxes_3-compressed.jpg`}
                  alt={`${dish.title}`}
                />
              </div>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

const mapState2Props = state => ({
  togglerModal: state.togglerModal,
});

const mapDispatch2Props = ({
  toggle: toggleModal,
  setUuid: setUUIDModal,
});

DishCard.propTypes = {
  uuid: PropTypes.string,
  title: PropTypes.string,
  dishes: PropTypes.arrayOf(PropTypes.object),
  toggle: PropTypes.func,
  setUuid: PropTypes.func,
};

DishCard.defaultProps = {
  uuid: '',
  title: '',
  dishes: [],
  toggle: '',
  setUuid: '',
};

export default connect(mapState2Props, mapDispatch2Props)(DishCard);
