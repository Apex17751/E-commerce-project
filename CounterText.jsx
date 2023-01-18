import React from 'react'
import Counter from './Counter'

const CounterText = () => {
  return (
    <div>
      <div className="container" id='scroll-text'>
      <h3>SOME STATISTICS</h3>
      <h1>Lets crack some <span>numbers</span></h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Integer accumsan diam at nibh tempus, in semper nisi
ullamcorper.</p>
      </div>
      <div className="container">
        <Counter />
      </div>
    </div>
  )
}

export default CounterText
