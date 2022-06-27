import { Accordion, Col, Container, Row } from "react-bootstrap";
import faq from "../assets/images/faq.webp";
import "../style/Faq.css";
function Faq() {
  return (
    <Container className="main-faq" fluid>
      <Row className="faq_row">
        <Col lg={6} sm={12}>
          <h1 className="title">Frequently Asks Questions</h1>
          <p className="text-muted pt-3">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <Accordion className="mt-4" defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>How to train your pet dog?</Accordion.Header>
              <Accordion.Body>
                1. Far far away, behind the word mountains
                <br />
                2. Consonantia, there live the blind texts
                <br /> 3. When she reached the first hills of the Italic
                Mountains
                <br /> 4. Bookmarksgrove, the headline of Alphabet Village
                <br /> 5. Separated they live in Bookmarksgrove righ
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>How to manage your pets</Accordion.Header>
              <Accordion.Body>
                1. Far far away, behind the word mountains
                <br />
                2. Consonantia, there live the blind texts
                <br /> 3. When she reached the first hills of the Italic
                Mountains
                <br /> 4. Bookmarksgrove, the headline of Alphabet Village
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What is the best grooming for pet
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                What are the those reuiremens of pets
              </Accordion.Header>
              <Accordion.Body>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
        <Col lg={6} sm={12}>
          <img className=" img-fluid " src={faq} alt="faq" />
        </Col>
      </Row>
    </Container>
  );
}

export default Faq;
