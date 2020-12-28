import React from 'react';
import classes from './PlayingMusic.module.css';

const PlayingMusic = (props) => {


    let cssprop = [classes.PlayingMusic];
    if ( props.showPlaying){
        cssprop.push(classes.top0)
    }
    else{
        cssprop.push(classes.top100)
    }
    // document.getElementById('audio').play();
    

    return (
        
        <div className={cssprop.join(' ')}>
            
            <img src={props.image} className={classes.Image} alt=''></img>
            <div className={classes.Title}>
                {props.title}
            </div>

            <audio id="audio"  controls controlsList="nodownload" className={classes.Audio} src={props.song} />
            

        </div>
        
    )
}
export default PlayingMusic;