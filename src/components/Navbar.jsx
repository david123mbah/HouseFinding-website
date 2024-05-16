import React, { useState } from 'react';
import './Header.css';
import './index.css';
import { BiMenuAltRight } from 'react-icons/bi';


const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <img src="./public/images/Icon.png" alt="icon" width={30} />
        <div className="hero-title">
          <h1>
            MOVE-IN
          </h1>
        </div>
        <div className="flexCenter h-menu"
        style={getMenuStyles(menuOpened)}
        >
          <a href="/">Home</a>
          <a href="/">About us</a>
          <a href="/">Property</a>
          <a href="/">Services</a>
          <a href="/">Agents</a>
          <a href="/">Contact us</a>
          <button className="button">
            <a href="/">Log-in</a>
          </button>
        </div>
        <div className="menu-icon" onClick={() =>setMenuOpened((prev) => !prev)}>
        <BiMenuAltRight size={30} />
      </div>
     
      </div>
    </section>
  );
};

export default Navbar;