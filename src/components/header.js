import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Nav from "./Nav"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#464745`,
      boxShadow: `0 6px 31px -2px rgba(0, 0, 0, 0.5)`,
      height: `96`,
    }}
  >
    <Nav title={siteTitle} />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
