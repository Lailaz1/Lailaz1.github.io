import React, {Component} from 'react';
import './clinicalSkillsPages.css';
import ModalImage from "react-modal-image";
import ModalVideo from 'react-modal-video';
import './Modalvideo.scss';
   

class ABG extends Component {
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
<h2> The Arterial Blood Gas Skill</h2>
<h1> Take Note !</h1>
<p>This resource is a learning support to be used with appropriate clinical judgement and supervision.</p>
<h1>Absolute contraindications</h1>

<ul>
  <li>Overlying skin infections</li>
  <li>Arterio-venous fistula</li>
  <li>Arterial disease with inadequate circulation to the extremity</li>
</ul>
<h4>If you are unsure, please ASK !</h4>
<h1>Equipment Required</h1>

<ul>
  <li className= "adjustIcon">Disposable kidney dish </li> 
  <ModalImage  
       small ={require('./inspection.png')}
       large = {require('./DisposableKidneyDish.jpeg')}
               alt= "Disposable Kidney Dish"
               hideDownload= {true}
               hideZoom ={true}/>
               <p>-------------------------</p>
  <li className= "adjustIcon">Non sterile gloves</li>
  <ModalImage  
       small ={require('./inspection.png')}
       large = {require('./NonSterileGloves.jpeg')}
               alt= "Non sterile gloves"
               hideDownload= {true}
               hideZoom ={true}/>
                <p>-------------------------</p>
  <li className= "adjustIcon">Alcohol wipe</li>
  <ModalImage  
       small ={require('./inspection.png')}
       large = {require('./AlcoholWipe.jpeg')}
               alt= "Alcohol wipe"
               hideDownload= {true}
               hideZoom ={true}/>
                <p>-------------------------</p>
  <li className= "adjustIcon">Local Anaesthetic (if indicated – requires supervision)</li>
  <ModalImage  
       small ={require('./inspection.png')}
       large = {require('./LocalAnaesthetic.jpeg')}
               alt= "Local Anaesthetic"
               hideDownload= {true}
               hideZoom ={true}/>
                <p>-------------------------</p>
  <li className= "adjustIcon">ABG syringe and needle</li>
  <ModalImage  
       small ={require('./inspection.png')}
       large = {require('./ABGsyringe.jpeg')}
               alt= "ABG syringe and needle"
               hideDownload= {true}
               hideZoom ={true}/>
                <p>-------------------------</p>
  <li className= "adjustIcon">Gauze/tape or « sticky dot » </li>
  <ModalImage  
       small ={require('./inspection.png')}
       large = {require('./StickyDot.jpeg')}
               alt= "sticky dot"
               hideDownload= {true}
               hideZoom ={true}/>
                <p>-------------------------</p>
  <li className= "adjustIcon">Sharp’s bin</li>
  <ModalImage  
       small ={require('./inspection.png')}
       large = {require('./SharpsBin.jpeg')}
               alt= "Sharp’s bin"
               hideDownload= {true}
               hideZoom ={true}/>
                <p>-------------------------</p>
</ul>

<li className= "adjustIcon">See all equipment</li>
<ModalImage  
       small ={require('./inspection.png')}
       large = {require('./AllEquipment.jpeg')}
               alt= "All equipment"
               hideDownload= {true}
               hideZoom ={true}/>
<h1>Procedure Steps</h1>

<div>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='MSdama_0LXc' onClose={() => this.setState({isOpen: false})} />
        <button className= 'button'  onClick={this.openModal}><span>Watch Video</span></button>
      </div>

<ol>
   <li>Allen’s test to check collateral circulation is recommended (Clench fist for 30 seconds. Apply pressure over both ulnar and radial arteries. Open hand revealing blanching appearance. Release ulnar artery and watch for colour return with 5-15 seconds)</li>
   <li>Position wrist (dorsiflexion to approc 60 degrees – can put rolled up flannel under wrist to get correct position). See ABG Technique below for picture of positioning.</li>
   <li>Plapate the radial artery</li>
   <li>Clean the area with a snab – allow 30 seconds ro dry</li>
   <li>Infiltrate subcutaneously with local anaesthetic (if indicated)</li>
   <li>Pull back plunger to 1.5mls</li>
   <li>Insert the needle at 30-45 degrees to skin until you get flash back</li>
   <li>Allow syringe to fill : 0.7-1.5ml. (The syringe should self fill)</li>
   <li>Remove needle and activate syringe safety device</li>
   <li>Cover puncture site with gauze or ‘sticky dot’ and apply firm pressure</li>
   <li>Dispose of the needle</li>
   <li>Cap syringe, then expel any excess air through cap</li>
   <li>Maintain firm pressure for approx 5min (patient can do this for you, but give them specific instructions to apply firm pressure)</li>
</ol>
<li className= "adjustIcon">See ABG Technique </li>
<ModalImage  
       small ={require('./inspection.png')}
       large = {require('./ABGtechnique.jpeg')}
               alt= "ABG Technique"
               hideDownload= {true}
               hideZoom ={true}/>

 <p align="center"> Thanks for your attention!</p> 
</div>
		);
	}
}

export default ABG;