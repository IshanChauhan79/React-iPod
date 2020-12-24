import React from 'react';
import classes from './TopButton.module.css';


 
const TopButton =(props)=>{
    return(
        <button className={classes.TopButton} onClick={props.menuClicked} >
            <i className="fas fa-bars"></i>
        </button>
    )
}

export default TopButton;