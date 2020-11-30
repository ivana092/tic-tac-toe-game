import React from 'react';
import './PlayerGrid.css';
import { Square } from './Square.js';
export const PlayerGrid = (props) => (
    <div className="player-grid">
        {
            props.squares.map(square => (
                <Square key={square.gridId} square={square} handleClick={props.handleClick}>
                </Square>
            ))
        }
        {/*<input key={square.gridId} type="text" size="1" 
                className="input-field"
                onChange={props.handleClick} id={square.gridId}
        value={square.value}
    ></input>*/}       		  
    </div>
);