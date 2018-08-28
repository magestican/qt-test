import React, { Component } from 'react';
import logo from '../resources/logo.png';
import '../styles/App.css';
import BookGallery from '../components/book-gallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Qantas Test</h1>
        </header>
        <p className="App-intro">
          <BookGallery/>
        </p>
      </div>
    );
  }
}

export default App;
