import React,{Component} from 'react';
import classes from './iPod.module.css';
import ZingTouch from 'zingtouch';
import cover from '../../assets/images/ipod_cover.jpg';
import Screen from '../../components/Screen/Screen';
import ButtonContainer from  '../../components/ButtonContainer/ButtonContainer';

class IPod extends Component{
    state={
        menu:['Home','Games','Music','Setting','CoverFlow'],
        showMenu:false,
        selectedMenu:0,
        openSelectedMenu:0,
        musicMenu:["Now Playing","All Songs","Artists","Albums","Go Back"],
        selectedMusicMenu:0,
        openSelectedMusicMenu:4
    }



    componentDidMount=()=>{
        var button=document.getElementById('Buttons');
        var zt =new ZingTouch.Region(button);
        var angle=0;
        zt.bind(button,'rotate',(event)=>{
            if (this.state.showMenu){

                let dist = event.detail.distanceFromLast;
                angle=angle+dist;
                var selected=null
                
                if(this.state.openSelectedMenu!==2){
                    selected=this.state.selectedMenu;

                    if(angle>60){     
                        angle=0;
                        selected+=1;
                        if(selected>4){
                            selected=0
                        }
                        this.setState({selectedMenu:selected})
                    }
                    else if(angle<-60){
                        angle=0;
                        selected-=1;
                        if(selected<0){
                            selected=4
                        }
                        this.setState({selectedMenu:selected})
                    }

                }else{
                    selected=this.state.selectedMusicMenu;
                    if(angle>60){     
                        angle=0;
                        selected+=1;
                        if(selected>4){
                            selected=0
                        }
                        this.setState({selectedMusicMenu:selected})
                    }
                    else if(angle<-60){
                        angle=0;
                        selected-=1;
                        if(selected<0){
                            selected=4
                        }
                        this.setState({selectedMusicMenu:selected})
                    }
                    
                }
                
                
            }
        })

    }

    // var zt = new ZingTouch.Region(document.getElementsByClassName('buttons-container')[0]);
    // zt.bind(document.getElementsByClassName('buttons-container')[0], 'rotate', (event) =>
    // {
    //     if (document.getElementsByClassName('screen-menu')[0].classList.contains('width-50'))//this rotating facility will only be available when the side bar is shown to the user.
    //     {
    //         let dist = event.detail.distanceFromLast;
    //         this.temp_change_in_angle += dist;
    //         if (this.temp_change_in_angle > 60)
    //         {
    //             this.temp_selected++;
    //             this.temp_selected = this.temp_selected % this.state.options.length;
    //             this.setState({
    //                 selected: this.temp_selected,
    //                 // song_index: -1
    //             });

    //             this.temp_change_in_angle = 0;
    //         }
    //         else if (this.temp_change_in_angle < -60)
    //         {
    //             this.temp_selected--;
    //             if (this.temp_selected === -1)
    //                 this.temp_selected = this.state.options.length - 1;

    //             this.temp_selected = this.temp_selected % this.state.options.length;
    //             this.setState({
    //                 selected: this.temp_selected,
    //                 // song_index: -1
    //             });
    //             this.temp_change_in_angle = 0;
    //         }
    //     }

    // });
// }

    
    menuClickedHandler=()=>{
        this.setState(prevState=>(
            {
                menu:prevState.menu,
                showMenu:!prevState.showMenu}
        ));

    }
    selctClickedHandler=()=>{
        if(this.state.showMenu){
            if (this.state.selectedMenu!==2){
                this.setState({
                    openSelectedMenu:this.state.selectedMenu,
                    showMenu:false
                });
            }else{
                this.setState({
                    openSelectedMenu:this.state.selectedMenu,
                    openSelectedMusicMenu:this.state.selectedMusicMenu
                });

            }
            
            
        }
        
    }



    render(){
        // console.log(this.state.openSelectedMenu)
        return(
            <div className={classes.IPod}>
                <img src={cover} className={classes.Cover} alt='' />
                
                
                <Screen
                    menu={this.state.menu}
                    showMenu={this.state.showMenu}
                    selectedMenu={this.state.selectedMenu}
                    openSelectedMenu={this.state.openSelectedMenu}
                    
                    musicMenu={this.state.musicMenu}                             
                    selectedMusicMenu={this.state.selectedMusicMenu}
                    openSelectedMusicMenu={this.openSelectedMusicMenu}

                    
                />


                <ButtonContainer 
                    menuClicked={this.menuClickedHandler}
                    selectButtonClicked={this.selctClickedHandler}
                 />
            </div>
        )
    }
}
export default IPod;