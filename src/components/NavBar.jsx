import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import "../index.css";
import Badge from "react-bootstrap/Badge";
import Cart from "../screens/Cart";
import Modal from "../Model";
import { useCart } from "../components/ContextReducer";


function NavBar() {
  let data = useCart();
  const navigate = useNavigate();
  const handleLogOut = () => {
    localStorage.removeItem("authToken");

    navigate("/login");
  };
  const [cartView, setCartView] = useState(false);

  return (
    <div>
      <Navbar className="gradient-custom" expand="lg">
        <Container fluid>
          <Navbar.Brand
            className="font-link"
            style={{ fontSize: "30px", fontWeight: "700", color: "white" }}
            to="#"
          >
            Foodie
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"> <i className="px-4 fas fa-outdent"></i> </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 gradient-custom"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link
                style={{ textDecoration: "none" }}
                className="Link active fs-5 mx-3 gradient-custom"
                to="/"
              >
                Home
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className="Link active fs-5 mx-4  gradient-custom"
                to="/feedback"
              >
               <i className="fa-sharp fa-solid fa-comments fs-5"></i>
              </Link>
            </Nav>
            {!localStorage.getItem("authToken") ? (
              <div>
                <Link className="btn bg-white text-success mx-2" to="/login">
                  Login
                </Link>
                <Link className="btn bg-white text-success mr-4 " to="/signup">
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                {
                  <div
                    className="btn bg-white text-success mx-2"
                    onClick={() => {
                      setCartView(true);
                    }}
                  >
                    My Cart{" "}
                    <Badge pill bg="danger">
                      {" "}
                      {data.length}
                    </Badge>
                  </div>
                }
                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart></Cart>
                  </Modal>
                ) : (
                  ""
                )}

                <div
                  className="btn bg-white text-danger mx-2"
                  onClick={handleLogOut}
                >
                  Log Out
                </div>
              </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
