import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import './components/MyNavBar';
import MyNavBar from "./components/MyNavBar";
import HomeBanner from "./components/HomeBanner";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavBar/>
          <HomeBanner/>
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
