/*eslint-disable*/
import React from 'react';
import './Content.scss';
import { getData } from "../getData";
import { Store, loadStores } from "../Store";

class Content extends React.Component {
  state = {
    city: Store.getState().city,
    curency: Store.getState().currency,
    stores: Store.getState().stores,
  };
  async componentDidMount() {
    const { data } = await getData("./api/location/a.json");
    Store.dispatch(loadStores(data));
    this.forceUpdate();
    Store.subscribe(() => {
      this.forceUpdate();
    })
  }
  
  render() {
    return (
        <div className="Main">
          {Store.getState().stores.slice(0, 12).map(item => (
            <a href="##">
              <div key={item.slug} className="Main__restaurant">
                <img className="Main__restaurant-img" src={item.heroImageUrl} alt=""/>
                <h3 className="Main__restaurant-name">{item.title}</h3>
                <div className="Main__restaurant-list">
                  {item.categories.map(item =>
                    <p key={item}>{item}</p>
                  )}
                </div>
              </div>
            </a>
          ))}
        </div>
    )}
}

export default Content;
