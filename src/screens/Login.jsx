import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("https://mernappbackend-zg6i.onrender.com/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid data");
    }
    if (json.success) {
      localStorage.setItem("userEmail", data.email); //security
      localStorage.setItem("authToken", json.authToken); //security
      console.log(localStorage.getItem("authToken"));

      navigate("/");
    }
  };
  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div className="container ">
      <h2>Login With Your User Email and Password</h2>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 " controlId="formBasicEmail">
          <Form.Label className="text-light">Email address</Form.Label>
          <Form.Control
            name="email"
            value={data.email}
            type="email"
            placeholder="Enter email"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 " controlId="formBasicPassword">
          <Form.Label className="text-light">Password</Form.Label>
          <Form.Control
            name="password"
            value={data.password}
            type="password"
            placeholder="Password"
            onChange={onChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="m-3 btn btn-success">
          Log In
        </Button>
        <Link to="/signup" className="mb-3 btn btn-danger">
          New User
        </Link>
      </Form>
    </div>
  );
}
