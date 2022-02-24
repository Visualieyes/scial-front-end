import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import VisitorNavbar from "../components/layout/MainNavbar/VisitorNavbar/VisitorNavbar";
import LoginFooter from "../components/layout/LoginFooter";

const VisitorLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
      <row>
      {!noNavbar && <VisitorNavbar />}
      </row>
    <Row>
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {children}
    
      </Col>
    </Row>
    <row>
    {!noFooter && <LoginFooter />}
    </row>
  </Container>
);

VisitorLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

VisitorLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default VisitorLayout;