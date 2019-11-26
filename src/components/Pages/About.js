import React, {Component} from 'react';
import './About.css';
import { NavLink } from 'react-router-dom';

class About extends Component {
	render() {
		return(
	<div>
		<p className = 'f3' > 
		{'Your clinical skills development begins here'}
		</p>
		<p>Please take note that this resource is a learning support to be used with appropriate clinical judgement and supervision.</p> 
		<p> If you are unsure about anything, please ask!</p>
		<div> 

	     <NavLink to = "/ClinicalSkills">
		  <button className = 'button'><span> Let's get started!</span> 
		  </button>
		 </NavLink>
	    

		</div>
	</div>
		);
	}
}

export default About;
