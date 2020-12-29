import React from 'react';
import classes from './Buttons.module.css';
import CenterButton from './CenterButton/CenterButton';
import TopButton from './TopButton/TopButton';
import LeftButton from './LeftButton/LeftButton';
import RightButton from './RightButton/RightButton';
import BottomButton from './BottomButton/BottomButton';

 // display all the buttons containing their respective onClick event listeners
 

const Buttons =(props)=>{
    //looping background color when song playing 
    let styles=[classes.Buttons];
    if (props.playing){
        styles.push(classes.AnimationColor);
        }
        
    return(
        <div  id='Buttons' className={styles.join(' ')}>
            <CenterButton selectClicked={props.selectClicked} />
            <TopButton menuClicked={props.menuClicked} />
            <LeftButton leftButtonClicked={props.leftButtonClicked} />
            <RightButton rightButtonClicked={props.rightButtonClicked}  />
            <BottomButton playPauseClicked={props.playPauseClicked}/>
            
            
            
            
        </div>
    )
}

export default Buttons;