import React from 'react';
import classes from './Screen.module.css';
import home from '../../assets/images/home.jpg';
import Menu from './Menu/Menu';
import ScreenContent from './ScreenContent/ScreenContent';
import MusicContent from './MusicContent/MusicContent';
import Music from './Music/Music';
import NowPlaying from './NowPlaying/NowPlaying';

//storing most of the diplay element in variables

const Screen =(props)=>{

    //selct what to diplay on screen when something from default menu is selected except music
    const content = (props.openSelectedMenu !== 0 && props.openSelectedMenu !== 2 )?
                    <ScreenContent 
                        openSelectedMenu={props.openSelectedMenu}
                        menu={props.menu}
                    />:null;
    

    //selct what to diplay on screen when album,artist from music menu is selected
    const musicContent = (props.openSelectedMenu === 2 && (props.openSelectedMusicMenu !== 1 && props.openSelectedMusicMenu !== 0 && props.openSelectedMusic !== 4 ))?
                    <MusicContent
                        openSelectedMusicMenu={props.openSelectedMusicMenu}
                        musicMenu={props.musicMenu}

                    />:null;


    const songList= [
                        'Udd Gaye by Ritviz',
                        'Naruto OP16',
                        'Sugar Song by USG',
                        'Naruto Op17',
                        'Kataomoi by Aimer',
                        'Daisey BTB'
                    ];
    //display the song list if all songs is selected
    const allSongs= (props.openSelectedMenu ===2 && props.openSelectedMusicMenu === 1)?
                    <Music
                        list={songList}
                        nowPlaying={props.nowPlaying}
                        selectedMusic={props.selectedMusic}
                    />:null;

    //display playing music screen
    const playing=<NowPlaying
                    nowPlaying={props.nowPlaying}
                    selectedMusic={props.selectedMusic}
                    showPlaying={props.showPlaying}
                    playing={props.playing}
                    songList={songList}
                />
                    
                    
                    


    return(
        <div className={classes.Screen} 
            style={{
                "backgroundImage":"url("+home+")"                
            }
        }>
             {/* display the menu on screen */}
            <Menu     
                showMenu={props.showMenu}

                menu={props.menu}
                selectedMenu={props.selectedMenu}
                openSelectedMenu={props.openSelectedMenu}

                musicMenu={props.musicMenu}                             
                selectedMusicMenu={props.selectedMusicMenu}
                

            />
            {playing}
            {content}
            {musicContent}
            {allSongs}
            
            


        </div>
    )
}

export default Screen;
