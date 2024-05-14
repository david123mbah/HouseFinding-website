import React from 'react'
import './Hero.css'
import './index.css'

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerwidth flexCenter hero-Container " >
        {/* left side */}
        <div className=" FlexColstart hero-left">
          <div className="hero-title">
            <h1>
              Find Your <br/>Dream Home <br/>Today
            </h1>
          </div>
          <div className="flexColstart hero-des">
            <span>
             are you ready to strat the search for your homr? Look no futher
            </span>
            <span>
             Move-in is Here for you.
            </span>
            <div className="search-bar">
              Search bar
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./hero-image.png" alt="" />
          </div>
        </div>

</div>
    </section>
   
  )
}

export default Hero

