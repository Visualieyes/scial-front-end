import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { Container, Navbar } from "shards-react";

import VisitorNav from "../VisitorNavbar/VisitorNavbarNav";
import NavbarToggle from "../NavbarToggle";

const VisitorNavbar = ({ layout, stickyTop }) => {
  const classes = classNames(
    "main-navbar",
    "bg-white",
    stickyTop && "sticky-top"
  );

  

  return (
    <div className={classes}>
      <Container className="p-0">
        <Navbar type="light" className="align-items-stretch flex-md-nowrap p-0">
          <VisitorNav />
          <NavbarToggle />
        </Navbar>
      </Container>
    </div>
  );
};

VisitorNavbar.propTypes = {
  /**
   * The layout type where the MainNavbar is used.
   */
  layout: PropTypes.string,
  /**
   * Whether the main navbar is sticky to the top, or not.
   */
  stickyTop: PropTypes.bool
};

VisitorNavbar.defaultProps = {
  stickyTop: true
};

export default VisitorNavbar;