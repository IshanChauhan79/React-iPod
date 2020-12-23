import React,{Component} from 'react';
import classes from './iPod.module.css';
import cover from '../../assets/images/ipod_cover.jpg';
import Screen from '../../components/Screen/Screen';
import ButtonContainer from  '../../components/ButtonContainer/ButtonContainer';

class IPod extends Component{
    componentDidMount=()=>{
        // function click (e) {
        //     if (!e)
        //       e = window.event;
        //     if ((e.type && e.type === "contextmenu") || (e.button && e.button === 2) || (e.which && e.which === 3)) {
        //       if (window.opera)
        //         window.alert("");
        //       return false;
        //     }
        //   }
        //   if (document.layers)
        //     document.captureEvents(Event.MOUSEDOWN);
        //   document.onmousedown = click;
        //   document.oncontextmenu = click;
    }
    render(){
        return(
            <div className={classes.IPod}>
                <img src={cover} className={classes.Cover} alt='' />
                <Screen />
                <ButtonContainer />
            </div>
        )
    }
}
export default IPod;