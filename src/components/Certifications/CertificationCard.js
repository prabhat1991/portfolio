import React from "react";
import { Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { TiDownload } from "react-icons/ti";

function CertificationCard(props) {
    return (
        <Card className="project-card-view">
            <Card.Img variant="top" src={props.imgPath} alt="card-img" style={{ width: "400px", height: "250px" }} />
            <Card.Body>
                <Row style={{ justifyContent: "center", positioon: "relative" }}>
                    <Button variant="primary"
                        href={props.pdfPath}
                        target="_blank"
                        style={{ maxWidth: "250px" }}
                    >
                    <TiDownload /> &nbsp;Download Certificate
                    </Button>
                </Row>
            </Card.Body>
        </Card>
    );
}
export default CertificationCard;
