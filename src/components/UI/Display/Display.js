import React from 'react';
import classes from './Display.module.css'
const Display = (props) =>{
    return(
        <div className={classes.Display}>
            <div className={classes.Title}>{props.title}</div>
            <img src={props.image} className={classes.Image}  alt=''></img>
        </div>
    );
}
export default Display;