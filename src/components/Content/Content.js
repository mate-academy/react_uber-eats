/*eslint-disable*/
import React from 'react';
import './Content.scss';
import { getData } from "../getData";

class Content extends React.Component {
  state = {
    city: '',
    curency: '',
    stores: [],
  };
  async componentDidMount() {
    const { data } = await getData("./api/location/a.json");
    const { currencyCode, citySlug, storesMap } = data;
    console.log(data);
    this.setState({
      city: citySlug,
      curency: currencyCode,
      stores: Object.entries(storesMap).map((e) => ( e[1] ))
    });
  }
  render() {
    console.log(this.state.stores);
    const { stores } = this.state;
    return (
        <div className="Main">
          {stores.slice(0, 12).map(item => (
            <div className="Main__restaurant">
              <img className="Main__restaurant-img" src={item.heroImageUrl} alt=""/>
              <h3 className="Main__restaurant-name">{item.title}</h3>
              <div className="Main__restaurant-list">
                {item.categories.map(item =>
                  <p>{item}</p>
                )}
              </div>
            </div>
          ))}
        </div>
    )}
}

export default Content;
