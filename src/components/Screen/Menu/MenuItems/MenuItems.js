import React from 'react';
import classes from './MenuItems.module.css';
import Aux from '../../../../hoc/Auxiliary/Auxiliary'
const MenuItems = (props) => {
    // const menu=props.menu
    const list = props.menu.map((value,i)=>{
        return(<div key={i}>{value}</div>)
    }
        
    ) 
    return(
        <Aux >
            {list}
            {/* <div>Home</div>
            <div>Games</div>
            <div>Music</div>
            <div>Settings</div>
            <div>CoverFlow</div>     */}
        </Aux>
    );
}
export default MenuItems;