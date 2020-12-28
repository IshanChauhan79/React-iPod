import React from 'react';
import classes from './BottomButton.module.css';


 
const BottomButton =(props)=>{
    return(
        <button className={classes.BottomButton} onClick={props.playPauseClicked}>
            <i className="fas fa-play"></i>/
            <i className="fas fa-pause"></i>
            
        </button>
    )
}

export default BottomButton;