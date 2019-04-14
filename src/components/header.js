import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

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
  background: #222;
  padding: 15px 0;
`

const LogoLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: #08fdd8;
`
const Navlinks = styled.div`
  display: flex;
  justify-content: space-around;
  width: 30%;
`
const Navlink = styled(Link)`
  text-decoration: none;
  color: #08fdd8;
  font-weight: bold;
`
const Header = ({ siteTitle }) => (
  <HeaderSection>
    <Nav>
      <Navbar>
        <LogoLink to="/">Sean Parkin</LogoLink>
        <Navlinks>
          <Navlink to="/#home" className="navlink">Home</Navlink>
          <Navlink to="/#about">About</Navlink>
          <Navlink to="/#work">Projects</Navlink>
          <Navlink to="/#contact">Contact</Navlink>
          <Navlink to="/blog">Blog</Navlink>
        </Navlinks>
      </Navbar>
    </Nav>
  </HeaderSection>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
