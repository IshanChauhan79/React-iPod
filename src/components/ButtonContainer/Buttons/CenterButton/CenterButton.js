import React from 'react';
import classes from './CenterButton.module.css';

 
const CenterButton =(props)=>{
    
    return(
        <button 
            className={classes.CenterButton}
            onClick={props.selectClicked}
        >
            Select
        </button>
    )
}

export default CenterButton;