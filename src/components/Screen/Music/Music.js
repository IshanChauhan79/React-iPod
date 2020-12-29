import React from 'react';
import classes from './Music.module.css'
import SongList from './SongList/SongList';
// componet for diplaying song list on screen
const Music = (props) =>{
    return(
        <div className={classes.Music}>
            <div className={classes.Title}>All Songs</div>
            <SongList
                songList={props.list}
                nowPlaying={props.nowPlaying}
                selectedMusic={props.selectedMusic}
            />
            <div className={classes.Controls}>
                Use <i class="fas fa-backward"></i> or <i class="fas fa-forward"></i> to Navigate
                
                
                

            </div>

        </div>
    );
}
export default Music;