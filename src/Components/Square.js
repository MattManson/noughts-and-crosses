import React, { Component } from 'react';

const Square = (props) =>{

  const myIndex = props.index

  function changeMe(e){
    if(props.array[e.target.value] === "")
    props.changeValue(myIndex);
  }

  const theAnswer = props.array[myIndex];

  return(
    <td>
      <button value={myIndex} onClick={changeMe}>{theAnswer}</button>
    </td>
  )


}
export default Square;
