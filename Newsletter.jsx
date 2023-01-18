import React from 'react'
import movyes from './movies.jpg'
import jpeg5 from './5.jpg'



const Newsletter = () => {
  return (
    <div className='contai'>
        <div className="row" id='news-bg'>
            <div className="col-sm-3" id='About'>
                <h2>About Us</h2>
                <p>Duis semper mauris vitae purus rhoncus suscipit. Nunc dictum dapibus tellus, at viverra risus pharetra id. Nulla facilisi. Ut mollis et augue non gravida. Sed ipsum urna, venenatis ut vehicula nec, ultrices quis sapien</p>
                   <div className="awesome">
                   <i class="fa fa-twitter" id='tweet' ></i>
                   <i class="fa fa-facebook" id='tweet' ></i>
                   <i class="fa fa-instagram" id='tweet' ></i>
                   <i class="fa fa-github" id='tweet' ></i>
                   </div>
            </div>
            <div className="col-sm-3" id='lati'>
                <h2>Latest News</h2>
                <div className="cont5">
                    <img src={movyes} alt=""  className='movyy' />
                    <div className="cont5-text">
                    <h3>MOVIES</h3>
                    <p>Movies that we love</p>
                    </div>
                </div>
                <hr />
                <div className="cont6">
                    <img src={jpeg5} alt=""  className='movyy' />
                    <div className="cont6-text">
                    <h3>ARTS</h3>
                    <p>Artscraft at work</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3">
                <div className="colu">
                <h2>Contacts</h2>
                </div>
                <p>County, Street name - number</p>
                <p>032 267 899 442</p>
                <p>company@name.com</p>
                <p>Mon.-Fri.: 10-20 Sun.: 12-16</p>
            </div>
            <div className="container-fluid" id='apex'>
            <h3>React website built by Dev_Apex</h3>
        </div>
        </div>
      
    </div>

    
  )
}

export default Newsletter
