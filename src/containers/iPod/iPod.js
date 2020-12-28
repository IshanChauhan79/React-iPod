import React,{Component} from 'react';
import classes from './iPod.module.css';
import ZingTouch from 'zingtouch';
import cover from '../../assets/images/ipod_cover.jpg';
import Screen from '../../components/Screen/Screen';
import ButtonContainer from  '../../components/ButtonContainer/ButtonContainer';

class IPod extends Component{
    state={
        showMenu:false,

        menu:['Home','Games','Music','Setting','CoverFlow'],
        selectedMenu:0,
        openSelectedMenu:0,

        musicMenu:["Now Playing","All Songs","Artists","Albums","Go Back"],
        selectedMusicMenu:10,
        openSelectedMusicMenu:10,

        selectedMusic:0,
        nowPlaying:0,
        playing:false,
        showPlaying:false,
        playpause:false
        
        

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

    

    menuClickedHandler=()=>{
        this.setState(prevState=>(
            {
                menu:prevState.menu,
                showMenu:!prevState.showMenu}
        ));

    }


    selectClickedHandler=()=>{
        if(this.state.showMenu){
            if (this.state.selectedMenu!==2){
                this.setState({
                    openSelectedMenu:this.state.selectedMenu,
                    showMenu:false,
                    showPlaying:false
                });
            }else{
                
                if(this.state.selectedMusicMenu===4){
                    this.setState({
                        openSelectedMenu:0,
                        openSelectedMusicMenu:10,
                        selectedMusicMenu:10,
                        showPlaying:false
                        
                    });

                }
                else{
                    this.setState({
                        openSelectedMenu:this.state.selectedMenu,
                        openSelectedMusicMenu:(this.state.selectedMusicMenu)===10?0:this.state.selectedMusicMenu,
                        showMenu:false,
                        showPlaying:false
                    });
                    if(this.state.selectedMusicMenu===0 ){
                        this.setState({
                            showPlaying:true,
                            playing:true,
                            playpause:true
                        },()=>{
                            document.getElementById('audio').play();
                        })
                        
                    }
                    
                
                }
                if(this.state.selectedMenu===2 && this.state.openSelectedMusicMenu === 10) {
                    this.setState({
                        showMenu:true,
                        selectedMusicMenu:0
                    });
                }
                

            }
            
            
        }
        else{
            if(this.state.openSelectedMusicMenu === 1 &&  this.state.openSelectedMenu === 2){
                
                this.setState({
                    nowPlaying:this.state.selectedMusic,
                    showPlaying:true,
                    playing:true,
                    playpause:true
                },()=>{
                    document.getElementById('audio').play();
                })
 
            }
        }
        
    }



    leftButtonHandler=()=>{
        let playingMusicIndex=this.state.nowPlaying;
            playingMusicIndex-=1
            if(playingMusicIndex<0){
                playingMusicIndex=5
            }

        if(this.state.showPlaying){
            this.setState({
                nowPlaying:playingMusicIndex,
                playing:true,
                selectedMusic:playingMusicIndex
            },()=>{
                document.getElementById('audio').play();
            })
            return;
        }

        if(this.state.playing){
            this.setState({
                nowPlaying:playingMusicIndex,
                playing:true,
                selectedMusic:playingMusicIndex
            },()=>{
                document.getElementById('audio').play();
            })
            return;
        }


        if ( this.state.selectedMenu === 2 && this.state.openSelectedMusicMenu === 1 && !this.state.showPlaying){
            let selectedMusic =this.state.selectedMusic;
            selectedMusic-=1;
            if(selectedMusic<0){
                selectedMusic=5;
            }
            this.setState({selectedMusic:selectedMusic});
            return;
        }
    }


    rightButtonHandler=()=>{

        let playingMusicIndex=this.state.nowPlaying;
            playingMusicIndex+=1
            if(playingMusicIndex>5){
                playingMusicIndex=0
            }

        if(this.state.showPlaying){
            this.setState({
                nowPlaying:playingMusicIndex,
                playing:true,
                selectedMusic:playingMusicIndex
            },()=>{
                document.getElementById('audio').play();
            })
            return;
        }

        if(this.state.playing){
            this.setState({
                nowPlaying:playingMusicIndex,
                playing:true,
                selectedMusic:playingMusicIndex
            },()=>{
                document.getElementById('audio').play();
            })
            return;
        }


        if ( this.state.selectedMenu === 2 && this.state.openSelectedMusicMenu === 1 && !this.state.showPlaying){
            let selectedMusic =this.state.selectedMusic;
            selectedMusic+=1;
            if(selectedMusic>5){
                selectedMusic=0;
            }
            this.setState({selectedMusic:selectedMusic});
            return;
        }
        


    }
    playPauseHandler=()=>{
        if(this.state.playpause){
            if(this.state.playing){
                document.getElementById('audio').pause();
                this.setState({playing:false})
            }else{
                document.getElementById('audio').play();
                this.setState({playing:true})
    
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
                    openSelectedMusicMenu={this.state.openSelectedMusicMenu}

                    nowPlaying={this.state.nowPlaying}
                    selectedMusic={this.state.selectedMusic}
                    playing={this.state.playing}
                    showPlaying={this.state.showPlaying}

                    
                />


                <ButtonContainer 
                    menuClicked={this.menuClickedHandler}
                    selectButtonClicked={this.selectClickedHandler}

                    leftButtonClicked={this.leftButtonHandler}
                    rightButtonClicked={this.rightButtonHandler}
                    playPauseClicked={this,this.playPauseHandler}

                 />
            </div>
        )
    }
}
export default IPod;