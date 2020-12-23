import React from 'react';
import Display from  '../../UI/Display/Display';
import games from '../../../assets/images/games.jpg';
import gallary from '../../../assets/images/gallary.jpg';
import setting from '../../../assets/images/setting.webp'

const ScreenContent = (props) =>{
    return(
        <Display image={setting} title="Games" />
    );
}
export default ScreenContent;