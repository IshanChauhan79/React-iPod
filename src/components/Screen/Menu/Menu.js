import React from 'react';
import classes from './Menu.module.css';
import MenuItems from './MenuItems/MenuItems'
const Menu = (props) => {
    return(
        <div className={classes.Menu}>
            <div className={classes.Title}>React iPod</div>
            <MenuItems />
        </div>
    );
}
export default Menu;