import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            
    <nav className="navbar">
      <div className="navbar__container">
        <Link to="/" id="navbar__logo">BOOkpod.</Link >
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span> <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/Herosection" className="navbar__links" id="home-page">Home</Link >
          </li>
          <li className="navbar__item">
            <Link to="/Services" className="navbar__links" id="catg-page">Services</Link >
          </li>
          <li className="navbar__item">
            <Link to="/Featured" className="navbar__links" id="Podcast-page"
              >Podcasts</Link 
            >
          </li>
          <li className="navbar__btn">
            <Link to="/Fotter" className="button" id="search">Fotter</Link >
          </li>
        </ul>
      </div>
    </nav>
        </div>
    )
}

export default Navbar
