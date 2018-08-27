import React, { Component } from 'react';
import './App.css';
import Button from './components/Button/Button';
import CardList from './components/CardList/CardList';

let basic_row = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      current_ids: [],
      started: false,
      generated_row: []
    }
  }
  handleClick = () => {
    let maxi = Math.floor(Math.random() * 2) + 4;
    for (let i = 0; i < maxi; i++) {
      basic_row.push(i);
    }
    basic_row = [...basic_row, ...basic_row];
    this.setState({
      generated_row: this.shakeRow(basic_row),
      started: true
    });
  }
  renderCardList = () => {
    if (this.state.started)
      return <CardList list={this.shakeRow(basic_row)} />
  }
  shakeRow = (row) => {
    let new_row = [...row];

    return new_row.sort(() => {
      return Math.random() - 0.5;
    });
  }
  render() {
    return (
      <div className="App">
        <Button text="Start the game!" class={(this.state.started) ? "is-hidden" : ""} handleClick={this.handleClick.bind(this)} />
        {this.renderCardList()}
      </div>
    );
  }
}

export default App;
