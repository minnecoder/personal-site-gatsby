import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import media from './media'

const Nav = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  z-index: 1;
  background: #fff;
  height: 60px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
`

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0;
  ${media.tablet`
  flex-direction: column;
  `}
`

const LogoLink = styled(Link)`
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #38384f;
  padding-left: 4rem;
`
const Navlinks = styled.div`
  padding-right: 4rem;
`
const Navlink = styled(Link)`
  text-decoration: none;
  color: #38384f;
  padding: 0 1.5rem;
  &:hover {
    border-bottom: 2px solid #18a4e0;
  }
`
const Header = () => (
  <Nav>
    <Navbar>
      <LogoLink to="/">Sean Parkin</LogoLink>
      <Navlinks>
        <Navlink to="/#home" className="navlink">
          Home
        </Navlink>
        <Navlink to="/#about">About</Navlink>
        <Navlink to="/#work">Portfolio</Navlink>
        <Navlink to="/#contact">Contact</Navlink>
        <Navlink to="/blog">Blog</Navlink>
      </Navlinks>
    </Navbar>
  </Nav>
)

export default Header
