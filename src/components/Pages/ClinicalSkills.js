import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../underPages/clinicalSkillsPages.css';


class clinicalSkills extends Component {
	render() {
	return(
	 <React.Fragment>
	
	<div className= 'tc dib br3 pa3 ma2 grow bw2 shadow-5'>
	     <NavLink to = "/OxygenTherapy"> 
	      <button className= 'button'>
	      <img className= 'navigationImage' alt= 'mask' src={require('./mask.jpg')}/>
		  <span> Oxygen Therapy</span>
		  </button>
		 </NavLink>
		</div>
		

	<div className= 'tc dib br3 pa3 ma2 grow bw2 shadow-5'>
	     <NavLink to = "/ABG">
		  <button className= 'button'>
		  <img className= 'navigationImage' alt= 'ABG' src={require('./ABG.jpg')}/>
		  <span> Arterial Blood Gas</span> 
		  </button>
		 </NavLink>

		</div>	
		</React.Fragment>
	
		);
	}
}


/*const clinicalSkills= ({name, image, Id}) => {
	return(
       <div className= 'images'>


       { clinicalSkillsImages.map(images =>  <div className = 'tc dib br3 pa3 ma2 grow bw2 shadow-5'>
       	{images.image} 
       	{images.name} 

       	</div>)}
 
       		</div>


       		);
       	}*/


export default clinicalSkills;



       	
       
