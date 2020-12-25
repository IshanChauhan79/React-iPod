import React from 'react';
import classes from './Buttons.module.css';
import CenterButton from './CenterButton/CenterButton';
import TopButton from './TopButton/TopButton';
import LeftButton from './LeftButton/LeftButton';
import RightButton from './RightButton/RightButton';
import BottomButton from './BottomButton/BottomButton';

 
const Buttons =(props)=>{
    return(
        <div  id='Buttons' className={classes.Buttons}>
            <CenterButton selectClicked={props.selectClicked} />
            <TopButton menuClicked={props.menuClicked} />
            <LeftButton />
            <RightButton />
            <BottomButton />
            
            
        </div>
    )
}

export default Buttons;