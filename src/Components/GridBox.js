import React, { Component } from 'react';

const GridBox = (props) => {

  return(

    <table id="grid-table">
      <thead>
        <tr>{props.squares[0]} {props.squares[1]} {props.squares[2]}</tr>
        <tr>{props.squares[3]} {props.squares[4]} {props.squares[5]}</tr>
        <tr>{props.squares[6]} {props.squares[7]} {props.squares[8]}</tr>
      </thead>
    </table>
  )
}

export default GridBox;
