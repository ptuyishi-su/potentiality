import React from 'react'
import styled from 'styled-components'
import {Nav} from '../styles/Nav.styled'
import { Button } from '../styles/Button.styled'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
      <Nav >
      <div>
        <li><Link to="/">Logo</Link></li>
      </div>
      <div>
        <ul>
          <li><Link to="/about">Why Potentiality</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/contact">Solutions</Link></li>
          <li><Link to="/">Events</Link></li>
        </ul>
      </div>
      <div>
        <Button>Sign in</Button>
        {/* <Button>Become a partner</Button> */}
      </div>
      </Nav>
    </>
  )
}

export default NavBar
