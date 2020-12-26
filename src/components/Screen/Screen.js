import React from 'react';
import classes from './Screen.module.css';
import home from '../../assets/images/home.jpg';
import Menu from './Menu/Menu';
import ScreenContent from './ScreenContent/ScreenContent';
import MusicContent from './MusicContent/MusicContent';
import Music from './Music/Music';
 
const Screen =(props)=>{
    let content = (props.openSelectedMenu !== 0 && props.openSelectedMenu !== 2 )?
                    <ScreenContent 
                        openSelectedMenu={props.openSelectedMenu}
                        menu={props.menu}
                    />:null;
    let musicContent = (props.openSelectedMenu === 2 && (props.openSelectedMusicMenu !== 1 && props.openSelectedMusicMenu !== 0 && props.openSelectedMusic !== 4 ))?
                    <MusicContent
                        openSelectedMusicMenu={props.openSelectedMusicMenu}
                        musicMenu={props.musicMenu}

                    />:null;

    return(
        <div className={classes.Screen} 
            style={{
                "backgroundImage":"url("+home+")"                
            }
        }>
            
            {/* <Menu     
                showMenu={props.showMenu}

                menu={props.menu}
                selectedMenu={props.selectedMenu}
                openSelectedMenu={props.openSelectedMenu}

                musicMenu={props.musicMenu}                             
                selectedMusicMenu={props.selectedMusicMenu}
                

            />
            {content}
            {musicContent} */}
            
            <Music
                nowPlaying={props.nowPlaying}
                selectedMusic={props.selectedMusic}
            />
        </div>
    )
}

export default Screen;
