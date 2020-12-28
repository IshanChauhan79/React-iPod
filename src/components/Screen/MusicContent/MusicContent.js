import React from 'react';
import Display from  '../../UI/Display/Display';
import artist from '../../../assets/images/artist.png';
import album from '../../../assets/images/album.png';


//return the componet to be displayed on screen after being selct from default menu

const ScreenContent = (props) =>{
    let screenTitle = props.musicMenu[props.openSelectedMusicMenu] ;
    let image ='';
    if (props.openSelectedMusicMenu ===2)
        image=artist;
    else if(props.openSelectedMusicMenu ===3){
        image=album;
    }

        
    return(

        <Display 
            //passing the props the UI component which conatians a fixed structure and css styles 
            openSelectedMusicMenu={props.openSelectedMusicMenu}
            image={image} 
            title={screenTitle}
        />
    );
}
export default ScreenContent;