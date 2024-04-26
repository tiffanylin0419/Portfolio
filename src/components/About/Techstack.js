import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
  DiCss3,
  DiSwift,
  DiDjango,
} from "react-icons/di";
import {
  SiPostgresql,
  SiTypescript,
  SiMysql,
  SiDocker,
  SiUnity,
  SiPytorch,
} from "react-icons/si";
import TechLabel from "./TechLabel";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <TechLabel text="Python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <TechLabel text="Java" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        <TechLabel text="C++" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <TechLabel text="JavaScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
        <TechLabel text="TypeScript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <TechLabel text="React" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <TechLabel text="Node.js" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        <TechLabel text="HTML" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <TechLabel text="CSS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <TechLabel text="Git" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <TechLabel text="MySQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <TechLabel text="PostgreSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDjango />
        <TechLabel text="Django" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <TechLabel text="Docker" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiUnity />
        <TechLabel text="Unity" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiSwift />
        <TechLabel text="Swift" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch />
        <TechLabel text="PyTorch" />
      </Col>
    </Row>
  );
}

export default Techstack;
