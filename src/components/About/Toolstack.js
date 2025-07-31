import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiSonarqube,
  SiDocker,
  SiJenkins,

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiSonarqube />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
