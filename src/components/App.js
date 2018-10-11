import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>StockCar</h1>
        <h4>The Exchange for the Modern Enthusiast</h4>
        <div className="main_menu">
          <ul className="main_nav">
            <li>New User</li>
            <li>User Login</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
