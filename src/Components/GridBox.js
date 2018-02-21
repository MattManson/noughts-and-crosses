import React, { Component } from 'react';
import TableRow from "./TableRow";


const GridBox = (props) => {

  return(

    <table id="grid-table">
      <thead>
        <TableRow
          className="top"
          changeValue={props.changeValue}
          squares={props.squares}
          start="0"
          changePlayer={props.changePlayer}
          checkWinner={props.checkWinner}
          gameWon = {props.gameWon}
        />
        <TableRow
          className="middle"
          changeValue={props.changeValue}
          squares={props.squares}
          start="3"
          changePlayer={props.changePlayer}
          checkWinner={props.checkWinner}
          gameWon = {props.gameWon}
        />
        <TableRow
          className="bottom"
          changeValue={props.changeValue}
          squares={props.squares}
          start="6"
          changePlayer={props.changePlayer}
          checkWinner={props.checkWinner}
          gameWon = {props.gameWon}
        />
      </thead>
    </table>
  )
}

export default GridBox;
