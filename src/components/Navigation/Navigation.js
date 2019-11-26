import React from 'react';
//import Route from 'react-router-dom/Route';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = props => (
	<header className="main-navigation">

	<div className = "main-navigation_logo">
	   <h1>Clinical Skills Guide</h1>
	   </div>

	   <div className = "spacer"/>

	   <nav className="main-navigation_items">

	   <ul>
	    <li> 
	     <NavLink to = "/about"> About </NavLink>
	     </li>

	     <li> 
	     <NavLink to = "/ClinicalSkills"> Clinical Skills </NavLink>
	     </li>

	     <li> 
	     <NavLink to = "/ContactUs"> Contact Us </NavLink>
	     </li>


	    </ul>

	    </nav>
	 
	    </header>

	);
   
   	

   	/*<nav style= {{display: 'flex', justifyContent: 'flex-start'}}>
   	  <p className='f3 link dim black underline pa3 pointer' > Home </p>

   	</nav>

   	);*/




export default Navigation;