import { faPaw, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/userAuthContext";
import "../style/Navbar.css";
const Navbars = () => {
  const { user, logOut } = useUserAuth();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <Navbar className="Navbar" sticky="top">
      <span className="nav-logo ">
        {" "}
        <FontAwesomeIcon className="logo" icon={faPaw} />
        Pet<span className="care">Care</span>
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/faq">Faq</Link>
        <Link to="/contact">Contact</Link>
        {/* <div> */}
        {user ? (
          <>
            <Link to="" className="navbar_login " onClick={logOut}>
              LogOut
            </Link>

            <small className="mt-3">
              <FontAwesomeIcon className="mx-2" icon={faUser} />
              {user && user.email}
            </small>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar_login mb-4">
              LogIn
            </Link>
          </>
        )}
        {/* </div> */}
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </Navbar>
  );
};

export default Navbars;
