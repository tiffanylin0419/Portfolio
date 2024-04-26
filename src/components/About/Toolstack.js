import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import TechLabel from "./TechLabel";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
        <TechLabel text="macOS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <TechLabel text="Visual Studio Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
        <TechLabel text="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
        <TechLabel text="Slack" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
        <TechLabel text="Vercel" />
      </Col>
    </Row>
  );
}

export default Toolstack;
