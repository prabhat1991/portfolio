import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
//import tcslogo from "../../Assets/TimeLine/TCS_logo.png";

function TimelineItem({ data }) {
    return (

        <Card className="project-card-view timeline-item">
            <Card.Img variant="top" src={data.logo.url} alt="card-img" style={{ maxHeight: data.logo.height, maxWidth: data.logo.width, background: data.logo.background, alignSelf: "center" }} />

            <Card.Body>
                <Card.Title>
                    <font className="timeline-item-header">{data.position}</font>
                    <br />
                    <font className="timeline-item-sub-header"> ({data.tenure})</font>
                </Card.Title>
                <Card.Text style={{ textAlign: "justify" }}>
                    {data.position}
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                    {data.position}
                </Card.Text>
                <Card.Text style={{ textAlign: "justify" }}>
                    {data.position}
                </Card.Text>
            </Card.Body>

        </Card>
    );
}

export default TimelineItem;
