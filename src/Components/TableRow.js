import React, { Component } from 'react';

const TableRow = (props) => {

  let startindex = parseInt(props.start);
  let middleindex = parseInt(props.start) +1;
  let lastindex = parseInt(props.start) +2;

  let firstCellinRow = props.squares[startindex];
  let secondCellInRow = props.squares[middleindex];
  let lastCellInRow = props.squares[lastindex];

  return(
    <tr>
      <td onClick={props.changeValue} index={startindex}>{firstCellinRow}</td>
      <td onClick={props.changeValue} index={middleindex}>{secondCellInRow}</td>
      <td onClick={props.changeValue} index={lastindex}>{lastCellInRow}</td>
    </tr>
  )
}

export default TableRow;
