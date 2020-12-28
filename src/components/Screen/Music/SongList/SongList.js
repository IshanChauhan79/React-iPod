import React from 'react';
import Aux from '../../../../hoc/Auxiliary/Auxiliary'

//return the list of songs
const SongList = (props) => {

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