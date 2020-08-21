import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './no-such-page.scss';

const NoSuchPage = ({ info }) => (
  <div className="no-such-page">
    <p className="no-such-page__p">
      {info || (
      <>
Oh...
        <br />
Seems that you reached the end of the Internet
      </>
      )}
    </p>
    <Link className="no-such-page__button" to="/">To main page</Link>
  </div>
);

NoSuchPage.propTypes = {
  info: PropTypes.bool.isRequired,
};

export default NoSuchPage;
