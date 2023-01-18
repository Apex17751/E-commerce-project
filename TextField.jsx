import React from 'react'
import ScrollReveal from 'scrollreveal'


const TextField = () => {
  return (
    <div className="jumbo">
      {/*<img src={BgImage} alt="" />*/}
    <div className='texts'>
      <h1 className='tetx'>SEO becoming a </h1> <h1 className='textz'>Normalized Marketing Tactic Today</h1>
      <button type='button'>Buy Now...</button>
    </div>
    </div>
  )
}
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
  
  });
  ScrollReveal().reveal('h1', {delay: 500, origin: 'right'})
  

export default TextField
