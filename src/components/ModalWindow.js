import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class ModalWindow extends React.Component {

  render() {
    const { show, handleClose } = this.props;

    return (
      <>
        <Modal show={show} onHide={handleClose} animation={true}>
          <Modal.Header closeButton>
            <img
              src="https://d1ralsognjng37.cloudfront.net/9d2f1d68-fe9a-4015-985b-2446271a3195.jpeg"
            />
            <Modal.Title>Голий FISH Бургер</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="modal__info">
                Соковите філе білої риби в Темпура, листя салату та фірмовий соус.
                Смачнющий Бургер для тих, полюбляє страви з рибою. Смакує разом з картоплею STARfries та салатом коул-слоу.
                Вага: 250 гр
            </div>
              <form>
              <section>
                <div className="modal__section">
                  <h2 className="modal__title-section">Double Meat</h2>
                  <span>Choose up to 1</span>
                </div>
                <div className='modal__checkbox'>
                  <label for="meat">
                    <input type="checkbox" id="meat" name="meat" />
                    <span className="modal__checkbox-fake"></span>
                    <span className="modal__checkbox-label">meat</span>
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
                    <input type="checkbox" id="cheddar" name="cheddar" />
                    <span className="modal__checkbox-fake"></span>
                    <span className="modal__checkbox-label">Cheddar</span>
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
                    <button className='modal__btn-plus'>
                      <img src="images/icons/plus.svg" />
                    </button>
                    <span>Thick</span>
                  </div>
                  <div className="modal__section--btn">
                    <button className='modal__btn-plus'>
                      <img src="images/icons/plus.svg" />
                    </button>
                    <span>Thin</span>
                  </div>
                  <div className="modal__section--btn">
                    <button className='modal__btn-plus'>
                      <img src="images/icons/plus.svg" />
                    </button>
                    <span>Potato chips</span>
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
                      <input type="checkbox" id="mayonnaise" name="mayonnaise" />
                      <span className="modal__checkbox-fake"></span>
                      <span className="modal__checkbox-label">Mayonnaise</span>
                    </label>
                  </div>
                  <div className='modal__checkbox'>
                    <label for="bbq">
                      <input type="checkbox" id="bbq" name="bbq" />
                      <span className="modal__checkbox-fake"></span>
                      <span className="modal__checkbox-label">Orginal American BBQ</span>
                    </label>
                  </div>
                  <div className='modal__checkbox'>
                    <label for="bl-cheese">
                      <input type="checkbox" id="bl-cheese" name="bl-cheese" />
                      <span className="modal__checkbox-fake"></span>
                      <span className="modal__checkbox-label">Blue Cheese</span>
                    </label>
                  </div>
                  <div className='modal__checkbox'>
                    <label for="sauce">
                      <input type="checkbox" id="sauce" name="sauce" />
                      <span className="modal__checkbox-fake"></span>
                      <span className="modal__checkbox-label">STARsauce</span>
                    </label>
                  </div>
                  <div className='modal__checkbox'>
                    <label for="ketchup">
                      <input type="checkbox" id="ketchup" name="ketchup" />
                      <span className="modal__checkbox-fake"></span>
                      <span className="modal__checkbox-label">Ketchup</span>
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
                    <button className='modal__btn-plus'>
                      <img src="images/icons/plus.svg" />
                    </button>
                    <span>Gloves</span>
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
                    <input type="checkbox" id="pepsi" name="pepsi" />
                    <span className="modal__checkbox-fake"></span>
                    <span className="modal__checkbox-label">Pepsi</span>
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
                    <input type="checkbox" id="salad" name="salad" />
                    <span className="modal__checkbox-fake"></span>
                    <span className="modal__checkbox-label">Green salad</span>
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
              <Button variant="secondary" onClick={handleClose}>
                <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b6d6372637b61ba1a743d8438e6f9fcf.svg" />
              </Button>
              <div>1</div>
              <Button variant="secondary">
                <img src="https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/b5240ccbd584c7a7003b3dd59af54c20.svg" />
              </Button>
            </div>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Add 1 to order
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    )
  }
}

export default ModalWindow;
