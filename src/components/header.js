import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "../components/header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        // padding: `1.45rem 1.0875rem`,
      }}
    >
      <nav>
        <div className="navbar">
          <div className="logo">
            <h4>
              <Link to="/">Sean Parkin</Link>
            </h4>
          </div>
          <ul className="nav-links">
            <Link to="/#home">Home</Link>
            <Link to="/#about">About</Link>
            <Link to="/#skills">Skills</Link>
            <Link to="/#work">Projects</Link>
            <Link to ="/#contact">Contact</Link>
            <Link to="/blog">Blog</Link>
          </ul>
        </div>
      </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
