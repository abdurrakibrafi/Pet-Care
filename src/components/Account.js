import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
import "../style/Account.css";

function Account() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="account">
      <div className="account_form">
        <h2 className="text-center p-3">Create An Account</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <p className="text-center p-2">
          <FontAwesomeIcon className="account_logo" icon={faPaw} />
          <span className="logo_text fw-bold">
            Pet<span className="care">Care</span>
          </span>
        </p>
        <Form onSubmit={handleSubmit}>
          <div className="d-flex">
            <Form.Group className="mb-3 m-2">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="mb-3 m-2">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </div>
          <Form.Group className="mb-3 m-2">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 m-2">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 m-2">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3 m-2">
            <Form.Check
              type="checkbox"
              label="I agree of the terms of services and the privecy policy"
            />
          </Form.Group>
          <button className="btn_login p-2" type="Submit">
            Sing Up
          </button>
        </Form>
        <p className="accounts text-center mt-3">
          Already have an account?{" "}
          <span>
            <Link to="/login">LogIn</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Account;
