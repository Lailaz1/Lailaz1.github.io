import React, { Component } from 'react';
import {BrowserRouter,Switch,Route,Redirect} from "react-router-dom";
import './App.scss';
import Navigation from './components/Navigation/Navigation';
import About from './components/Pages/About';
import ClinicalSkills from './components/Pages/ClinicalSkills';
import ContactUs from './components/Pages/ContactUs';
import OxygenTherapy from './components/underPages/OxygenTherapy';
import ABG from './components/underPages/ABG';



class App extends Component {
  render (){
  return( 
    <div className = "App">     
<BrowserRouter>
  <React.Fragment>
    <Navigation />
    <main> 
    <Switch>
      <Redirect from ="/" to = "/About" exact/>
      <Route path= "/About" component ={About}/>
      <Route path= "/ClinicalSkills" component = {ClinicalSkills}/>
      <Route path= "/ContactUs" component ={ContactUs}/>
      <Route path= "/OxygenTherapy"component ={OxygenTherapy}/>
      <Route path= "/ABG" component ={ABG}/>
    </Switch>
    </main>
    </React.Fragment>
    </BrowserRouter>

    </div>
  );
}
}

export default App;
