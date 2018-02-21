import React, { Component } from 'react';

const Square = (props) =>{

  const thing = props.index
  console.log(thing);

  function changeMe(){
    console.log("i've been clicked", thing);
    props.changeValue(thing);
  }

  const theAnswer = props.array[thing];

  return(
    <td>
      <button onClick={changeMe}>{theAnswer}</button>
    </td>
  )


}
export default Square;
