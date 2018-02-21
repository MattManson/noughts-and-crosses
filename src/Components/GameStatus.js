import React, { Component } from 'react';


const GameStatus = (props) =>{

  // if winner is an empty string
  function outputLine(){
    if(props.winner === "" && props.turns === 9){
      return`Its the Cat's Game`
    }
    else if(props.winner === ""){
      return `It is Player ${props.currentPlayer}'s go.`
    } else {
      return `${props.winner} Wins!!!`
    }
  }
  // current player is whoever
  // else winner is not an empty string
  // display winner is whoever

  const theResult = outputLine();

  return(

    <h2>{theResult}</h2>

  )

}
export default GameStatus;
