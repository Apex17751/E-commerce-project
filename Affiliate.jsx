import React from 'react'
import Beauty from './beauty.png'
import Baloon from './baloon.png' 
import Dog from './dog.png'
import Potato from './potato.png' 
import Muscle from './muscle.png'

const Affiliate = () => {
  return (
    <div className='contai' id='affil'>
        <div className="cont" id='bak'>
            <div className="aff-img">
                <img src={Beauty} alt="" />
                <img src={Baloon} alt="" />
                <img src={Dog} alt="" />
                <img src={Potato} alt="" className='pot' />
  <img src={Muscle} alt="" className='mus'/>
                
            </div>

        </div>
      
    </div>
  )
}

export default Affiliate
