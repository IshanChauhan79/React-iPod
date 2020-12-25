import React from 'react';
import classes from './Menu.module.css';
import MenuItems from './MenuItems/MenuItems'
const Menu = (props) => {
    return(
        <div className={classes.Menu}
            style={{
                transform:props.showMenu?'translateX(0)':'translateX(-100%)',
                opacity:props.showMenu?'1':'0'
            }}
            >
            <div className={classes.Title}>React iPod </div>
            <MenuItems 
                menu={props.menu}
                selectedMenu={props.selectedMenu}
            />
            
        </div>
    );
}
export default Menu;