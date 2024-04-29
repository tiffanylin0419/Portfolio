import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import map from "../../Assets/Projects/map.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={map}
              title="Strategy Conquest Game"
              description="After registration, players have the option to join a game accommodating 2 to 4 players. They strategically execute tactics to conquer territories and gather essential resources. We achieved an 86% line coverage through rigorous unit testing and integration testing."
              ghLink="https://github.com/tiffanylin0419/RISC-Game"
              // demoLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
