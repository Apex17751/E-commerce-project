import React from 'react'
import MyCarousel from './MyCarousel'
import ScrollReveal from 'scrollreveal'


const Carousel = () => {
  return (
<div className="container" id='cont'>
<div className='row' id='block-row'>
        <div className="col-xl-5 " id='abbo'>
            <h3>Building your vision</h3>
            <h1>Lots of useful features for your SEO market</h1>
            <hr></hr>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere fringilla eros sed fermentum.</p>
            <hr></hr>
             <p>Phasellus ornare ex vitae nulla interdum, id faucibus elit congue. Aliquam odio tortor, interdum eu iaculis at, bibendum posuere ex. Vestibulum blandit, lacus et elementum euismod, lorem ipsum ornare lorem, at dictum odio lacus vitae justo. Integer vel quam tristique, semper nisl id, dictum libero.</p>
        </div>
        <div className="col-xl-6">
        <MyCarousel />
        </div>
        
      
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
  ScrollReveal().reveal('h1, h3, h4, p,', {delay: 500, origin: 'right'})
  

export default Carousel
