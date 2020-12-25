import React from 'react';
import classes from './ButtonContainer.module.css';
import Buttons from './Buttons/Buttons.js'
 
const ButtonContainer =(props)=>{
    return(
        <div className={classes.ButtonContainer}>
            <Buttons 
                menuClicked={props.menuClicked}
                selectClicked={props.selectButtonClicked}    
            />
        </div>
    )
}

export default ButtonContainer;