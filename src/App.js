import React, { Component } from 'react';
import Button from './components/Button/Button';
import CardList from './components/CardList/CardList';
import WinText from './components/WinText/WinText';
import { connect } from "react-redux";
import { finishGame, newGame } from "./actions";
import './App.css';

let basic_row = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      started: false,
      generated_row: [],
    }
  }
  handleClick = () => {
    let maxi = Math.floor(Math.random() * 1) + 4;
    for (let i = 0; i < maxi; i++) {
      basic_row.push(i);
    }
    basic_row = [...basic_row, ...basic_row];
    this.setState({
      generated_row: this.shakeRow(basic_row),
      started: true
    });
    this.props.newGame();
  }
  renderCardList = () => {
    if (this.state.started)
      return <CardList list={this.state.generated_row} />
  }
  shakeRow = (row) => {
    let new_row = [...row];

    return new_row.sort(() => {
      return Math.random() - 0.5;
    });
  }
  componentWillReceiveProps() {
    if (!this.props.state.finish && (this.props.state.cards_matched === this.state.generated_row.length / 2) && this.state.generated_row.length !== 0) {
      this.props.finishGame();
    }
  }
  componentDidUpdate() {
    if (this.state.started && this.props.state.finish) {
      this.setState({
        started: false
      })
    }
  }
  render() {
    let finsih_flag = this.props.state.finish;
    return (
      <div className="App">
        <Button text="Start the game!" class={(this.state.started) ? "is-hidden" : ""} handleClick={this.handleClick.bind(this)} />
        {!finsih_flag && this.renderCardList()}
        {finsih_flag && <WinText title={"You Win!"}/> }
      </div>
    );
  }
}
const mapStateToProps = state => ({
  state: state.cards,
});
const mapDispatchToProps = dispatch => ({
  finishGame: () => dispatch(finishGame()),
  newGame: () => dispatch(newGame()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
