import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";

export const Contact = () => {
    const formInitialDetails = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    }
    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState("Send");
    const [status, setStatus] = useState({});
    const [verifed, setVerifed] = useState(false);
    function onChange() {
        setVerifed(true);
      }

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        setVerifed(false);
        e.preventDefault();

        setButtonText('Sending...');
        try {
            const response = await fetch("https://www.thomas-laize.online/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8",
                },
                body: JSON.stringify(formDetails),
            });
    
            const result = await response.json();
    
            setButtonText("Send");
            setFormDetails(formInitialDetails);
    
            if (result.code === 200) {
                setStatus({ success: true, message: "Message sent successfully" });
            } else {
                setStatus({ success: false, message: "Something went wrong, please try again later" });
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus({ success: false, message: "An error occurred, please try again later" });
        }
    }

    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={6}>
                        <div className="wrapper text-center">
                        <form onSubmit={handleSubmit}>
                            <h2>Send me an email !</h2>
                            <Row>
                                <Col sm={6} className="px-1 input-box">
                                    <i class='bx bx-user'></i>
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate("firstName", e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1 input-box">
                                    <i class='bx bx-user'></i>
                                    <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate("lastName", e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1 input-box">
                                    <i class='bx bx-envelope' ></i>
                                    <input type="email" value={formDetails.email} placeholder="E-mail" onChange={(e) => onFormUpdate("email", e.target.value)}></input>
                                </Col>
                                <Col sm={6} className="px-1 input-box">
                                    <i class='bx bx-phone' ></i>
                                    <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate("phone", e.target.value)}></input>
                                </Col>
                                <Col>
                                    <i class='bx bx-comment-edit' ></i>
                                    <textarea type="tel" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate("message", e.target.value)}></textarea>
                                    <ReCAPTCHA className="captcha"
                                        sitekey="6Ldf3G8pAAAAAP88gC7TYNT_aQLPy1kT5sO2J7vK"
                                        onChange={onChange}
                                    />
                                    <button className="btn" type="submit" disabled={!verifed}><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message && 
                                    <Col>
                                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}



