import React from 'react';
import Header from './Header';
import ContentPage from './ContentPage';
import Footer from './Footer';
import {ADDRESS, getData} from './source';
import './App.scss';

class App extends React.Component {
  state = {
    stores: [],
  }

  async componentDidMount() {
    const stores = await getData(ADDRESS);
    
    this.setState({stores: stores});
  }

  render() {
    const { stores } = this.state;
    console.log(stores)
    return (
      <div className="App">
        <Header />
        <ContentPage  stores={stores}/>
        <Footer />
      </div>
    )
  }
};

export default App;
