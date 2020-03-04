import React from 'react';
import { load } from "redux-localstorage-simple";
import { ConnectedRouter } from 'connected-react-router'
import  configureStore, {history} from './store/index';
import './styles/index.scss';
import { HashRouter, Switch } from 'react-router-dom';
import './App.scss';
import { Provider } from 'react-redux';
import { Header } from './components/Header/index';
import Footer from './components/Footer/Footer';
import MainPage from './components/MainPage/MainPage';

export const store = configureStore(load())

const App = () =>{

  return(
  <Provider store={store}>
  <ConnectedRouter history={history}>
    <> {
    <HashRouter>
    <Switch>
      <Provider store={store}>
        <Header />
        <MainPage />
        <Footer />
      </Provider>
    </Switch>
    </HashRouter>
      }
    </>
  </ConnectedRouter>
  </Provider>
  );
}
export default App;
