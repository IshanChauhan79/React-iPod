import React from 'react';
import classes from './Screen.module.css';
import home from '../../assets/images/home.jpg';
import Menu from './Menu/Menu';
import ScreenContent from './ScreenContent/ScreenContent';
import Music from './Music/Music';
 
const Screen =(props)=>{
    return(
        <div className={classes.Screen} style={{"backgroundImage":"url("+home+")"}}>
            {/* <Menu /> */}
            {/* <ScreenContent /> */}
            {/* <Music /> */}
        </div>
    )
}

export default Screen;
