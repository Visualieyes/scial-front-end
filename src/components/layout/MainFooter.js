import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Nav, NavItem, NavLink } from "shards-react";
import { Link } from "react-router-dom";

const MainFooter = ({ contained, menuItems, copyright, email }) => (
  <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
    <Container fluid={contained}>
      <Row>
        <Nav>
          {menuItems.map((item, idx) => (
            <NavItem key={idx}>
              <NavLink tag={Link} to={item.to}>
                {item.title}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <span className="copyright my-auto">{email}</span>
        <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
      </Row>
    </Container>
  </footer>
);

MainFooter.propTypes = {
  /**
   * Whether the content is contained, or not.
   */
  contained: PropTypes.bool,
  /**
   * The menu items array.
   */
  menuItems: PropTypes.array,
  /**
   * The copyright info.
   */
  copyright: PropTypes.string,

  email: PropTypes.string
};

MainFooter.defaultProps = {
  contained: false,
  email: "Contact: Scialinc@gmail.com",
  copyright: "Copyright © 2022 Scial Technologies",
  menuItems: [
    // {
    //   title: "Home",
    //   to: "#"
    // },
    // {
    //   title: "Services",
    //   to: "#"
    // },
    // {
    //   title: "About",
    //   to: "#"
    // },
    // {
    //   title: "Dashboard",
    //   to: "#"
    // },
    // {
    //   title: "Contact",
    //   to: "#"
    // }
  ]
};

export default MainFooter;
