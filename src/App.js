import './App.css';
import React, { Component } from 'react';
import { PlayerGrid } from './component/PlayerGrid.js';
import { ResetButton } from './component/ResetButton.js';

function returnArr() {
  const arr = Array(8 - 0 + 1).fill().map((_, idx) => {
    let index = 0 + idx;
    return {
      gridId: index,
      value: '',
      marked: false,
      color: 'peachpuff' //cadetblue, lightCoral, lightSalmon
    }
  });
  return arr;
}


class App extends Component {
  constructor() {
    super();

    this.state = {
      squares: returnArr(),
      currentSelectionMarked: '',
      msg: ''
    }
  }

  handleBtnClick = () => {
    this.setState({
      squares: returnArr(),
      currentSelectionMarked: '',
      msg: '',
      playerWon: false
    });
  }

  handleClick = (event) => {
    const newVal = event.target.value.toUpperCase();
    const boxSel = Number(event.target.id);
    const prevVal = this.state.currentSelectionMarked;
    let msg = '';
    const squares = this.state.squares;
    const allowedValues = ['X', 'O'];
    this.setState({ msg: '' });
    let playerWon = false;
    //if values are not valid
    if (!allowedValues.includes(newVal)) {
      msg = "Only allowed values are either 'X' or 'O'. Please mark with your appropriate symbol.";
      this.setState({ msg: msg });
    }
    else if (this.state.playerWon) {
      msg = "Game has finished! Please click on 'Play again' button to start the game again.";
      this.setState({ msg: msg });
    }
    //if valid values are entered
    else {
      if (newVal === 'X' && prevVal === 'X') {
        msg = "Player 'O' mark with symbol 'O'";
      }
      else if (newVal === 'O' && prevVal === 'O') {
        msg = "Player 'X' mark with symbol 'X'";
      }
      else {
        if (squares[boxSel].marked) {
          this.setState({ msg: 'This box has already been selected' });
        }
        else {
          squares[boxSel].value = newVal;
          squares[boxSel].marked = true;
          squares[boxSel].color = newVal === 'X' ? 'cadetblue' : 'lightCoral';
        }

        squares.map((square, idx) => {
          if (
            ((idx === 0 || idx === 3 || idx === 6) && squares[idx].value !== '' && squares[idx].value === squares[idx + 1].value && squares[idx].value === squares[idx + 2].value) ||
            ((idx === 0 || idx === 1 || idx === 2) && squares[idx].value !== '' && squares[idx].value === squares[idx + 3].value && squares[idx].value === squares[idx + 6].value) ||
            ((idx === 0) && squares[idx].value !== '' && squares[idx].value === squares[idx + 4].value && squares[idx].value === squares[idx + 8].value) ||
            ((idx === 2) && squares[idx].value !== '' && squares[idx].value === squares[idx + 2].value && squares[idx].value === squares[idx + 4].value)
          ) {
            msg = `Congratulations player '${square.value}' you have won!!`;
            playerWon = true;
          }
          return square;
        });
      }
      this.setState({
        squares: squares,
        currentSelectionMarked: newVal,
        msg: msg,
        playerWon: playerWon
      });
    }
  }

  render() {
    return (
      <div className="App">
        {(this.state.playerWon) &&
          (<div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
          </div>)
        }
        <h1 className="title">Tic tac toe</h1>
        <PlayerGrid squares={this.state.squares} handleClick={this.handleClick}
        ></PlayerGrid>
        <h3 style={{ color: 'firebrick', marginBottom: '3em' }}>{this.state.msg}</h3>
        <ResetButton handleBtnClick={this.handleBtnClick}></ResetButton>
      </div>
    )
  }
}

export default App;
