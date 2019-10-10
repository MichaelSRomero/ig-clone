import React from 'react';
import instagramIcon from '../assets/images/instagram-icon.png'
import instagramLogo from '../assets/images/instagram-logo.png'
import compassIcon from '../assets/images/compass-icon.png'
import heartIcon from '../assets/images/heart-icon.png'
import userIcon from '../assets/images/user-icon.png'

const NavigationBar = () => {
  return (
    <header>
      {/* Navigation Bar */}
      <nav className="navbar">
        <section className="navbar__content">
          {/* Left side of Navigation Bar */}
          <img className="navbar__icon" src={instagramIcon} alt="Instagram Icon"/>
          <div className="navbar__divider"></div>
          <img className="navbar__logo" src={instagramLogo} alt="Instagram Logo"/>
        </section>
        <input className="navbar__search navbar__search--display" type="text" name="" value="" placeholder="Search"/>
        <section className="navbar__content navbar__content--position-right">
          {/* Right side of Navigation Bar  */}
          <ul className="navbar__list">
            <li><img className="navbar__item" src={compassIcon} alt="explore"/></li>
            <li><img className="navbar__item navbar__item--height" src={heartIcon} alt="Activity"/></li>
            <li><img className="navbar__item" src={userIcon} alt="Profile"/></li>
          </ul>
        </section>
      </nav>
    </header>
  )
}

export default NavigationBar;