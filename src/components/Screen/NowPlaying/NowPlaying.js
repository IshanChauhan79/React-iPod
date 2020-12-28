import React from "react";
import PlayingMusic from '../../UI/PlayingMusic/PlayingMusic';


import uddGaye from '../../../assets/images/music/uddGaye.jpg';
import sugarSong from '../../../assets/images/music/sugarSong.jpg';
import daisy from '../../../assets/images/music/daisy.jpg';
import Kataomoi from '../../../assets/images/music/kataomoi.jpg';
import naruto16 from '../../../assets/images/music/naruto16.jpg';
import naruto17 from '../../../assets/images/music/naruto17.jpg';

import songUddGaye from '../../../assets/audio/UddGaye.m4a';
import songSugarSong from '../../../assets/audio/SugarSong.m4a';
import songNaruto16 from '../../../assets/audio/Naruto16.m4a';
import songNaruto17 from '../../../assets/audio/Naruto17.m4a';
import songDaisy from '../../../assets/audio/Daisy.m4a';
import songKataomoi from '../../../assets/audio/Kataomoi.m4a';



const NowPlaying =(props) => {
    let image='';
    let title='';
    let song='';
    if (props.nowPlaying===0){
        image =uddGaye;
        song=songUddGaye;
        title=props.songList[0];
        
    }
    else if(props.nowPlaying===1){
        image =naruto16;
        song=songNaruto16;
        title=props.songList[1];

    }
    else if(props.nowPlaying===3){
        image =naruto17;
        song=songNaruto17;
        title=props.songList[3];

    }
    else if(props.nowPlaying===2){
        image =sugarSong;
        song=songSugarSong;
        title=props.songList[2];

    }
    else if(props.nowPlaying===4){
        image =Kataomoi;
        song=songKataomoi;
        title=props.songList[4];

    }
    else if(props.nowPlaying===5){
        image =daisy;
        song=songDaisy;
        title=props.songList[5];

    }
    

//display and play the music according to the selected music
    return(
        <PlayingMusic
        //passing the props the UI component which conatians a fixed structure and css styles 
        song={song}
        title={title}
        image={image}
        showPlaying={props.showPlaying} />
        
    )
}
export default NowPlaying;
