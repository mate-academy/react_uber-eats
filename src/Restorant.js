import React from 'react';
// import PropTypes from 'prop-types';
import RestorantHeader from './RestorantHeader';
import './Restorant__main.scss';

class Restorant extends React.Component {
  state = {

  }

  render() {
    // const { stores } = this.props;

    return (
      <div className="restorant">
        <RestorantHeader />
        <div className="restorant__container">
          {/* {stores.map(store => (
            // <img src="" />
          ))} */}

        </div>

      </div>
    );
  }
}

// Restorant.propTypes = {
//   stores: PropTypes.shape().isRequired,
// };

export default Restorant;
