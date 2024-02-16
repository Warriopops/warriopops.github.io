import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import "animate.css";
import TrackVisibility from 'react-on-screen';


export const Projects = () => {
    const projects = [
        {
            title: "Web CV",
            description: "Video game web resume project with vanilla JS",
            imgUrl: projImg1,
        },
        {
            title: "Naval Battle",
            description: "Self-taught naval battle project with vueJS",
            imgUrl: projImg2,
        },
        {
            title: "Cinehunt",
            description: "Group wagon project in Ruby",
            imgUrl: projImg3,
        },
    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                    <TrackVisibility>
                        {({ isVisible }) =>
                            <div className={isVisible ? "animated__animated animate__bounceslideInUp" : ""}>
                        <h2>Projects</h2>
                        <p>My projects</p>
                        </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
