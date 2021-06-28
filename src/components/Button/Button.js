import React from 'react';
import './Button.css';

const STYLES = [
    "btn--primary--solid",
    "btn--warning--solid",
    "btn--danger--solid",
    "btn--success-solid",
    "btn--primary--outline",
    "btn--warning--outline",
    "btn--danger--outline",
    "btn--success-outline",
    "btn--white--outline",
    "btn--filter--outline"
];

const SIZES = ["btn--medium","btn--large","btn--filter"];


const Button=(props)=> {
    const {name,onClick,buttonStyle,buttonSize}=props
    const checkButtonStyle = STYLES.includes(buttonStyle)? buttonStyle:STYLES[0]; 

    const checkButtonSize = SIZES.includes(buttonSize)? buttonSize:SIZES[0];
    return (
        <div>
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={()=>onClick()}>{name}</button>
        </div>
    )
}

export default Button;