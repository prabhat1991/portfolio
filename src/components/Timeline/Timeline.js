import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import TimelineItem from "./TimelineItem";
import {timelineData} from './TimelineData';

function Timeline() {
    return (
      <Container fluid className="project-section">
        <h1 className="project-heading"> My proffessional  <strong className="purple">Timeline </strong> </h1>
        <p style={{ color: "white" }}>Companies at which I gained my experiences from</p>
        <Particle />
        <Container>
          {timelineData.length > 0} ?
          <div className="timeline-container">
            {timelineData.map((data, idx) => (
                <TimelineItem data={data} key={idx} className="timeline-item-content" />
            ))}
        </div>
                 
        </Container>
      </Container>
    );
  }

export default Timeline;
