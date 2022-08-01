import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Form, Row } from "react-bootstrap";
import ScrollToTop from "react-scroll-to-top";
import "../style/Footer.css";
function Footer() {
  return (
    <Container className="footer text-white" fluid>
      <ScrollToTop smooth top="100" />
      <Row className="footer_row">
        <Col className="mt-4" lg={4} sm={12}>
          <span className="logo_texts">
            <FontAwesomeIcon className="logos" icon={faPaw} />
            Pet<span>Care</span>
          </span>
          <p className="pt-3 pb-2">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <FontAwesomeIcon className="footer_icon" icon={faFacebook} />
          <FontAwesomeIcon className="footer_icon ms-3" icon={faInstagram} />
          <FontAwesomeIcon className="footer_icon ms-3" icon={faTwitter} />
        </Col>
        <Col className="mt-4" lg={3} sm={12}>
          <h3 className="footer_title pb-3">Services</h3>
          <li>Commercial Cleaning</li>
          <li className="mt-2">Office Cleaning</li>
          <li className="mt-2">Building Cleaning</li>
          <li className="mt-2">Floor Cleaning</li>
          <li className="mt-2">Apartment Cleaning</li>
        </Col>
        <Col className="mt-4" lg={5} sm={12}>
          <h3 className="footer_title pb-3">Newsletters</h3>
          <p>
            we denounce with righteous indignation and dislike men who are so
            beguiled and demoralized by the charms of pleasure of the moment
          </p>
          <div className="position_make">
            <Form.Control
              className="newsletters"
              type="email"
              placeholder="Enter email"
            />
            <FontAwesomeIcon className="newsletter_icon" icon={faPaperPlane} />
          </div>
        </Col>
        <hr className="hr_style"></hr>
        <p className="text-center footer_p ">
          Copyright ©2022 All rights reserved | This template is made with by
          RaFi
        </p>
      </Row>
    </Container>
  );
}

export default Footer;
