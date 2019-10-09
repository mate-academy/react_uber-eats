/* eslint-disable import/prefer-default-export */
import React, { Component } from 'react';

export class RestaurantListPage extends Component {
  componentDidMount() {
    const { loadRestaurants } = this.props;

    loadRestaurants();
  }

  render() {
    const { restaurantsData } = this.props;

    return (
      <div>
        <pre>
          {JSON.stringify(restaurantsData, null, 4)}
        </pre>
      </div>
    );
  }
}
