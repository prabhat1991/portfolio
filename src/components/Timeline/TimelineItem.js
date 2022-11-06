import React from "react";
import Card from "react-bootstrap/Card";
//import tcslogo from "../../Assets/TimeLine/TCS_logo.png";

function TimelineItem({ data }) {
    return (

        <div className="timeline-item timeline-card-view">
            <div className="timeline-item-content">
                <Card.Img variant="top" src={data.logo.url} alt="card-img"
                    style={{ maxHeight: data.logo.height, maxWidth: data.logo.width, background: data.logo.background, alignSelf: "center" }} />

                <Card.Title style={{ alignSelf: "center" }}>
                    <font className="timeline-item-header">{data.position}</font>
                    <br />
                    <font className="timeline-item-sub-header">{data.tenure}</font>
                </Card.Title>
                <br />
                {/* <Card.Text>
                    <p className="timeline-resposnibilities">{data.responsibilities}</p>
                </Card.Text> */}

                <ul className="timeline-responsibilities">
                    {
                        data.responsibilities.map((resp, idx) =>
                            <li key={idx}>{resp}</li>
                        )
                    }
                </ul>

                <span className="circle" />
            </div>
        </div>
    );
}

export default TimelineItem;
