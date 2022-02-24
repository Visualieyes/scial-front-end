import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

// import LoginNavbar from "../components/layout/MainNavbar/VisitorNavbar";
import LoginFooter from "../components/layout/LoginFooter";

const OldVisitorLayout = ({ children, noFooter }) => (
  <Container fluid>
    <Row>
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {/* {!noNavbar && <LoginNavbar />} */}
        {children}
        {!noFooter && <LoginFooter />}
      </Col>
    </Row>
  </Container>
);

OldVisitorLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

OldVisitorLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default OldVisitorLayout;