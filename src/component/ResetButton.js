import React from 'react';
import './ResetButton.css';

export const ResetButton = (props) => (
    <button className="reset-btn" type="reset" 
    onClick={props.handleBtnClick}>Play again!</button>
)