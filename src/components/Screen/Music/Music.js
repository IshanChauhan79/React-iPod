import React from 'react';
import classes from './Music.module.css'
import SongList from './SongList/SongList';
const Music = (props) =>{
    return(
        <div className={classes.Music}>
            <div className={classes.Title}>All Songs</div>
            <SongList />
            <div className={classes.Controls}>controls</div>
        </div>
    );
}
export default Music;