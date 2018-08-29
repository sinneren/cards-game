import React, { Component } from 'react';
import Button from './components/Button/Button';
import CardList from './components/CardList/CardList';
import WinText from './components/WinText/WinText';
import { connect } from "react-redux";
import { newGame, setList } from "./actions";
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      started: false,
    }
  }
  handleClick = () => {
    let basic_row = [];
    let maxi = Math.floor(Math.random() * (8 - 4 + 1) + 4);;
    for (let i = 0; i < maxi; i++) {
      basic_row.push({
        id: i,
        open: false
      });
    }
    basic_row = [...basic_row, ...basic_row];
    this.props.newGame();
    this.setState({
      started: true
    });
    this.props.setList(this.shakeRow(basic_row));
  }
  renderCardList = () => {
    if (this.state.started)
      return <CardList list={this.props.state.list} />
  }
  shakeRow = (row) => {
    let new_row = [...row];

    return new_row.sort(() => {
      return Math.random() - 0.5;
    });
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
  newGame: () => dispatch(newGame()),
  setList: (list) => dispatch(setList(list)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
