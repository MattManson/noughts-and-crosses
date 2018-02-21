import React, { Component } from 'react';
import GridBox from '../Components/GridBox';
import GameStatus from '../Components/GameStatus'

class Game extends Component{

  constructor(props){
    super(props);
    this.state = {
      squares: ["","","","","","","","",""],
      currentPlayer: "X",
      turns: 0,
      winner: ""
    };
    this.changeSquareValue = this.changeSquareValue.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
    this.checkWinner = this.checkWinner.bind(this);
    this.gameWon = this.gameWon.bind(this);
    this.reset = this.reset.bind(this);
  }

  changeSquareValue(inputIndex){
    if(this.state.winner === ""){
      const newGrid = this.state.squares.map((item, index) => {
        if(index === inputIndex){
          return( item = this.state.currentPlayer)
        }else{
          return(item = item)
        }
      })
      this.setState({
        squares: newGrid,
        turns: this.state.turns + 1
      }, this.checkWinner)
    }
  }

  changePlayer(){
    if(this.state.currentPlayer === "X"){
      this.setState({
        currentPlayer: "O"
      })
    } else{
      this.setState({
        currentPlayer: "X"
      })
    }
  }

  checkWinner(){
    if(
      (this.state.squares[0] !=="") && (this.state.squares[0] === this.state.squares[1]) && (this.state.squares[0] === this.state.squares[2]) ||
      (this.state.squares[3] !=="") && (this.state.squares[3] === this.state.squares[4]) && (this.state.squares[3] === this.state.squares[5]) ||
      (this.state.squares[6] !=="") && (this.state.squares[6] === this.state.squares[7]) && (this.state.squares[6] === this.state.squares[8]) ||
      (this.state.squares[0] !=="") && (this.state.squares[0] === this.state.squares[3]) && (this.state.squares[0] === this.state.squares[6]) ||
      (this.state.squares[1] !=="") && (this.state.squares[1] === this.state.squares[4]) && (this.state.squares[1] === this.state.squares[7]) ||
      (this.state.squares[2] !=="") && (this.state.squares[2] === this.state.squares[5]) && (this.state.squares[2] === this.state.squares[8]) ||
      (this.state.squares[0] !=="") && (this.state.squares[0] === this.state.squares[4]) && (this.state.squares[0] === this.state.squares[8]) ||
      (this.state.squares[2] !=="") && (this.state.squares[2] === this.state.squares[4]) && (this.state.squares[2] === this.state.squares[6])
    ){
      this.gameWon()
    }
    else{this.changePlayer()}
  }

  reset(){
    this.setState({
      squares: ["","","","","","","","",""],
      currentPlayer: "X",
      turns: 0,
      winner: ""
    })
  }

  gameWon(){
    this.setState({
      winner: this.state.currentPlayer
    })

  }

  render(){
    console.log(this.state.turns);
    return(
      <div>
        <h1>Noughts And Crosses</h1>
        <GridBox
          changeValue={this.changeSquareValue}
          squares={this.state.squares}
        />
        <GameStatus
          winner={this.state.winner}
          currentPlayer={this.state.currentPlayer}
          turns={this.state.turns}
        />
        <button id="reset-button" onClick={this.reset}>RESET THE GAME</button>
      </div>
    )
  }
}

export default Game;
