import React, { Component } from 'react';
import GridBox from '../Components/GridBox';
// import GameStatus from '../Components/GameStatus'

class Game extends Component{

  constructor(props){
    super(props);
    this.state = {
      squares: ["X","X","X","X","X","X","X","X","X"],
      currentPlayer: "X",
      turns: 0,
      winner: ""
    };
    this.changeSquareValue = this.changeSquareValue.bind(this);
  }

  changeSquareValue(inputIndex){
    const newGrid = this.state.squares.map((item, index) => {
      if(index === inputIndex){
        return(
          item = "O"
        )
      }else{
        return(
          item = item
        )
      }
    })

    this.setState({
      squares: newGrid
    })
  }

    render(){
      return(
        <div>
          <h1>Noughts And Crosses</h1>
          <GridBox
            changeValue={this.changeSquareValue}
            squares={this.state.squares}
            currentPlayer={this.state.currentPlayer}
          />
        </div>
      )
    }
  }

  export default Game;
