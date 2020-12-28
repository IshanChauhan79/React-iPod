import React from 'react';
import classes from './ButtonContainer.module.css';
import Buttons from './Buttons/Buttons.js'
 
//components for displaying all the  buttons 
const ButtonContainer =(props)=>{
    return(
        <div className={classes.ButtonContainer}>
            <Buttons 
                menuClicked={props.menuClicked}
                selectClicked={props.selectButtonClicked}  
                
                leftButtonClicked={props.leftButtonClicked}
                rightButtonClicked={props.rightButtonClicked}
                playPauseClicked={props.playPauseClicked}
            />
        </div>
    )
}

export default ButtonContainer;