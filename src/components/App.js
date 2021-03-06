import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import bannerImg from '../images/pano01.png';
import Banner from './Banner';
import Cards from './Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Wide World Travel Inc"/>
        <img className="App-banner" src={bannerImg} />
        <Cards />
        <Footer />
      </div>
    );
  }
}

export default App;
