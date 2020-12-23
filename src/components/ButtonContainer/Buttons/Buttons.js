import React from 'react';
import classes from './Buttons.module.css';
import CenterButton from './CenterButton/CenterButton';
import TopButton from './TopButton/TopButton';
import LeftButton from './LeftButton/LeftButton';
import RightButton from './RightButton/RightButton';
import BottomButton from './BottomButton/BottomButton';

 
const Buttons =(props)=>{
    return(
        <div className={classes.Buttons}>
            <CenterButton />
            <TopButton />
            <LeftButton />
            <RightButton />
            <BottomButton />
            
            
        </div>
    )
}

export default Buttons;