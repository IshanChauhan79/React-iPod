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
            {props.openSelectedMenu!==2?
                <MenuItems 
                    menu={props.menu}
                    selectedMenu={props.selectedMenu}
                    music={false}
                />:
                <MenuItems 
                    music={true}
                    menu={props.musicMenu}
                    selectedMenu={props.selectedMusicMenu}
                />

            }
            
            
        </div>
    );
}
export default Menu;