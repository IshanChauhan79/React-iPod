import React from 'react';
import Display from  '../../UI/Display/Display';
import games from '../../../assets/images/games.jpg';
import gallary from '../../../assets/images/gallary.jpg';
import setting from '../../../assets/images/setting.png'

const ScreenContent = (props) =>{
    let screenTitle = props.menu[props.openSelectedMenu] ;
    let image ='';
    let display=null;
    if (props.openSelectedMenu ===1)
        image=games;
    else if(props.openSelectedMenu ===3){
        image=setting;
    }
    else if(props.openSelectedMenu ===4){
        image=gallary
    }
    // if (openSelectedMenu===1 || openSelectedMenu===3 || openSelectedMenu===4){
        
    // }
    return(
        // props.
        <Display 
            openSelectedMenu={props.openSelectedMenu}
            image={image} 
            title={screenTitle}
        />
    );
}
export default ScreenContent;