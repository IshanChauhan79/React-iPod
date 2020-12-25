import React from 'react';
import classes from './MenuItems.module.css';
import Aux from '../../../../hoc/Auxiliary/Auxiliary'
const MenuItems = (props) => {
    // const menu=props.menu

    const list = props.menu.map((value,i)=>{
        return(
            <div 
                key={i}
                style={{'backgroundColor':props.selectedMenu===i?'blue':'white'}}
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