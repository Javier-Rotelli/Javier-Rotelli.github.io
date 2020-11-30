import { Alignment, AnchorButton, Navbar } from "@blueprintjs/core"
import React from "react"

const Nav = ({ title }) => (
  <Navbar>
    <Navbar.Group align={Alignment.LEFT}>
      <Navbar.Heading>{title}</Navbar.Heading>
      <AnchorButton className="bp3-minimal" icon="home" text="Home" href="/" />
      <AnchorButton
        className="bp3-minimal"
        icon="heat-grid"
        text="Generativo"
        href="generativo"
      />
    </Navbar.Group>
  </Navbar>
)

export default Nav
