import React from 'react';
import Display from  '../../UI/Display/Display';
import artist from '../../../assets/images/artist.png';
import album from '../../../assets/images/album.png';

const ScreenContent = (props) =>{
    let screenTitle = props.musicMenu[props.openSelectedMusicMenu] ;
    let image ='';
    let display=null;
    if (props.openSelectedMusicMenu ===2)
        image=artist;
    else if(props.openSelectedMusicMenu ===3){
        image=album;
    }

    // if (openSelectedMusicMenu===1 || openSelectedMusicMenu===3 || openSelectedMusicMenu===4){
        
    // }
    return(
        // props.
        <Display 
            openSelectedMusicMenu={props.openSelectedMusicMenu}
            image={image} 
            title={screenTitle}
        />
    );
}
export default ScreenContent;