import React from 'react';
import Aux from '../../../../hoc/Auxiliary/Auxiliary'
const MenuItems = (props) => {

    //componet that return the list of content in the menu
    const list = props.menu.map((value,i)=>{
        return(
            <div 
                key={i}
                style={{
                    'backgroundColor':props.selectedMenu===i?'blue':'white',
                    'color':(props.music && i===4)?"red":'black' //specific color for the go back from music menu
                }}
            >{value}</div>)
    }
        
    ) 
    return(
        <Aux >
            {list}
        </Aux>
    );
}
export default MenuItems;