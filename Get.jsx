import React from 'react'

const Get = () => {
  return (
    <div className='container-fluid' id='getTouch'>
        <div className='col-sm-12' id="get-text">
            <h1><span>Get</span> in Touch</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacus
lectus, lobortis sit amet eleifend eleifend, iaculis ac justo.</p>
        </div>
        <div className="forms">
        <div class="mb-3">
  <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Name" />
</div>
<div class="mb-3">
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Email" />
</div>
<div class="mb-3">
  
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Message text'></textarea>
</div>

<div class="mb">
  <input type="submit" className='submit' value='Send message' id="exampleFormControlInput1"  />
</div>

        </div>
      
    </div>
  )
}

export default Get
