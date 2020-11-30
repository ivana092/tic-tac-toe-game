import React from 'react';
import './PlayerGrid.css';

export const Square = (props) => (
    <input type="text" size="1"
        className="input-field"
        onChange={props.handleClick} id={props.square.gridId}
        value={props.square.value}
        autoComplete="off"
        style={{backgroundColor:props.square.color}}
    ></input>
);