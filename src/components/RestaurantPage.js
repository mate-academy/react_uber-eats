import React from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import classnames from 'classnames';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import { getRestaurant } from '../api/getDate';
import Header from './Header';
import Footer from './Footer';
import Loading from './Loading';
import MainSection from './MainSection';
import ModalWindow from './ModalWindow';
import { timingSafeEqual } from 'crypto';

class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);

    this.submenuMore=React.createRef();
  }

  state = {
    restaurant: [],
    menuRestaurant: [],
    menuСheckout:'',
    loading: false,
    selectedMenu: '',
    foodSection: '',
    showModal: false,
    selectedDish:'',
    isMoreSubmenu: false,
  }

  async componentDidMount() {
    try {
      const restaurant = await getRestaurant(this.props.match.params.uuid);
      const menu = restaurant.data.sections[0].subsectionUuids;
      const menuRestaurant = menu.map(item => restaurant.data.subsectionsMap[item]);

      this.setState({
        restaurant,
        selectedMenu: restaurant.data.sections[0].uuid,
        menuRestaurant,
        loading: true,
      })
    } catch (error) {
      this.setState({
        errors: 'Restaurant was not found',
      })
    };
  }

  handleMenu = (uuid) => {
    const { restaurant } = this.state;
    const menu = restaurant.data.sections.filter(section =>
      section.uuid === uuid)[0].subsectionUuids;
    const menuRestaurant = menu.map(item =>
      restaurant.data.subsectionsMap[item]);

    this.setState({
      selectedMenu: uuid,
      menuRestaurant,
    })
  }

  handleShow = (uuid) => {
    const { restaurant, selectedMenu } = this.state;

    this.setState({
      showModal: true,
      selectedDish: uuid,
      menuСheckout: restaurant.data.sectionEntitiesMap[selectedMenu][`${uuid}`],
    })
  }

  handleClose = () => {
    this.setState({
      showModal: false,
    })
  }

  handleMoreSubmenu = () => {
    const { isMoreSubmenu } = this.state;

    this.setState({
      isMoreSubmenu: !isMoreSubmenu,
    })

    document.addEventListener('click', this.handleClickOutsides, true);
    window.addEventListener('scroll', this.handleScroll, true);
  }

  handleScroll = (event) => {
    console.log($(window).scrollTop())

    if($(window).scrollTop() > 650) {
      this.setState({
        isMoreSubmenu: false,
      });

      document.removeEventListener('scroll', this.handleScroll, true);
    }
  }

  handleClickOutsides = (event) => {
    const { isMoreSubmenu } = this.state;
    const domNode = this.submenuMore.current;

    if ((!domNode.contains(event.target))) {
    this.setState({
      isMoreSubmenu: !isMoreSubmenu,
    });

    document.removeEventListener('click', this.handleClickOutsides, true);
  }
  }

  render() {
    const {
      loading,
      errors,
      restaurant,
      selectedMenu,
      menuRestaurant,
      showModal,
      menuСheckout,
      isMoreSubmenu } = this.state;

    return (
      <main>
        {!errors
            ? ((loading
              ? (
                <div className="restaurant-page">
                  <Header />
                  <section class="restaurant">
                    <div className="restaurant__image">
                      <img src={restaurant.data.heroImageUrls[5].url} />
                      <div className="restaurant__main-details">
                        <h1 className="restaurant__main-title">
                          {restaurant.data.title}
                        </h1>
                        <div className="catalog__item--categoria restaurant__categoria">
                          {restaurant.data.categories.map(categoria => (
                            <p className="catalog__item--cuisine">{categoria}</p>
                          ))}
                        </div>
                        <div className="restaurant__other-details">
                          <p className="catalog__item--delivery-time restaurant__delivery-time">
                            {restaurant.data.etaRange ? restaurant.data.etaRange.text : '10–30 min'}
                          </p>
                          <p className="catalog__item--delivery-time restaurant__delivery-time">
                            {restaurant.data.fareInfo ? restaurant.data.fareInfo.serviceFee : '4'}
                            <img
                              src="https://d1a3f4spazzrp4.cloudfront.net/static/images/Star_Yellow_Eats_3.png"
                              alt='service fee'
                            />
                            <span>({restaurant.data.fareInfo.serviceFeeCents}+)</span>
                          </p>
                        </div>
                        <p className="restaurant__item--adress">
                          {restaurant.data.location.address}
                        </p>
                      </div>
                    </div>

                    <MainSection />

                    <section className="restaurant__section">
                      <nav>
                        <ul className="restaurant__menu">
                          {restaurant.data.sections.map(section => (
                            <li
                              key={section.uuid}
                              className={classnames({
                                "active-menu": section.uuid === selectedMenu,
                              })}
                            >
                              <Link
                                onClick={() => this.handleMenu(section.uuid)}
                              >
                                <p className="restaurant__menu-title">{section.title}</p>
                                <p className="restaurant__menu-time-info">
                                  {section.subtitle}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </nav>

                      <hr className="restaurant__hr"></hr>

                      <div>
                        <ul className="restaurant__submenu">
                          {menuRestaurant.map((menuItem, index) => {
                            if (index < 6) {
                              return (
                                <li key={menuItem.uuid}>
                                  <Link
                                    to={menuItem.uuid}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                  >
                                    {menuItem.title}
                                  </Link>
                                </li>
                              )
                            }
                          }
                          )}
                          <a
                            onClick={this.handleMoreSubmenu}
                            className="restaurant__submenu--open-more"
                            ref={this.submenuMore}
                          >
                            More
                            <img
                              src='images/icons/detail.svg'
                              alt='detail'
                            />
                            {isMoreSubmenu?
                            (<div className="restaurant__submenu--more">
                              {menuRestaurant.map((menuItem, index) => {
                              if (index > 6) {
                                return (
                                  <li key={menuItem.uuid}>
                                    <Link
                                      to={menuItem.uuid}
                                      spy={true}
                                      smooth={true}
                                      offset={-70}
                                      duration={500}
                                    >
                                      {menuItem.title}
                                    </Link>
                                  </li>
                                )
                              }
                            }
                            )}
                            </div>
                            ) : ('')
                        }
                          </a>
                        </ul>
                      </div>

                      {menuRestaurant.map(menuItem => (
                        <section id={menuItem.uuid} className="restaurant__menu-catalog">
                          <h2 className="restaurant__menu-catalog--title">{menuItem.title}</h2>
                          <div className="restaurant__items-catalog">
                            {menuItem.itemUuids.map(uuid =>
                              <>
                              <a
                                onClick={() => this.handleShow(uuid)}
                                className="restaurant__item-catalog"
                              >
                                <div className="restaurant__item-catalog-info">
                                  <div className="restaurant__item-catalog--title">
                                    {restaurant.data.sectionEntitiesMap[selectedMenu][uuid].title}
                                  </div>
                                  <p className="restaurant__item-catalog--details">
                                    {(restaurant.data.sectionEntitiesMap[selectedMenu][uuid].description).substring(0, 40)}...
                              </p>
                                  <p className="restaurant__item-catalog--price">
                                    £{restaurant.data.sectionEntitiesMap[selectedMenu][uuid].price}
                                  </p>
                                </div>
                                <div className="restaurant__item-catalog--image">
                                  <img src={restaurant.data.sectionEntitiesMap[selectedMenu][uuid].imageUrl}
                                    alt={`${restaurant.data.sectionEntitiesMap[selectedMenu][uuid].title}`}
                                  />
                                </div>
                              </a>
                              </>
                            )}
                          </div>
                        </section>
                      ))}
                    </section>
                  </section>
                <ModalWindow
                  show={showModal}
                  handleClose={this.handleClose}
                  menuСheckout={menuСheckout}
                />
                  <Footer />
                </div>
              )
              : <Loading />
            )) : (
            <h1 className="error-title centr">{errors}</h1>
          )}
      </main>
    )
  }
}

export default RestaurantPage;
