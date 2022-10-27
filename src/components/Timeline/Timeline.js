import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import TimelineItem from "./TimelineItem";
import { timelineData } from './TimelineData';

function Timeline() {
  return (

    <Container fluid className="project-card">
      <h1 className="project-heading"> My proffessional  <strong className="purple">Timeline </strong> </h1>
      <p style={{ color: "white" }}>Companies at which I gained my experiences from</p>
      <Particle />
      <Container>

        <div className="timeline-container">
          {timelineData.map((data, idx) => (
            <TimelineItem data={data} key={idx} />
          ))}
        </div>

      </Container>
    </Container>
  );
}

export default Timeline;
