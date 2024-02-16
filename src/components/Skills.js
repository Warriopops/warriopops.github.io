import {Container, Col, Row} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';


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
                            <p>My skills</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <h5>Front Development</h5>
                                    <img src={meter1} alt="Image"></img>
                                    <h5>HTML & CSS</h5>
                                    <h5>Javascript</h5>
                                    <h5>React</h5>
                                    <h5>VueJS</h5>
                                    <h5>StimulusJS</h5>
                                    <h5>Boostrap & Library</h5>
                                </div>
                                <div className="item">
                                    <h5>Back Development</h5>
                                    <img src={meter2} alt="Image"></img>
                                    <h5>Ruby on Rails</h5>
                                    <h5>Node.js</h5>
                                    <h5>MVC</h5>
                                </div>
                                <div className="item">
                                    <h5>Database</h5>
                                    <img src={meter3} alt="Image"></img>
                                    <h5>SQL & Active Record</h5>
                                    <h5>PostgreSQL & SQLite</h5>
                                </div>
                                <div className="item">
                                    <h5>Others</h5>
                                    <img src={meter1} alt="Image"></img>
                                    <h5>Github</h5>
                                    <h5>Figma</h5>
                                    <h5>Heroku</h5>
                                    <h5>Tampermonkey</h5>
                                    <h5>API</h5>
                                </div>
                                <div className="item">
                                    <h5>Soft Skills</h5>
                                    <img src={meter1} alt="Image"></img>
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