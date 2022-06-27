import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Alert, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
import "../style/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login">
      <div className="login_form">
        <h2 className="text-center p-3">Login Form</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <p className="text-center p-2">
          <FontAwesomeIcon className="login_logo" icon={faPaw} />
          <span className="logo_text fw-bold">
            Pet<span className="care">Care</span>
          </span>
        </p>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="login_email"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <button className="btn_login p-2" type="Submit">
            Login
          </button>
        </Form>
        <p className="accounts text-center mt-3">
          Not An Accout?{" "}
          <span>
            <Link to="/account">Create an account</Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
