import kaori from './assets/images/kaori_bg.png';
import classes from './App.module.css';
import IPod from './containers/iPod/iPod';

const App =(props)=>{
  return (
    <div className={classes.App} style={{"backgroundImage":"url("+kaori+")"}}>
      {/* <img src={kaori} className={classes.BackgroundImage} alt=""  / > */}
      <IPod />
    </div>
  );
}

export default App;
