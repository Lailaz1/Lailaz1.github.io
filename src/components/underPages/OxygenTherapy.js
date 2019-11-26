import React, {Component} from 'react';
import './clinicalSkillsPages.css';
import ModalImage from "react-modal-image";
import ModalVideo from 'react-modal-video';
import './Modalvideo.scss';


class OxygenTherapy extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
    this.openModal = this.openModal.bind(this)
  }
 
  openModal () {
    this.setState({isOpen: true})
  }
	render() {
		return(
<div className = 'whole-text'>
   
<h2> The Oxygen Therapy Skill</h2>
  <h1> Take Note!</h1>
  <p>This resource is a learning support to be used with appropriate clinical judgement and supervision.</p>
  <p>Take caution in CO2 retainers (COPD patients with chronic CO2 retention) as their target saturation range is 88-92%.</p>
  <h4>If you are unsure, please ASK!</h4>

  <h1>Equipment Required</h1>
 <ul>
  <li className= "adjustIcon">Nasal Prongs</li> 
  <ModalImage  
       small ={require('./inspection.png')}
       large = {require('./NasalProngs.jpeg')}
               alt= "Nasal Prongs"
               hideDownload= {true}
               hideZoom ={true}/>
                <p>-------------------------</p>

  <li className= "adjustIcon">Simple Face Mask</li> 
  <ModalImage  
       small ={require('./inspection.png')} className = "right"
       large = {require('./SimpleFaceMask.jpeg')}
               alt= "Simple Face Mask"
               hideDownload= {true}
               hideZoom ={true}/> 
               <p>-------------------------</p>

  <li className= "adjustIcon">Partial Rebreather Mask</li> 
  <ModalImage  
       small ={require('./inspection.png')}
       large = {require('./PartialRebreatherMask.jpeg')}
               alt= "Partial Rebreather Mask"
               hideDownload= {true}
               hideZoom ={true}/>
                <p>-------------------------</p>
  <li className= "adjustIcon">Non-Rebreather Mask</li> 
  <ModalImage  
       small ={require('./inspection.png')}
       large = {require('./NonRebreatherMask.jpeg')}
               alt= "Non Rebreather Mask"
               hideDownload= {true}
               hideZoom ={true}/>
                <p>-------------------------</p>
  <li className= "adjustIcon">Venturi Mask</li> 
  <ModalImage  
       small ={require('./inspection.png')}
       large = {require('./VenturiMask.jpeg')}
               alt= "Venturi Mask"
               hideDownload= {true}
               hideZoom ={true}/>
                <p>-------------------------</p>
</ul>
<li className= "adjustIcon">See all equipment</li>
<ModalImage  
       small ={require('./inspection.png')}
       large = {require('./SeeAllEquipment.jpeg')}
               alt= "All Equipment"
               hideDownload= {true}
               hideZoom ={true}/>

<h1>Procedure Steps</h1>
<div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='Nc2zl2SeQNo' onClose={() => this.setState({isOpen: false})} />
        <button className='button' onClick={this.openModal}><span>Watch Video</span></button>
      </div>

<ol>
  <li>Ensure mask is attached to the oxygen supply (not air)</li>
  <li>Adjust the appropriate flow rate for the mask.</li>
</ol>

<li className= "adjustIcon">Oxygen Flow Rate for each different mask</li>
<ModalImage  
       small ={require('./inspection.png')}
       large = {require('./OxygenFlowRates.jpeg')}
               alt= "Oxygen Flow Rates"
               hideDownload= {true}
               hideZoom ={true}/>

 <p align="center"> Thanks for your attention!</p>              
 </div>

		);
	}
}


export default OxygenTherapy;