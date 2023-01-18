import React, {useState} from 'react'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Counter = () => {
    const [counterOn, setCounterOn] = useState(false)
    
  return (
    
    <div className='container' id='scroll'>

        <div className="row" id='row-scr'>
         <hr />
         <div className="col-sm-12" id='column'>
      <ScrollTrigger className='fast' onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>    
       {counterOn && <CountUp start={0} end={1000} duration={4} delay={0}/>}
       <h2>Finished Projects</h2>
      <hr />
        </ ScrollTrigger >
      <ScrollTrigger className='fast' onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      
       {counterOn && <CountUp start={0} end={740} duration={2} delay={0}/>}
       <h2>Happy Customers</h2>
      <hr />
        </ ScrollTrigger >
      </div>


      <div className="col-sm-6" id='scid'>
      <ScrollTrigger className='fast' onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      
      {counterOn && <CountUp start={0} end={800} duration={2} delay={0}/>}
      <h2>Updates made</h2>
     <hr />
       </ ScrollTrigger >
       <ScrollTrigger className='fast' onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
      
      {counterOn && <CountUp start={0} end={1000} duration={2} delay={0}/>}
      <h2>Theme features</h2>
     <hr />
       </ ScrollTrigger >
      </div>
      
     </div>


        </div>

    
  )
  
}



export default Counter
