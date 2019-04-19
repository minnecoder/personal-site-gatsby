import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import media from './media'

const HeaderSection = styled.div`
  background: #242423;
`

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  width: 100%;
  z-index: 1;
  font-family: Arial, sans-serif;
`

const Navbar = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 8vh;
  border-bottom: 1px solid #222;
  background: rgba(16, 14, 23, 0.9);
  padding: 15px 0;
  ${media.tablet`
  flex-direction: column;
  `}
`

const LogoLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`
const Navlinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
`
const Navlink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 0 0.6rem;
  &:hover {
    color: #08fdd8;
  }
`
const Header = () => (
  <HeaderSection>
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
  </HeaderSection>
)

export default Header
