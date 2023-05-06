import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
  });
  let navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("https://mernappbackend-wg5z.onrender.com/api/creatuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        location: data.location,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid data");
    }
    else{
      navigate("/login");
    }
  };
  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="container ">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 " controlId="formBasicEmail">
            <Form.Label className="text-light">Name</Form.Label>
            <Form.Control
              name="name"
              value={data.name}
              type="text"
              placeholder="Enter Name"
              onChange={onChange}
            />
          </Form.Group>
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

          <Form.Group className="mb-3 " controlId="formBasicPassword">
            <Form.Label className="text-light">Address</Form.Label>
            <Form.Control
              name="location"
              value={data.location}
              type="text"
              placeholder="Address"
              onChange={onChange}
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="m-3 btn btn-success"
          >
            Submit
          </Button>
          <Link to="/login" className="mb-3 btn btn-danger">
            Already a User
          </Link>
        </Form>
      </div>
    </>
  );
}

export default SignUp;
