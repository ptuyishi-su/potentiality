import React from 'react'
import styled from 'styled-components'
import {Nav, Logo} from '../styles/Nav.styled'
import { Button } from '../styles/Button.styled'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { NavButtons } from '../styles/Nav.styled'
const NavBar = () => {
  return (
    <>
      <Nav >
        <Logo>
          <Link to="/">
            <img src={logo}/>
          </Link>
        </Logo>
      <div>
        <NavButtons>
          <li><Link to="/about">Solutions</Link></li>
            <li><Link to="/resources">Athlete</Link></li>
            <li><Link to="/contact">Coach</Link></li>
          <li><Link to="/">Organization</Link></li>
        </NavButtons>
      </div>
      <NavButtons>
        <Button>Sign in</Button>
        <Button>Become a partner</Button>
      </NavButtons>
      </Nav>
    </>
  )
}

export default NavBar
