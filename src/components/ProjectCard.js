import { Col } from "react-bootstrap";
import React from 'react';


export const ProjectCard = ({title, description, imgUrl, linkUrl}) => {
    return (
        <Col sm={6} md={4}>
            <a href={linkUrl} target="_blank" rel="noreferrer">
                <div className="proj-imgbx">
                    <img src={imgUrl} className="project-card-image"></img>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </a>
        </Col>
    )
}