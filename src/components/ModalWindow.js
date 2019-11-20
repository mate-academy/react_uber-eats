import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalWindow extends React.Component {
  state = {
    countСheckout: 0,
    checkeds: [],
    quantityOfGoods: 1,
    changingTheQuantityOfGoods: [],
    quantityOfAdditionalGoods: {
      thick: 1,
      thin: 1,
      chips: 1,
      gloves: 1,
    }
  }

  addAdditionalProduct = (price, numberCheckbox, addedBtn) => {
    const {
      countСheckout,
      checkeds,
      changingTheQuantityOfGoods } = this.state;

    if (!checkeds.includes(numberCheckbox)) {
      this.setState({
        countСheckout: countСheckout + price,
        checkeds: [...checkeds, numberCheckbox],
      })
    } else {
      this.setState({
        countСheckout: countСheckout - price,
        checkeds: checkeds.filter(check => check !== numberCheckbox),
      })
    }

    if (addedBtn !== undefined) {
      this.setState({
        changingTheQuantityOfGoods: [...changingTheQuantityOfGoods, addedBtn],
      })
    }
  }

  handlePlusProduct = () => {
    const { quantityOfGoods } = this.state;

    this.setState({
      quantityOfGoods: quantityOfGoods + 1,
    })
  }

  handleMinusProduct = () => {
    const { quantityOfGoods } = this.state;

    if (quantityOfGoods > 1) {
      this.setState({
        quantityOfGoods: quantityOfGoods - 1,
      })
    } else {
      this.setState({
        checkeds: [],
        countСheckout: 0,
        changingTheQuantityOfGoods: [],
      })

      this.props.handleClose();
    }
  }

  handleMinusAdditionalProduct = (nameProduct, numberChecked, price) => {
    const {
      quantityOfAdditionalGoods,
      changingTheQuantityOfGoods,
      countСheckout } = this.state;

    if(quantityOfAdditionalGoods[nameProduct] > 1) {
    switch (nameProduct) {
      case 'thick':
        this.setState({
          quantityOfAdditionalGoods: {
            ...quantityOfAdditionalGoods,
            thick: quantityOfAdditionalGoods.thick - 1,
          },
          countСheckout: countСheckout - price,
        })
        break;
      case 'thin':
        this.setState({
          quantityOfAdditionalGoods: {
            ...quantityOfAdditionalGoods,
            thin: quantityOfAdditionalGoods.thin - 1,
          },
          countСheckout: countСheckout - price,
        })
        break;
      case 'chips':
        this.setState({
          quantityOfAdditionalGoods: {
            ...quantityOfAdditionalGoods,
            chips: quantityOfAdditionalGoods.chips - 1,
          },
          countСheckout: countСheckout - price,
        })
        break;
      case 'gloves':
        this.setState({
          quantityOfAdditionalGoods: {
            ...quantityOfAdditionalGoods,
            gloves: quantityOfAdditionalGoods.gloves - 1,
          },
          countСheckout: countСheckout - price,
        })
        break;
      default:
        return quantityOfAdditionalGoods;
    }
  } else {
    this.setState({
      changingTheQuantityOfGoods: changingTheQuantityOfGoods.filter(product => product !== numberChecked),
    });

    this.addAdditionalProduct( price, numberChecked);
  }
  }

  handlePlusAdditionalProduct = (nameProduct, numberChecked, price) => {
    const { quantityOfAdditionalGoods, countСheckout } = this.state;

    switch (nameProduct) {
      case 'thick':
        this.setState({
          quantityOfAdditionalGoods: {
            ...quantityOfAdditionalGoods,
            thick: quantityOfAdditionalGoods.thick + 1,
          },
          countСheckout: countСheckout + price,
        })
        break;
      case 'thin':
        this.setState({
          quantityOfAdditionalGoods: {
            ...quantityOfAdditionalGoods,
            thin: quantityOfAdditionalGoods.thin + 1,
          },
          countСheckout: countСheckout + price,
        })
        break;
      case 'chips':
        this.setState({
          quantityOfAdditionalGoods: {
            ...quantityOfAdditionalGoods,
            chips: quantityOfAdditionalGoods.chips + 1,
          },
          countСheckout: countСheckout + price,
        })
        break;
      case 'gloves':
        this.setState({
          quantityOfAdditionalGoods: {
            ...quantityOfAdditionalGoods,
            gloves: quantityOfAdditionalGoods.gloves + 1,
          },
          countСheckout: countСheckout + price,
        })
        break;
      default:
        return quantityOfAdditionalGoods;
    }
  }

  handleClose = () => {
    this.setState({
      countСheckout: 0,
      checkeds: [],
      changingTheQuantityOfGoods: [],
    })

    this.props.handleClose();
  }

  render() {
    const {
      show,
      menuСheckout } = this.props;
    const {
      quantityOfGoods,
      changingTheQuantityOfGoods,
      quantityOfAdditionalGoods,
      checkeds } = this.state;
    const countСheckout = menuСheckout.price * quantityOfGoods;

    return (
      <>
        <Modal show={show} onHide={this.handleClose} animation={true}>
          <Modal.Header closeButton>
            <img
              src="https://d1ralsognjng37.cloudfront.net/9d2f1d68-fe9a-4015-985b-2446271a3195.jpeg"
            />
            <Modal.Title>{menuСheckout.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="modal__info">
                {menuСheckout.description}
              </div>
              <form>
                <section>
                  <div className="modal__section">
                    <h2 className="modal__title-section">Double Meat</h2>
                    <span>Choose up to 1</span>
                  </div>
                  <div className='modal__checkbox'>
                    <label for="meat">
                      <input
                        onChange={() => this.addAdditionalProduct(1.26, 1)}
                        type="checkbox"
                        id="meat"
                        name="meat"
                      />
                      <span className="modal__checkbox-fake"></span>
                      <div className="modal__checkbox-label-section">
                        <span className="modal__checkbox-label">meat</span>
                        <span>+£1.26</span>
                      </div>
                    </label>
                  </div>
                </section>
                <section>
                  <div className="modal__section">
                    <h2 className="modal__title-section">Cheese Cheddar</h2>
                    <span>Choose up to 1</span>
                  </div>
                  <div className='modal__checkbox'>
                    <label for="cheddar">
                      <input
                        onChange={() => this.addAdditionalProduct(0.68, 2)}
                        type="checkbox"
                        id="cheddar"
                        name="cheddar"
                      />
                      <span className="modal__checkbox-fake"></span>
                      <div className="modal__checkbox-label-section">
                        <span className="modal__checkbox-label">Cheddar</span>
                        <span>+£0.68</span>
                      </div>
                    </label>
                  </div>
                </section>
                <section>
                  <div className="modal__section">
                    <h2 className="modal__title-section">STARfries for BURGERS</h2>
                    <span>Choose up to 3</span>
                  </div>
                  <div className="modal__section--block-btn">
                    <div className="modal__section--btn">
                      <div className="modal__section--btn-block">
                        {changingTheQuantityOfGoods.includes('openThickBtn') ?
                          (
                            <div className="modal__section-btn---quantity-change">
                              <button
                                onClick={() => this.handleMinusAdditionalProduct('thick', 'openThickBtn', 1.16)}
                                type='button'
                                className="modal__btn--quantity-change"
                              >
                                <img
                                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b6d6372637b61ba1a743d8438e6f9fcf.svg"
                                  alt='-'
                                />
                              </button>
                              <div>{quantityOfAdditionalGoods.thick}</div>
                              <button
                                onClick={() => this.handlePlusAdditionalProduct('thick', 'openThickBtn', 1.16)}
                                type='button'
                                className="modal__btn--quantity-change"
                              >
                                <img
                                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b5240ccbd584c7a7003b3dd59af54c20.svg"
                                  alt='+'
                                />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => this.addAdditionalProduct(1.16, 'openThickBtn', 'openThickBtn')}
                              className='modal__btn-plus'
                              type='button'
                            >
                              <img src="images/icons/plus.svg" />
                            </button>
                          )
                        }
                        <span>Thick</span>
                      </div>
                      <span>+£1.16</span>
                    </div>
                    <div className="modal__section--btn">
                      <div className="modal__section--btn-block">
                        {changingTheQuantityOfGoods.includes('openThinBtn') ?
                          (
                            <div className="modal__section-btn---quantity-change">
                              <button
                                onClick={() => this.handleMinusAdditionalProduct('thin', 'openThinBtn', 1)}
                                type='button'
                                className="modal__btn--quantity-change"
                              >
                                <img
                                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b6d6372637b61ba1a743d8438e6f9fcf.svg"
                                  alt='-'
                                />
                              </button>
                              <div>{quantityOfAdditionalGoods.thin}</div>
                              <button
                                onClick={() => this.handlePlusAdditionalProduct('thin', 'openThinBtn', 1)}
                                type='button'
                                className="modal__btn--quantity-change"
                              >
                                <img
                                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b5240ccbd584c7a7003b3dd59af54c20.svg"
                                  alt='+'
                                />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => this.addAdditionalProduct(1, 'openThinBtn', 'openThinBtn')}
                              className='modal__btn-plus'
                              type='button'
                            >
                              <img src="images/icons/plus.svg" />
                            </button>)}
                        <span>Thin</span>
                      </div>
                      <span>+£1.00</span>
                    </div>
                    <div className="modal__section--btn">
                      <div className="modal__section--btn-block">
                        {changingTheQuantityOfGoods.includes('openChipsBtn') ?
                          (
                            <div className="modal__section-btn---quantity-change">
                              <button
                                onClick={() => this.handleMinusAdditionalProduct('chips', 'openChipsBtn', 0.87)}
                                type='button'
                                className="modal__btn--quantity-change"
                              >
                                <img
                                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b6d6372637b61ba1a743d8438e6f9fcf.svg"
                                  alt='-'
                                />
                              </button>
                              <div>{quantityOfAdditionalGoods.chips}</div>
                              <button
                                onClick={() => this.handlePlusAdditionalProduct('chips', 'openChipsBtn', 0.87)}
                                type='button'
                                className="modal__btn--quantity-change"
                              >
                                <img
                                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b5240ccbd584c7a7003b3dd59af54c20.svg"
                                  alt='+'
                                />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => this.addAdditionalProduct(0.87, 'openChipsBtn', 'openChipsBtn')}
                              className='modal__btn-plus'
                              type='button'
                            >
                              <img src="images/icons/plus.svg" />
                            </button>)}
                        <span>Potato chips</span>
                      </div>
                      <span>+£0.87</span>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="modal__section">
                    <h2 className="modal__title-section">SAUSES</h2>
                    <span>Choose up to 4</span>
                  </div>
                  <div className='modal__block-checkbox'>
                    <div className='modal__checkbox'>
                      <label for="mayonnaise">
                        <input
                          onChange={() => this.addAdditionalProduct(0.26, 6)}
                          type="checkbox"
                          id="mayonnaise"
                          name="mayonnaise"
                        />
                        <span className="modal__checkbox-fake"></span>
                        <div className="modal__checkbox-label-section">
                          <span className="modal__checkbox-label">Mayonnaise</span>
                          <span>+£0.26</span>
                        </div>
                      </label>
                    </div>
                    <div className='modal__checkbox'>
                      <label for="bbq">
                        <input
                          onChange={() => this.addAdditionalProduct(1.26, 7)}
                          type="checkbox"
                          id="bbq"
                          name="bbq"
                        />
                        <span className="modal__checkbox-fake"></span>
                        <div className="modal__checkbox-label-section">
                          <span className="modal__checkbox-label">Orginal American BBQ</span>
                          <span>+£1.58</span>
                        </div>
                      </label>
                    </div>
                    <div className='modal__checkbox'>
                      <label for="bl-cheese">
                        <input
                          onChange={() => this.addAdditionalProduct(1.26, 8)}
                          type="checkbox"
                          id="bl-cheese"
                          name="bl-cheese"
                        />
                        <span className="modal__checkbox-fake"></span>
                        <div className="modal__checkbox-label-section">
                          <span className="modal__checkbox-label">Blue Cheese</span>
                          <span>+£1.26</span>
                        </div>
                      </label>
                    </div>
                    <div className='modal__checkbox'>
                      <label for="sauce">
                        <input
                          onChange={() => this.addAdditionalProduct(0.39, 9)}
                          type="checkbox"
                          id="sauce"
                          name="sauce"
                        />
                        <span className="modal__checkbox-fake"></span>
                        <div className="modal__checkbox-label-section">
                          <span className="modal__checkbox-label">STARsauce</span>
                          <span>+£0.39</span>
                        </div>
                      </label>
                    </div>
                    <div className='modal__checkbox'>
                      <label for="ketchup">
                        <input
                          onChange={() => this.addAdditionalProduct(0.39, 10)}
                          type="checkbox"
                          id="ketchup"
                          name="ketchup"
                        />
                        <span className="modal__checkbox-fake"></span>
                        <div className="modal__checkbox-label-section">
                          <span className="modal__checkbox-label">Ketchup</span>
                          <span>+£0.39</span>
                        </div>
                      </label>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="modal__section">
                    <h2 className="modal__title-section">Gloves</h2>
                    <span>Choose up to 5</span>
                  </div>
                  <div className="modal__section--block-btn dr">
                    <div className="modal__section--btn">
                      <div className="modal__section--btn-block">
                        {changingTheQuantityOfGoods.includes('openGlovesBtn') ?
                          (
                            <div className="modal__section-btn---quantity-change">
                              <button
                                onClick={() => this.handleMinusAdditionalProduct('gloves', 'openGlovesBtn', 0.26)}
                                type='button'
                                className="modal__btn--quantity-change"
                              >
                                <img
                                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b6d6372637b61ba1a743d8438e6f9fcf.svg"
                                  alt='-'
                                />
                              </button>
                              <div>{quantityOfAdditionalGoods.gloves}</div>
                              <button
                                onClick={() => this.handlePlusAdditionalProduct('gloves', 'openGlovesBtn', 0.26)}
                                type='button'
                                className="modal__btn--quantity-change"
                              >
                                <img
                                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b5240ccbd584c7a7003b3dd59af54c20.svg"
                                  alt='+'
                                />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => this.addAdditionalProduct(0.26, 'openGlovesBtn', 'openGlovesBtn')}
                              className='modal__btn-plus'
                              type="button"
                            >
                              <img src="images/icons/plus.svg" />
                            </button>)}
                        <span>Gloves</span>
                      </div>
                      <span>+£0.26</span>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="modal__section">
                    <h2 className="modal__title-section">Drinks</h2>
                    <span>Choose up to 1</span>
                  </div>
                  <div className='modal__checkbox'>
                    <label for="pepsi">
                      <input
                        onChange={() => this.addAdditionalProduct(0.87, 12)}
                        type="checkbox"
                        id="pepsi"
                        name="pepsi"
                      />
                      <span className="modal__checkbox-fake"></span>
                      <div className="modal__checkbox-label-section">
                        <span className="modal__checkbox-label">Pepsi</span>
                        <span>+£0.87</span>
                      </div>
                    </label>
                  </div>
                </section>
                <section>
                  <div className="modal__section">
                    <h2 className="modal__title-section">Green salad</h2>
                    <span>Choose up to 1</span>
                  </div>
                  <div className='modal__checkbox'>
                    <label for="salad">
                      <input
                        onChange={() => this.addAdditionalProduct(2.22, 13)}
                        type="checkbox"
                        id="salad"
                        name="salad"
                      />
                      <span className="modal__checkbox-fake"></span>
                      <div className="modal__checkbox-label-section">
                        <span className="modal__checkbox-label">Green salad</span>
                        <span>+£2.22</span>
                      </div>
                    </label>
                  </div>
                </section>
                <section>
                  <div className="modal__section">
                    <h2 className="modal__title-section">Special instructions</h2>
                  </div>
                  <div>
                    <label for="instructions">
                      <input
                        className="modal__section--instructions"
                        type="text"
                        placeholder="Leave a note to kitchen"
                      />
                    </label>
                  </div>
                </section>
              </form>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="modal__form-submit">
              <Button variant="secondary" onClick={this.handleMinusProduct}>
                <img
                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b6d6372637b61ba1a743d8438e6f9fcf.svg"
                  alt='-'
                />
              </Button>
              <div>{quantityOfGoods}</div>
              <Button variant="secondary" onClick={this.handlePlusProduct}>
                <img
                  src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b5240ccbd584c7a7003b3dd59af54c20.svg"
                  alt='+'
                />
              </Button>
            </div>
            <Button
              type="submit"
              variant="primary"
              onClick={this.handleClose}
            >
              Add to order
              <span className="modal__form-submit--count">
                £{countСheckout + this.state.countСheckout}
              </span>
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default ModalWindow;
