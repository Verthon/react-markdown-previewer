import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <textarea name="" id="" cols="30" rows="10" onChange={props.changed}></textarea>
  );
}

export default Input;