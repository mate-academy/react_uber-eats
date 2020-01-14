import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import * as store from './components/store/store';
import MainSection from './MainSection';

const App = ({ getAllDataFromUrl }) => {
  useEffect(() => {
    getAllDataFromUrl();
  }, []);

  return (
    <HashRouter>
      <MainSection />
    </HashRouter>
  );
};

const getDataFromStore = state => ({

});

const setDataToStore = {
  getAllDataFromUrl: store.getAllDataFromUrl,
};

App.propTypes = {
  getAllDataFromUrl: PropTypes.func.isRequired,
};

export default connect(getDataFromStore, setDataToStore)(App);
