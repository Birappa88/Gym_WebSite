import React, { useState } from "react"
import "../css/NavBar.css"
import { Link, NavLink } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import logo from '../images/logo.jpeg'

const NavBar = () => {
  
  const [Mobile, setMobile] = useState(false)

  return (
      <div>
        <nav className='navbar'>
          <Link to='/'> <img src={logo} className='logo' alt="logo" /></Link>
          <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>
            <NavLink to='/home' className='home'>
              <li>Home</li>
            </NavLink>
            <Link to='/about' className='about'>
              <li>About</li>
            </Link>
            <Link to='/pricing' className='pricing'>
              <li>Pricing</li>
            </Link>
            <Link to='/program' className='program'>
              <li>Program</li>
            </Link>
          </ul>
          <button className='mobile-menu-icon' onClick={() => setMobile(!Mobile)}>
            {Mobile ? <ImCross /> : <FaBars />}
          </button>
        </nav>
      </div>
  )
}
export default NavBar
