import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiPhp,
  DiAngularSimple,
  DiLaravel,
  DiIonic,
  DiDotnet
} from "react-icons/di";
import {
  SiFirebase,
  SiMysql,
  SiMicrosoftsqlserver,
  SiFlutter,
  SiCsharp
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiAngularSimple />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiIonic />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter />
      </Col>
      

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPhp />
      </Col>

   <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiDotnet />
      </Col>
      

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiLaravel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
   
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
    </Row>
  );
}

export default Techstack;
