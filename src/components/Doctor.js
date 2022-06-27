import { Col, Container, Row } from "react-bootstrap";
import Doctors from "../assets/images/Doctor.jpg";
import "../style/Doctor.css";

function Doctor() {
  return (
    <Container className="doctor_main" fluid>
      <Row className="doctor_row">
        <Col lg={6} sm={12}>
          <img
            className="img-fluid2 img-thumbnail "
            src={Doctors}
            alt="Doctors"
          />
        </Col>
        <Col className="doctor_col2">
          <h2 className="doctor_title">
            Meet <span className="doctor_name">Jean Smith</span> Our Dog
            Veterenarian
          </h2>
          <p className="text-muted  mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet
            praesentium tenetur quos eius asperiores incidunt reprehenderit hic
            labore? Officiis enim laborum facere iure voluptatem autem veritatis
            cupiditate magnam saepe.
          </p>
          <p className="text-muted  mt-3">
            Nulla, beatae ducimus? Dolor distinctio tempore hic consequatur,
            magni consectetur possimus tenetur eius, placeat, eveniet facilis
            perferendis vitae deleniti incidunt! Incidunt, illum eum? Suscipit
            aliquid consequatur repudiandae doloremque est nisi.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Doctor;
