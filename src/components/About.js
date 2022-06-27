import {
  faHandHoldingMedical,
  faHandshake,
  faPhoneFlip,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";
import img from "../assets/images/2nd.webp";
import "../style/About.css";
function About() {
  return (
    <Container className="about">
      <Row className="about_row">
        <Col lg={6} sm={12}>
          <img className="about_img img-fluid" src={img} alt="about" />
        </Col>
        <Col className="col_2" lg={6} sm={12}>
          <h1 className="about_title">Why Choose Us?</h1>
          <Row>
            <Col className="separete_about" lg={6}>
              <div className="abouts">
                <div className="about_icon d-flex align-items-center justify-content-center">
                  <span
                    className="icon2"
                    style={{ color: "white", fontSize: "1.8rem" }}
                  >
                    <FontAwesomeIcon icon={faHandHoldingMedical} />
                  </span>
                </div>
                <div className="about_text">
                  <h2>Care Advices</h2>
                  <p className="about_p">
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
            </Col>
            <Col className="separete_about" lg={6}>
              <div className="abouts">
                <div className="about_icon d-flex align-items-center justify-content-center">
                  <span
                    className="icon2"
                    style={{ color: "white", fontSize: "1.8rem" }}
                  >
                    <FontAwesomeIcon icon={faPhoneFlip} />
                  </span>
                </div>
                <div className="about_text">
                  <h2>Customer Supports</h2>
                  <p className="about_p">
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
            </Col>
            <Col className="separete_about" lg={6}>
              <div className="abouts">
                <div className="about_icon d-flex align-items-center justify-content-center">
                  <span
                    className="icon2"
                    style={{ color: "white", fontSize: "1.8rem" }}
                  >
                    <FontAwesomeIcon icon={faHandshake} />
                  </span>
                </div>
                <div className="about_text">
                  <h2>Emergency Services</h2>
                  <p className="about_p">
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
            </Col>
            <Col className="separete_about" lg={6}>
              <div className="abouts">
                <div className="about_icon d-flex align-items-center justify-content-center">
                  <span
                    className="icon2"
                    style={{ color: "white", fontSize: "1.8rem" }}
                  >
                    <FontAwesomeIcon icon={faHandHoldingMedical} />
                  </span>
                </div>
                <div className="about_text">
                  <h2>Veterinary Help</h2>
                  <p className="about_p">
                    Far far away, behind the word mountains, far from the
                    countries
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
