import React, { Component } from 'react';
import Square from './Square'

const TableRow = (props) => {

  let startindex = parseInt(props.start);
  let middleindex = parseInt(props.start) +1;
  let lastindex = parseInt(props.start) +2;

  let firstCellinRow = props.squares[startindex];
  let secondCellInRow = props.squares[middleindex];
  let lastCellInRow = props.squares[lastindex];

  return(
    <tr>
      <Square
        changeValue={props.changeValue}
        index={startindex}
        array={props.squares}
        changePlayer={props.changePlayer}
        checkWinner={props.checkWinner}
        gameWon = {props.gameWon}
      />
      <Square
        changeValue={props.changeValue}
        index={middleindex}
        array={props.squares}
        changePlayer={props.changePlayer}
        checkWinner={props.checkWinner}
        gameWon = {props.gameWon}
      />
      <Square
        changeValue={props.changeValue}
        index={lastindex}
        array={props.squares}
        changePlayer={props.changePlayer}
        checkWinner={props.checkWinner}
        gameWon = {props.gameWon}
      />
    </tr>
  )
}

export default TableRow;
