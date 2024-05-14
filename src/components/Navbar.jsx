import React from 'react'
import './Header.css'
import './index.css'


const Navbar = () => {
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth  h-container">
  <div className=" flexCenter h-menu">
    <a href="">
     Home
    </a>
    <a href="">
      About us
    </a>  <a href="">
      Property
      </a><a href="">
      Services
      </a><a href="">
      Agents
      </a>Contact us<a href="">
      <button className="button">
        <a href=""> Log - in</a>
      </button>
      </a><a href="">
     Sing -up
    </a>
    
    
      
  </div>


      </div>
    </section>
  )
}

export default Navbar