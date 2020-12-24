import React,{Component} from 'react';
import classes from './iPod.module.css';
import cover from '../../assets/images/ipod_cover.jpg';
import Screen from '../../components/Screen/Screen';
import ButtonContainer from  '../../components/ButtonContainer/ButtonContainer';

class IPod extends Component{
    state={
        menu:['Home','Games','Music','Setting','CoverFlow'],
        showMenu:false
    }
    // componentDidMount=()=>{

    // }

    
    menuClickedHandler=()=>{
        this.setState(prevState=>(
            {
                menu:prevState.menu,
                showMenu:!prevState.showMenu}
        ));

    }



    render(){
        return(
            <div className={classes.IPod}>
                <img src={cover} className={classes.Cover} alt='' />
                
                
                <Screen
                    menu={this.state.menu}
                    showMenu={this.state.showMenu}
                />


                <ButtonContainer menuClicked={this.menuClickedHandler} />
            </div>
        )
    }
}
export default IPod;