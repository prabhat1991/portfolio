import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Prabhat Kumar </span>
            from <span className="purple"> Ranchi, Jharkhand, India.</span>
            <br />I am a senior Java Developer holding B.Tech as my highest educational degree and developed applications under multiple industry domains as my profession.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Watch TV-Series and Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Going for Long Drives
            </li>
            <li className="about-activity">
              <ImPointRight /> Gardening
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Prabhat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
