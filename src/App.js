import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';

class App extends Component {
  handleClick(event) {
    console.log(event)
  }
  render() {
    return (
      <div className="App">
        <Button text="Start the game!" handleClick={this.handleClick.bind(this)} />
      </div>
    );
  }
}

export default App;
