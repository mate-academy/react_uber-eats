import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ScrollUpButton from 'react-scroll-up-button';
import { store } from './store';
import {
  RestaurantsListPage,
} from './components/RestaurantsListPage/index';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

export const App = () => (
  <Provider store={store}>
    <Header />
    <main className="page">
      <div className="content">
        <RestaurantsListPage />
      </div>
    </main>
    <Footer />
    <ScrollUpButton
      StopPosition={0}
      ShowAtPosition={150}
      EasingType="easeOutCubic"
      AnimationDuration={500}
      ContainerClassName="ScrollUpButton__Container"
      TransitionClassName="ScrollUpButton__Toggled"
      style={{
        width: '36px',
        height: '36px',
        backgroundColor: '#59BD5A',
        outline: 'none',
        borderRadius: '18px',
        boxShadow: '0 2px 4px 0 #9b9b9b',
      }}
    />
  </Provider>
);

export default App;
