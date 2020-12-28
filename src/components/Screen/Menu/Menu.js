import React from 'react';
import classes from './Menu.module.css';
import MenuItems from './MenuItems/MenuItems'
const Menu = (props) => {
    return(
        <div className={classes.Menu}
            // animation for the open and close of menu
            style={{
                transform:props.showMenu?'translateX(0)':'translateX(-100%)',
                opacity:props.showMenu?'1':'0'
            }}
            >
                
            <div className={classes.Title}>React iPod </div>
            {props.openSelectedMenu!==2?
                <MenuItems 
                //if default menu is being displayed
                    menu={props.menu}
                    selectedMenu={props.selectedMenu}
                    music={false}
                />:
                <MenuItems 
                //if default music menu is being displayed
                    music={true}
                    menu={props.musicMenu}
                    selectedMenu={props.selectedMusicMenu}
                />

            }
            
            
        </div>
    );
}
export default Menu;