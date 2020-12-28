import React from 'react';
// import classes from './SongList.module.css';
import Aux from '../../../../hoc/Auxiliary/Auxiliary'

const SongList = (props) => {
    // nowPlaying={props.nowPlaying}
    // selectedMusic={props.selectedMusic}

    const list = props.songList.map((value,i)=>{
        return(
            <div 
                key={i}
                style={{
                    'backgroundColor':props.selectedMusic===i?'blue':'white',
                    'color':(props.selectedMusic===i)?"white":'black',
                    
                }}
            >
                {value}
            </div>)
    });

    return(
        <Aux >
            {list}
        </Aux>
    );
}
export default SongList;