import React from 'react'
import 'font-awesome/css/font-awesome.css';



const About = () => {
  return (
    <div className='container-fluid' id='bg-stay'>
        <div className="col-sm-6" id='txet-ab'>
        <p>ABOUT PRODUCT</p>
        <h1>So how does the</h1>
        <span>product work?</span>

        </div>
<div className="row text-center" id='about-flex'>
    <div className="col-xl-4" id='colOne'>
        <i class="fas fa-headset" id='icon'></i>
        <h1>Awesome Support</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan diam at nibh tempus, in semper nisi ullamcorper. Praesent sed gravida lacus. Suspendisse potenti.</p>
        <button type='button' className='btn'>Learn more</button>
    </div>
    <div className="col-xl-4" id='colOne'>
    <i class="fas fa-bolt" id='icon'></i>
        <h1>Multi-purpose</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan diam at nibh tempus, in semper nisi ullamcorper. Praesent sed gravida lacus. Suspendisse potenti.</p>
        <button type='button' className='btn'>Learn more</button>
    </div>
    <div className="col-xl-4" id='colOne'>
    <i class="fas fa-gem" id='icon'></i>
        <h1>Clean Design</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan diam at nibh tempus, in semper nisi ullamcorper. Praesent sed gravida lacus. Suspendisse potenti.</p>
        <button type='button' className='btn'>Learn more</button>
    </div>

</div>
      
    </div>
  )
}

export default About
