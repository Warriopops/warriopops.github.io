import {Container, Col, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        },
    };
    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>The skills I acquired during my reconversion</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <h5 className="tagline">Front Development</h5>
                                    <h5>HTML & CSS</h5>
                                    <h5>Javascript</h5>
                                    <h5>React</h5>
                                    <h5>VueJS</h5>
                                    <h5>StimulusJS</h5>
                                    <h5>Boostrap & Library</h5>
                                </div>
                                <div className="item">
                                    <h5 className="tagline">Back Development</h5>
                                    <h5>Ruby on Rails</h5>
                                    <h5>Node.js</h5>
                                    <h5>MVC</h5>
                                </div>
                                <div className="item">
                                    <h5 className="tagline">Database</h5>
                                    <h5>SQL & Active Record</h5>
                                    <h5>PostgreSQL & SQLite</h5>
                                </div>
                                <div className="item">
                                    <h5 className="tagline">Others</h5>
                                    <h5>Github</h5>
                                    <h5>Figma</h5>
                                    <h5>Heroku</h5>
                                    <h5>Tampermonkey</h5>
                                    <h5>API</h5>
                                </div>
                                <div className="item soft">
                                    <h5 className="tagline">Soft Skills</h5>
                                    <h5>Self-taught</h5>
                                    <h5>Team work</h5>
                                    <h5>Like to learn</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}