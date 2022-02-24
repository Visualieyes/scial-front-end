import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import SignUpForm from "../components/user-sign-up/SignUpForm";

const Home = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Scial" subtitle="Welcome" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="8">
        <SignUpForm />
      </Col>
    </Row>
  </Container>
);

export default Home;