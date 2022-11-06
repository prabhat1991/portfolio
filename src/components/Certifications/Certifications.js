import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import az900 from "../../Assets/Certificates/az-900.png";
import ccna from "../../Assets/Certificates/ccna.jpg";
import ocjp from "../../Assets/Certificates/ocjp.jpeg";
import rhce from "../../Assets/Certificates/rhce.jpg";
import rhcsa from "../../Assets/Certificates/rhcsa.png";
import ocjpcert from "../../Assets/Certificates/cert-pdf/ocjp-cert.pdf";
import rhcecert from "../../Assets/Certificates/cert-pdf/rhce-cert.pdf";
import rhcsacert from "../../Assets/Certificates/cert-pdf/rhcsa-cert.pdf";
import Particle from "../Particle";
import CertificationCard from "./CertificationCard";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My technical<strong className="purple"> Global Certifications </strong>
        </h1>
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={rhcsa}
              title="Red Hat Certified System Administrator"
              pdfPath={rhcsacert}
              ghLink="https://github.com/prabhat1991"
              demoLink="https://prabhat-nodejs-chat-app.herokuapp.com//"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={rhce}
              title="Red Hat Certified Engineer"
              pdfPath={rhcecert}
              ghLink="https://github.com/prabhat1991"
              demoLink="https://prabhat-nodejs-chat-app.herokuapp.com//"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={ccna}
              title="Cisco Certified Network Administrator"
              pdfPath={rhcecert}
              ghLink="https://github.com/prabhat1991"
              demoLink="https://prabhat-nodejs-chat-app.herokuapp.com//"
            />
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={ocjp}
              title="Oracle Certified Java Programmer"
              pdfPath={ocjpcert}
              ghLink="https://github.com/prabhat1991"
              demoLink="https://prabhat-nodejs-chat-app.herokuapp.com//"
            />
          </Col>

          <Col md={4} className="project-card">
            <CertificationCard
              imgPath={az900}
              title="Microsoft Azure Fundamentals"
              pdfPath={rhcecert}
              ghLink="https://github.com/prabhat1991"
              demoLink="https://prabhat-nodejs-chat-app.herokuapp.com//"
            />
          </Col>
          
        </Row>

      </Container>
    </Container>
  );
}

export default Projects;
