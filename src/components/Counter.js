import { Col, Container, Row } from "react-bootstrap";
import { CountUp } from "use-count-up";

import "../style/Counter.css";

function Counter() {
  return (
    <Container className="counter_main" fluid>
      <Row className="counter_row">
        <Col className="mt-4" lg={3} sm={12}>
          <h2 className="count">
            <CountUp isCounting end={120} duration={30.1} />
          </h2>
          <p className="counter_p">Customer</p>
        </Col>
        <Col className="mt-4" lg={3} sm={12}>
          <h2 className="count">
            <CountUp isCounting end={520} duration={30.1} />
          </h2>
          <p className="counter_p">Professionals</p>
        </Col>
        <Col className="mt-4" lg={3} sm={12}>
          <h2 className="count">
            <CountUp isCounting end={20} duration={20.1} />
          </h2>
          <p className="counter_p">Products</p>
        </Col>
        <Col className="mt-4" lg={3} sm={12}>
          <h2 className="count">
            <CountUp isCounting end={50} duration={20.1} />
          </h2>
          <p className="counter_p">Pets Hosted</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Counter;
