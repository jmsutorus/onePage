import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="grid-container">
        <div class="header">
          <h2>Header</h2>
        </div>
        <div class="left">Column</div>
        <div class="middle">Column</div>
        <div class="right">Column</div>
        <div class="footer">
          <p>Footer</p>
        </div>
      </div>
    );
  }
}

export default App;
