import React from 'react';
import classes from './RightButton.module.css';


 
const RightButton =(props)=>{
    return(
        <button className={classes.RightButton}>
            <i className="fas fa-forward"></i>
        </button>
    )
}

export default RightButton;