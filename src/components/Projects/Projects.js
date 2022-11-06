import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import portfoliApp from "../../Assets/Projects/Portfolio-App.png";
import roomChat from "../../Assets/Projects/room-chat.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Publicly Deployed Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few sample projects developed and deployed for public access.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={roomChat}
              isBlog={false}
              title="Room Chat"
              description="Personal Chat Room to share current location and hangout with friends build with Node.js."
              ghLink="https://github.com/prabhat1991"
              demoLink="https://prabhat-nodejs-chat-app.herokuapp.com//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfoliApp}
              isBlog={false}
              title="Prabhat | Portfolio"
              description="My personal Portfolio App listing y tech expertise and personal details"
              ghLink="https://github.com/prabhat1991"
              demoLink="https://prabhats-portfolio.herokuapp.com//"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
