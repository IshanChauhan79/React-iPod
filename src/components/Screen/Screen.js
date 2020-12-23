import React from 'react';
import classes from './Screen.module.css';
import home from '../../assets/images/home.jpg';
import Menu from './Menu/Menu';
 
const Screen =(props)=>{
    return(
        <div className={classes.Screen} style={{"backgroundImage":"url("+home+")"}}>
            <Menu />
        </div>
    )
}

export default Screen;
