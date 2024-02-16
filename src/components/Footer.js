import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                    <div class="d-flex justify-content-between">
                        <div className="logo">
                            <div class="d-flex justify-content-between">
                                <div className="social-icon">
                                    <a href="https://www.linkedin.com/in/thomas-laiz%C3%A9-b82b4516a/" target="_blank"><img src={navIcon1} alt="lien" /></a>
                                    <a href="https://github.com/Warriopops" target="_blank"><img src={navIcon2} alt="lien" /></a>
                                    <a href="https://github.com/Warriopops" target="_blank"><img src={navIcon3} alt="lien" /></a>
                                </div>
                            </div>
                        </div>
                        <Col sm={6} className="text-center text-sm-end">
                            <p>CopyRight 2024. All Right Reserved - Thomas Laizé</p>
                        </Col>
                        <img src={logo} alt="Logo" width="40vw" height="40vw"></img>
                    </div>
                </Row>
            </Container>
        </footer>
    )
}