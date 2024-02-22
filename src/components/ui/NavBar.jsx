import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <nav >
        <ul className='navbar'>
          <li><Link to="/">Logo</Link></li>
          <li><Link to="/about">Why Potentiality</Link></li>
          <li><Link to="/resources">Resources</Link></li>
          <li><Link to="/contact">Solutions</Link></li>
          <li><Link to="/">Events</Link></li>
          <li><Link to="/resources">Courses</Link></li>
          <li><Link to="/about">Contact</Link></li>



        </ul>
      </nav>
    </div>
  )
}

export default NavBar
