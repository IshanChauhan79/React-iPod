import React from 'react';
// import classes from './SongList.module.css';
import Aux from '../../../../hoc/Auxiliary/Auxiliary'

const SongList = (props) => {
    // nowPlaying={props.nowPlaying}
    // selectedMusic={props.selectedMusic}
    let menu=["a",'b','c','d','e','f']

    const list = menu.map((value,i)=>{
        return(
            <div 
                key={i}
                style={{
                    'backgroundColor':props.selectedMusic===i?'blue':'white'
                }}
            >{value}</div>)
    });

    return(
        <Aux >
            {list}
        </Aux>
    );
}
export default SongList;