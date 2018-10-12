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
            <li><a>New User</a></li>
            <li><a>User Login</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
