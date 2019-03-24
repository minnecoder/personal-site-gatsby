import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./header.module.css"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.nav}>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <h4>
            <Link to="/">Sean Parkin</Link>
          </h4>
        </div>
        <ul className={styles.navlinks}>
          <Link to="/#home">Home</Link>
          <Link to="/#about">About</Link>
          <Link to="/#work">Projects</Link>
          <Link to="/#contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </ul>
      </div>
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
