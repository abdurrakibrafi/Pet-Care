import { FloatingLabel, Form } from "react-bootstrap";
import img from "../assets/images/from.jpg";
import "../style/From.css";
function Froms() {
  return (
    <div className="from_main">
      <div className="forms_row">
        <div className="col_1">
          <img className="from_img" src={img} alt="img" />
        </div>
        <div className="from_section">
          <div className="section_all">
            <h3 className="from_title pb-3">Free Consultation</h3>
            <Form className="flex_main">
              <select
                className="email_size form-select"
                aria-label="Default select example"
              >
                <option selected>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>

              <div className="flex_area d-flex">
                <div>
                  <Form.Group
                    className="p-2 mt-3"
                    controlId="formBasicPassword"
                  >
                    {/* <Form.Label></Form.Label> */}
                    <Form.Control type="password" placeholder="Your Name" />
                  </Form.Group>
                  <Form.Group
                    className="p-2 mt-3"
                    controlId="formBasicPassword"
                  >
                    <Form.Control
                      type="password"
                      placeholder="Vehical Number"
                    />
                  </Form.Group>
                </div>
                <div>
                  <Form.Group
                    className="p-2 mt-3"
                    controlId="formBasicPassword"
                  >
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="date" placeholder="Date" />
                  </Form.Group>
                  <Form.Group
                    className="p-2 mt-3"
                    controlId="formBasicPassword"
                  >
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control type="password" placeholder="Time" />
                  </Form.Group>
                </div>
              </div>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  className="textarea_size mt-4"
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                />
              </FloatingLabel>
              <button className="submitbtn">Send Message</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Froms;
