import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";
import ContentBoard from "../../postboard/ContentBoard";

const Content = (props) => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={8}>
            <ContentBoard />
          </Col>
          {/*TODO add more things here*/}
          <Col md={{ span: 3, offset: 1 }}>Others</Col>
        </Row>
      </Container>
    </>
  );
};

Content.propTypes = {};

export default Content;
