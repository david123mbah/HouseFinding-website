import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerwidth flexCenter hero-Container " >
        <div className="hero-left">
          left section
        </div>
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image" alt="" />
          </div>
        </div>

</div>
    </section>
   
  )
}

export default Hero

