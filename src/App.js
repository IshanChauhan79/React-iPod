import kaori from './assets/images/kaori_bg.png';
import classes from './App.module.css';
import IPod from './containers/iPod/iPod';

//conaitainer folder contains the js file that has state in it
//component folder contains all the function componet of the project
//hoc contain the auxilary component that works same as react.fragment
//assets contains all the image and audio needed in the project


//IPod is the main componet which stores all the data about the project 

const App =(props)=>{
  return (
    <div className={classes.App} style={{"backgroundImage":"url("+kaori+")"}}>


      {/* <img src={kaori} className={classes.BackgroundImage} alt=""  / > */}
      {/* above image comment  is just for my personal use - trying different ways of displaying image    for refernece in future*/}


      <IPod />
    </div>
  );
}

export default App;
