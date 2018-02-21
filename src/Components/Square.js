import React, { Component } from 'react';

const Square = (props) =>{

  const myIndex = props.index

  function changeMe(){
    props.changeValue(myIndex);
  }

  const theAnswer = props.array[myIndex];

  return(
    <td>
      <button onClick={changeMe}>{theAnswer}</button>
    </td>
  )


}
export default Square;
