import React,{Component} from 'react';
import classes from './iPod.module.css';//using css module because its easy and more practical

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
        selectedMusicMenu:10,   //10 is the default value when music menu is not selected
        openSelectedMusicMenu:10,

        selectedMusic:0,
        nowPlaying:0,   //which song is playing
        playing:false,  //song is playing or not 
        showPlaying:false,  //show the song playing screen
        playpause:false //used to activate play and paye button 
        
        

    }



    componentDidMount=()=>{
        
        var button=document.getElementById('Buttons');
        var zt =new ZingTouch.Region(button); //initialize zingtouch
        var angle=0;
        zt.bind(button,'rotate',(event)=>{ //bind rotate to the div
            if (this.state.showMenu){

                let dist = event.detail.distanceFromLast; //get distance and calculate angle
                angle=angle+dist;
                var selected=null
                
                // when the defalut menu is on the screen
                if(this.state.openSelectedMenu!==2){
                    selected=this.state.selectedMenu;

                    if(angle>60){     //change the value for every 60 deg rotation
                        angle=0;
                        selected+=1;
                        if(selected>4){
                            selected=0
                        }
                        this.setState({selectedMenu:selected})
                    }
                    else if(angle<-60){ //change the value for every 60 deg rotation
                        angle=0;
                        selected-=1;
                        if(selected<0){
                            selected=4
                        }
                        this.setState({selectedMenu:selected})
                    }

                }else{
                     // when the music  menu is on the screen
                    selected=this.state.selectedMusicMenu;
                    if(angle>60){      //change the value for every 60 deg rotation
                        angle=0;
                        selected+=1;
                        if(selected>4){
                            selected=0
                        }
                        this.setState({selectedMusicMenu:selected})
                    }
                    else if(angle<-60){  //change the value for every 60 deg rotation
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

    
    //menu button is clicked , open and close menu
    menuClickedHandler=()=>{
        this.setState(prevState=>(
            {
                menu:prevState.menu,
                showMenu:!prevState.showMenu}
        ));

    }



    // select button is clicked and decide what to do
    selectClickedHandler=()=>{


        //check if menu is on screen or not (if not then do nothing)

        if(this.state.showMenu){
            

            //if music from the default menu is selcted
            if (this.state.selectedMenu!==2){
                this.setState({
                    openSelectedMenu:this.state.selectedMenu,
                    showMenu:false, //auto close the menu after selcting
                    showPlaying:false
                });
            }else{// anything else is selcted 

            
                // go back from music menu is selected, opens the default menu
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
                        openSelectedMusicMenu:(this.state.selectedMusicMenu)===10?0:this.state.selectedMusicMenu, // set default value to 0 else change the value
                        showMenu:false,
                        showPlaying:false
                    });

                    //if now playing is selcted from music menu , show the playing music screen
                    if(this.state.selectedMusicMenu===0 ){
                        this.setState({
                            showPlaying:true,
                            playing:true,
                            playpause:true //activate play pause button after atleast one song is played 
                        },()=>{
                            document.getElementById('audio').play(); //play the music 
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
            // curently song list  is being displayed  after selecting all song from music menu and this plays the selected music
            if(this.state.openSelectedMusicMenu === 1 &&  this.state.openSelectedMenu === 2){
                
                this.setState({
                    nowPlaying:this.state.selectedMusic,
                    showPlaying:true,
                    playing:true,
                    playpause:true //activate play pause button after atleast one song is played 
                },()=>{
                    document.getElementById('audio').play();  //play the music 
                })
 
            }
        }
        
    }


// backward button or left button 
    leftButtonHandler=()=>{
        // clacuate the next song to be played 
        let playingMusicIndex=this.state.nowPlaying;
            playingMusicIndex-=1
            if(playingMusicIndex<0){
                playingMusicIndex=5
            }
        
            //if song list is on the screen then change the selcted music not he playing music
        if ( this.state.selectedMenu === 2 && this.state.openSelectedMusicMenu === 1 && !this.state.showPlaying){
            let selectedMusic =this.state.selectedMusic;
            selectedMusic-=1;
            if(selectedMusic<0){
                selectedMusic=5;
            }
            this.setState({selectedMusic:selectedMusic});
            return;
        }

        //if the playing music is on the screen 
        if(this.state.showPlaying){
            this.setState({
                nowPlaying:playingMusicIndex,
                playing:true,
                selectedMusic:playingMusicIndex
            },()=>{
                document.getElementById('audio').play(); //plays the music because after changing the music it pauses
            })
            return;
        }
        

        // playing music can be changed from the background (if the playing music is not in screen)
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

        
    }



    // backward button or left button 
    rightButtonHandler=()=>{
        // clacuate the next song to be played 

        let playingMusicIndex=this.state.nowPlaying;
            playingMusicIndex+=1
            if(playingMusicIndex>5){
                playingMusicIndex=0
            }

     //if song list is on the screen then change the selcted music not he playing music
        if ( this.state.selectedMenu === 2 && this.state.openSelectedMusicMenu === 1 && !this.state.showPlaying){
            let selectedMusic =this.state.selectedMusic;
            selectedMusic+=1;
            if(selectedMusic>5){
                selectedMusic=0;
            }
            this.setState({selectedMusic:selectedMusic});
            return;
        }


        //if the playing music is on the screen 

        if(this.state.showPlaying){
            this.setState({
                nowPlaying:playingMusicIndex,
                playing:true,
                selectedMusic:playingMusicIndex
            },()=>{
                document.getElementById('audio').play(); //plays the music because after changing the music it pauses
            })
            return;
        }


        // playing music can be changed from the background (if the playing music is not in screen)
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


       
        


    }
    //play pause button is clicked
    playPauseHandler=()=>{

        if(this.state.playpause){
            //pause if playing
            if(this.state.playing){
                document.getElementById('audio').pause();
                this.setState({playing:false})
            }else{
            //play if paused
                document.getElementById('audio').play();
                this.setState({playing:true})
    
            }

        }
        
        
    }



    render(){

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

            {/* button container contain the bottom part of the ipod - all the buttons */}
                <ButtonContainer 
                    menuClicked={this.menuClickedHandler}
                    selectButtonClicked={this.selectClickedHandler}

                    leftButtonClicked={this.leftButtonHandler}
                    rightButtonClicked={this.rightButtonHandler}
                    playPauseClicked={this.playPauseHandler}
                    playing={this.state.playing}

                 />
            </div>
        )
    }
}
export default IPod;