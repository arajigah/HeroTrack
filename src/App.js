import React, { Component } from 'react';
import Navbar from './Navbar.jsx';
import Tron from './Tron.jsx';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
		  <Navbar />
		  <Tron />
      </div>
    );
  }
}

export default App;
