import React, { useState } from 'react'
import styled from 'styled-components'
import {Nav, Logo, SolutionNav} from '../styles/Nav.styled'
import { Button, ButtonClear } from '../styles/Button.styled'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.svg'
import { NavButtons } from '../styles/Nav.styled'

const NavBar = () => {
const [visibleSolutionNav, setVisibleSolutionNav] = useState(false);
const toggleSolutionNav = () => {
  setVisibleSolutionNav(!visibleSolutionNav);
};
  return (
    <>
      <Nav>
        <Logo>
          <Link to="/">
            <img src={logo}/>
          </Link>
        </Logo>
      <div>
        <NavButtons>
          <li><Link to="/resources">Athlete</Link></li>
          <li><Link to="/contact">Recruiter</Link></li>
          <li><Link to="/">Organization</Link></li>
          <li onClick={toggleSolutionNav}><Link>Solutions </Link></li>
          {visibleSolutionNav && (
            <SolutionNav>
              <p>Tasks</p>
              <p>Tasks</p>
              <p>Tasks</p>
            </SolutionNav>
          )}
        </NavButtons>
      </div>
      <span>
      <NavButtons>
        <Button bg="primary">Log in</Button>
        <Button bg="secondary">Become a partner</Button>
      </NavButtons>
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 8l16 0" />
        <path d="M4 16l16 0" />
      </svg>
      </Nav>
    </>
  )
}

export default NavBar
