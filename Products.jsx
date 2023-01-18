import React from 'react'
import bgImage from './image.png'

const Products = () => {
  return (
    <div className='container-fluid' id='product'>
      <div className="row">
      <div className='col-sm-3' id="bg-products">
        <img src={bgImage} alt=""  /></div>

     <div className="col-md-5 " id='pro-text'>
     <h1>
Something about <span>product</span></h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus lectus, lobortis sit amet eleifend eleifend, iaculis ac justo.</p>
<div className="col-md-12" id='accordions'>
      <p>Some kinds of features</p>
      <p>Check this wow feature</p>
      <p>This is feature</p>
     </div> 
     </div>
     
      </div>
    </div>
  )
}

export default Products
