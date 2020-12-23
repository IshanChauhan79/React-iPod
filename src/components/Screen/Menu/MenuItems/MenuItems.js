import React from 'react';
// import classes from './MenuItems.module.css';
import Aux from '../../../../hoc/Auxiliary/Auxiliary'
const MenuItems = (props) => {
    return(
        <Aux >
            <div>Home</div>
            <div>Games</div>
            <div>Music</div>
            <div>Settings</div>
            <div>CoverFlow</div>    
        </Aux>
    );
}
export default MenuItems;