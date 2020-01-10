import React from 'react';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import API_DATA from './api/API_DATA'

class App extends React.Component {
  state = {
    stores: [],
  }

  async componentDidMount() {
    const stores = await API_DATA();

    this.setState({ stores })
  }

  render() {
    return (
      <div>
        <Header />
        <Main stores={this.state.stores}/>
        <Footer/>
      </div>
    )
  }
}

export default App;
