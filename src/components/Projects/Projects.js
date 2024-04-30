import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import map from "../../Assets/Projects/map.png";
import ride from "../../Assets/Projects/ride.png";
import free from "../../Assets/Projects/free.png";
import proxy from "../../Assets/Projects/proxy.png";
import maze from "../../Assets/Projects/maze.png";
import stock from "../../Assets/Projects/stock.png";

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
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ride}
              title="Ride Sharing Website"
              description="A compact Uber-like platform with robust user registration features. Empowered users to request and join rides, while providing registered drivers with tools for efficient ride booking and management."
              ghLink="https://github.com/tiffanylin0419/Uber"
              // demoLink=""
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proxy}
              title="HTTP Proxy Server"
              description="Handles GET, POST, and CONNECT requests concurrently. The caching mechanism follows RFC7234 guidelines to enhance efficiency by storing and serving cached HTTP responses based on validation and expiration rules. Logging for debugging and analysis purposes."
              ghLink="https://github.com/tiffanylin0419/HTTP-Caching-Proxy"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maze}
              title="AR Maze App"
              description="Navigate through intricate virtual mazes seamlessly integrated into the real world via your device's camera. Use intuitive gestures to interact with the environment, tilting the image to guide the ball through twists, turns, and challenges."
              ghLink="https://github.com/tiffanylin0419/AR-maze"
              demoLink="https://www.youtube.com/shorts/UxowxyAzJcs"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={stock}
              title="Stock-Exchange-Engine"
              description="Matches transaction orders in parallel, leveraging row-level locking in the database for optimal efficiency. To ensure scalability and prevent exceeding database connection limits, excess requests are intelligently queued for processing."
              ghLink="https://github.com/tiffanylin0419/Stock-Exchange-Engine"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={free}
              title="Thread-Safe Memory Allocator"
              description="Explored the First Fit and Best Fit allocation strategies, evaluating their respective tradeoffs. Implemented thread safety mechanisms with both a locked version, leveraging pthread mutex, and a lock-free version using Thread Local Storage."
              ghLink="https://github.com/tiffanylin0419/ECE650/tree/main/proj1"
            />
          </Col>
          


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
