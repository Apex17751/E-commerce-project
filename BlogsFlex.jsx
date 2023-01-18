import React from 'react'
import mov from './movies.jpg'
import mov2 from './1.jpg'
import mov3 from './2.jpg'

const BlogsFlex = () => {
  return (
    <div className='container'>
        <div className="row" id='row-text'>
        <div className="col-md-3" id='flexer'>
            <img src={mov} alt="" />
            <p className='shuffle'>By shufflehound   March 10, 2017</p>
            <h1>Movies that we Love</h1>
            <p className='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem delectus inventore itaque! Saepe voluptatem fuga ad culpa accusantium.</p>
            <hr />
            <p>Movies</p>
        </div>
        <div className="col-md-3" id='flexer'>
            <img src={mov2} alt="" />
            <p className='shuffle'>By shufflehound   March 10, 2017</p>
            <h1>How to dress with style</h1>
            <p className='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem delectus inventore itaque! Saepe voluptatem fuga ad culpa accusantium.</p>
           <hr />
            <p>Uncategorized</p>
        </div>
        <div className="col-md-3" id='flexer'>
            <img src={mov3} alt="" />
            <p className='shuffle'>By shufflehound   March 10, 2017</p>
            <h1>Trip to the blue ocean</h1>
            <p className='lorem'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem delectus inventore itaque! Saepe voluptatem fuga ad culpa accusantium.</p>
            <hr />
            <p>Travel Uncategorized</p>
        </div>
        </div>

    </div>
  )
}

export default BlogsFlex
