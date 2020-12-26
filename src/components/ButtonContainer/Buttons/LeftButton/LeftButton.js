import React from 'react';
import classes from './LeftButton.module.css';


 
const LeftButton =(props)=>{
    return(
        <button className={classes.LeftButton} onClick={props.leftButtonClicked}>
            <i className="fas fa-backward"></i>
        </button>
    )
}

export default LeftButton;